<template>
  <v-container>
    <div class="px-2 px-lg-16">
      <h2 class="text-md-h4 text-h5 primary--text mb-5">
        STEP TWO: MAKE THE CASE FOR DUAL CREDIT
      </h2>
      <p>
        Since you're here, chances are you already know the value of dual credit
        courses, but as the advocate it'll be your job to demonstrate the
        benefits of dual credit courses to the decision makers you identified in
        the previous step. We've included printable materials with
        research-based talking points to help you make your case and share with
        prospective partners and key decision makers. Not all of these talking
        points may resonate with you or your school's community, and that's
        okay; use the materials that make sense in the context of your school.
      </p>

      <div style="height: 50px"></div>
      <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="500">
        <v-alert border="top" color="secondary" elevation="0">
          <h5 class="text-h5 mb-2 font-weight-bold text-center">
            Sharable Materials
          </h5>

          <v-divider class="mb-4"></v-divider>
          <v-row :dense="isMobile">
            <v-col cols="12" xl="4" lg="6" md="6">
              <v-sheet
                color="primary"
                class="white--text rounded py-1 px-1 text-center text-button pointer"
                v-ripple
                elevation="2"
              >
                The basics
              </v-sheet>
            </v-col>
            <v-col cols="12" xl="4" lg="6" md="6">
              <v-sheet
                color="primary"
                class="white--text rounded py-1 px-1 text-center text-button pointer"
                v-ripple
                elevation="2"
              >
                District Best Practices
              </v-sheet>
            </v-col>
            <v-col cols="12" xl="4" lg="6" md="6">
              <v-sheet
                color="primary"
                class="white--text rounded py-1 px-1 text-center text-button pointer"
                v-ripple
                elevation="2"
                @click="go('il-dc.school-profile')"
              >
                School Dual Credit Profile
              </v-sheet>
            </v-col>
            <v-col cols="12" xl="4" lg="6" md="6">
              <v-sheet
                color="primary"
                class="white--text rounded py-1 px-1 text-center text-button pointer"
                v-ripple
                elevation="2"
              >
                Dual Credit Quality Act Summary
              </v-sheet>
            </v-col>
            <v-col cols="12" xl="4" lg="6" md="6">
              <v-sheet
                color="primary"
                class="white--text rounded py-1 px-1 text-center text-button pointer"
                v-ripple
                elevation="2"
              >
                Model Partnership Agreement Overview
              </v-sheet>
            </v-col>
            <v-col cols="12" xl="4" lg="6" md="6">
              <v-sheet
                color="primary"
                class="white--text rounded py-1 px-1 text-center text-button pointer"
                v-ripple
                elevation="2"
              >
                Cost Saving Policies
              </v-sheet>
            </v-col>
          </v-row>
        </v-alert>
      </div>

      <div style="height: 50px"></div>
      <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="500">
        <v-alert border="left" color="secondary" elevation="0">
          <div class="font-weight-bold mb-3">
            Topics for Further Exploration
          </div>
          <v-divider class="mb-4"></v-divider>
          <ul>
            <li class="mb-2">
              Do neighboring schools offer dual credit? What has their
              experience been like? Challenges? Advice?
            </li>
            <li class="mb-2">
              Does your community college partner with other districts or
              schools to offer dual credit?
            </li>
            <li>
              Review your school’s dual credit profile, does any data point jump
              out at you?
              <ol class="mt-2">
                <li class="mb-2">What are the bright spots?</li>
                <li class="mb-2">What can the school be doing better?</li>
                <li>
                  Any data point you’d like to further discuss with the
                  principal? Make a note, in the next step you’ll have an
                  introductory conversation and this profile is a great jumping
                  off point.
                </li>
              </ol>
            </li>
          </ul>
        </v-alert>
      </div>
    </div>
  </v-container>
</template>

<script>
import StepBus from "../../step-bus.js";

export default {
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
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
      StepBus.$on("prev", () => this.go("il-dc.key-players"));
      StepBus.$on("next", () => this.go("il-dc.make-connections"));
    });
  },
};
</script>
