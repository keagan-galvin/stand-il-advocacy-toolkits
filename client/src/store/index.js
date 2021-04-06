import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let tempDB = {
  users: [
    {
      userId: "dummy_1",
      email: "keagan.galvin@gmail.com",
      firstName: "Keagan",
      lastName: "Galvin",
      phone: "815-258-2329",
      city: "Lincoln",
      state: "IL",
      zip: "62656",
      receiveEmails: false,
    },
  ],
};

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
      return state.user.userId !== "";
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
        setTimeout(() => {
          let user = tempDB.users.find(
            (x) => x.email.toLowerCase() === email.toLowerCase()
          );
          if (user) {
            commit("setUser", user);
          }

          resolve(user);
        }, 1000);
      });
    },
    saveUserDetail({ commit, state }, user) {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (state.user.email === "" || state.user.email === user.email) {
            user.userId = "dummy_2";
            commit("setUser", user);
          }

          resolve(user);
        }, 1000);
      });
    },
  },
});
