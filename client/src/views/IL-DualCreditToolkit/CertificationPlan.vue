<template>
  <v-container>
    <div class="px-2 px-lg-16">
      <h2 class="text-md-h4 text-h5 primary--text mb-5">CERTIFICATION PLAN</h2>
      <template v-if="teachCTE">
        <p>
          According to ISBE and ICCB guidance Career and Technical Education
          (CTE) instructors must have a minimum of 60 semester hours, 2,000
          hours of work experience, and appropriate recognizable credentials,
          depending on the field. To receive your CTE educator license you must
          submit apply online and the license must be renewed every five years.
        </p>
        <div style="height: 50px"></div>
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
          <v-alert border="top" color="secondary" elevation="0">
            <h5 class="text-h5 mb-2 font-weight-bold text-center">
              Tools to Guide You
            </h5>

            <v-divider class="mb-4"></v-divider>
            <v-row :dense="isMobile">
              <v-col cols="12" xl="4" lg="6" md="6">
                <educator-licensure-process></educator-licensure-process>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <faculty-qualification-requirements></faculty-qualification-requirements>
              </v-col>
            </v-row>
          </v-alert>
        </div>
      </template>

      <template v-if="noMastersDegree">
        <h6 class="text-h6 primary--text mb-2">
          Without a Master's degree you have two paths to becoming credentialled
          to teach dual credit.
        </h6>
        <div style="height: 25px"></div>
        <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="500">
          <p>
            <span class="font-weight-medium">#1 - </span> Obtain a Master's
            degree in the content area to be taught. Connect with your school to
            take the first steps to securing a Master's degree in the discipline
            you hope to teach. Before enrolling in a Master's program work with
            your school's dual credit higher learning partner to make sure the
            subject of your Master's degree will meet their standards of
            instruction. Often higher learning partners will have specific
            subjects or coursework requirements to be qualified to teach a dual
            credit course.
          </p>
        </div>
        <div style="height: 25px"></div>
        <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="500">
          <v-alert border="top" color="secondary" elevation="0">
            <h5 class="text-h5 mb-2 font-weight-bold text-center">
              Tools to Guide You
            </h5>

            <v-divider class="mb-4"></v-divider>
            <v-row :dense="isMobile">
              <v-col cols="12" lg="6" md="6">
                <dual-credit-endorsement-faq></dual-credit-endorsement-faq>
              </v-col>
              <v-col cols="12" lg="6" md="6">
                <credentialling-chart></credentialling-chart>
              </v-col>
              <v-col cols="12" xl="6">
                <credentialling-options-public-universities></credentialling-options-public-universities>
              </v-col>
            </v-row>
          </v-alert>
        </div>
        <div style="height: 50px"></div>
        <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="500">
          <p>
            <span class="font-weight-medium">#2 - </span> Create a professional
            development plan to become an interim-qualified instructor. If you
            have a Bachelor's degree with a minimum of 18 graduate credit hours
            in the discipline to be taught and are enrolled in a
            discipline-specific Master's degree you qualify for a professional
            development plan. These plans are created in conjunction with your
            school and the higher learning partner to ensure the proper courses
            are completed and satisfactory progress is made across the three
            years that the plan is valid.
          </p>
        </div>
        <div style="height: 25px"></div>
        <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="500">
          <v-alert border="top" color="secondary" elevation="0">
            <h5 class="text-h5 mb-2 font-weight-bold text-center">
              Tools to Guide You
            </h5>

            <v-divider class="mb-4"></v-divider>
            <v-row :dense="isMobile">
              <v-col cols="12" lg="6" md="6">
                <dual-credit-qualitcy-act></dual-credit-qualitcy-act>
                <div class="text-caption text-center mt-1">
                  (see page 3 for specifics on interim-instructors and
                  professional development plans)
                </div>
              </v-col>
              <v-col cols="12" lg="6" md="6">
                <dual-credit-endorsement-faq></dual-credit-endorsement-faq>
              </v-col>
              <v-col cols="12" xl="6">
                <credentialling-chart></credentialling-chart>
              </v-col>
              <v-col cols="12" xl="6">
                <credentialling-options-public-universities></credentialling-options-public-universities>
              </v-col>
            </v-row>
          </v-alert>
        </div>
      </template>

      <div style="height: 25px"></div>
    </div>
  </v-container>
</template>

<script>
import StepBus from "../../step-bus.js";
import CredentiallingChart from "./sharable-materials/CredentiallingChart.vue";
import CredentiallingOptionsPublicUniversities from "./sharable-materials/CredentiallingOptionsPublicUniversities.vue";
import DualCreditEndorsementFaq from "./sharable-materials/DualCreditEndorsementFAQ.vue";
import DualCreditQualitcyAct from "./sharable-materials//DualCreditQualitcyAct.vue";
import EducatorLicensureProcess from "./sharable-materials/EducatorLicensureProcess.vue";
import FacultyQualificationRequirements from "./sharable-materials/FacultyQualificationRequirements.vue";

export default {
  components: {
    CredentiallingChart,
    CredentiallingOptionsPublicUniversities,
    DualCreditEndorsementFaq,
    DualCreditQualitcyAct,
    EducatorLicensureProcess,
    FacultyQualificationRequirements,
  },
  data() {
    return {};
  },
  computed: {
    teachCTE() {
      return this.$store.state.toolkit.loaded.teachCTE === "Yes";
    },
    noMastersDegree() {
      return this.$store.state.toolkit.loaded.hasMastersDegree === "No";
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
      StepBus.$emit("configure", {
        showNext: false,
      });
      StepBus.$on("prev", () => this.go("il-dc.policy-goals"));
    });
  },
};
</script>
