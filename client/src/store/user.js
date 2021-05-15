import Vue from "vue";
import { handleFetch } from "../utilities/HttpUtilities";

export const defaultUser = () => {
  return {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
    email_optin: true,
  };
};

export default {
  namespaced: true,
  state() {
    return {
      pendingStateChanges: 0,
      ...defaultUser(),
    };
  },
  getters: {
    loading(state) {
      return state.pendingStateChanges > 0;
    },
    authorized(state) {
      return state.id !== "";
    },
    isAdmin(state) {
      return state.id === "ADMIN";
    },
  },
  mutations: {
    set(state, data) {
      for (var key in data) {
        Vue.set(state, key, data[key]);
      }
    },
    incrementPendingStateChanges(state, data) {
      state.pendingStateChanges += data;
    },
  },
  actions: {
    load({ commit, dispatch }, email) {
      return new Promise((resolve, reject) => {
        commit("incrementPendingStateChanges", 1);
        handleFetch({
          method: "get",
          url: `/api/users?email=${encodeURI(email)}`,
        })
          .then((user) => {
            if (user) {
              dispatch("loadToken", null, { root: true }).then(() => {
                commit("set", user);
                resolve(JSON.parse(JSON.stringify(user)));
              }, reject);
            } else resolve(null);
          }, reject)
          .finally(() => commit("incrementPendingStateChanges", -1));
      });
    },
    upsert({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("incrementPendingStateChanges", 1);
        handleFetch({
          url: "/api/users",
          method: "post",
          body: user,
        })
          .then((result) => {
            commit("set", result);
            resolve(JSON.parse(JSON.stringify(result)));
          }, reject)
          .finally(() => commit("incrementPendingStateChanges", -1));
      });
    },
    clear({ commit }) {
      commit("setJWT", { token: null, expires: null }, { root: true });
      commit("set", defaultUser());
    },
    getAll({ dispatch }) {
      return dispatch(
        "handleApiFetch",
        {
          method: "get",
          url: `/api/users/all`,
        },
        { root: true }
      );
    },
  },
};
