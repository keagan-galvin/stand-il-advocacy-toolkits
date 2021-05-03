export const defaultState = () => {
  return {
    queue: [],
    nextNotificationId: 0,
  };
};

let store = {
  namespaced: true,
  state() {
    return defaultState();
  },
  mutations: {
    incrementNextNotificationId(state) {
      state.nextNotificationId++;
    },
    add(state, data) {
      console.log(state);
      state.queue.push(data);
    },
    remove(state, id) {
      let index = state.queue.findIndex((x) => x.id === id);
      if (index > -1) state.queue.splice(index, 1);
    },
  },
  actions: {
    send({ state, commit }, { message, duration, type }) {
      let id = state.nextNotificationId + 0;
      commit("incrementNextNotificationId");

      commit("add", { id, message, type });

      if (duration === undefined) duration = 5000;
      if (duration) setTimeout(() => commit("remove", id), duration);
    },
  },
};

export default { store, defaultState };
