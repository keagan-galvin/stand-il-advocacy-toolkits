<template>
  <v-container>
    <div class="px-2 px-lg-16">
      <h2 class="text-md-h4 text-h5 primary--text mb-5">
        STEP ONE: IDENTIFY KEY PLAYERS
      </h2>
      <p>
        Before you begin your advocacy outreach you need to understand the
        context in which you'll work. Who are your decision makers? Are there
        other advocates working towards the same goal? What has stood in the way
        of progress before? Thinking about these questions will help you plan
        your strategy and reach out the right people to answer your questions or
        help you achieve your advocacy goal.
      </p>

      <h5 class="text-h6 primary--text mt-12">Who are your decision makers?</h5>
      <p>
        Decision makers are the people who have the authority to approve a new
        dual credit program in your school. Often this will be the principal,
        but it could also be the superintendent.
      </p>

      <v-alert border="left" color="primary lighten-5" elevation="0">
        <div class="font-weight-bold mb-3">
          School Principal - {{ entity.Administrator }}
        </div>
        <v-divider></v-divider>
        <div class="mt-3 mb-2 font-weight-medium">Questions to consider:</div>
        <ol>
          <li class="mb-2">Do you know the principal?</li>
          <li class="mb-2">
            From what you know of this person, are they likely to support your
            goal or will they need to be persuaded?
          </li>
          <li>
            In step three, we'll provide you with your school's principal
            contact info and some questions to ask so you can have an
            introductory conversation.
          </li>
        </ol>
      </v-alert>

      <v-alert border="left" color="primary lighten-5" elevation="0">
        <div class="font-weight-bold mb-3">
          District Superintendent - {{ district.Administrator }}
        </div>
        <v-divider></v-divider>
        <div class="mt-3 mb-2 font-weight-medium">Questions to consider:</div>
        <ol>
          <li class="mb-2">
            Have you already talked to the principal and learned that the
            superintendent is the appropriate person to talk to? <br />
            If not, contact the principal first.
          </li>
          <li class="mb-2">Do you know the superintendent?</li>
          <li class="mb-2">
            From what you know of this person, are they likely to support your
            goal or will they need to be persuaded?
          </li>
          <li>
            In step three, we'll provide you with your district's
            superintendent's contact info and some questions to ask so you can
            have an introductory conversation.
          </li>
        </ol>
      </v-alert>

      <h5 class="text-h6 primary--text mt-12">Who are your allies?</h5>
      <p>
        Allies are people who share your goals and are in a position to help.
        Allies can be parents, students, community member and leaders, teachers,
        school board members, the principal, community college staff, really any
        partner who supports your advocacy goal.
      </p>

      <p>
        Make a list of possible allies. We made a few suggestions on where to
        start below but don't let this list limit you. You should try to find as
        many allies as possible and get creative on where to search for allies.
      </p>

      <v-alert border="left" color="primary lighten-5" elevation="0">
        <div class="font-weight-bold mb-3">Your ally list</div>
        <v-divider v-if="allies.length > 0"></v-divider>
        <div v-for="(ally, index) in allies" :key="index">
          <v-list-item class="pr-0">
            <v-list-item-content class="d-flex flex-row">
              <div class="flex-fill">
                <v-list-item-title class="font-weight-bold">
                  {{ ally.type }}
                </v-list-item-title>
                <div>
                  {{ ally.name }}
                </div>
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

      <h5 class="text-h6 primary--text mt-12">
        Who will be your school's higher learning partner?
      </h5>
      <p>
        High schools that offer dual credit must first develop a partnership
        with a higher education institution, which must ensure that the course
        meets college-level rigor and has an appropriately-credentialled
        teacher. The institution of higher education can be a community college
        or a four-year college or university. Your local community college is
        the most likely partner, but not your only option.
      </p>
      <v-text-field
        label="Your Community College"
        outlined
        class="flex-filled mt-8"
        v-model="communityCollege"
      >
        <template v-slot:append>
          <v-btn icon small @click="openCollegeSearch">
            <v-icon>mdi-search-web</v-icon>
          </v-btn>
        </template>
      </v-text-field>

      <v-alert border="left" color="primary lighten-5" elevation="0">
        <div class="font-weight-bold mb-3">
          Does your community college partner with other local high schools to
          offer dual credit?
        </div>
        <v-divider></v-divider>
        <p class="mt-3">
          If so, which ones? High schools within your community college district
          that offer dual credit programs can make great allies and source for
          information.
        </p>
        <div class="mt-3 mb-2 font-weight-medium">Questions to consider:</div>
        <ol>
          <li class="mb-2">What works with their program?</li>
          <li class="mb-2">What would they change?</li>
          <li class="mb-2">How did they get started?</li>
          <li>
            Who were their champions at the community college? Connect with
            their program directors if you can so you can learn from their
            experience.
          </li>
        </ol>
      </v-alert>

      <v-alert border="left" color="primary lighten-5" elevation="0">
        <div class="font-weight-bold mb-3">
          Explore non-traditional dual credit partners
        </div>
        <v-divider></v-divider>
        <ul>
          <li class="mb-2">
            Community colleges are the primary partners for high schools seeking
            to offer dual credit, but four-year college and universities are
            also standing up to serve students. State law requires high schools
            to pursue Illinois-based partnerships first, but within that space,
            there a multitude of options.
          </li>
          <li>
            The
            <a href="https://www.isbe.net/virtualcourses" target="_blank"
              >Virtual Course Catalog</a
            >
            is a great option for schools struggling to overcome long commutes
            to a community college or an acute teacher shortage.
          </li>
        </ul>
      </v-alert>
    </div>
  </v-container>
</template>

<script>
import StepBus from "../../step-bus.js";
import { datasets } from "../../common/constants.js";

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
    entity() {
      let entities = this.$store.state.datasets.loaded.find(
        (x) => x.key === datasets.il_dualcredit_entity
      );

      let target = null;

      if (entities) target = entities.data.find((x) => x.RCDTS === this.rcdts);

      return target ? target : {};
    },
    district() {
      let entities = this.$store.state.datasets.loaded.find(
        (x) => x.key === datasets.il_dualcredit_entity
      );

      let target = null;

      if (entities)
        target = entities.data.find(
          (x) => this.entity.District === x.School_Name
        );

      return target ? target : {};
    },
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
    communityCollege: {
      get() {
        return this.$store.state.toolkit.loaded.communityCollege;
      },
      set(value) {
        this.updateToolkit("communityCollege", value);
      },
    },
  },
  methods: {
    go(name) {
      this.$router.push({ name });
    },
    openCollegeSearch() {
      window.open("http://iccbdbsrv.iccb.org/zipcodes/home.cfm", "_blank");
    },
    addAlly() {
      if (this.validAlly) {
        var allies = JSON.parse(JSON.stringify(this.allies));
        allies.push({
          type: this.allyType,
          name: this.allyName,
        });
        this.allies = allies;

        this.allyName = "";
      }
    },
    removeAlly(index) {
      var allies = JSON.parse(JSON.stringify(this.allies));
      allies.splice(index, 1);

      this.allies = allies;
    },
    updateToolkit(key, value) {
      this.$store.commit("toolkit/updateLoadedProp", { key, value });
    },
  },
  beforeRouteLeave(to, from, next) {
    StepBus.$off("next");
    StepBus.$off("prev");
    next();
  },
  mounted() {
    this.$nextTick(() => {
      StepBus.$emit("configure");
      StepBus.$on("prev", () => this.go("il-dc.school-profile"));
    });
  },
};
</script>