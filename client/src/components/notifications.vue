<template>
  <div class="notifications pb-2">
    <v-scale-transition origin="center" group tag="ul">
      <v-list-item
        v-for="notification in notifications"
        :key="notification.id + '-notification'"
        class="px-2"
      >
        <v-sheet
          dark
          elevation="6"
          rounded
          width="100%"
          class="notification d-flex align-center pa-3 mb-3"
        >
          <div class="flex-fill font-weight-medium text-body-1">
            {{ notification.message }}
          </div>
          <v-btn elevation="0" color="accent" @click="close(notification.id)"
            >Close</v-btn
          >
        </v-sheet>
      </v-list-item>
    </v-scale-transition>
  </div>
</template>

<style>
.notifications {
  position: absolute;
  z-index: 3000;
  bottom: 0;
  right: 0;
  max-width: 500px;
  width: 100%;
  opacity: 0.97;
}
</style>

<script>
export default {
  computed: {
    notifications() {
      return this.$store.state.notifications.queue;
    },
  },
  methods: {
    close(id) {
      this.$store.commit("notifications/remove", id);
    },
  },
};
</script>
