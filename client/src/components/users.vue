<template>
  <v-expansion-panel>
    <v-expansion-panel-header v-slot="{ open }" @keyup.space.prevent>
      <div class="d-flex align-center">
        <div class="flex-fill text-h5">Users</div>
        <v-slide-x-reverse-transition>
          <div v-if="open" class="d-flex align-center">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              clearable
              label="Search"
              single-line
              filled
              hide-details
              rounded
              dense
              @click.native.stop
              style="max-width: 200px"
              class="mr-2"
            ></v-text-field>
            <v-btn icon class="mr-2" @click.native.stop="load"
              ><v-icon>mdi-refresh</v-icon></v-btn
            >
          </div>
        </v-slide-x-reverse-transition>
      </div>
    </v-expansion-panel-header>
    <v-expansion-panel-content class="flush">
      <v-divider></v-divider>
      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="5"
        :loading="loading"
        :search="search"
        @click:row="review"
      >
      </v-data-table>
      <v-dialog v-model="dialog" max-width="400px" :fullscreen="isMobile">
        <v-card class="px-1 pt-1 d-flex flex-column">
          <validation-observer
            tag="form"
            ref="observer"
            @submit.prevent="login"
            class="d-flex flex-fill flex-column"
          >
            <v-card-title class="d-flex">
              <span class="headline flex-fill">User Detail</span>

              <v-btn icon @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text class="flex-fill">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Email*"
                    required
                    :readonly="true"
                    v-model="user.email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="First Name*"
                    required
                    :readonly="true"
                    v-model="user.firstName"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Last Name*"
                    required
                    :readonly="true"
                    v-model="user.lastName"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Phone Number"
                    v-mask="'###-###-####'"
                    :readonly="true"
                    v-model="user.phone"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="City"
                    :readonly="true"
                    v-model="user.city"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="2">
                  <v-text-field
                    label="State"
                    :readonly="true"
                    v-model="user.state"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="Zip"
                    placeholder="00000"
                    :readonly="true"
                    v-model="user.zip"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-checkbox
                    v-model="user.email_optin"
                    :readonly="true"
                    label="Receive Emails"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block class="mb-3" @click="dialog = false">
                Close
              </v-btn>
            </v-card-actions>
          </validation-observer>
        </v-card>
      </v-dialog>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      data: [],
      headers: [
        { text: "Email", value: "email" },
        { text: "First Name", value: "firstName" },
        { text: "Last Name", value: "lastName" },
        { text: "City", value: "city" },
        { text: "State", value: "state" },
      ],
      search: "",
      dialog: false,
      user: {},
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },
  methods: {
    load() {
      this.loading = true;
      this.$store
        .dispatch("user/getAll")
        .then(
          (results) => {
            this.data = results;
          },
          () => {
            //Error
            this.$store.dispatch("notifications/send", {
              message:
                "Unexpected error occurred while retrieving: <strong>Users</strong>.",
              type: "error",
            });
          }
        )
        .finally(() => {
          this.loading = false;
        });
    },
    review(data) {
      this.user = data;
      this.dialog = true;
    },
  },
  mounted() {
    this.load();
  },
};
</script>
