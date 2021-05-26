<template>
  <v-alert border="left" color="secondary" elevation="0">
    <div class="font-weight-bold mb-3">Your ally list</div>
    <v-divider v-if="allies.length > 0"></v-divider>
    <div v-for="(ally, index) in allies" :key="index">
      <v-list-item class="pr-0">
        <v-list-item-icon class="mr-4">
          <v-icon x-large>mdi-account-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-caption font-weight-bold mb-1">
            {{ ally.type }}
          </v-list-item-title>
          <div>
            {{ ally.name }}
          </div>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon @click="removeAlly(index)">
            <v-icon color="primary lighten-1">mdi-close</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider v-if="index != allies.length - 1"></v-divider>
    </div>

    <v-divider class="mb-4"></v-divider>
    <v-form v-model="validAlly" @submit.prevent="addAlly">
      <v-row dense>
        <v-col cols="12" xl="3" lg="3" md="4" sm="6">
          <v-select
            v-model="allyType"
            :items="allyTypes"
            hide-details="true"
            :rules="required"
            label="Type"
            solo
          ></v-select>
        </v-col>
        <v-col cols="12" xl="9" lg="9" md="8" sm="6">
          <v-text-field
            v-model="allyName"
            label="Add an ally"
            solo
            :rules="required"
            required
            hide-details="true"
          >
            <template v-slot:append>
              <v-btn icon small type="submit">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template></v-text-field
          >
        </v-col>
      </v-row>
    </v-form>
  </v-alert>
</template>

<script>
import AOS from "aos";

export default {
  data() {
    return {
      validAlly: null,
      allyTypes: [
        "Principal",
        "Superintendent",
        "School Board Member",
        "Parent organizations",
        "Parents",
        "Community Organization",
        "Teacher",
        "Community College Staff",
        "Student Organization",
        "Student",
      ].sort(),
      allyName: "",
      allyType: "Principal",
      required: [(v) => !!v || "Field is required"],
    };
  },
  computed: {
    rcdts() {
      return this.$store.state.toolkit.loaded.rcdts;
    },
    allies: {
      get() {
        let result = this.$store.state.toolkit.loaded.allies;
        return result ?? [];
      },
      set(value) {
        this.updateToolkit("allies", value);
      },
    },
  },
  methods: {
    addAlly() {
      if (this.validAlly) {
        var allies = JSON.parse(JSON.stringify(this.allies));
        allies.push({
          type: this.allyType,
          name: this.allyName,
        });
        this.allies = allies;

        this.allyName = "";

        AOS.refresh();
      }
    },
    removeAlly(index) {
      var allies = JSON.parse(JSON.stringify(this.allies));
      allies.splice(index, 1);

      this.allies = allies;

      AOS.refresh();
    },
    updateToolkit(key, value) {
      this.$store.commit("toolkit/updateLoadedProp", { key, value });
    },
  },
};
</script>
