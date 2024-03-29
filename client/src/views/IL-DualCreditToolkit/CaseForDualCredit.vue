<template>
  <v-container>
    <div class="px-2 px-lg-16">
      <h2 class="text-md-h4 text-h5 primary--text mb-5">
        STEP TWO: MAKE THE CASE FOR DUAL CREDIT
      </h2>

      <template v-if="policyGoal === 'Start a new dual credit program'">
        <p>
          Since you're here, chances are you already know the value of dual
          credit courses, but as the advocate it'll be your job to demonstrate
          the benefits of dual credit courses to the decision makers you
          identified in the previous step. We've included printable materials
          with research-based talking points to help you make your case and
          share with prospective partners and key decision makers. Not all of
          these talking points may resonate with you or your school's community,
          and that's okay; use the materials that make sense in the context of
          your school.
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
                <case-for-dual-credit></case-for-dual-credit>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <district-best-practices></district-best-practices>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <school-profile></school-profile>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <dual-credit-qualitcy-act></dual-credit-qualitcy-act>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <model-partnership-agreement></model-partnership-agreement>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <cost-saving-policies></cost-saving-policies>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <dual-credit-equity-report></dual-credit-equity-report>
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
            <ol>
              <li class="mb-2">
                Do neighboring schools offer dual credit? What has their
                experience been like? Challenges? Advice?
              </li>
              <li class="mb-2">
                Does your community college partner with other districts or
                schools to offer dual credit?
              </li>
              <li>
                Review your
                <router-link :to="{ name: 'il-dc.school-profile' }"
                  >School's Dual Credit Profile</router-link
                >, does any data point jump out at you?
                <ul class="mt-2">
                  <li class="mb-2">What are the bright spots?</li>
                  <li class="mb-2">What can the school be doing better?</li>
                  <li>
                    Any data point you'd like to further discuss with the
                    principal? Make a note, in the next step you'll have an
                    introductory conversation and this profile is a great
                    jumping off point.
                  </li>
                </ul>
              </li>
            </ol>
          </v-alert>
        </div>
      </template>

      <template
        v-if="
          policyGoal ===
          'Introduce a new course to an existing dual credit program'
        "
      >
        <p>
          It'll be your job to demonstrate the benefits of offering a particular
          course as dual credit to the decision makers you identified in the
          previous step. Having enough qualified instructors, alignment with
          existing courses, insufficient student interest, high costs, and the
          location of instruction are often the sticking points for schools
          trying to expand their dual credit programs. To prepare, consider the
          context of your school. Your
          <router-link
            :to="{ name: 'il-dc.school-profile', query: { print: true } }"
            >School's Dual Credit Profile</router-link
          >, will help you understand the unique challenges your school faces.
          Also included in this section are printable materials with
          research-based talking points to help you make your case and share
          with prospective partners and key decision makers. Not all of these
          talking points may resonate with you or your school's community,
          that's ok, use the materials that make sense in the context of your
          school.
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
                <case-for-dual-credit></case-for-dual-credit>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <district-best-practices></district-best-practices>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <school-profile></school-profile>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <dual-credit-qualitcy-act></dual-credit-qualitcy-act>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <model-partnership-agreement></model-partnership-agreement>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <cost-saving-policies></cost-saving-policies>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <dual-credit-equity-report></dual-credit-equity-report>
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
            <ol>
              <li class="mb-2">
                Is the course currently taught at the high school or college?
              </li>
              <li class="mb-2">
                Do neighboring schools offer this particular course as dual
                credit? What has their experience been like? Challenges? Advice?
              </li>
              <li class="mb-2">
                Does your community college partner with other districts or
                schools to offer this particular course as dual credit?
              </li>
              <li class="mb-2">
                Does this course serve as prerequisite for other courses at the
                high school or college level?
              </li>
              <li class="mb-2">
                Does the district have a qualified instructor to teach the
                course?
              </li>
              <li class="mb-2">
                Is the course part of a Career and Technical Education (CTE)
                pathway? If so, local employment data might help you build your
                case. The Regional Data Packets found on
                <a
                  href="https://www.illinoisworknet.com/WIOA/RegPlanning"
                  target="_blank"
                  >Illinois Worknet</a
                >
                are a treasure trove of regional employment data including
                supply gap analysis for top industries and average hour wages
                for in-demand occupations.
              </li>
              <li class="mb-2">
                Is the course required or recommended by colleges? If so,
                offering the course as dual credit can be an affordable and way
                to help students get a jump start on their college credit.
              </li>
              <li>
                Review your
                <router-link :to="{ name: 'il-dc.school-profile' }"
                  >School's Dual Credit Profile</router-link
                >, does any data point jump out at you?
                <ul class="mt-2">
                  <li class="mb-2">
                    Is your school fully funded? If not, be prepared to talk
                    about the Model Partnership Agreement which can help keep
                    costs down for both schools and families.
                  </li>
                  <li class="mb-2">
                    What percentage of students are enrolling in college? Dual
                    credit courses are a great way to build student's academic
                    confidence, help them rack up early credit quickly, explore
                    career paths before college.
                  </li>
                  <li class="mb-2">What can the school be doing better?</li>
                  <li>
                    Any data point you'd like to further discuss with the
                    principal? Make a note, in the next step you'll have an
                    introductory conversation and this profile is a great
                    jumping off point.
                  </li>
                </ul>
              </li>
            </ol>
          </v-alert>
        </div>
      </template>

      <template
        v-if="
          policyGoal ===
          'Expand eligibility criteria for an existing dual credit program'
        "
      >
        <p>
          Since your school offers dual credit coursework they already know how
          valuable these courses can be for students but if you're here you are
          concerned not all students have equal access to these courses. It'll
          be your job to make the case on why equitable access is critical to a
          dual credit program.
        </p>
        <p>
          The graphic below is your school's equity profile. This tool uses
          publicly available Illinois Report Card data to call out student
          groups that are currently underrepresented in dual credit courses at
          your school. For example, if students from low income families
          represent 40% of all students enrolled at your school, we'd hope to
          see approximately 40% of dual credit students also from low income
          families. Take a look at the dials below, notice any trends? Places to
          improve? Sharing this data with decision makers will make sure
          everyone understands the problem you are seeking to solve.
        </p>
        <equity-profile></equity-profile>
        <div style="height: 25px"></div>
        <p>
          Also included in this section are printable materials with
          research-based talking points to help you make your case and share
          with prospective partners and key decision makers. The resources below
          map out how your school can amend its eligibility requirements to
          enroll more students in dual credit courses while maintaining high
          standards and college-level rigor.
        </p>

        <p>
          The Academic Acceleration Factsheet outlines a new policy that allows
          districts to automatically enroll a student in an available dual
          credit course if they test at or above proficiency. The SAT
          proficiency bars are intended to illustrate the number of
          underrepresented students who may be ready for a college course. Of
          course, a single test is not wholly representative of a student's
          academic ability so we recommend using SAT scores as a floor not a
          ceiling, check out Making the Case for Broad Eligibility Criteria to
          learn more about the many eligibility measures schools can use to
          determine a student's dual credit readiness.
        </p>

        <p>
          Not all of these talking points may resonate with you or your school's
          community, that's ok, use the materials that make sense in the context
          of your school.
        </p>

        <div style="height: 50px"></div>
        <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="500">
          <v-alert border="top" color="secondary" elevation="0">
            <h5 class="text-h5 mb-2 font-weight-bold text-center">
              Sharable Materials
            </h5>

            <v-divider class="mb-4"></v-divider>
            <v-row :dense="isMobile">
              <v-col cols="12" md="6">
                <case-for-dual-credit></case-for-dual-credit>
              </v-col>
              <v-col cols="12" md="6">
                <district-best-practices></district-best-practices>
              </v-col>
              <v-col cols="12" md="6">
                <school-profile></school-profile>
              </v-col>
              <v-col cols="12" md="6">
                <dual-credit-qualitcy-act></dual-credit-qualitcy-act>
              </v-col>
              <v-col cols="12" xl="6">
                <case-for-broad-eligibility></case-for-broad-eligibility>
              </v-col>
              <v-col cols="12" xl="6">
                <academic-acceleration-factsheet></academic-acceleration-factsheet>
              </v-col>
              <v-col cols="12" xl="6">
                <dual-credit-equity-report></dual-credit-equity-report>
              </v-col>
              <!-- <v-col cols="12" xl="6">
                <iccb-placement-methods></iccb-placement-methods>
              </v-col> -->
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
            <ol>
              <li class="mb-2">
                How does your school currently determine eligibility for dual
                credit courses?
              </li>
              <li class="mb-2">
                Beyond eligibility requirements are there other barriers to
                enrolling in a dual credit course? Common barriers include high
                costs or lack of reliable transportation if the course is
                offered at the college campus.
              </li>
              <li>
                Review your
                <router-link :to="{ name: 'il-dc.school-profile' }"
                  >School's Dual Credit Profile</router-link
                >, does any data point jump out at you?
                <ul class="mt-2">
                  <li class="mb-2">
                    What percentage of students are enrolling in college? Dual
                    credit courses are a great way to build student's academic
                    confidence, help them rack up early credit quickly, explore
                    career paths before college.
                  </li>
                  <li class="mb-2">
                    What percentage of students are proficient on state tests?
                    In 2021 Illinois passed a bill requiring schools to
                    automatically enroll students who meet or exceed proficiency
                    standards in key subjects in the next most rigorous course.
                    The next most rigorous course is often a dual credit course
                    for seniors. See the Academic Acceleration Factsheet for
                    more information on how to put this policy to work in your
                    school.
                  </li>
                  <li class="mb-2">What can the school be doing better?</li>
                  <li>
                    Any data point you'd like to further discuss with the
                    principal? Make a note, in the next step you'll have an
                    introductory conversation and this profile is a great
                    jumping off point.
                  </li>
                </ul>
              </li>
            </ol>
          </v-alert>
        </div>
      </template>

      <template
        v-if="
          policyGoal ===
          'Lower the costs of dual credit courses for schools and students'
        "
      >
        <p>
          Since your school offers dual credit coursework they already know how
          valuable these courses can be for students but if you're here you are
          concerned that the high cost of dual credit courses may be pricing
          some students out. It'll be your job to make the case on why lower
          costs strengthen a dual credit program.
        </p>

        <p>
          Included in this section are printable materials with research-based
          talking points to help you make your case and share with prospective
          partners and key decision makers. The Dual Credit Quality Act
          introduced three cost saving measures which are reviewed in detail in
          the Cost Savings Policies brief included below. Not all of these
          talking points may resonate with you or your school's community,
          that's ok, use the materials that make sense in the context of your
          school.
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
                <case-for-dual-credit></case-for-dual-credit>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <district-best-practices></district-best-practices>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <school-profile></school-profile>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <model-partnership-agreement></model-partnership-agreement>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <cost-saving-policies></cost-saving-policies>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <dual-credit-equity-report></dual-credit-equity-report>
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
            <ol>
              <li class="mb-2">
                Do neighboring schools offer dual credit? What do they charge
                for similar courses? Are they offering the courses through the
                same higher learning partner?
              </li>
              <li class="mb-2">
                Is your cost considered a "priority course"? See the Cost
                Savings Policies brief to find out.
                <ul class="mt-2">
                  <li class="mb-2">
                    If your course is not a "priority course" ask your principal
                    if there is a realistic path to making it one. For more
                    information read the "Standards, Students, and the Model
                    Partnership Agreement" section of Stand's
                    <a href="https://dualcreditequity.org/" target="_blank"
                      >Dual Credit Equity report</a
                    >
                    .
                  </li>
                </ul>
              </li>
              <li>
                Review your
                <router-link :to="{ name: 'il-dc.school-profile' }"
                  >School's Dual Credit Profile</router-link
                >, does any data point jump out at you?
                <ul class="mt-2">
                  <li class="mb-2">What are the bright spots?</li>
                  <li class="mb-2">
                    Is your school fully funded? If not, be prepared to talk
                    about the cost saving measures covered in the Cost Savings
                    Policies brief.
                  </li>
                  <li>
                    Any data point you'd like to further discuss with the
                    principal? Make a note, in the next step you'll have an
                    introductory conversation and this profile is a great
                    jumping off point.
                  </li>
                </ul>
              </li>
            </ol>
          </v-alert>
        </div>
      </template>
    </div>
  </v-container>
</template>

<script>
import StepBus from "../../step-bus.js";
import EquityProfile from "./EquityProfile.vue";

import AcademicAccelerationFactsheet from "./sharable-materials/AcademicAccelerationFactsheet.vue";
import CaseForBroadEligibility from "./sharable-materials/CaseForBroadEligibility.vue";
import CaseForDualCredit from "./sharable-materials/CaseForDualCredit.vue";
import CostSavingPolicies from "./sharable-materials/CostSavingPolicies.vue";
import DistrictBestPractices from "./sharable-materials/DistrictBestPractices.vue";
import DualCreditEquityReport from "./sharable-materials/DualCreditEquityReport.vue";
import DualCreditQualitcyAct from "./sharable-materials/DualCreditQualitcyAct.vue";
//import IccbPlacementMethods from "./sharable-materials/ICCBPlacementMethods.vue";
import ModelPartnershipAgreement from "./sharable-materials/ModelPartnershipAgreement.vue";
import SchoolProfile from "./sharable-materials/SchoolProfile.vue";

export default {
  components: {
    AcademicAccelerationFactsheet,
    CaseForBroadEligibility,
    DistrictBestPractices,
    DualCreditEquityReport,
    DualCreditQualitcyAct,
    CaseForDualCredit,
    CostSavingPolicies,
    // IccbPlacementMethods,
    ModelPartnershipAgreement,
    SchoolProfile,
    EquityProfile,
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
    policyGoal() {
      return this.$store.state.toolkit.loaded.policyGoal;
    },
  },
  methods: {
    go(name) {
      this.$router.push({ name });
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
      StepBus.$on("prev", () => this.go("il-dc.key-players"));
      StepBus.$on("next", () => this.go("il-dc.make-connections"));
    });
  },
};
</script>
