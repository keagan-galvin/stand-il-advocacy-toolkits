import Vue from "vue";

export default {
  namespaced: true,
  state() {
    return {
      pendingStateChanges: 0,
      loaded: [],
    };
  },
  getters: {
    loading(state) {
      return state.pendingStateChanges > 0;
    },
  },
  mutations: {
    setLoaded(state, { key, data }) {
      let index = state.loaded.findIndex((x) => x.key === key);

      if (index > -1) {
        Vue.set(state.loaded, index, { key, data });
      } else state.loaded.push({ key, data });
    },
    incrementPendingStateChanges(state, data) {
      state.pendingStateChanges += data;
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
