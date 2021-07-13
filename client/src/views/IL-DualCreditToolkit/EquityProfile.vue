<template>
  <div>
    <div v-if="underRepresented.length > 0" class="mb-8">
      <p class="primary--text font-weight-medium">
        According to 2019 ISBE Report Card data {{ entity.School_Name }} offers
        dual credit courses that enrolled
        {{
          +entity.N_Students_who_took_Dual_Credit_classes_912_Total
            | numeral("0,0")
        }}
        students in 2020. {{ representedStatement }} students were well
        represented in those courses but as you can see from the dials below,
        {{ underRepresentedStatement }} students were underrepresented in dual
        credit courses.
      </p>
      <div
        class="d-flex flex-wrap mx-auto justify-center mt-8"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="500"
      >
        <percentage-dial-comparison
          class="mx-4"
          v-for="(item, i) in underRepresented"
          :key="`dial_${i}`"
          :label="`${item.label.toUpperCase()} STUDENTS`"
          :valueA="item.dualCreditPercentage"
          labelA="<span class='text-body-2'>Dual Credit <br/> Students</span>"
          :valueB="item.enrollmentPercentage"
          labelB="<span class='text-body-2'>Total Student <br/> Population</span>"
          :delay="400"
        ></percentage-dial-comparison>
      </div>
    </div>
    <h5
      class="text-h6 primary--text mb-4"
      data-aos="fade-right"
      data-aos-duration="500"
      data-aos-delay="700"
    >
      SAT Proficiency by Demographic
    </h5>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card
          color="secondary"
          class="flex-fill"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="700"
          elevation="0"
        >
          <div v-for="(item, i) in satMath" :key="`satMath_${i}`">
            <v-card-text class="d-flex flex-column">
              <split-percentage-bar
                :bar-label="`MATH - ${item.label} Students`"
                :level_1="item.satMath.level_1"
                :level_2="item.satMath.level_2"
                :level_3="item.satMath.level_3"
                :level_4="item.satMath.level_4"
              ></split-percentage-bar>
            </v-card-text>
            <v-divider v-if="i != satMath.length - 1"></v-divider>
          </div>
          <v-divider></v-divider>
          <v-card-text><split-percentage-bar-key /></v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card
          color="secondary"
          class="flex-fill"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="700"
          elevation="0"
        >
          <div v-for="(item, i) in satELA" :key="`satELA_${i}`">
            <v-card-text class="d-flex flex-column">
              <split-percentage-bar
                :bar-label="`ELA - ${item.label} Students`"
                :level_1="item.satELA.level_1"
                :level_2="item.satELA.level_2"
                :level_3="item.satELA.level_3"
                :level_4="item.satELA.level_4"
              ></split-percentage-bar>
            </v-card-text>
            <v-divider v-if="i != satELA.length - 1"></v-divider>
          </div>
          <v-divider></v-divider>
          <v-card-text><split-percentage-bar-key /></v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <p class="text-caption text-center mt-4">Illinois Report Card, 2019</p>
  </div>
</template>

<script>
import PercentageDialComparison from "../../components/percentage-dial-comparison.vue";
import SplitPercentageBar from "../../components/split-percentage-bar.vue";
import SplitPercentageBarKey from "../../components/split-percentage-bar-key.vue";
import { datasets } from "../../common/constants.js";

export default {
  components: {
    PercentageDialComparison,
    SplitPercentageBar,
    SplitPercentageBarKey,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    entity() {
      let entities = this.$store.state.datasets.loaded.find(
        (x) => x.key === datasets.il_dualcredit_entity
      );

      let target;
      if (entities) target = entities.data.find((x) => x.RCDTS === this.rcdts);
      return target ?? {};
    },
    rcdts() {
      return this.$store.state.toolkit.loaded.rcdts;
    },
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    population() {
      const getDualCreditPercentage = (val) => {
        if (isNaN(val)) return null;
        let result =
          val / +this.entity.N_Students_who_took_Dual_Credit_classes_912_Total;

        return +result.toFixed(3);
      };

      return {
        lowIncome: {
          label: "Low Income",
          enrollmentPercentage:
            +this.entity.P_Student_Enrollment_Low_Income * 0.01,
          dualCreditPercentage: getDualCreditPercentage(
            +this.entity.N_Dual_Credit_Students_Low_Income
          ),
          satMath: {
            level_1: +this.entity.SAT_Math_Total_Low_Income_Students_Level_1_P,
            level_2: +this.entity.SAT_Math_Total_Low_Income_Students_Level_2_P,
            level_3: +this.entity.SAT_Math_Total_Low_Income_Students_Level_3_P,
            level_4: +this.entity.SAT_Math_Total_Low_Income_Students_Level_4_P,
          },
          satELA: {
            level_1:
              +this.entity.SAT_Reading_Total_Low_Income_Students_Level_1_P,
            level_2:
              +this.entity.SAT_Reading_Total_Low_Income_Students_Level_2_P,
            level_3:
              +this.entity.SAT_Reading_Total_Low_Income_Students_Level_3_P,
            level_4:
              +this.entity.SAT_Reading_Total_Low_Income_Students_Level_4_P,
          },
        },
        americanIndian: {
          label: "American Indian",
          enrollmentPercentage:
            +this.entity.P_Student_Enrollment_AI_or_AN * 0.01,
          dualCreditPercentage: getDualCreditPercentage(
            +this.entity.N_Dual_Credit_Students_AI_or_AN
          ),
          satMath: {
            level_1: +this.entity.SAT_Math_Total_AI_or_AN_Students_Level_1_P,
            level_2: +this.entity.SAT_Math_Total_AI_or_AN_Students_Level_2_P,
            level_3: +this.entity.SAT_Math_Total_AI_or_AN_Students_Level_3_P,
            level_4: +this.entity.SAT_Math_Total_AI_or_AN_Students_Level_4_P,
          },
          satELA: {
            level_1: +this.entity.SAT_Reading_Total_AI_or_AN_Students_Level_1_P,
            level_2: +this.entity.SAT_Reading_Total_AI_or_AN_Students_Level_2_P,
            level_3: +this.entity.SAT_Reading_Total_AI_or_AN_Students_Level_3_P,
            level_4: +this.entity.SAT_Reading_Total_AI_or_AN_Students_Level_4_P,
          },
        },
        asian: {
          label: "Asian",
          enrollmentPercentage: +this.entity.P_Student_Enrollment_Asian * 0.01,
          dualCreditPercentage: getDualCreditPercentage(
            +this.entity.N_Dual_Credit_Students_Asian
          ),
          satMath: {
            level_1: +this.entity.SAT_Math_Total_Asian_Students_Level_1_P,
            level_2: +this.entity.SAT_Math_Total_Asian_Students_Level_2_P,
            level_3: +this.entity.SAT_Math_Total_Asian_Students_Level_3_P,
            level_4: +this.entity.SAT_Math_Total_Asian_Students_Level_4_P,
          },
          satELA: {
            level_1: +this.entity.SAT_Reading_Total_Asian_Students_Level_1_P,
            level_2: +this.entity.SAT_Reading_Total_Asian_Students_Level_2_P,
            level_3: +this.entity.SAT_Reading_Total_Asian_Students_Level_3_P,
            level_4: +this.entity.SAT_Reading_Total_Asian_Students_Level_4_P,
          },
        },
        black: {
          label: "Black",
          enrollmentPercentage:
            +this.entity.P_Student_Enrollment_B_or_AA * 0.01,
          dualCreditPercentage: getDualCreditPercentage(
            +this.entity.N_Dual_Credit_Students_B_or_AA
          ),
          satMath: {
            level_1: +this.entity.SAT_Math_Total_B_or_AA_Students_Level_1_P,
            level_2: +this.entity.SAT_Math_Total_B_or_AA_Students_Level_2_P,
            level_3: +this.entity.SAT_Math_Total_B_or_AA_Students_Level_3_P,
            level_4: +this.entity.SAT_Math_Total_B_or_AA_Students_Level_4_P,
          },
          satELA: {
            level_1: +this.entity.SAT_Reading_Total_B_or_AA_Students_Level_1_P,
            level_2: +this.entity.SAT_Reading_Total_B_or_AA_Students_Level_2_P,
            level_3: +this.entity.SAT_Reading_Total_B_or_AA_Students_Level_3_P,
            level_4: +this.entity.SAT_Reading_Total_B_or_AA_Students_Level_4_P,
          },
        },
        hispanic: {
          label: "Hispanic",
          enrollmentPercentage: +this.entity.P_Student_Enrollment_H_or_L * 0.01,
          dualCreditPercentage: getDualCreditPercentage(
            +this.entity.N_Dual_Credit_Students_H_or_L
          ),
          satMath: {
            level_1: +this.entity.SAT_Math_Total_H_or_L_Students_Level_1_P,
            level_2: +this.entity.SAT_Math_Total_H_or_L_Students_Level_2_P,
            level_3: +this.entity.SAT_Math_Total_H_or_L_Students_Level_3_P,
            level_4: +this.entity.SAT_Math_Total_H_or_L_Students_Level_4_P,
          },
          satELA: {
            level_1: +this.entity.SAT_Reading_Total_H_or_L_Students_Level_1_P,
            level_2: +this.entity.SAT_Reading_Total_H_or_L_Students_Level_2_P,
            level_3: +this.entity.SAT_Reading_Total_H_or_L_Students_Level_3_P,
            level_4: +this.entity.SAT_Reading_Total_H_or_L_Students_Level_4_P,
          },
        },
        pacificIslander: {
          label: "Pacific Islander",
          enrollmentPercentage:
            +this.entity.P_Student_Enrollment_NH_or_Other_PI * 0.01,
          dualCreditPercentage: getDualCreditPercentage(
            +this.entity.N_Dual_Credit_Students_NH_or_Other_PI
          ),
          satMath: {
            level_1:
              +this.entity.SAT_Math_Total_NH_or_Other_PI_Students_Level_1_P,
            level_2:
              +this.entity.SAT_Math_Total_NH_or_Other_PI_Students_Level_2_P,
            level_3:
              +this.entity.SAT_Math_Total_NH_or_Other_PI_Students_Level_3_P,
            level_4:
              +this.entity.SAT_Math_Total_NH_or_Other_PI_Students_Level_4_P,
          },
          satELA: {
            level_1:
              +this.entity.SAT_Reading_Total_NH_or_Other_PI_Students_Level_1_P,
            level_2:
              +this.entity.SAT_Reading_Total_NH_or_Other_PI_Students_Level_2_P,
            level_3:
              +this.entity.SAT_Reading_Total_NH_or_Other_PI_Students_Level_3_P,
            level_4:
              +this.entity.SAT_Reading_Total_NH_or_Other_PI_Students_Level_4_P,
          },
        },
        twoOrMore: {
          label: "Two or More Race",
          enrollmentPercentage:
            +this.entity.P_Student_Enrollment_Two_or_More_Races * 0.01,
          dualCreditPercentage: getDualCreditPercentage(
            +this.entity.N_Dual_Credit_Students_Two_or_More_Races
          ),
          satMath: {
            level_1:
              +this.entity.SAT_Math_Total_Two_or_More_Races_Students_Level_1_P,
            level_2:
              +this.entity.SAT_Math_Total_Two_or_More_Races_Students_Level_2_P,
            level_3:
              +this.entity.SAT_Math_Total_Two_or_More_Races_Students_Level_3_P,
            level_4:
              +this.entity.SAT_Math_Total_Two_or_More_Races_Students_Level_4_P,
          },
          satELA: {
            level_1:
              +this.entity
                .SAT_Reading_Total_Two_or_More_Races_Students_Level_1_P,
            level_2:
              +this.entity
                .SAT_Reading_Total_Two_or_More_Races_Students_Level_2_P,
            level_3:
              +this.entity
                .SAT_Reading_Total_Two_or_More_Races_Students_Level_3_P,
            level_4:
              +this.entity
                .SAT_Reading_Total_Two_or_More_Races_Students_Level_4_P,
          },
        },
        white: {
          label: "White",
          enrollmentPercentage: +this.entity.P_Student_Enrollment_White * 0.01,
          dualCreditPercentage: getDualCreditPercentage(
            +this.entity.N_Dual_Credit_Students_White
          ),
          satMath: {
            level_1: +this.entity.SAT_Math_Total_White_Students_Level_1_P,
            level_2: +this.entity.SAT_Math_Total_White_Students_Level_2_P,
            level_3: +this.entity.SAT_Math_Total_White_Students_Level_3_P,
            level_4: +this.entity.SAT_Math_Total_White_Students_Level_4_P,
          },
          satELA: {
            level_1: +this.entity.SAT_Reading_Total_White_Students_Level_1_P,
            level_2: +this.entity.SAT_Reading_Total_White_Students_Level_2_P,
            level_3: +this.entity.SAT_Reading_Total_White_Students_Level_3_P,
            level_4: +this.entity.SAT_Reading_Total_White_Students_Level_4_P,
          },
        },
      };
    },
    satMath() {
      let results = [];

      for (var key in this.population) {
        let target = this.population[key];
        if (
          (target.satMath.level_1 ||
            target.satMath.level_2 ||
            target.satMath.level_3 ||
            target.satMath.level_4) &&
          target.enrollmentPercentage > target.dualCreditPercentage + 0.03
        )
          results.push({ ...target });
      }

      return results;
    },
    satELA() {
      let results = [];

      for (var key in this.population) {
        let target = this.population[key];
        if (
          (target.satELA.level_1 ||
            target.satELA.level_2 ||
            target.satELA.level_3 ||
            target.satELA.level_4) &&
          target.enrollmentPercentage > target.dualCreditPercentage + 0.03
        )
          results.push({ ...target });
      }

      return results;
    },
    underRepresented() {
      let results = [];

      for (var key in this.population) {
        let target = this.population[key];
        if (target.enrollmentPercentage > target.dualCreditPercentage + 0.03)
          results.push({ ...target });
      }

      return results;
    },
    underRepresentedStatement() {
      if (this.underRepresented.length === 0) return "";
      if (this.underRepresented.length === 1)
        return this.underRepresented[0].label;

      let safeArray = this.underRepresented.slice();

      let last = safeArray[safeArray.length - 1].label;
      safeArray.pop();
      let result = safeArray.map((x) => x.label).join(", ");
      result += " and " + last;
      return result;
    },
    represented() {
      let results = [];

      for (var key in this.population) {
        let target = this.population[key];
        if (
          target.enrollmentPercentage < target.dualCreditPercentage + 0.03 &&
          target.enrollmentPercentage > 0
        )
          results.push({ ...target });
      }

      return results;
    },
    representedStatement() {
      if (this.represented.length === 0) return "";
      if (this.represented.length === 1) return this.represented[0].label;

      let safeArray = this.represented.slice();

      let last = safeArray[safeArray.length - 1].label;
      safeArray.pop();
      let result = safeArray.map((x) => x.label).join(", ");
      result += " and " + last;
      return result;
    },
  },
  methods: {
    load() {
      this.loading = true;

      Promise.all([
        this.$store.dispatch("datasets/patchLoaded", {
          key: datasets.il_dualcredit_entity,
          config: { resultType: "single", RCDTS: this.rcdts },
        }),
      ])
        .then(
          () => {},
          (err) => {
            console.log(err);
            this.$store.dispatch("notifications/send", {
              message:
                "Unexpected error while loading toolkit datasets! Functionality may be limited.",
              type: "error",
            });
          }
        )
        .finally(() => {
          this.loading = false;
        });
    },
    go(name) {
      this.$router.push({ name });
    },
  },
  mounted() {
    this.load();
  },
};
</script>
