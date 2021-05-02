<template>
  <v-dialog
    v-model="dialog"
    max-width="400px"
    :fullscreen="isMobile"
    persistent
  >
    <v-card class="px-1 pt-1 d-flex flex-column">
      <validation-observer
        tag="form"
        ref="observer"
        @submit.prevent="login"
        class="d-flex flex-fill flex-column"
      >
        <v-card-title class="d-flex">
          <span class="headline flex-fill">Admin Login</span>
        </v-card-title>
        <v-card-text class="flex-fill">
          <v-scroll-x-transition origin="center">
            <v-alert border="left" color="red" dark v-if="errorMessage"
              ><v-icon>mdi-alert-circle</v-icon> {{ errorMessage }}</v-alert
            >
          </v-scroll-x-transition>
          <validation-provider
            v-slot="{ errors }"
            name="Username"
            rules="required"
          >
            <v-text-field
              label="Username*"
              type="text"
              required
              :error-messages="errors"
              :disabled="loading"
              :loading="loading"
              v-model="username"
              autofocus
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Password"
            rules="required"
          >
            <v-text-field
              label="Password*"
              required
              :error-messages="errors"
              :disabled="loading"
              :loading="loading"
              v-model="password"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPass ? 'text' : 'password'"
              @click:append="showPass = !showPass"
            ></v-text-field>
          </validation-provider>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            block
            class="mb-3"
            :disabled="loading"
            :loading="loading"
            type="submit"
          >
            Login
          </v-btn>
        </v-card-actions>
      </validation-observer>
    </v-card>
  </v-dialog>
</template>

<script>
import { handleFetch } from "../../utilities/HttpUtilities";

export default {
  data() {
    return {
      dialog: true,
      loading: false,
      username: "",
      password: "",
      showPass: false,
      errorMessage: null,
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    isAdmin() {
      return this.$store.getters["user/isAdmin"];
    },
  },
  watch: {
    dialog() {
      this.username = "";
      this.password = "";
      if (this.$refs.observer) this.$refs.observer.reset();
    },
  },
  methods: {
    login() {
      this.errorMessage = null;
      this.loading = true;

      return handleFetch({
        method: "get",
        url: "/api/admin/token",
        headers: [
          [
            "Authorization",
            `Basic ${btoa(this.username + ":" + this.password)}`,
          ],
        ],
      })
        .then(
          (token) => {
            this.$store.commit("setJWT", token);
            this.$store.commit("user/set", {
              id: "ADMIN",
              email: "Make it so",
              firstName: "Jean-Luc",
              lastName: "Picard",
              phone: "",
              city: "",
              state: "",
              zip: "",
              email_optin: true,
            });

            this.$router.push({ name: "admin.dashboard" });
          },
          (error) => {
            this.errorMessage = error.message;
          }
        )
        .finally(() => (this.loading = false));
    },
  },
};
</script>
