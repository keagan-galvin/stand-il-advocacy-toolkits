<template>
  <v-container>
    <div class="px-2 px-lg-16">
      <h2 class="text-md-h4 text-h5 primary--text mb-5">
        SET YOUR POLICY GOALS
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna
        mi, ullamcorper vitae pellentesque in, pulvinar vitae lectus. In
        tincidunt felis quis massa luctus, at posuere velit blandit. Donec erat
        est, dapibus sed pellentesque id, mattis at magna. Vivamus venenatis
        vitae quam id commodo. Nullam vel dignissim ipsum. Nam ornare sodales
        nibh sit amet tempor. Nunc at hendrerit libero, quis rhoncus diam.
        Vestibulum a quam nec augue vulputate consequat.
      </p>
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
            <h6 class="text-h6 primary--text mb-2">
              What is your policy goal?
            </h6>
            <p class="mb-6">
              According to ISBE data,
              <span class="font-weight-medium">{{
                this.entity.School_Name
              }}</span>
              offered dual credit courses last school year that enrolled
              {{ dualCreditEnrollment | numeral("0,0") }} students. Dual credit
              programs should be promoted within the school and be available to
              all qualified students.
            </p>
            <v-slide-y-transition mode="out-in">
              <div v-if="useSuggestedPolicyGoal === null && !policyGoal">
                <p class="mb-6">
                  An advocacy goal to expand the eligibility criteria of
                  <span class="font-weight-medium"
                    >{{ this.entity.School_Name }}'s</span
                  >
                  dual credit program would work to enroll more students in the
                  program. Does this sound like the right goal?
                </p>
                <v-btn
                  color="primary"
                  class="mr-2"
                  @click="
                    useSuggestedPolicyGoal = true;
                    policyGoal = policyGoals[1];
                  "
                  >Yes</v-btn
                >
                <v-btn @click="useSuggestedPolicyGoal = false">No</v-btn>
              </div>
              <v-select
                v-else
                v-model="policyGoal"
                :items="policyGoals"
                placeholder="Select your policy goal"
                :disabled="!rcdts"
                :readonly="!offersDualCredit"
              ></v-select>
            </v-slide-y-transition>
          </v-col>
          <v-col cols="12" class="mt-6" v-else-if="rcdts && !offersDualCredit">
            <h6 class="text-h6 primary--text mb-2">
              What is your policy goal?
            </h6>
            <p class="mb-6">
              According to ISBE data,
              <span class="font-weight-medium">{{
                this.entity.School_Name
              }}</span>
              didn't offer dual credit courses last school year.
            </p>
            <v-slide-y-transition mode="out-in">
              <div
                v-if="
                  useSuggestedPolicyGoal === null &&
                  policyGoals.length > 1 &&
                  !policyGoal
                "
              >
                <p class="mb-6">
                  An advocacy goal to start a new dual credit program at
                  <span class="font-weight-medium">
                    {{ this.entity.School_Name }}'s
                  </span>
                  would be the first step. Does this sound like the right goal?
                </p>
                <v-btn
                  color="primary"
                  class="mr-2"
                  @click="
                    useSuggestedPolicyGoal = true;
                    policyGoal = policyGoals[0];
                  "
                  >Yes</v-btn
                >
                <v-btn @click="useSuggestedPolicyGoal = false">No</v-btn>
              </div>
              <v-select
                v-else
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
            </v-slide-y-transition>
          </v-col>
        </v-slide-y-transition>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import StepBus from "../../step-bus.js";
import { datasets } from "../../common/constants.js";
import { hasPolicyGoals } from "./helpers.js";

export default {
  data() {
    return {
      roles: [
        "Parent",
        "Student",
        "Teacher",
        "School Administrator",
        "Community College Staff",
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

      return target
        ? target.data
            .slice()
            .sort((a, b) => (a.School_Name > b.School_Name ? 1 : -1))
        : [];
    },
    entity() {
      return this.entities.find((x) => x.RCDTS === this.rcdts);
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
    policyGoals() {
      let options = [];
      let teacherOption =
        "Secure a Dual Credit endorsement on your teaching license";

      if (this.offersDualCredit) {
        options = [
          "Introduce a new course to an existing dual credit program",
          "Expand eligibility criteria for an existing dual credit program",
          "Lower the costs of dual credit courses for schools and students",
        ];
      } else {
        options = ["Start a new dual credit program"];
      }

      if (this.role === "Teacher") options.push([teacherOption]);

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
  },
  watch: {
    hasPolicyGoals(val, prev) {
      if (val != prev) {
        StepBus.$emit("patch", { canNext: val });
      }
    },
    role(val, prev) {
      if (val != prev) this.setPolicyGoalState();
    },
    rcdts(val, prev) {
      if (val != prev) this.setPolicyGoalState();
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
    });
  },
};
</script>
