<template>
  <v-container>
    <div class="px-2 px-lg-16">
      <h2 class="text-md-h4 text-h5 primary--text mb-5">SET YOUR GOALS</h2>
      <p>
        This toolkit will guide you as you advocate for expanding dual credit in
        your school. Whether you are a parent looking to lower course costs, an
        administrator seeking new policies to expand access for your students,
        or a teacher exploring credentialling options, this toolkit will create
        a personalized plan to help you realize your dual credit goals. To get
        started answer the simple questions below and the toolkit will do the
        rest. Good luck!
      </p>
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="600">
        <v-row align="center" class="mt-8">
          <v-col cols="12">
            <v-select
              v-model="role"
              :items="roles"
              label="What role best represents you?"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="rcdts"
              :items="entities"
              item-text="School_Name"
              item-value="RCDTS"
              :disabled="!role"
              label="What school do you represent?"
            ></v-autocomplete>
          </v-col>

          <v-slide-y-transition mode="out-in">
            <v-col cols="12" class="mt-6" v-if="rcdts && offersDualCredit">
              <h6 class="text-h6 primary--text mb-2">What is your goal?</h6>
              <p class="mb-6">
                According to ISBE data,
                <span class="font-weight-medium">{{
                  this.entity.School_Name
                }}</span>
                offered dual credit courses last school year that enrolled
                {{ dualCreditEnrollment | numeral("0,0") }} students. Dual
                credit programs should be promoted within the school and be
                available to all qualified students.
              </p>

              <v-select
                v-model="policyGoal"
                :items="policyGoals"
                placeholder="Select your policy goal"
                :disabled="!rcdts"
                :readonly="!offersDualCredit"
              ></v-select>
            </v-col>
            <v-col
              cols="12"
              class="mt-6"
              v-else-if="rcdts && !offersDualCredit"
            >
              <h6 class="text-h6 primary--text mb-2">
                What is your advocacy goal?
              </h6>
              <p class="mb-6">
                According to ISBE data,
                <span class="font-weight-medium">{{
                  this.entity.School_Name
                }}</span>
                didn't offer dual credit courses last school year.
              </p>

              <v-select
                v-model="policyGoal"
                :items="policyGoals"
                placeholder="Select your policy goal"
                :readonly="policyGoals.length === 1"
                :messages="
                  policyGoals.length === 1
                    ? `An advocacy goal to start a new dual credit program at
                      ${entity.School_Name}'s
                    is where you should start. `
                    : ''
                "
              ></v-select>
            </v-col>
          </v-slide-y-transition>

          <v-slide-y-transition>
            <v-col cols="12" class="mt-6" v-if="policyGoal === teacherOption">
              <v-select
                v-model="highSchoolTeacher"
                :items="['Yes', 'No']"
                label="Are you a licensed high school teacher?"
              ></v-select>
            </v-col>
          </v-slide-y-transition>

          <v-slide-y-transition mode="out-in">
            <v-col
              cols="12"
              class="mt-6"
              v-if="policyGoal === teacherOption && highSchoolTeacher === 'Yes'"
            >
              <v-select
                v-model="hasMastersDegree"
                :items="['Yes', 'No']"
                label="Do you have a Master's degree?"
              ></v-select>
              <v-slide-y-transition>
                <p class="mt-12" v-if="hasMastersDegree === 'Yes'">
                  Is your Master's degree in one of the following: biology,
                  calculus, english, composition, english literature, general
                  math, history, psychology, speech, or statistics?
                </p>
              </v-slide-y-transition>
              <v-slide-y-transition>
                <v-select
                  v-if="hasMastersDegree === 'Yes'"
                  v-model="hasSpecifiedDegree"
                  :items="['Yes', 'No']"
                  placeholder="Is your degree in one of the above areas?"
                ></v-select>
              </v-slide-y-transition>

              <v-slide-y-transition>
                <v-select
                  v-if="hasSpecifiedDegree === 'No'"
                  v-model="teacherOptionToExplore"
                  :items="[
                    'What dual credit courses am I eligible to teach?',
                    `My school's dual credit higher learning partner is rejecting my credentials, what are my options?`,
                  ]"
                  label="Which option would you like to explore?"
                  class="mt-10"
                ></v-select>
              </v-slide-y-transition>
            </v-col>
            <v-col
              cols="12"
              class="mt-6"
              v-else-if="
                policyGoal === teacherOption && highSchoolTeacher === 'No'
              "
            >
              <v-select
                v-model="teachCTE"
                :items="['Yes', 'No']"
                label="Do you want to teach a Career and Technical Education course for dual credit?"
              ></v-select>
              <v-slide-y-transition>
                <v-alert
                  v-if="teachCTE === 'No'"
                  border="left"
                  color="red lighten-2"
                  dark
                >
                  <v-icon>mdi-alert-circle</v-icon> Unfortunately you do not
                  qualify to teach dual credit.
                </v-alert>
              </v-slide-y-transition>
            </v-col>
          </v-slide-y-transition>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import StepBus from "../../step-bus.js";
import { datasets } from "../../common/constants.js";
import {
  hasPolicyGoals,
  hasQualifyingTeacherPath,
  getSchoolEntities,
} from "./helpers.js";

export default {
  data() {
    return {
      roles: [
        "Parent",
        "Student",
        "Teacher",
        "School Administrator",
        "School Board Member",
        "Community College Staff",
        "Community Member",
      ],
      useSuggestedPolicyGoal: null,
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    entities() {
      let target = this.$store.state.datasets.loaded.find(
        (x) => x.key === datasets.il_dualcredit_entity
      );

      return target ? getSchoolEntities(target.data) : [];
    },
    entity() {
      let target = this.entities.find((x) => x.RCDTS === this.rcdts);
      return target ?? {};
    },
    dualCreditEnrollment() {
      if (this.entity) {
        return +this.entity.N_Students_who_took_Dual_Credit_classes_912_Total;
      } else return 0;
    },
    offersDualCredit() {
      return this.dualCreditEnrollment > 0;
    },
    rcdts: {
      get() {
        return this.$store.state.toolkit.loaded.rcdts;
      },
      set(value) {
        this.updateToolkit("rcdts", value);
      },
    },
    policyGoal: {
      get() {
        return this.$store.state.toolkit.loaded.policyGoal;
      },
      set(value) {
        this.updateToolkit("policyGoal", value);
      },
    },
    role: {
      get() {
        return this.$store.state.toolkit.loaded.role;
      },
      set(value) {
        this.updateToolkit("role", value);
      },
    },
    highSchoolTeacher: {
      get() {
        return this.$store.state.toolkit.loaded.highSchoolTeacher;
      },
      set(value) {
        this.updateToolkit("highSchoolTeacher", value);
      },
    },
    hasMastersDegree: {
      get() {
        return this.$store.state.toolkit.loaded.hasMastersDegree;
      },
      set(value) {
        this.updateToolkit("hasMastersDegree", value);
      },
    },
    hasSpecifiedDegree: {
      get() {
        return this.$store.state.toolkit.loaded.hasSpecifiedDegree;
      },
      set(value) {
        this.updateToolkit("hasSpecifiedDegree", value);
      },
    },
    teacherOptionToExplore: {
      get() {
        return this.$store.state.toolkit.loaded.teacherOptionToExplore;
      },
      set(value) {
        this.updateToolkit("teacherOptionToExplore", value);
      },
    },
    teachCTE: {
      get() {
        return this.$store.state.toolkit.loaded.teachCTE;
      },
      set(value) {
        this.updateToolkit("teachCTE", value);
      },
    },
    teacherOption() {
      return "Explore dual credit credentialing options";
    },
    policyGoals() {
      let options = [];

      if (this.offersDualCredit) {
        options = [
          "Introduce a new course to an existing dual credit program",
          "Expand eligibility criteria for an existing dual credit program",
          "Lower the costs of dual credit courses for schools and students",
        ];
      } else {
        options = ["Start a new dual credit program"];
      }

      if (
        this.role === "Teacher" ||
        this.role === "School Administrator" ||
        this.role === "School Board Member"
      )
        options.push(this.teacherOption);

      return options;
    },
    policyGoalNote() {
      if (!this.rcdts) return "";
      return this.offersDualCredit
        ? `
        <h5 class="text-h4 primary--text">What is your policy goal?</h5>
        <p></p>`
        : "This school didn't have any students enrolled in Dual Credit last year.";
    },
    hasPolicyGoals() {
      return hasPolicyGoals(this.$store.state.toolkit.loaded);
    },
    hasQualifyingTeacherPath() {
      return hasQualifyingTeacherPath(this.$store.state.toolkit.loaded);
    },
  },
  watch: {
    hasPolicyGoals(val, prev) {
      if (val != prev) {
        this.setCanNext();
      }
    },
    hasQualifyingTeacherPath(val, prev) {
      if (val != prev) {
        this.setCanNext();
      }
    },
    role(val, prev) {
      if (val != prev) this.setPolicyGoalState();
    },
    rcdts(val, prev) {
      if (val != prev) {
        this.setPolicyGoalState();
      }
    },
    policyGoal(val, prev) {
      if (val != prev) {
        this.setCanNext();
        this.highSchoolTeacher = "";
        this.hasMastersDegree = "";
        this.hasSpecifiedDegree = "";
        this.teacherOptionToExplore = "";
        this.teachCTE = "";
      }
    },
    hasMastersDegree(val, prev) {
      if (val != prev) {
        this.setCanNext();
        this.hasSpecifiedDegree = "";
        this.teacherOptionToExplore = "";
        this.teachCTE = "";
      }
    },
    hasSpecifiedDegree(val, prev) {
      if (val != prev) {
        this.setCanNext();
        this.teacherOptionToExplore = "";
        this.teachCTE = "";
      }
    },
    highSchoolTeacher(val, prev) {
      if (val != prev) {
        this.hasMastersDegree = "";
        this.hasSpecifiedDegree = "";
        this.teacherOptionToExplore = "";
        this.teachCTE = "";
      }
    },
  },
  methods: {
    setPolicyGoalState() {
      this.useSuggestedPolicyGoal = null;

      if (!this.offersDualCredit && this.policyGoals.length === 1) {
        this.policyGoal = this.policyGoals[0];
      } else this.policyGoal = null;
    },
    updateToolkit(key, value) {
      this.$store.commit("toolkit/updateLoadedProp", { key, value });
    },
    go(name) {
      this.$router.push({ name });
    },
    setCanNext() {
      StepBus.$off("next");
      if (this.policyGoal === this.teacherOption) {
        StepBus.$emit("patch", { canNext: this.hasQualifyingTeacherPath });
        StepBus.$on("next", () => this.go("il-dc.certification-plan"));
      } else {
        StepBus.$emit("patch", { canNext: this.hasPolicyGoals });
        StepBus.$on("next", () => this.go("il-dc.school-profile"));
      }
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
        showPrev: true,
        canNext: this.hasPolicyGoals,
      });
      StepBus.$on("prev", () => this.go("il-dc.introduction"));
      StepBus.$on("next", () => this.go("il-dc.school-profile"));

      this.setCanNext();
    });
  },
};
</script>
