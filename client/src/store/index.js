import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import notifications from "./notifications";

Vue.use(Vuex);

let store = new Vuex.Store({
  modules: {
    user,
    notifications,
  },
  state() {
    return {
      initialized: false,
      pendingStateChanges: 0,
    };
  },
  getters: {
    loading(state) {
      return state.pendingStateChanges > 0;
    },
  },
  mutations: {
    initializeStore(state) {
      //   if (localStorage.getItem("store")) {
      //     let data = JSON.parse(localStorage.getItem("store"));
      //     data.notifications = [];
      //     data.pendingStateChanges = 0;

      //     this.replaceState(Object.assign(state, data));
      //   }

      state.initialized = true;
    },
  },
  actions: {
    refresh({ state, dispatch }) {
      if (state.user.email != "") dispatch("user/load", state.user.email);
    },
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
