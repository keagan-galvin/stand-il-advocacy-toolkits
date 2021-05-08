<template>
  <div class="notifications pb-6">
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
          class="notification d-flex align-center px-4 py-3 mb-3"
          :class="{
            'red darken-4': notification.type === 'error',
          }"
        >
          <div class="flex-fill font-weight-medium text-body-1">
            <v-icon
              color="success"
              v-if="notification.type === 'success'"
              class="mr-2"
              >mdi-check-circle</v-icon
            >
            <v-icon v-else-if="notification.type === 'error'" class="mr-2"
              >mdi-alert-circle</v-icon
            >
            <span v-html="notification.message"></span>
          </div>
          <v-btn icon @click="close(notification.id)"
            ><v-icon>mdi-close</v-icon></v-btn
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
