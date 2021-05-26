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
                <v-sheet
                  color="primary"
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
                  v-ripple
                  elevation="2"
                >
                  The basics
                </v-sheet>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <v-sheet
                  color="primary"
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
                  v-ripple
                  elevation="2"
                >
                  District Best Practices
                </v-sheet>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <v-sheet
                  color="primary"
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
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
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
                  v-ripple
                  elevation="2"
                >
                  Dual Credit Quality Act Summary
                </v-sheet>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <v-sheet
                  color="primary"
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
                  v-ripple
                  elevation="2"
                >
                  Model Partnership Agreement Overview
                </v-sheet>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <v-sheet
                  color="primary"
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
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
                Review your school's dual credit profile, does any data point
                jump out at you?
                <ol class="mt-2">
                  <li class="mb-2">What are the bright spots?</li>
                  <li class="mb-2">What can the school be doing better?</li>
                  <li>
                    Any data point you'd like to further discuss with the
                    principal? Make a note, in the next step you'll have an
                    introductory conversation and this profile is a great
                    jumping off point.
                  </li>
                </ol>
              </li>
            </ul>
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
          context of your school. Your school's dual credit profile, below, will
          help you understand the unique challenges your school faces. Also
          included in this section are printable materials with research-based
          talking points to help you make your case and share with prospective
          partners and key decision makers. Not all of these talking points may
          resonate with you or your school's community, that's ok, use the
          materials that make sense in the context of your school.
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
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
                  v-ripple
                  elevation="2"
                >
                  The basics
                </v-sheet>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <v-sheet
                  color="primary"
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
                  v-ripple
                  elevation="2"
                >
                  District Best Practices
                </v-sheet>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <v-sheet
                  color="primary"
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
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
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
                  v-ripple
                  elevation="2"
                >
                  Dual Credit Quality Act Summary
                </v-sheet>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <v-sheet
                  color="primary"
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
                  v-ripple
                  elevation="2"
                >
                  Model Partnership Agreement Overview
                </v-sheet>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <v-sheet
                  color="primary"
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
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
                Review your school's dual credit profile, does any data point
                jump out at you?
                <ol class="mt-2">
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
                </ol>
              </li>
            </ul>
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
          The graphic below, your school's equity profile, will help you
          demonstrate a lack of access. This tool uses publicly available
          Illinois Report Card data to illustrate the disparities in your
          school's dual credit enrollment. Notice any trends? Places to improve?
          Sharing this data with decision makers will make sure everyone
          understands the problem you are seeking to solve.
        </p>

        ## NEEDS EQUITY PROFILE ##

        <p>
          Also included in this section are printable materials with
          research-based talking points to help you make your case and share
          with prospective partners and key decision makers. The Academic
          Acceleration Factsheet and Multiple Eligibility Measures Research
          Rundown map out how your school can amend its eligibility requirements
          to enroll more students in dual credit courses while maintaining high
          standards and college-level rigor. Not all of these talking points may
          resonate with you or your school's community, that's ok, use the
          materials that make sense in the context of your school.
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
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
                  v-ripple
                  elevation="2"
                >
                  The basics
                </v-sheet>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <v-sheet
                  color="primary"
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
                  v-ripple
                  elevation="2"
                >
                  District Best Practices
                </v-sheet>
              </v-col>
              <v-col cols="12" xl="4">
                <v-sheet
                  color="primary"
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
                  v-ripple
                  elevation="2"
                  @click="go('il-dc.school-profile')"
                >
                  School Dual Credit Profile
                </v-sheet>
              </v-col>
              <v-col cols="12" xl="6">
                <v-sheet
                  color="primary"
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
                  v-ripple
                  elevation="2"
                  >Multiple Eligibility Measures Research Rundown
                </v-sheet>
              </v-col>
              <v-col cols="12" xl="6">
                <v-sheet
                  color="primary"
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
                  v-ripple
                  elevation="2"
                  >Academic Acceleration Factsheet
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
                Review your school's dual credit profile, does any data point
                jump out at you?
                <ol class="mt-2">
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
                </ol>
              </li>
            </ul>
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
          The graphic below, your school's equity profile, will help you
          demonstrate a lack of access. This tool uses publicly available
          Illinois Report Card data to illustrate the disparities in your
          school's dual credit enrollment. Notice any trends? Places to improve?
          Sharing this data with decision makers will make sure everyone
          understands the problem you are seeking to solve.
        </p>

        ## NEEDS EQUITY PROFILE ##

        <p>
          Also included in this section are printable materials with
          research-based talking points to help you make your case and share
          with prospective partners and key decision makers. The Dual Credit
          Quality Act introduced three cost saving measures which are reviewed
          in detail in the Cost Savings Policies brief included below. Not all
          of these talking points may resonate with you or your school's
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
              <v-col cols="12" xl="4" lg="6" md="6">
                <v-sheet
                  color="primary"
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
                  v-ripple
                  elevation="2"
                >
                  The basics
                </v-sheet>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <v-sheet
                  color="primary"
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
                  v-ripple
                  elevation="2"
                >
                  District Best Practices
                </v-sheet>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <v-sheet
                  color="primary"
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
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
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
                  v-ripple
                  elevation="2"
                  >Model Partnership Agreement Overview
                </v-sheet>
              </v-col>
              <v-col cols="12" xl="4" lg="6" md="6">
                <v-sheet
                  color="primary"
                  class="
                    white--text
                    rounded
                    py-1
                    px-1
                    text-center text-button
                    pointer
                  "
                  v-ripple
                  elevation="2"
                  >Cost Saving Policies
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
                Do neighboring schools offer dual credit? What do they charge
                for similar courses? Are they offering the courses through the
                same higher learning partner?
              </li>
              <li class="mb-2">
                Is your cost considered a "priority course"? See the Cost
                Savings Policies brief to find out.
                <ol class="mt-2">
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
                </ol>
              </li>
              <li>
                Review your school's dual credit profile, does any data point
                jump out at you?
                <ol class="mt-2">
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
                </ol>
              </li>
            </ul>
          </v-alert>
        </div>
      </template>
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
