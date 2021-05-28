<template>
  <div class="grey lighten-4">
    <v-container>
      <div class="px-2 px-lg-16">
        <h2 class="text-md-h4 text-h5 primary--text mb-12">School Profile</h2>

        <v-row>
          <v-col cols="6" lg="4" sm="6">
            <v-card class="flex-fill">
              <v-card-text class="d-flex flex-column">
                <v-sheet
                  elevation="3"
                  class="text-h1 text-nowrap pa-4 rounded info text-center"
                  style="margin-top: -30px"
                >
                  {{ percentageInDualCredit }}%
                </v-sheet>
                <div class="flex-fill mt-4 text-center">
                  <div class="text-body-2 font-weight-medium mb-2">
                    # of students enrolled in Dual Credit Courses
                  </div>
                  <div class="text-h5">
                    <span class="font-weight-bold">{{
                      totalStudents | numeral("0,0")
                    }}</span>
                    students
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6" lg="4" sm="6">
            <v-card class="flex-fill" style="height: 100%">
              <v-card-text class="d-flex flex-column">
                <v-sheet
                  elevation="3"
                  class="
                    text-h1 text-nowrap
                    pa-4
                    rounded
                    primary
                    white--text
                    text-center
                  "
                  style="margin-top: -30px"
                >
                  {{ apPassRate }}%
                </v-sheet>
                <div class="flex-fill mt-4 text-center">
                  <div class="text-h6">
                    AP courses resulting in college credit
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6" lg="4" sm="6">
            <v-card class="flex-fill" style="height: 100%">
              <v-card-text class="d-flex flex-column">
                <v-sheet
                  elevation="3"
                  class="
                    text-h1 text-nowrap
                    pa-4
                    rounded
                    success
                    white--text
                    text-center
                  "
                  style="margin-top: -30px"
                >
                  {{ collegeWithin12Mo }}%
                </v-sheet>
                <div class="flex-fill mt-4 text-center">
                  <div class="text-h6">
                    Students enrolling in college within 12 months of graduating
                    high school
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6" lg="4" sm="6">
            <v-card class="flex-fill" style="height: 100%">
              <v-card-text class="d-flex flex-column">
                <v-sheet
                  elevation="3"
                  class="
                    text-h1 text-nowrap
                    pa-4
                    rounded
                    accent
                    white--text
                    text-center
                  "
                  style="margin-top: -30px"
                >
                  {{ inRemediation }}%
                </v-sheet>
                <div class="flex-fill mt-4 text-center">
                  <div class="text-h6">
                    Students enrolling in college within 12 months of graduating
                    high school
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6" lg="4" sm="6">
            <v-card class="flex-fill">
              <v-card-text class="d-flex flex-column">
                <canvas id="studentPopChart" width="400" height="400"></canvas>
                <div class="flex-fill mt-4 text-center">
                  <div class="text-h5">
                    Total Student Enrollment:
                    <span class="font-weight-bold">200</span>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import StepBus from "../../step-bus.js";
import { datasets } from "../../common/constants.js";

import Chart from "chart.js/auto";

export default {
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
    numberInDualCredit() {
      return +this.entity.N_Students_who_took_Dual_Credit_classes_912_Total;
    },
    totalStudents() {
      return +this.entity.N_Student_Enrollment;
    },
    percentageInDualCredit() {
      let result = Math.round(
        (this.numberInDualCredit / this.totalStudents) * 100
      );
      return isNaN(result) ? 0 : result;
    },
    studentPopulationDataset() {
      let labels = [];
      let data = [];
      let backgroundColor = [];

      let popProps = {
        americanIndian: {
          label: "American Indian",
          count: +this.entity.N_American_Indian,
          bgColor: "rgb(71,0,62)",
        },
        asian: {
          label: "Asian",
          count: +this.entity.N_Asian,
          bgColor: "rgb(1,101,76)",
        },
        black: {
          label: "Black",
          count: +this.entity.N_Black,
          bgColor: "rgb(241,179,0)",
        },
        hispanic: {
          label: "Hispanic",
          count: +this.entity.N_Latino,
          bgColor: "rgb(204,68,37)",
        },
        pacificIslander: {
          label: "Pacific Islander",
          count: +this.entity.N_Native,
          bgColor: "rgb(255,64,105)",
        },
        twoOrMore: {
          label: "Two or More Races",
          count: +this.entity.N_Two_or_More,
          bgColor: "rgb(120,170,0)",
        },
        white: {
          label: "White",
          count: +this.entity.N_White,
          bgColor: "rgb(0,62,90)",
        },
      };

      for (let key in popProps) {
        if (popProps[key].count > 0) {
          labels.push(popProps[key].label);
          data.push(popProps[key].count);
          backgroundColor.push(popProps[key].bgColor);
        }
      }

      return {
        labels,
        datasets: [
          {
            label: "Student Population",
            data,
            backgroundColor,
            hoverOffset: 4,
          },
        ],
      };
    },
    apPassRate() {
      let result = Math.round(+this.entity.AP_pass_rate * 100);
      return isNaN(result) ? 0 : result;
    },
    collegeWithin12Mo() {
      let result = +this.entity.P_Postsecondary_Institution_within_12_months;
      return isNaN(result) ? 0 : result;
    },
    inRemediation() {
      let result = +this.entity.P_Community_College_Remediation;
      return isNaN(result) ? 0 : result;
    },
  },
  watch: {
    entity() {
      new Chart(document.querySelector("#studentPopChart"), {
        type: "doughnut",
        data: this.studentPopulationDataset,
      });
    },
  },
  methods: {
    load() {
      this.loading = true;

      Promise.all([
        this.$store.dispatch("datasets/patchLoaded", {
          key: "il-dualcredit-entity",
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
  beforeRouteLeave(to, from, next) {
    StepBus.$off("next");
    StepBus.$off("prev");
    next();
  },
  mounted() {
    this.load();
    this.$nextTick(() => {
      StepBus.$emit("configure");
      StepBus.$on("prev", () => this.go("il-dc.policy-goals"));
      StepBus.$on("next", () => this.go("il-dc.key-players"));
    });
  },
};
</script>
