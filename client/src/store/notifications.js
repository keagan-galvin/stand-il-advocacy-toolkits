export default {
  namespaced: true,
  state() {
    return {
      queue: [],
      nextNotificationId: 0,
    };
  },
  mutations: {
    incrementNextNotificationId(state) {
      state.nextNotificationId++;
    },
    add(state, data) {
      state.queue.push(data);
    },
    remove(state, id) {
      let index = state.queue.findIndex((x) => x.id === id);
      if (index > -1) state.queue.splice(index, 1);
    },
  },
  actions: {
    send({ state, commit }, { message, duration }) {
      let id = state.nextNotificationId + 0;
      commit("incrementNextNotificationId");

      commit("add", { id, message });

      if (duration === undefined) duration = 5000;
      if (duration) setTimeout(() => commit("remove", id), duration);
    },
  },
};
