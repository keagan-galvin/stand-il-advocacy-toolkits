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
    patchLoaded(state, { key, rowKey, data }) {
      let datasetIndex = state.loaded.findIndex((x) => x.key === key);

      if (datasetIndex > -1) {
        for (let i = 0; i < data.length; i++) {
          let targetIndex = state.loaded[datasetIndex].data.findIndex(
            (x) => x[rowKey] === data[i][rowKey]
          );

          if (targetIndex > -1) {
            Vue.set(state.loaded[datasetIndex].data, targetIndex, data[i]);
          } else {
            state.loaded[datasetIndex].data.push(data[i]);
          }
        }
      } else state.loaded.push({ key, data });
    },
    incrementPendingStateChanges(state, data) {
      state.pendingStateChanges += data;
    },
  },
  actions: {
    load({ commit, dispatch }, { key, config = {} }) {
      return new Promise((resolve, reject) => {
        let queryStrings = [];

        for (let key in config) {
          queryStrings.push(`${key}=${encodeURI(config[key])}`);
        }

        commit("incrementPendingStateChanges", 1);
        dispatch(
          "handleApiFetch",
          {
            method: "get",
            url: `/api/datasets/${key}${
              queryStrings.length > 0 ? `?${queryStrings.join("&")}` : ""
            }`,
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
    patchLoaded({ commit, dispatch }, { key, rowKey, config = {} }) {
      return new Promise((resolve, reject) => {
        let queryStrings = [];

        for (let key in config) {
          queryStrings.push(`${key}=${encodeURI(config[key])}`);
        }

        commit("incrementPendingStateChanges", 1);
        dispatch(
          "handleApiFetch",
          {
            method: "get",
            url: `/api/datasets/${key}${
              queryStrings.length > 0 ? `?${queryStrings.join("&")}` : ""
            }`,
          },
          { root: true }
        )
          .then((results) => {
            if (!Array.isArray(results)) results = [results];
            commit("patchLoaded", { key, rowKey, data: results });
            resolve(results);
          }, reject)
          .finally(() => commit("incrementPendingStateChanges", -1));
      });
    },
  },
};
