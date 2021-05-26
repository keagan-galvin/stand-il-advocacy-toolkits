<template>
  <v-container>
    <embedded-video width="950px">
      <iframe
        src="https://www.youtube.com/embed/B1CPE6WWsAQ"
        title="YouTube video player"
        frameborder="0"
        allow=""
        allowfullscreen
      ></iframe>
    </embedded-video>
    <div class="py-5 px-2 px-lg-16 text-center mx-auto">
      <h2 class="text-md-h4 text-h5 primary--text mb-5 text-center">
        The Dual Credit Advocacy Toolkit
      </h2>
      <p class="mx-auto" style="max-width: 950px">
        Access to dual credit courses varies across the state. While some
        schools have become trailblazers in expanding their dual credit
        programs, other schools continue to face challenges to launch or expand
        dual credit coursework. That's where you come in!
        <v-dialog
          v-if="!authorized"
          v-model="dialog"
          max-width="600px"
          :fullscreen="isMobile"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="accent"
              elevation="0"
              x-large
              v-bind="attrs"
              v-on="on"
              class="mt-6"
            >
              Get Started
            </v-btn>
          </template>

          <v-card class="pb-2 px-1 pt-1 d-flex flex-column">
            <v-card-title class="d-flex">
              <span class="headline flex-fill">Let's Get Started</span>
              <v-btn icon @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <div class="flex-fill">
              <v-tabs-items v-model="step">
                <v-tab-item>
                  <validation-observer
                    tag="form"
                    ref="emailObserver"
                    @submit.prevent="submitEmail"
                    class="d-flex flex-fill flex-column"
                  >
                    <v-card-text>
                      Before we begin let's get your email address so you can
                      return to where you left off the next time you visit.
                    </v-card-text>
                    <v-card-text class="flex-fill">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Email"
                        rules="required|email"
                      >
                        <v-text-field
                          label="Email*"
                          type="email"
                          required
                          persistent-hint
                          :error-messages="errors"
                          hint=" If you've been here before we'll take you back to where you left off."
                          :disabled="loading"
                          :loading="loading"
                          v-model="user.email"
                          autofocus
                        ></v-text-field>
                      </validation-provider>
                    </v-card-text>
                    <button class="d-none" type="submit">submit</button>
                  </validation-observer>
                </v-tab-item>
                <v-tab-item>
                  <validation-observer
                    tag="form"
                    ref="userDetailObserver"
                    @submit.prevent="submitUserDetail"
                    class="d-flex flex-fill flex-column"
                  >
                    <v-card-text>
                      By providing some contact information we'll be able to
                      create personalized handouts and other materials you'll
                      use through out the process.
                    </v-card-text>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="6">
                          <validation-provider
                            v-slot="{ errors }"
                            name="FirstName"
                            rules="required"
                          >
                            <v-text-field
                              label="First Name*"
                              required
                              :error-messages="errors"
                              :disabled="loading"
                              :loading="loading"
                              v-model="user.firstName"
                            ></v-text-field>
                          </validation-provider>
                        </v-col>
                        <v-col cols="12" md="6">
                          <validation-provider
                            v-slot="{ errors }"
                            name="LastName"
                            rules="required"
                          >
                            <v-text-field
                              label="Last Name*"
                              required
                              :error-messages="errors"
                              :disabled="loading"
                              :loading="loading"
                              v-model="user.lastName"
                            ></v-text-field>
                          </validation-provider>
                        </v-col>

                        <v-col cols="12">
                          <validation-provider v-slot="{ errors }" name="Phone">
                            <v-text-field
                              label="Phone Number"
                              v-mask="'###-###-####'"
                              :error-messages="errors"
                              :disabled="loading"
                              :loading="loading"
                              v-model="user.phone"
                            ></v-text-field>
                          </validation-provider>
                        </v-col>

                        <v-col cols="12" md="6">
                          <validation-provider
                            v-slot="{ errors }"
                            name="City"
                            rules=""
                          >
                            <v-text-field
                              label="City"
                              :error-messages="errors"
                              :disabled="loading"
                              :loading="loading"
                              v-model="user.city"
                            ></v-text-field>
                          </validation-provider>
                        </v-col>

                        <v-col cols="12" md="2">
                          <validation-provider name="State" rules="max:2">
                            <v-select
                              v-model="user.state"
                              :items="states"
                              item-text="text"
                              item-value="text"
                              label="State"
                            ></v-select>
                          </validation-provider>
                        </v-col>
                        <v-col cols="12" md="4">
                          <validation-provider
                            v-slot="{ errors }"
                            name="Zip"
                            rules="zip"
                          >
                            <v-text-field
                              label="Zip"
                              placeholder="00000"
                              :error-messages="errors"
                              :disabled="loading"
                              :loading="loading"
                              v-model="user.zip"
                            ></v-text-field>
                          </validation-provider>
                        </v-col>
                        <v-col cols="12">
                          <v-checkbox
                            v-model="user.email_optin"
                            label="Send me periodic emails about stuff and things"
                          ></v-checkbox>
                        </v-col>
                      </v-row>
                    </v-card-text>
                    <button class="d-none" type="submit">submit</button>
                  </validation-observer>
                </v-tab-item>
              </v-tabs-items>
            </div>
            <v-card-text v-if="isMobile">
              <v-btn
                color="primary"
                block
                class="mb-3"
                :disabled="loading"
                :loading="loading"
                @click="next"
              >
                Next
              </v-btn>
              <v-btn outlined block text @click="dialog = false">
                Cancel
              </v-btn>
            </v-card-text>
            <v-card-text v-else class="d-flex">
              <v-spacer></v-spacer>
              <v-btn
                color="cancel"
                :block="isMobile"
                text
                @click="dialog = false"
              >
                Cancel
              </v-btn>
              <v-btn
                color="primary"
                :block="isMobile"
                :disabled="loading"
                :loading="loading"
                @click="next"
              >
                Next
              </v-btn>
            </v-card-text>
          </v-card>
        </v-dialog>
      </p>
    </div>
  </v-container>
</template>

<script>
import StepBus from "../../step-bus.js";

import EmbeddedVideo from "../../components/embedded-video.vue";
import { US_State_Options } from "../../utilities/DataUtilitites";

let defaultUser = () => {
  return {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
    email_optin: true,
  };
};
export default {
  components: { EmbeddedVideo },
  data() {
    return {
      dialog: false,
      loading: false,
      step: 0,
      user: defaultUser(),
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    authorized() {
      return this.$store.getters["user/authorized"];
    },
    states() {
      return US_State_Options;
    },
  },
  watch: {
    dialog() {
      this.step = 0;
      this.user = defaultUser();
      if (this.$refs.emailObserver) this.$refs.emailObserver.reset();
      if (this.$refs.userDetailObserver) this.$refs.userDetailObserver.reset();
    },
  },
  methods: {
    next() {
      switch (this.step) {
        case 0:
          return this.$refs.emailObserver.validate().then((result) => {
            if (result) this.submitEmail();
          });
        case 1:
          return this.$refs.userDetailObserver.validate().then((result) => {
            if (result) this.submitUserDetail();
          });
      }
    },
    submitEmail() {
      this.loading = true;

      return this.$store
        .dispatch("user/load", this.user.email)
        .then((result) => {
          if (result) {
            this.dialog = false;
            setTimeout(() => {
              //this.$router.push({ name: "il-dc.policy-goals" });
              this.$store.dispatch("notifications/send", {
                message: "Welcome back - time to advocate!",
              });
            }, 500);
          } else this.step++;
        })
        .finally(() => (this.loading = false));
    },
    submitUserDetail() {
      this.loading = true;

      return this.$store
        .dispatch("user/upsert", this.user)
        .then(
          // Success
          () => {
            this.dialog = false;
            setTimeout(() => {
              this.$router.push({ name: "il-dc.policy-goals" });
            }, 500);
          },
          // Error
          () => {
            console.warn("ERROR HAS NOT BEEN IMPLEMENTED");
          }
        )
        .finally(() => (this.loading = false));
    },
    go(name) {
      this.$router.push({ name });
    },
  },
  beforeRouteLeave(to, from, next) {
    StepBus.$off("next");
    StepBus.$off("prev");
    next();
  },
  mounted() {
    this.$nextTick(() => {
      StepBus.$emit("configure", {
        showPrev: false,
      });
      StepBus.$on("next", () => this.go("il-dc.policy-goals"));
    });
  },
};
</script>
