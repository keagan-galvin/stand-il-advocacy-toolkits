<template>
  <v-app>
    <v-navigation-drawer
      id="mainNav"
      app
      v-model="drawer"
      floating
      class="white"
      width="420"
      v-if="authorized"
    >
      <div class="d-flex flex-column" style="min-height: 100%">
        <div class="primary d-flex align-center">
          <div class="flex-fill">
            <img
              class="flex-fill"
              src="@/assets/il-logo-primary.png"
              style="max-width: 350px; width: 100%"
            />
          </div>
          <v-btn
            elevation="2"
            fab
            small
            @click="drawer = !drawer"
            class="mr-3"
            v-if="isMobile"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <div class="accent--text px-5 py-4 border-bottom">
          <h2 class="text-h5">Dual Credit Advocacy Toolkit</h2>
        </div>
        <v-divider></v-divider>
        <div class="flex-fill">
          <v-list class="pa-0">
            <v-list-item to="/">
              <v-list-item-icon>
                <v-icon>mdi-television-play</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title> Introduction </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/policy-goals">
              <v-list-item-icon>
                <v-icon>mdi-format-list-checks</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title> Set Your Advocacy Goals </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-group no-action :value="true" color="secondary-darken-2">
              <template v-slot:activator>
                <v-list-item-icon>
                  <v-icon>mdi-strategy</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title> Advocacy Plan </v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                to="/advocacy-plan/identify-key-players"
                class="pr-5"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    #1 - Identify Key Players
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-account-group</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item
                to="/advocacy-plan/make-the-case-for-dual-credit"
                class="pr-5"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    #2 - Make the Case for Dual Credit
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-flask-outline</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item to="/advocacy-plan/make-connections" class="pr-5">
                <v-list-item-content>
                  <v-list-item-title> #3 - Make Connections </v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-handshake</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item to="/advocacy-plan/take-action" class="pr-5">
                <v-list-item-content>
                  <v-list-item-title> #4 - Take Action </v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-run-fast</v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item to="/advocacy-plan/define-success" class="pr-5">
                <v-list-item-content>
                  <v-list-item-title> #5 - Defining Success </v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-tune</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          </v-list>
        </div>
        <v-divider></v-divider>
        <div class="px-5 py-4 d-flex align-center">
          <v-icon style="font-size: 50px">mdi-account-circle</v-icon>
          <div class="flex-fill ml-2 mr-3">
            <div class="font-weight-bold">
              {{ user.firstName }} {{ user.lastName }}
            </div>
            <div class="text-caption">{{ user.email }}</div>
          </div>
          <v-btn elevation="0" color="accent" rounded small @click="logout"
            >Logout</v-btn
          >
        </div>
      </div>
    </v-navigation-drawer>
    <v-main class="d-flex">
      <v-progress-linear
        indeterminate
        color="accent"
        :active="loading"
        style="position: absolute; top: 0; z-index: 3000"
      ></v-progress-linear>
      <v-toolbar flat class="flex-grow-0">
        <v-btn
          color="accent"
          elevation="2"
          fab
          small
          @click="drawer = !drawer"
          v-if="authorized"
          ><v-icon>mdi-menu</v-icon></v-btn
        >
      </v-toolbar>
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
  name: "ilDualCreditToolkit",
  components: { PageTransition, Notifications },
  data: () => ({
    drawer: false,
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
  },
  mounted() {
    if (this.authorized) {
      this.drawer = true;
      this.$store.dispatch("refresh");
    }
  },
  watch: {
    authorized(val, prev) {
      if (val === true && val != prev) {
        if (!this.$vuetify.breakpoint.mobile) {
          setTimeout(() => {
            this.drawer = true;
          }, 100);
        }
      } else if (val === false) {
        this.drawer = false;
        if (this.$route.path != "/") this.$router.push("/");
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
