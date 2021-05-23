import Vue from "vue";

export default {
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
    incrementPendingStateChanges(state, data) {
      state.pendingStateChanges += data;
    },
    clear(state) {
      Vue.set(state, "loaded", {});
    },
  },
  actions: {
    load({ commit, dispatch }, key) {
      return new Promise((resolve, reject) => {
        commit("incrementPendingStateChanges", 1);
        dispatch(
          "handleApiFetch",
          {
            method: "get",
            url: `/api/datasets/${key}`,
          },
          { root: true }
        )
          .then((results) => {
            commit("setLoaded", { key, data: results });
            resolve(results);
          }, reject)
          .finally(() => commit("incrementPendingStateChanges", -1));
      });
    },
  },
};
