import Vue from "vue";
import Vuex from "vuex";

import { handleFetch } from "../utilities/HttpUtilities";

Vue.use(Vuex);

console.log("test");

export default new Vuex.Store({
  state() {
    return {
      user: {
        userId: "",
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        city: "",
        state: "",
        zip: "",
        receiveEmails: false,
      },
    };
  },
  getters: {
    authorized(state) {
      return state.user.email !== "";
    },
  },
  mutations: {
    setUser(state, data) {
      Vue.set(state, "user", data);
    },
  },
  actions: {
    loadUserDetail({ commit }, email) {
      return new Promise((resolve) => {
        handleFetch({
          method: "get",
          url: `/api/user?email=${encodeURI(email)}`,
        }).then(
          (result) => {
            if (result) {
              commit("setUser", result);
              resolve(JSON.parse(JSON.stringify(result)));
            } else {
              resolve();
            }
          },
          (error) => console.log(error)
        );
      });
    },
    saveUserDetail({ commit }, user) {
      return new Promise((resolve) => {
        handleFetch({
          url: "/api/user",
          method: "post",
          body: user,
        }).then(
          (result) => {
            commit("setUser", result);
            resolve(JSON.parse(JSON.stringify(result)));
          },
          (error) => console.log(error)
        );
      });
    },
  },
});
