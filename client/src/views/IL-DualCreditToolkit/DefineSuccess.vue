<template>
  <v-container>
    <div class="px-2 px-lg-16">
      <h2 class="text-md-h4 text-h5 primary--text mb-5">
        STEP FIVE: DEFINE SUCCESS
      </h2>
      <p>
        You've been hard at work making connections and creating some noise,
        time to do a gut check and plan next steps.
      </p>
      <div style="height: 25px"></div>
      <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="500">
        <div class="text-h6 primary--text mb-1">
          Your Goal - {{ policyGoal }}
        </div>
        <p class="mb-6">Have you accomplished your goal?</p>
        <v-radio-group v-model="accomplishedGoal">
          <v-radio label="Yes" :value="true"></v-radio>
          <v-radio label="No" :value="false"></v-radio>
        </v-radio-group>
      </div>
      <div style="height: 25px"></div>

      <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="800">
        <v-slide-y-transition mode="out-in">
          <div v-if="accomplishedGoal">
            <h1 class="text-h4 accent--text">CONGRATUALTIONS!</h1>
            <p class="mb-8">
              Your hard work has paid off and you have been an effective agent
              of change! Now it's time to shout your success from the rooftops.
            </p>
            <v-alert border="left" color="secondary" elevation="0">
              <div class="font-weight-bold mb-3">Next Steps</div>
              <v-divider class="mb-4"></v-divider>
              <ol>
                <li class="mb-2">
                  Email
                  <a href="mailto:agalvin@stand.org"
                    >Aimee Galvin (agalvin@stand.org)</a
                  >about your advocacy victory so Stand for Children can help
                  you get the word out through social media posts, blog posts,
                  or notifying your elected officials.
                </li>
                <li>
                  Thank your decision makers. Anyone who helped you achieve your
                  goals, particular school board members, the principal, a
                  teacher, let them know that their efforts helped make a big
                  impact for students in your school.
                </li>
              </ol>
            </v-alert>
          </div>
          <div v-else-if="accomplishedGoal === false">
            <p class="mb-8">
              Don't worry! Advocating for change is rarely simple or
              straightforward. Advocacy is a back-and-forth process that takes
              time and patience. As you work to persuade decision makers and
              identify more supporters to grow your coalition of allies you will
              continue to move towards your goal.
            </p>
            <v-alert border="left" color="secondary" elevation="0">
              <div class="font-weight-bold mb-3">Next Steps</div>
              <v-divider class="mb-4"></v-divider>
              <ol>
                <li class="mb-2">
                  <div class="text-subtitle-2">Review your notes</div>

                  <ul>
                    <li class="mb-2">
                      Did you promise follow up with anyone? Did they require
                      more information? Make sure to follow up with folks to
                      keep the ball rolling.
                    </li>
                    <li class="mb-2">
                      Where did you find support? How can you leverage these
                      relationships to find new allies, build your case for dual
                      credit, or persuade decision makers?
                    </li>
                    <li class="mb-2">
                      Where did you find opposition? Make a list of individuals
                      who can be persuaded to support your goals and those you
                      probably cannot. Don't waste your time on persuading your
                      biggest opposition, but circle back to individuals who
                      maybe were on the fence. Ask them what it would take to
                      get them to support your work. Is it more information? A
                      discussion with the higher learning partner? Concerns
                      about funding the course or having enough teachers to
                      facilitate the course?
                    </li>
                  </ul>
                </li>
                <li>
                  <div class="text-subtitle-2">
                    Consider calling for back up
                  </div>
                  <ul>
                    <li class="mb-2">
                      Stand for Children is here to support you all the way. If
                      you've hit a wall, give us a call and we'll help you come
                      up with next steps, provide additional information, tap
                      our networks and provide additional resources to help get
                      this across the finish line.
                      <br />
                      <br />
                      Aimee Galvin<br />
                      <a class="text-body-2" href="mailto:agalvin@stand.org"
                        >agalvin@stand.org </a
                      ><br />

                      <span class="text-body-2">815-341-3471</span>
                    </li>
                  </ul>
                </li>
              </ol>
            </v-alert>
          </div>
        </v-slide-y-transition>
      </div>
    </div>
  </v-container>
</template>

<script>
import StepBus from "../../step-bus.js";
import { datasets } from "../../common/constants.js";
export default {
  data() {
    return {};
  },
  watch: {
    accomplishedGoal(val, prev) {
      if (val != prev && val === true) {
        this.$confetti.start();
        setTimeout(() => this.$confetti.stop(), 3000);
      }
    },
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    entity() {
      let entities = this.$store.state.datasets.loaded.find(
        (x) => x.key === datasets.il_dualcredit_entity
      );

      let target = null;

      if (entities) target = entities.data.find((x) => x.RCDTS === this.rcdts);

      return target ? target : {};
    },
    district() {
      let entities = this.$store.state.datasets.loaded.find(
        (x) => x.key === datasets.il_dualcredit_entity
      );

      let target = null;

      if (entities)
        target = entities.data.find(
          (x) => this.entity.District === x.School_Name
        );

      return target ? target : {};
    },
    rcdts() {
      return this.$store.state.toolkit.loaded.rcdts;
    },
    policyGoal() {
      return this.$store.state.toolkit.loaded.policyGoal;
    },
    accomplishedGoal: {
      get() {
        return this.$store.state.toolkit.loaded.accomplishedGoal;
      },
      set(value) {
        this.updateToolkit("accomplishedGoal", value);
      },
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
      StepBus.$emit("configure", {
        showNext: false,
      });
      StepBus.$on("prev", () => this.go("il-dc.take-action"));
    });
  },
};
</script>
