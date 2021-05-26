<template>
  <v-container>
    <div class="px-2 px-lg-16">
      <h2 class="text-md-h4 text-h5 primary--text mb-5">
        STEP THREE: MAKE CONNECTIONS
      </h2>
      <p>
        Now that you have your list of key players and have constructed your
        case for bringing dual credit courses to your school, it's time to start
        reaching out.
      </p>

      <div style="height: 25px"></div>
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
        <h5 class="text-h6 primary--text mt-12">
          Introduce yourself to the principal
        </h5>
        <p class="mb-8">
          Your first stop should be your school's principal. The principal will
          be a great source of information about any progress or past efforts to
          launch a dual credit program. Connect however you feel comfortable;
          we've provided your school's principals name, phone number, and email
          below.
        </p>

        <v-alert
          border="left"
          color="secondary"
          elevation="0"
          class="mx-auto mb-8"
        >
          <div class="font-weight-medium">
            {{ entity.School_Name }}'s Principal
          </div>
          <v-divider class="mt-1 mb-2"></v-divider>
          <div class="d-flex align-center">
            <v-icon style="font-size: 50px">mdi-account-circle</v-icon>

            <div class="flex-fill ml-2">
              <div>
                {{ entity.Administrator }}
              </div>
              <a :href="`tel:+${entity.Telephone.replace(/[^0-9]/g, '')}`">{{
                entity.Telephone | phone
              }}</a>
            </div>
          </div>
        </v-alert>
      </div>
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="600">
        <p class="mb-8">
          Below you'll find a few key questions that may help guide your
          conversation but don't be afraid to go off-script. Send or bring any
          materials from step two that you think will be helpful throughout your
          discussion. Your school's dual credit profile is a great conversation
          starter. Don't forget to take notes so you can reference your
          discussion later on.
        </p>

        <v-alert border="left" color="secondary" elevation="2">
          <div class="font-weight-bold mb-3">Key Questions</div>
          <v-divider class="mb-4"></v-divider>
          <ol>
            <li class="mb-2">
              Have you ever considered bringing a dual credit program to the
              school?
              <ul class="mt-2">
                <li class="mt-1">If not, why not?</li>
                <li class="mt-1">
                  If yes, where are you in the process and how can I help?
                </li>
              </ul>
            </li>
            <li class="mb-2">
              What are the barriers we must overcome to offer dual credit
              courses at our school?
            </li>
            <li class="mb-2">
              What are the barriers we must overcome to offer dual credit
              courses at our school?
              <ul class="mt-2">
                <li class="mt-1">
                  Get their names if you can. These will be great allies as you
                  work towards your goal.
                </li>
              </ul>
            </li>
            <li class="mb-2">
              Have you had conversations with the local community college about
              a possible dual credit partnership?
            </li>
            <li class="mb-2">
              Have you heard of the Model Partnership Agreement?
            </li>
            <li class="mb-2">
              Should you met with the district superintendent?
              <ul class="mt-2">
                <li class="mt-1">Would they be supportive?</li>
              </ul>
            </li>
          </ol>
        </v-alert>
        <p>
          Be sure to give the principal your name and contact information as
          well so you can continue building your relationship.
        </p>
      </div>
      <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="200">
        <h5 class="text-h6 primary--text mt-12">Reach out to allies</h5>
        <p class="mb-8">
          Review your list of allies. Did the principal provide any good leads?
          As you have conversations with allies take note of other organizations
          or individuals who you can add to your list. The purpose of these
          conversations is twofold: first, to introduce yourself as an advocate
          for dual credit, and second, to build a coalition of people who will
          work together to bring dual credit to your school.
        </p>
        <allies></allies>
      </div>
      <div class="mt-8"></div>
      <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="100">
        <p class="mb-8">
          Below you'll find a few key questions that may help guide your
          conversation but don't be afraid to go off-script. Send or bring any
          materials from step two that you think will be helpful throughout your
          discussion. Your school's dual credit profile is a great conversation
          starter. Don't forget to take notes so you can reference your
          discussion later on.
        </p>

        <v-alert border="left" color="secondary" elevation="0">
          <div class="font-weight-bold mb-3">Key Questions</div>
          <v-divider class="mb-4"></v-divider>
          <ol>
            <li class="mb-2">
              Why are you interested in bringing dual credit to our school?
            </li>
            <li class="mb-2">
              What barriers do you perceive to launching a dual credit program
              at our school?
            </li>
            <li>Is there anyone you recommend I reach out to?</li>
          </ol>
        </v-alert>
      </div>
    </div>
  </v-container>
</template>

<script>
import StepBus from "../../step-bus.js";
import { datasets } from "../../common/constants.js";
import Allies from "./Allies.vue";

export default {
  components: {
    Allies,
  },
  filters: {
    phone(val) {
      return val
        .replace(/[^0-9]/g, "")
        .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
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
  },
  methods: {
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
      StepBus.$emit("configure");
      StepBus.$on("prev", () => this.go("il-dc.case-for-dual-credit"));
    });
  },
};
</script>
