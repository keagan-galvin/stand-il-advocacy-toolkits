import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import notifications from "./notifications";

import { handleFetch } from "../utilities/HttpUtilities";

Vue.use(Vuex);

let jwt = null;

let store = new Vuex.Store({
  modules: {
    user,
    notifications,
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
        data.notifications = [];
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
    loadToken({ commit }, username) {
      return new Promise((resolve, reject) => {
        handleFetch({
          url: "/api/auth/token",
          method: "get",
          headers: [["Authorization", `Basic ${btoa(username)}`]],
        }).then((result) => {
          commit("setJWT", result);
          resolve(result);
        }, reject);
      });
    },
    handleApiFetch(
      { state, commit },
      { url, headers, body, method, cacheDuration }
    ) {
      return new Promise((resolve, reject) => {
        const next = () =>
          handleFetch({
            url,
            headers: [["Authorization", `Bearer ${jwt.token}`]].concat(
              headers ?? []
            ),
            body,
            method,
            cacheDuration,
          }).then(resolve, reject);

        if (new Date().getTime() >= jwt.expires - 60000) {
          refreshToken().then(next, reject);
        } else next();
      });

      function refreshToken() {
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
      }
    },
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
