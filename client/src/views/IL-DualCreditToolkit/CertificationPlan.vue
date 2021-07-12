<template>
  <v-container>
    <div class="px-2 px-lg-16">
      <h2 class="text-md-h4 text-h5 primary--text mb-5">CERTIFICATION PLAN</h2>

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

      <template v-if="hasSpecifiedDegree">
        <p>
          You are qualified to teach dual credit and qualified for an
          endorsement on your Professional Educator License. You are NOT
          required to secure a Dual Credit Endorsement in order to teach dual
          credit; however, teachers that meet these standards may want to get
          this credential awarded by ISBE to help verify their qualifications
          and improve portability of dual credit coursework.
        </p>
        <div style="height: 50px"></div>
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
          <v-alert border="top" color="secondary" elevation="0">
            <h5 class="text-h5 mb-2 font-weight-bold text-center">
              Tools to Guide You
            </h5>

            <v-divider class="mb-4"></v-divider>
            <v-row :dense="isMobile">
              <v-col cols="12">
                <dual-credit-endorsement-faq></dual-credit-endorsement-faq>
              </v-col>
            </v-row>
          </v-alert>
        </div>
      </template>

      <template v-if="allowedDualCreditCourses">
        <p>
          The Dual Credit Quality Act, updated in 2018, establishes that dual
          credit instructors shall meet any of the faculty credential standards
          allowed by the Higher Learning Commission to determine minimally
          qualified faculty, but need not meet higher certification
          requirements. For transfer courses the minimum qualifications to teach
          dual credit are a Master’s degree in the content area or any Master’s
          degree with 18 graduate credit hours of coursework in the discipline.
          Often higher learning partners will have specific subjects or
          coursework requirements to be qualified to teach a dual credit course.
          The documents below can provide guidance as you determine which dual
          credit courses you are qualified to teach based on your graduate
          coursework.
        </p>
        <div style="height: 25px"></div>
        <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="500">
          <v-alert border="top" color="secondary" elevation="0">
            <h5 class="text-h5 mb-2 font-weight-bold text-center">
              Tools to Guide You
            </h5>

            <v-divider class="mb-4"></v-divider>
            <v-row :dense="isMobile">
              <v-col cols="12" xl="4" lg="6" md="6">
                <dual-credit-endorsement-faq></dual-credit-endorsement-faq>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <credentialling-chart></credentialling-chart>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <faculty-qualification-requirements></faculty-qualification-requirements>
              </v-col>
            </v-row>
          </v-alert>
        </div>
        <div style="height: 25px"></div>
        <p>
          If you are interested in teaching a dual credit course in a subject in
          which you do not have a Master’s degree you may pursue a professional
          development plan to become an interim-qualified instructor. These
          plans are created in conjunction with your school and the higher
          learning partner to ensure the proper courses are completed and
          satisfactory progress across the three years the plan is valid.
        </p>
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
                <credentialling-options-public-universities></credentialling-options-public-universities>
              </v-col>
            </v-row>
          </v-alert>
        </div>
      </template>

      <template v-if="rejectedCreds">
        <p>
          Unfortunately, disagreements over who can teach which dual credit
          courses is common throughout the state. The Dual Credit Quality Act
          and state agencies like ISBE and ICCB have established guidance to
          help secondary and postsecondary partners reach an amicable solution
          that protects course rigor while improving access to dual credit
          courses during an unprecedented teacher shortage. Below are strategies
          and tools that can help you successfully navigate credentialling
          disputes.
        </p>
        <p>
          The Dual Credit Quality Act, updated in 2018, establishes that dual
          credit instructors of dual credit courses shall meet any of the
          faculty credential standards allowed by the Higher Learning Commission
          to determine minimally qualified faculty, but need not meet higher
          certification requirements. For transfer courses the minimum
          qualifications to teach dual credit are a Master’s degree in the
          content area or any Master’s degree with 18 graduate credit hours of
          coursework in the discipline. Often higher learning partners will have
          specific subjects or coursework requirements to be qualified to teach
          a dual credit course. The documents below can provide guidance as you
          determine which dual credit courses you are qualified to teach based
          on your graduate coursework.
        </p>
        <div style="height: 25px"></div>
        <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="500">
          <v-alert border="top" color="secondary" elevation="0">
            <h5 class="text-h5 mb-2 font-weight-bold text-center">
              Tools to Guide You
            </h5>

            <v-divider class="mb-4"></v-divider>
            <v-row :dense="isMobile">
              <v-col cols="12" xl="4" lg="6" md="6">
                <dual-credit-endorsement-faq></dual-credit-endorsement-faq>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <credentialling-chart></credentialling-chart>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <guidance-crosswalk></guidance-crosswalk>
              </v-col>
            </v-row>
          </v-alert>
        </div>
        <div style="height: 25px"></div>
        <p>
          If you are interested in teaching a dual credit course in a subject in
          which you do not have a Master’s degree you may pursue a professional
          development plan to become an interim-qualified instructor. These
          plans are created in conjunction with your school and the higher
          learning partner to ensure the proper courses are completed and
          satisfactory progress is made within the three years the plan is
          valid.
        </p>
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
                <credentialling-options-public-universities></credentialling-options-public-universities>
              </v-col>
            </v-row>
          </v-alert>
        </div>
        <div style="height: 25px"></div>
        <p>
          Community colleges are the primary partners for high schools seeking
          to offer dual credit, but four-year college and universities are also
          standing up to serve students. However, state law requires high
          schools to pursue community college partnerships before out-of-state
          options. Alternatively, the Virtual Course Catalog is a great option
          for schools struggling to overcome long commutes to a community
          college or an acute teacher shortage.
        </p>
        <div style="height: 25px"></div>
        <div data-aos="fade-left" data-aos-duration="700">
          <v-alert border="top" color="secondary" elevation="0">
            <h5 class="text-h5 mb-2 font-weight-bold text-center">
              Tools to Guide You
            </h5>

            <v-divider class="mb-4"></v-divider>
            <v-row :dense="isMobile">
              <v-col cols="12">
                <virtual-course-catalog></virtual-course-catalog>
              </v-col>
            </v-row>
          </v-alert>
        </div>
      </template>

      <template v-if="teachCTE">
        <p>
          According to ISBE and ICCB guidance Career and Technical Education
          (CTE) instructors must have 2,000 hours of work experience and
          appropriate recognizable credentials and/or a minimum of 60 semester
          hours. To receive your CTE educator license you must submit apply
          online and the license must be renewed every five years. Before
          applying for your CTE educator license connect with both your
          secondary and postsecondary partners to clarify their credential
          requirements for your specific field.
        </p>
        <div style="height: 50px"></div>
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
          <v-alert border="top" color="secondary" elevation="0">
            <h5 class="text-h5 mb-2 font-weight-bold text-center">
              Tools to Guide You
            </h5>

            <v-divider class="mb-4"></v-divider>
            <v-row :dense="isMobile">
              <v-col cols="12" lg="6" md="6">
                <educator-licensure-process></educator-licensure-process>
              </v-col>
              <v-col cols="12" lg="6" md="6">
                <faculty-qualification-requirements></faculty-qualification-requirements>
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
import GuidanceCrosswalk from "./sharable-materials/GuidanceCrosswalk.vue";
import VirtualCourseCatalog from "./sharable-materials/VirtualCourseCatalog.vue";

export default {
  components: {
    CredentiallingChart,
    CredentiallingOptionsPublicUniversities,
    DualCreditEndorsementFaq,
    DualCreditQualitcyAct,
    EducatorLicensureProcess,
    FacultyQualificationRequirements,
    GuidanceCrosswalk,
    VirtualCourseCatalog,
  },
  data() {
    return {};
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    teachCTE() {
      return this.$store.state.toolkit.loaded.teachCTE === "Yes";
    },
    noMastersDegree() {
      return this.$store.state.toolkit.loaded.hasMastersDegree === "No";
    },
    hasSpecifiedDegree() {
      return this.$store.state.toolkit.loaded.hasSpecifiedDegree === "Yes";
    },
    allowedDualCreditCourses() {
      return (
        this.$store.state.toolkit.loaded.teacherOptionToExplore ===
        "What dual credit courses am I eligible to teach?"
      );
    },
    rejectedCreds() {
      return (
        this.$store.state.toolkit.loaded.teacherOptionToExplore ===
        "My school's dual credit higher learning partner is rejecting my credentials, what are my options?"
      );
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
