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
      style="margin-bottom: 28px"
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
            <v-list-item exact :to="{ name: 'il-dc.introduction' }">
              <v-list-item-icon>
                <v-icon>mdi-television-play</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title> Introduction </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item exact :to="{ name: 'il-dc.policy-goals' }">
              <v-list-item-icon>
                <v-icon>mdi-format-list-checks</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title> Set Your Advocacy Goals </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-slide-y-transition>
              <v-list-group
                no-action
                :value="true"
                color="secondary-darken-2"
                v-if="hasPolicyGoals"
              >
                <template v-slot:activator>
                  <v-list-item-icon>
                    <v-icon>mdi-strategy</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ user.firstName }}'s Advocacy Plan
                    </v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-divider></v-divider>
                <v-list-item class="pt-4 px-4">
                  <v-alert border="left" color="accent lighten-3">
                    <v-list-item-content class="pa-0">
                      <v-list-item two-line dense>
                        <v-list-item-content>
                          <v-list-item-title class="font-weight-bold">
                            School Name
                          </v-list-item-title>
                          <div>{{ entity.School_Name }}</div>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item two-line dense>
                        <v-list-item-content>
                          <v-list-item-title class="font-weight-bold">
                            Policy Goal
                          </v-list-item-title>
                          <div>{{ policyGoal }}</div>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item two-line dense>
                        <v-list-item-content>
                          <v-list-item-title class="font-weight-bold">
                            Current Landscape
                          </v-list-item-title>
                          <div v-if="dualCreditEnrollment === 0">
                            {{ entity.School_Name }} did not offer dual credit
                            courses last school year.
                          </div>
                          <div v-else>
                            {{ entity.School_Name }} offered dual credit courses
                            last school year that enrolled
                            {{ dualCreditEnrollment | numeral("0,0") }}
                            students.
                          </div>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-content></v-alert
                  >
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item
                  exact
                  :to="{ name: 'il-dc.school-profile' }"
                  class="pr-5"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      School Dual Credit Profile
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-icon>mdi-school</v-icon>
                  </v-list-item-icon>
                </v-list-item>

                <v-list-item
                  class="pr-5"
                  exact
                  :to="{ name: 'il-dc.key-players' }"
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
                    <v-list-item-title>
                      #3 - Make Connections
                    </v-list-item-title>
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
                    <v-list-item-title>
                      #5 - Defining Success
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-icon>mdi-tune</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>
            </v-slide-y-transition>
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
      <v-app-bar
        elevate-on-scroll
        app
        color="primary"
        v-if="isMobile || !authorized"
      >
        <v-app-bar-nav-icon
          dark
          @click="drawer = !drawer"
          v-if="authorized"
        ></v-app-bar-nav-icon>
        <v-img
          contain
          position="left center"
          src="@/assets/il-logo-primary.png"
          max-height="55"
          max-width="200"
        />
      </v-app-bar>
      <div class="d-flex flex-fill">
        <page-transition>
          <router-view v-if="initialized" class="flex-fill pt-md-12" />
        </page-transition>
      </div>
      <notifications />
      <v-expand-transition>
        <step-actions v-show="authorized && initialized" />
      </v-expand-transition>
      <footer class="py-1">
        <div class="d-flex">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                href="http://stand.org/illinois"
                target="_blank"
                dark
                elevation="0"
                icon
                plain
                x-small
                v-bind="attrs"
                v-on="on"
                class="ml-4"
              >
                <v-icon>mdi-laptop</v-icon>
              </v-btn>
            </template>
            <span>Website</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                href="https://www.facebook.com/standillinois"
                target="_blank"
                dark
                elevation="0"
                icon
                plain
                x-small
                v-bind="attrs"
                v-on="on"
                class="mx-4"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
            </template>
            <span>Facebook</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                href="https://twitter.com/illinoisstand"
                target="_blank"
                dark
                elevation="0"
                icon
                plain
                x-small
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </template>
            <span>Twitter</span>
          </v-tooltip>
          <div class="flex-fill text-caption secondary--text px-4 text-center">
            <span v-if="!isMobile" v-html="copy"></span>
          </div>
          <v-btn
            dark
            x-small
            elevation="0"
            plain
            href="http://stand.org/privacy"
            target="_blank"
            >Privacy Policy</v-btn
          >
        </div>
        <div
          class="pt-1 caption secondary--text text-center px-2"
          v-if="isMobile"
          v-html="copy"
        ></div>
      </footer>
    </v-main>
  </v-app>
</template>

<style scoped>
footer {
  background: #404040;
  z-index: 5;
}
</style>

<script>
import Notifications from "../../components/notifications.vue";
import PageTransition from "../../components/page-transition.vue";
import StepActions from "../../components/step-actions.vue";
import { datasets } from "../../common/constants.js";

import { hasPolicyGoals } from "./helpers.js";

export default {
  name: "ilDualCreditToolkit",
  components: { Notifications, PageTransition, StepActions },
  data: () => ({
    initialized: false,
    isLoading: false,
    drawer: false,
    showContent: true,
    welcome: true,
    transitionName: "scroll-y",
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
      return this.$store.getters.loading || this.isLoading;
    },
    year() {
      return new Date().getFullYear();
    },
    copy() {
      return `&copy;${this.year}. All right reserved. Stand for Children
              Leadership Center, Inc.`;
    },
    hasPolicyGoals() {
      return hasPolicyGoals(this.$store.state.toolkit.loaded);
    },
    entity() {
      let entities = this.$store.state.datasets.loaded.find(
        (x) => x.key === datasets.il_dualcredit_entity
      );

      let target;
      if (entities) target = entities.data.find((x) => x.RCDTS === this.rcdts);
      return target ?? {};
    },
    dualCreditEnrollment() {
      if (this.entity) {
        return +this.entity.N_Students_who_took_Dual_Credit_classes_912_Total;
      } else return 0;
    },
    rcdts() {
      return this.$store.state.toolkit.loaded.rcdts;
    },
    policyGoal() {
      return this.$store.state.toolkit.loaded.policyGoal;
    },
  },
  mounted() {
    if (this.authorized) {
      if (!this.isMobile) this.drawer = true;
      this.$store.dispatch("refresh");
      this.loadDataSets();
    }
  },
  watch: {
    authorized(val, prev) {
      if (val === true && val != prev) {
        if (!this.isMobile) {
          setTimeout(() => {
            this.drawer = true;
          }, 100);
        }

        this.loadDataSets();
      } else if (val === false) {
        this.drawer = false;
        console.log(this.$route.path);
        if (
          this.$route.path != "/il-dual-credit" &&
          this.$route.path != "/il-dual-credit/"
        )
          this.$router.push("/il-dual-credit");
      }
    },
  },
  methods: {
    loadDataSets() {
      this.isLoading = true;

      Promise.all([
        this.$store.dispatch("datasets/load", {
          key: "il-dualcredit-entity",
          config: { resultType: "slim" },
        }),
      ])
        .then(
          () => {},
          (err) => {
            console.log(err);
            this.$store.dispatch("notifications/send", {
              message:
                "Unexpected error while loading toolkit datasets! Functionality may be limited.",
              type: "error",
            });
          }
        )
        .finally(() => {
          this.isLoading = false;
          this.initialized = true;
        });
    },
    logout() {
      this.$store.dispatch("user/clear");
    },
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      if (!this.$store.getters["user/authorized"]) this.transitionName = "fade";
      else
        this.transitionNametransitionName =
          to.meta.position < from.meta.position
            ? "scroll-y"
            : "scroll-y-reverse";
      next();
    });
  },
};
</script>
