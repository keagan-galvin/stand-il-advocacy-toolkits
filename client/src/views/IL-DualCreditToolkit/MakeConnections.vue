<template>
  <v-container>
    <div class="px-2 px-lg-16">
      <h2 class="text-md-h4 text-h5 primary--text mb-5">
        STEP THREE: MAKE CONNECTIONS
      </h2>

      <template v-if="policyGoal === 'Start a new dual credit program'">
        <p>
          Now that you have your list of key players and have constructed your
          case for bringing dual credit courses to your school, it's time to
          start reaching out.
        </p>

        <div style="height: 25px"></div>
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
          <h5 class="text-h6 primary--text mt-12">
            Introduce yourself to the principal
          </h5>
          <p class="mb-8">
            Your first stop should be your school's principal. The principal
            will be a great source of information about any progress or past
            efforts to launch a dual credit program. Connect however you feel
            comfortable; we've provided your school's principals name, phone
            number, and email below.
          </p>

          <v-alert
            border="left"
            color="secondary"
            elevation="0"
            class="mx-auto mb-8"
          >
            <div class="font-weight-medium">
              {{ entity.School_Name }}'s Principal
            </div>
            <v-divider class="mt-1 mb-2"></v-divider>
            <div class="d-flex align-center">
              <v-icon style="font-size: 50px">mdi-account-circle</v-icon>

              <div class="flex-fill ml-2">
                <div>
                  {{ entity.Administrator }}
                </div>
                <a :href="`tel:+${entity.Telephone.replace(/[^0-9]/g, '')}`">{{
                  entity.Telephone | phone
                }}</a>
              </div>
            </div>
          </v-alert>
        </div>
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="600">
          <p class="mb-8">
            Below you'll find a few key questions that may help guide your
            conversation but don't be afraid to go off-script. Send or bring any
            materials from step two that you think will be helpful throughout
            your discussion. Your school's dual credit profile is a great
            conversation starter. Don't forget to take notes so you can
            reference your discussion later on.
          </p>

          <v-alert border="left" color="secondary" elevation="2">
            <div class="font-weight-bold mb-3">Key Questions</div>
            <v-divider class="mb-4"></v-divider>
            <ol>
              <li class="mb-2">
                Have you ever considered bringing a dual credit program to the
                school?
                <ul class="mt-2">
                  <li class="mt-1">If not, why not?</li>
                  <li class="mt-1">
                    If yes, where are you in the process and how can I help?
                  </li>
                </ul>
              </li>
              <li class="mb-2">
                What are the barriers we must overcome to offer dual credit
                courses at our school?
              </li>
              <li class="mb-2">
                What are the barriers we must overcome to offer dual credit
                courses at our school?
                <ul class="mt-2">
                  <li class="mt-1">
                    Get their names if you can. These will be great allies as
                    you work towards your goal.
                  </li>
                </ul>
              </li>
              <li class="mb-2">
                Have you had conversations with the local community college
                about a possible dual credit partnership?
              </li>
              <li class="mb-2">
                Have you heard of the Model Partnership Agreement?
              </li>
              <li class="mb-2">
                Should you met with the district superintendent?
                <ul class="mt-2">
                  <li class="mt-1">Would they be supportive?</li>
                </ul>
              </li>
            </ol>
          </v-alert>
          <p>
            Be sure to give the principal your name and contact information as
            well so you can continue building your relationship.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="200">
          <h5 class="text-h6 primary--text mt-12">Reach out to allies</h5>
          <p class="mb-8">
            Review your list of allies. Did the principal provide any good
            leads? As you have conversations with allies take note of other
            organizations or individuals who you can add to your list. The
            purpose of these conversations is twofold: first, to introduce
            yourself as an advocate for dual credit, and second, to build a
            coalition of people who will work together to bring dual credit to
            your school.
          </p>
          <allies></allies>
        </div>
        <div class="mt-8"></div>
        <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="100">
          <p class="mb-8">
            Below you'll find a few key questions that may help guide your
            conversation but don't be afraid to go off-script. Send or bring any
            materials from step two that you think will be helpful throughout
            your discussion. Your school's dual credit profile is a great
            conversation starter. Don't forget to take notes so you can
            reference your discussion later on.
          </p>

          <v-alert border="left" color="secondary" elevation="0">
            <div class="font-weight-bold mb-3">Key Questions</div>
            <v-divider class="mb-4"></v-divider>
            <ol>
              <li class="mb-2">
                Why are you interested in bringing dual credit to our school?
              </li>
              <li class="mb-2">
                What barriers do you perceive to launching a dual credit program
                at our school?
              </li>
              <li>Is there anyone you recommend I reach out to?</li>
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
          Now that you have your list of key players and have constructed your
          case for your dual credit course it's time to start reaching out.
        </p>

        <div style="height: 25px"></div>
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
          <h5 class="text-h6 primary--text mt-12">
            Introduce yourself to the principal
          </h5>
          <p class="mb-8">
            Your first stop should be your school's principal. The principal
            will be a great source of information about any progress or past
            efforts to launch a dual credit program. Connect however you feel
            comfortable; we've provided your school's principals name, phone
            number, and email below.
          </p>

          <v-alert
            border="left"
            color="secondary"
            elevation="0"
            class="mx-auto mb-8"
          >
            <div class="font-weight-medium">
              {{ entity.School_Name }}'s Principal
            </div>
            <v-divider class="mt-1 mb-2"></v-divider>
            <div class="d-flex align-center">
              <v-icon style="font-size: 50px">mdi-account-circle</v-icon>

              <div class="flex-fill ml-2">
                <div>
                  {{ entity.Administrator }}
                </div>
                <a :href="`tel:+${entity.Telephone.replace(/[^0-9]/g, '')}`">{{
                  entity.Telephone | phone
                }}</a>
              </div>
            </div>
          </v-alert>
        </div>
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="600">
          <p class="mb-8">
            Below you'll find a few key questions that may help guide your
            conversation but don't be afraid to go off-script. Send or bring any
            materials from step two that you think will be helpful throughout
            your discussion. Your school's dual credit profile is a great
            conversation starter. Don't forget to take notes so you can
            reference your discussion later on.
          </p>

          <v-alert border="left" color="secondary" elevation="2">
            <div class="font-weight-bold mb-3">Key Questions</div>
            <v-divider class="mb-4"></v-divider>
            <ol>
              <li class="mb-2">
                Have you ever considered making this course eligible for dual
                credit?
                <ul class="mt-2">
                  <li class="mt-1">If not, why not?</li>
                  <li class="mt-1">
                    If yes, where are you in the process and how can I help?
                  </li>
                </ul>
              </li>
              <li class="mb-2">
                What are the barriers we must overcome to offer this course as
                dual credit?
              </li>
              <li class="mb-2">
                Have any other students, parents, teachers, or board members
                expressed interest a dual credit option for this course?
                <ul class="mt-2">
                  <li class="mt-1">
                    Get their names if you can. These will be great allies as
                    you work towards your goal.
                  </li>
                </ul>
              </li>
              <li class="mb-2">
                Have you had conversations with the local community college
                about a possible dual credit partnership?
              </li>
              <li class="mb-2">
                Have you heard of the Model Partnership Agreement (MPA)?
                <ul class="mt-2">
                  <li class="mt-1">
                    If not, share the Model Partnership Overview and explain how
                    the MPA might address some of the biggest barriers to
                    expanding dual credit, namely, course costs and qualified
                    instructors.
                  </li>
                  <li class="mt-1">
                    If so, explore how implementing the MPA might serve as a
                    starting point to growing your school's dual credit
                    programming.
                  </li>
                </ul>
              </li>
              <li class="mb-2">
                Should you meet with the district superintendent?
                <ul class="mt-2">
                  <li class="mt-1">Would they be supportive?</li>
                </ul>
              </li>
            </ol>
          </v-alert>
          <p>
            Be sure to give the principal your name and contact information as
            well so you can continue building your relationship.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="200">
          <h5 class="text-h6 primary--text mt-12">Reach out to allies</h5>
          <p class="mb-8">
            Review your list of allies from step two. Did the principal provide
            any good leads? As you have conversations with allies take note of
            other organizations or individuals who you can add to your list. The
            purpose of these conversations is twofold, first to introduce
            yourself as an advocate for dual credit, and second to build a
            coalition of people who will work together to expand dual credit
            courses in your school.
          </p>
          <allies></allies>
        </div>
        <div class="mt-8"></div>
        <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="100">
          <p class="mb-8">
            Below are some questions that might help guide your conversations
            but tailor your conversation for each individual.
          </p>

          <v-alert border="left" color="secondary" elevation="0">
            <div class="font-weight-bold mb-3">Key Questions</div>
            <v-divider class="mb-4"></v-divider>
            <ol>
              <li class="mb-2">
                Why are you interested in offering this course as dual credit?
              </li>
              <li class="mb-2">
                What barriers do you perceive to offering this course for dual
                credit our school?
              </li>
              <li class="mb-2">
                Do you think the community would be supportive of a dual credit
                option for this course?
              </li>
              <li>Is there anyone you recommend I reach out to?</li>
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
          Now that you have your list of key players and have constructed your
          case for a more equitable dual credit program it's time to start
          reaching out.
        </p>

        <div style="height: 25px"></div>
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
          <h5 class="text-h6 primary--text mt-12">
            Introduce yourself to the principal
          </h5>
          <p class="mb-8">
            Your first stop should be your school's principal. The principal
            will be a great source of information. Connect however you feel
            comfortable, we've provided your school's principals name, phone
            number, and email below.
          </p>

          <v-alert
            border="left"
            color="secondary"
            elevation="0"
            class="mx-auto mb-8"
          >
            <div class="font-weight-medium">
              {{ entity.School_Name }}'s Principal
            </div>
            <v-divider class="mt-1 mb-2"></v-divider>
            <div class="d-flex align-center">
              <v-icon style="font-size: 50px">mdi-account-circle</v-icon>

              <div class="flex-fill ml-2">
                <div>
                  {{ entity.Administrator }}
                </div>
                <a :href="`tel:+${entity.Telephone.replace(/[^0-9]/g, '')}`">{{
                  entity.Telephone | phone
                }}</a>
              </div>
            </div>
          </v-alert>
        </div>
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="600">
          <p class="mb-8">
            Below you'll find a few key questions that may help guide your
            conversation but don't be afraid to go off-script. Send or bring any
            materials from step two that you think will be helpful throughout
            your discussion. Your school's dual credit profile is a great
            conversation starter. Don't forget to take notes so you can
            reference your discussion later on.
          </p>

          <v-alert border="left" color="secondary" elevation="2">
            <div class="font-weight-bold mb-3">Key Questions</div>
            <v-divider class="mb-4"></v-divider>
            <ol>
              <li class="mb-2">
                Have you ever considered offering this course as a dual credit
                course?
                <ul class="mt-2">
                  <li class="mt-1">If not, why not?</li>
                  <li class="mt-1">
                    If yes, where are you in the process and how can I help?
                  </li>
                </ul>
              </li>
              <li class="mb-2">
                What are the barriers we must overcome to offer this course for
                dual credit courses?
              </li>
              <li class="mb-2">
                Have any other students, parents, teachers, or board members
                expressed interest expanding our school's dual credit courses?
                <ul class="mt-2">
                  <li class="mt-1">
                    Get their names if you can, these will be great allies as
                    you work towards your goal.
                  </li>
                </ul>
              </li>
              <li class="mb-2">
                Have you had conversations with the local community college
                about a possible dual credit partnership for this course?
              </li>
              <li class="mb-2">
                Are you aware of some of the new dual credit policies recently
                passed by the state?
                <ul class="mt-2">
                  <li class="mt-1">
                    Often a lack of qualified teachers and course costs are the
                    biggest challenges to offering a course as dual credit but
                    the Dual Credit Quality Act addresses both of these. See the
                    summary in step two's sharable materials library.
                  </li>
                </ul>
              </li>
              <li class="mb-2">
                Is our school's higher learning partner supportive of adopting
                new eligibility measures to boost dual credit enrollment?
              </li>
            </ol>
          </v-alert>
          <p>
            Be sure to give the principal your name and contact information as
            well so you can continue building your relationship.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="200">
          <h5 class="text-h6 primary--text mt-12">Reach out to allies</h5>
          <p class="mb-8">
            Review your list of allies from step two. Did the principal provide
            any good leads? As you have conversations with allies take note of
            other organizations or individuals who you can add to your list. The
            purpose of these conversations is twofold, first to introduce
            yourself as an advocate for dual credit, and second to build a
            coalition of people who will work together to bring dual credit to
            your school.
          </p>
          <allies></allies>
        </div>
        <div class="mt-8"></div>
        <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="100">
          <p class="mb-8">
            Below are some questions that might help guide your conversations
            but tailor your conversation for each individual.
          </p>

          <v-alert border="left" color="secondary" elevation="0">
            <div class="font-weight-bold mb-3">Key Questions</div>
            <v-divider class="mb-4"></v-divider>
            <ol>
              <li class="mb-2">
                Why are you interested in offering this course as dual credit?
              </li>
              <li class="mb-2">
                What barriers do you perceive to offering this course as dual
                credit?
              </li>
              <li class="mb-2">
                Is there anyone you recommend I reach out to?
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
          Now that you have your list of key players and have constructed your
          case for bringing dual credit courses to your school it's time to
          start reaching out.
        </p>

        <div style="height: 25px"></div>
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
          <h5 class="text-h6 primary--text mt-12">
            Introduce yourself to the principal
          </h5>
          <p class="mb-8">
            Your first stop should be your school's principal. The principal
            will be a great source of information about any progress or past
            efforts to launch a dual credit program. Connect however you feel
            comfortable, we've provided your school's principals name, phone
            number, and email below.
          </p>

          <v-alert
            border="left"
            color="secondary"
            elevation="0"
            class="mx-auto mb-8"
          >
            <div class="font-weight-medium">
              {{ entity.School_Name }}'s Principal
            </div>
            <v-divider class="mt-1 mb-2"></v-divider>
            <div class="d-flex align-center">
              <v-icon style="font-size: 50px">mdi-account-circle</v-icon>

              <div class="flex-fill ml-2">
                <div>
                  {{ entity.Administrator }}
                </div>
                <a :href="`tel:+${entity.Telephone.replace(/[^0-9]/g, '')}`">{{
                  entity.Telephone | phone
                }}</a>
              </div>
            </div>
          </v-alert>
        </div>
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="600">
          <p class="mb-8">
            Below you'll find a few key questions that may help guide your
            conversation but don't be afraid to go off-script. Send or bring any
            materials from step two that you think will be helpful throughout
            your discussion. Your school's dual credit profile is a great
            conversation starter. Don't forget to take notes so you can
            reference your discussion later on.
          </p>

          <v-alert border="left" color="secondary" elevation="2">
            <div class="font-weight-bold mb-3">Key Questions</div>
            <v-divider class="mb-4"></v-divider>
            <ol>
              <li class="mb-2">
                What factors determine the cost of a dual credit course at our
                school?
              </li>
              <li class="mb-2">
                Are all the dual credit courses the same price to families? What
                about the school itself?
              </li>
              <li class="mb-2">
                Do we have any grants or cost-saving measures to help families
                afford dual credit course costs?
                <ul class="mt-2">
                  <li class="mt-1">
                    If so, how does the school notify these students or families
                    of those cost saving policies?
                  </li>
                </ul>
              </li>
              <li class="mb-2">
                Has the school been exploring new options to reduce costs?
                <ul class="mt-2">
                  <li class="mt-1">
                    If so, what kind of options and how can I help?
                  </li>
                  <li class="mt-1">
                    If not, is the school aware of the cost saving policies in
                    the Dual Credit Quality Act?
                    <br />
                    <span>
                      Be prepared to discuss the Cost Savings Policies brief.
                    </span>
                  </li>
                </ul>
              </li>
              <li class="mb-2">
                Is our school's higher learning partner supportive of adopting
                new measures to reduce dual credit course costs?
              </li>
              <li class="mb-2">
                Do you know what other schools are paying for similar courses?
              </li>
            </ol>
          </v-alert>
          <p>
            Be sure to give the principal your name and contact information as
            well so you can continue building your relationship.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="200">
          <h5 class="text-h6 primary--text mt-12">Reach out to allies</h5>
          <p class="mb-8">
            Review your list of allies from step two. Did the principal provide
            any good leads? As you have conversations with allies take note of
            other organizations or individuals who you can add to your list. The
            purpose of these conversations is twofold, first to introduce
            yourself as an advocate for dual credit, and second to build a
            coalition of people who will work together to bring dual credit to
            your school.
          </p>
          <allies></allies>
        </div>
        <div class="mt-8"></div>
        <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="100">
          <p class="mb-8">
            Below are some questions that might help guide your conversations
            but tailor your conversation for each individual.
          </p>

          <v-alert border="left" color="secondary" elevation="0">
            <div class="font-weight-bold mb-3">Key Questions</div>
            <v-divider class="mb-4"></v-divider>
            <ol>
              <li class="mb-2">
                Why are you concerned about dual credit course costs?
              </li>
              <li class="mb-2">
                What barriers do you perceive we'll face as we work to reduce
                costs?
              </li>
              <li class="mb-2">
                Do you know what neighboring schools are paying for their dual
                credit courses and how much families are expected to pay?
              </li>
              <li class="mb-2">
                Is there a school or district that has done a good job keeping
                costs low? If so, what strategies did they use to keep dual
                credit affordable?
              </li>
              <li class="mb-2">
                Is there anyone you recommend I reach out to?
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
import { datasets } from "../../common/constants.js";
import Allies from "./Allies.vue";

export default {
  components: {
    Allies,
  },
  filters: {
    phone(val) {
      return val
        .replace(/[^0-9]/g, "")
        .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    },
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
      StepBus.$emit("configure");
      StepBus.$on("prev", () => this.go("il-dc.case-for-dual-credit"));
      StepBus.$on("next", () => this.go("il-dc.take-action"));
    });
  },
};
</script>
