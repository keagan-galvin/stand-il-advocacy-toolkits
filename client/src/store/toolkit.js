import Vue from "vue";

let store = {
  namespaced: true,
  state() {
    return {
      pendingStateChanges: 0,
      loaded: {},
    };
  },
  getters: {
    loading(state) {
      return state.pendingStateChanges > 0;
    },
  },
  mutations: {
    setLoaded(state, data) {
      Vue.set(state, "loaded", data);
    },
    updateLoadedProp(state, { key, value }) {
      Vue.set(state.loaded, key, value);
    },
    pushLoadedProp(state, { key, value }) {
      Vue.set(state.loaded, key, value);
    },
    incrementPendingStateChanges(state, data) {
      state.pendingStateChanges += data;
    },
    clear(state) {
      Vue.set(state, "loaded", {});
    },
  },
  actions: {
    load({ commit, dispatch }, { key, userId }) {
      return new Promise((resolve, reject) => {
        commit("incrementPendingStateChanges", 1);
        dispatch(
          "handleApiFetch",
          {
            method: "get",
            url: `/api/toolkits/${key}/${userId}`,
          },
          { root: true }
        )
          .then((result) => {
            commit("setLoaded", result);
            resolve(result);
          }, reject)
          .finally(() => commit("incrementPendingStateChanges", -1));
      });
    },
    update({ commit, dispatch, state }, key) {
      return new Promise((resolve, reject) => {
        commit("incrementPendingStateChanges", 1);
        dispatch(
          "handleApiFetch",
          {
            method: "post",
            url: `/api/toolkits/${key}/${state.loaded.userId}`,
            body: state.loaded,
          },
          { root: true }
        )
          .then((result) => {
            commit("setLoaded", result);
            resolve(result);
          }, reject)
          .finally(() => commit("incrementPendingStateChanges", -1));
      });
    },
  },
};

export default store;
