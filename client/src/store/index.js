import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import datasets from "./datasets";
import notifications from "./notifications";
import toolkit from "./toolkit";

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
      initialized: false,
      pendingStateChanges: 0,
      jwt: {
        token: null,
        expires: null,
      },
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

        this.replaceState(Object.assign(state, data));
      }

      state.initialized = true;
    },
    setJWT(state, data) {
      state.jwt.token = data.token;
      state.jwt.expires = data.expires;
    },
  },
  actions: {
    refresh({ state, dispatch }) {
      if (state.user.email != "") {
        dispatch("user/load", state.user.email).then(
          (result) => {
            if (!result) dispatch("user/clear");
          },
          (err) => {
            console.log({ message: "Could not load user", err });
          }
        );
      }
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

store.subscribe((mutation, state) => {
  localStorage.setItem(
    "store",
    JSON.stringify({ user: state.user, toolkit: state.toolkit })
  );
});

export default store;
