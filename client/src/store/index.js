import Vue from "vue";
import Vuex from "vuex";

import { handleFetch } from "../utilities/HttpUtilities";

Vue.use(Vuex);

const defaultUser = () => {
  return {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
    receiveEmails: false,
  };
};

let nextNotificationId = 0;

let store = new Vuex.Store({
  state() {
    return {
      pendingStateChanges: 0,
      user: defaultUser(),
      notifications: [],
    };
  },
  getters: {
    authorized(state) {
      return state.user.id !== "";
    },
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
    },
    incrementPendingStateChanges(state, data) {
      state.pendingStateChanges += data;
    },
    setUser(state, data) {
      Vue.set(state, "user", data);
    },
    addNotification(state, data) {
      state.notifications.push(data);
    },
    removeNotification(state, id) {
      let index = state.notifications.findIndex((x) => x.id === id);
      if (index > -1) state.notifications.splice(index, 1);
    },
  },
  actions: {
    refresh({ state, dispatch }) {
      if (state.user.email != "") dispatch("loadUserDetail", state.user.email);
    },
    loadUserDetail({ commit }, email) {
      return new Promise((resolve, reject) => {
        commit("incrementPendingStateChanges", 1);
        handleFetch({
          method: "get",
          url: `/api/user?email=${encodeURI(email)}`,
        })
          .then((result) => {
            if (result) {
              commit("setUser", result);
              resolve(JSON.parse(JSON.stringify(result)));
            } else resolve(null);
          }, reject)
          .finally(() => commit("incrementPendingStateChanges", -1));
      });
    },
    saveUserDetail({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("incrementPendingStateChanges", 1);
        handleFetch({
          url: "/api/user",
          method: "post",
          body: user,
        })
          .then((result) => {
            commit("setUser", result);
            resolve(JSON.parse(JSON.stringify(result)));
          }, reject)
          .finally(() => commit("incrementPendingStateChanges", -1));
      });
    },
    logout({ commit }) {
      commit("setUser", defaultUser());
    },
    notification({ commit, state }, { message, duration }) {
      let id = state.nextNotificationId + 0;
      state.nextNotificationId++;

      commit("addNotification", {
        id,
        message,
      });
      if (duration === undefined) duration = 5000;
      if (duration)
        setTimeout(() => commit("removeNotification", id), duration);
    },
    welcomeBackMessage({ dispatch }) {
      dispatch("notification", { message: "Welcome back - Let's advocate!" });
    },
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
