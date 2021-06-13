<template>
  <div class="grey lighten-4">
    <v-container>
      <div class="px-lg-16">
        <h2
          class="text-md-h4 text-h5 primary--text d-flex"
          :class="{ 'mb-2': printing, 'mb-12': !printing }"
        >
          <span class="flex-fill">School Profile</span>
          <v-btn
            v-if="!printing"
            color="primary"
            small
            elevation="2"
            fab
            @click="print()"
            ><v-icon>mdi-printer</v-icon></v-btn
          >
        </h2>

        <v-row>
          <v-col :cols="12">
            <v-card
              class="flex-fill"
              :data-aos="'fade-down'"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <v-card-text
                class="text-center text-subtitle-1 font-weight-normal"
              >
                This district is funded at
                <span class="font-weight-medium">{{ ebf_Adequacy }}%</span>
                of
                <v-tooltip top :max-width="400">
                  <template v-slot:activator="{ on, attrs }">
                    <span
                      class="font-weight-medium primary--text"
                      v-on="on"
                      v-bind="attrs"
                      >adequacy</span
                    >
                  </template>
                  <span>
                    <v-icon class="white--text">mdi-information</v-icon>
                    Illinois' evidence-based funding formula uses the districts
                    unique needs to determine how much funding it should
                    receive. The percentage of adequacy tells you how close to
                    full funding (100%) the district is.
                  </span>
                </v-tooltip>
              </v-card-text>
            </v-card> </v-col
          ><v-col :cols="printing ? 6 : 12" sm="6">
            <v-card
              class="flex-fill"
              :data-aos="'fade-right'"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <v-card-text class="d-flex flex-column">
                <v-sheet
                  elevation="3"
                  class="text-nowrap pa-4 rounded info text-center"
                  style="margin-top: -30px"
                  :class="{
                    'text-h1': !isMobile && !printing,
                    'text-h3': isMobile || printing,
                  }"
                >
                  {{ percentageInDualCredit }}%
                </v-sheet>
                <div class="flex-fill mt-4 text-center">
                  <div class="text-body-2 font-weight-medium mb-2">
                    # of students enrolled in
                    <v-tooltip bottom :max-width="400">
                      <template v-slot:activator="{ on, attrs }">
                        <span
                          class="font-weight-medium primary--text"
                          v-on="on"
                          v-bind="attrs"
                          >dual credit courses</span
                        >
                      </template>
                      <span>
                        <v-icon class="white--text">mdi-information</v-icon>
                        Dual credit courses allow high school students to
                        complete coursework which counts for both high school
                        and college credit
                      </span>
                    </v-tooltip>
                  </div>
                  <div
                    :class="{
                      'text-h6': !isMobile && !printing,
                      'text-body-1 font-weight-medium': isMobile || printing,
                    }"
                  >
                    <span class="font-weight-bold">{{
                      entity.N_Students_who_took_Dual_Credit_classes_912_Total
                        | numeral("0,0")
                    }}</span>
                    students
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col :cols="printing ? 6 : 12" sm="6">
            <v-card
              class="flex-fill"
              style="height: 100%"
              :data-aos="'fade-left'"
              data-aos-duration="500"
              data-aos-delay="500"
            >
              <v-card-text class="d-flex flex-column">
                <v-sheet
                  elevation="3"
                  class="
                    text-nowrap
                    pa-4
                    rounded
                    primary
                    white--text
                    text-center
                  "
                  :class="{
                    'text-h1': !isMobile && !printing,
                    'text-h3': isMobile || printing,
                  }"
                  style="margin-top: -30px"
                >
                  {{ apPassRate }}%
                </v-sheet>
                <div class="flex-fill mt-4 text-center">
                  <div
                    :class="{
                      'text-h6': !isMobile && !printing,
                      'text-body-1 font-weight-medium': isMobile || printing,
                    }"
                  >
                    <v-tooltip bottom :max-width="400">
                      <template v-slot:activator="{ on, attrs }">
                        <span
                          class="font-weight-medium primary--text"
                          v-on="on"
                          v-bind="attrs"
                          >AP courses</span
                        >
                      </template>
                      <span>
                        <v-icon class="white--text">mdi-information</v-icon>
                        AP, or Advanced Placement courses offer college-level
                        curricula and examinations to high school students.
                        Unlike dual credit courses, students must pass an
                        end-of-course exam in order to receive college credit.
                      </span>
                    </v-tooltip>
                    resulting in college credit
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col :cols="printing ? 6 : 12" sm="6">
            <v-card
              class="flex-fill"
              style="height: 100%"
              :data-aos="'fade-right'"
              data-aos-duration="500"
              data-aos-delay="600"
            >
              <v-card-text class="d-flex flex-column">
                <v-sheet
                  elevation="3"
                  class="
                    text-nowrap
                    pa-4
                    rounded
                    success
                    white--text
                    text-center
                  "
                  :class="{
                    'text-h1': !isMobile && !printing,
                    'text-h3': isMobile || printing,
                  }"
                  style="margin-top: -30px"
                >
                  {{ collegeWithin12Mo }}%
                </v-sheet>
                <div class="flex-fill mt-4 text-center">
                  <div
                    :class="{
                      'text-h6': !isMobile && !printing,
                      'text-body-1 font-weight-medium': isMobile || printing,
                    }"
                  >
                    Students enrolling in college within 12 months of graduating
                    high school
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col :cols="printing ? 6 : 12" sm="6">
            <v-card
              class="flex-fill"
              style="height: 100%"
              :data-aos="'fade-left'"
              data-aos-duration="500"
              data-aos-delay="600"
            >
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
                  :class="{
                    'text-h1': !isMobile && !printing,
                    'text-h3': isMobile || printing,
                  }"
                  style="margin-top: -30px"
                >
                  {{ inRemediation }}%
                </v-sheet>
                <div class="flex-fill mt-4 text-center">
                  <div
                    :class="{
                      'text-h6': !isMobile && !printing,
                      'text-body-1 font-weight-medium': isMobile || printing,
                    }"
                  >
                    Students required to take non-credit bearing
                    <v-tooltip bottom :max-width="400">
                      <template v-slot:activator="{ on, attrs }">
                        <span
                          class="font-weight-medium primary--text"
                          v-on="on"
                          v-bind="attrs"
                          >remedial courses</span
                        >
                      </template>
                      <span>
                        <v-icon class="white--text">mdi-information</v-icon>
                        Remedial classes are courses that may be required for
                        students to build up their skills in math, reading, or
                        English before they are allowed to take regular college
                        courses.
                      </span>
                    </v-tooltip>
                    at community colleges
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col :cols="printing ? 7 : 12" sm="6">
            <v-card
              class="flex-fill overflow-hidden"
              :data-aos="'fade-right'"
              data-aos-duration="500"
              data-aos-delay="700"
            >
              <v-card-text class="d-flex flex-column">
                <div class="mx-auto" style="max-width: 350px">
                  <canvas
                    id="studentPopChart"
                    width="400"
                    height="400"
                  ></canvas>
                </div>
                <div class="flex-fill mt-4 text-center">
                  <div class="text-h5">
                    Total Student Enrollment:
                    <span class="font-weight-bold">{{
                      totalStudents | numeral("0,0")
                    }}</span>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col :cols="printing ? 5 : 12" sm="6">
            <v-card
              class="flex-fill"
              :data-aos="'fade-left'"
              data-aos-duration="500"
              data-aos-delay="700"
            >
              <v-card-text class="d-flex flex-column">
                <split-percentage-bar
                  bar-label="Overall SAT Proficiency - MATH"
                  :level_1="+entity.SAT_Math_Total_Students_Level_1_P"
                  :level_2="+entity.SAT_Math_Total_Students_Level_2_P"
                  :level_3="+entity.SAT_Math_Total_Students_Level_3_P"
                  :level_4="+entity.SAT_Math_Total_Students_Level_4_P"
                ></split-percentage-bar>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="d-flex flex-column">
                <split-percentage-bar
                  bar-label="Overall SAT Proficiency - ELA"
                  :level_1="+entity.SAT_Reading_Total_Students_Level_1_P"
                  :level_2="+entity.SAT_Reading_Total_Students_Level_2_P"
                  :level_3="+entity.SAT_Reading_Total_Students_Level_3_P"
                  :level_4="+entity.SAT_Reading_Total_Students_Level_4_P"
                ></split-percentage-bar>
              </v-card-text>
              <v-card-text><split-percentage-bar-key /></v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <p class="text-caption text-center mt-4">Illinois Report Card, 2019</p>
      </div>
    </v-container>
  </div>
</template>

<script>
import StepBus from "../../step-bus.js";
import { datasets } from "../../common/constants.js";

import Chart from "chart.js/auto";
import SplitPercentageBar from "../../components/split-percentage-bar.vue";
import SplitPercentageBarKey from "../../components/split-percentage-bar-key.vue";

export default {
  components: {
    SplitPercentageBar,
    SplitPercentageBarKey,
  },
  data() {
    return {
      loading: false,
      printing: false,
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
      return isNaN(result) ? 0 : Math.round(result);
    },
    studentPopulationDataset() {
      let labels = [];
      let data = [];
      let backgroundColor = [];

      let popProps = {
        // lowIncome: {
        //   label: "Low Income",
        //   count: +this.entity.P_Student_Enrollment_Low_Income,
        //   bgColor: "rgb(255,155,143)",
        // },
        americanIndian: {
          label: "American Indian",
          count: +this.entity.P_Student_Enrollment_AI_or_AN,
          bgColor: "rgb(71,0,62)",
        },
        asian: {
          label: "Asian",
          count: +this.entity.P_Student_Enrollment_Asian,
          bgColor: "rgb(1,101,76)",
        },
        black: {
          label: "Black",
          count: +this.entity.P_Student_Enrollment_B_or_AA,
          bgColor: "rgb(241,179,0)",
        },
        hispanic: {
          label: "Hispanic",
          count: +this.entity.P_Student_Enrollment_H_or_L,
          bgColor: "rgb(204,68,37)",
        },
        pacificIslander: {
          label: "Pacific Islander",
          count: +this.entity.P_Student_Enrollment_NH_or_Other_PI,
          bgColor: "rgb(255,64,105)",
        },
        twoOrMore: {
          label: "Two or More Races",
          count: +this.entity.P_Student_Enrollment_Two_or_More_Races,
          bgColor: "rgb(120,170,0)",
        },
        white: {
          label: "White",
          count: +this.entity.P_Student_Enrollment_White,
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
      return isNaN(result) ? 0 : Math.round(result);
    },
    collegeWithin12Mo() {
      let result = +this.entity.P_Postsecondary_Institution_within_12_months;
      return isNaN(result) ? 0 : Math.round(result);
    },
    inRemediation() {
      let result = +this.entity.P_Community_College_Remediation;
      return isNaN(result) ? 0 : Math.round(result);
    },
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    ebf_Adequacy() {
      return Math.round(this.entity.EBF_P_of_adequacy);
    },
  },
  watch: {
    entity() {
      new Chart(document.querySelector("#studentPopChart"), {
        type: "doughnut",
        data: this.studentPopulationDataset,
        options: {
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  return ` ${context.label} - ${context.formattedValue}%`;
                },
              },
            },
          },
        },
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
    print() {
      this.$emit("printing");
      this.printing = true;
      setTimeout(() => {
        window.print();
      }, 300);
    },
  },
  beforeRouteLeave(to, from, next) {
    StepBus.$off("next");
    StepBus.$off("prev");
    next();
  },
  mounted() {
    window.addEventListener("beforeprint", () => {
      this.printing = true;
    });
    window.addEventListener("afterprint", () => {
      this.printing = false;
    });
    this.load();
    this.$nextTick(() => {
      StepBus.$emit("configure");
      StepBus.$on("prev", () => this.go("il-dc.policy-goals"));
      StepBus.$on("next", () => this.go("il-dc.key-players"));
    });

    if (this.$route.query.print) {
      this.$emit("printing");
      this.printing = true;
      setTimeout(() => {
        window.print();
      }, 1500);
    }
  },
};
</script>
