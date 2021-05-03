<template>
  <v-app>
    <v-main class="d-flex secondary">
      <v-progress-linear
        indeterminate
        color="accent"
        :active="loading"
        style="position: absolute; top: 0; z-index: 3000"
      ></v-progress-linear>
      <v-app-bar elevate-on-scroll app color="primary" v-if="isAdmin">
        <v-img
          contain
          position="left center"
          src="@/assets/logo-primary.png"
          max-height="55"
          max-width="130"
        />
        <v-toolbar-title class="white--text text-center"
          >Advocacy Toolkit Admin Panel</v-toolbar-title
        >

        <v-spacer></v-spacer>

        <v-btn elevation="0" dark rounded small @click="logout">Logout</v-btn>
      </v-app-bar>
      <page-transition>
        <router-view />
      </page-transition>
      <notifications />
    </v-main>
  </v-app>
</template>

<script>
import PageTransition from "../../components/page-transition.vue";
import Notifications from "../../components/notifications.vue";

export default {
  name: "admin",
  components: { PageTransition, Notifications },
  data: () => ({
    showContent: true,
    welcome: true,
  }),
  computed: {
    user() {
      return this.$store.state.user;
    },
    authorized() {
      return this.$store.getters["user/authorized"];
    },
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    loading() {
      return this.$store.getters.loading;
    },
    isAdmin() {
      return this.user.id === "ADMIN";
    },
  },
  mounted() {
    if (this.isAdmin) {
      if (new Date(this.$store.state.jwt.expires - 60000) < new Date()) {
        this.$store.dispatch("user/clear");
      }
    } else if (this.$route.path != "/admin/login") {
      this.$router.push({ name: "admin.login" });
    }
  },
  watch: {
    isAdmin(val) {
      if (val === false) {
        if (this.$route.path != "/admin/login")
          this.$router.push({ name: "admin.login" });
      }
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("user/clear");
    },
  },
};
</script>
