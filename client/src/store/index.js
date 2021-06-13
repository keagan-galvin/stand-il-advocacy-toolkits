import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import datasets from "./datasets";
import notifications from "./notifications";
import toolkit from "./toolkit";

import debounce from "debounce";

import { handleFetch } from "../utilities/HttpUtilities";

Vue.use(Vuex);

let store = new Vuex.Store({
  modules: {
    user,
    datasets,
    notifications: notifications.store,
    toolkit,
  },
  state() {
    return {
      initialized: true,
      pendingStateChanges: 0,
      jwt: {
        token: null,
        expires: null,
      },
      toolkitKey: "",
    };
  },
  getters: {
    loading(state) {
      return state.pendingStateChanges > 0;
    },
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem("store")) {
        let data = JSON.parse(localStorage.getItem("store"));
        data.notifications = notifications.defaultState();
        data.pendingStateChanges = 0;
        data.user.attemptedLoad = false;
        data.user.pendingStateChanges = 0;

        this.replaceState(Object.assign(state, data));
      }

      state.initialized = true;
    },
    setJWT(state, data) {
      state.jwt.token = data.token;
      state.jwt.expires = data.expires;
    },
    setToolkitKey(state, key) {
      state.toolkitKey = key;
    },
  },
  actions: {
    refresh({ state, dispatch }) {
      return new Promise((resolve, reject) => {
        if (state.user.email != "") {
          dispatch("user/load", state.user.email).then(
            (result) => {
              if (!result) dispatch("user/clear");
              else
                dispatch("toolkit/load", {
                  key: state.toolkitKey,
                  userId: state.user.id,
                }).then(resolve, reject);
            },
            (err) => {
              dispatch("user/clear");
              console.log({ message: "Could not load user", err });
              reject(err);
            }
          );
        } else resolve();
      });
    },
    loadToken({ state, commit }, username) {
      return new Promise((resolve, reject) => {
        handleFetch({
          url: "/api/auth/token",
          method: "get",
          headers: [["Authorization", `Basic ${btoa(username)}`]],
        }).then((result) => {
          commit("setJWT", result);

          setInterval(function refreshToken() {
            return new Promise((resolve, reject) => {
              handleFetch({
                url: "/api/auth/refreshToken",
                method: "get",
                headers: [["Authorization", `Bearer ${state.jwt.token}`]],
              }).then((result) => {
                commit("setJWT", result);
                resolve(result);
              }, reject);
            });
          }, 59 * 1000 * 60);

          resolve(result);
        }, reject);
      });
    },
    handleApiFetch({ state }, { url, headers, body, method, cacheDuration }) {
      return new Promise((resolve, reject) => {
        handleFetch({
          url,
          headers: [["Authorization", `Bearer ${state.jwt.token}`]].concat(
            headers ?? []
          ),
          body,
          method,
          cacheDuration,
        }).then(resolve, reject);
      });
    },
  },
});

let debouncedUpdate = debounce(() => {
  store.dispatch("toolkit/update", store.state.toolkitKey).then(
    () => {},
    (error) => {
      console.log(error);
      store.dispatch("notifications/send", {
        message: "Unexpected error while saving toolkit!",
        type: "error",
      });
    }
  );
}, 200);

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify({ user: state.user }));
  if (mutation.type === "toolkit/updateLoadedProp") debouncedUpdate();
});

export default store;
