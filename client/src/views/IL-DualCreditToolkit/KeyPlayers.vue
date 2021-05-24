<template>
  <v-container>
    <div class="px-2 px-lg-16">
      <h2 class="text-md-h4 text-h5 primary--text mb-5">
        STEP ONE: IDENTIFY KEY PLAYERS
      </h2>
      <p>
        Before you begin your advocacy outreach you need to understand the
        context in which you'll work. Who are your decision makers? Are there
        other advocates working towards the same goal? What has stood in the way
        of progress before? Thinking about these questions will help you plan
        your strategy and reach out the right people to answer your questions or
        help you achieve your advocacy goal.
      </p>

      <h5 class="text-h6 primary--text mt-12">Who are your decision makers?</h5>
      <p>
        Decision makers are the people who have the authority to approve a new
        dual credit program in your school. Often this will be the principal,
        but it could also be the superintendent.
      </p>

      <v-alert border="left" color="primary lighten-5" elevation="0">
        <div class="font-weight-bold mb-3">
          School Principal - {{ entity.Administrator }}
        </div>
        <v-divider></v-divider>
        <div class="mt-3 mb-2 font-weight-medium">Questions to consider:</div>
        <ol>
          <li class="mb-2">Do you know the principal?</li>
          <li class="mb-2">
            From what you know of this person, are they likely to support your
            goal or will they need to be persuaded?
          </li>
          <li>
            In step three, we'll provide you with your school's principal
            contact info and some questions to ask so you can have an
            introductory conversation.
          </li>
        </ol>
      </v-alert>

      <v-alert border="left" color="primary lighten-5" elevation="0">
        <div class="font-weight-bold mb-3">
          District Superintendent - ## DATA POINT MISSING ##
        </div>
        <v-divider></v-divider>
        <div class="mt-3 mb-2 font-weight-medium">Questions to consider:</div>
        <ol>
          <li class="mb-2">
            Have you already talked to the principal and learned that the
            superintendent is the appropriate person to talk to? <br />
            If not, contact the principal first.
          </li>
          <li class="mb-2">Do you know the superintendent?</li>
          <li class="mb-2">
            From what you know of this person, are they likely to support your
            goal or will they need to be persuaded?
          </li>
          <li>
            In step three, we'll provide you with your district's
            superintendent's contact info and some questions to ask so you can
            have an introductory conversation.
          </li>
        </ol>
      </v-alert>

      <h5 class="text-h6 primary--text mt-12">Who are your allies?</h5>
      <p>
        Allies are people who share your goals and are in a position to help.
        Allies can be parents, students, community member and leaders, teachers,
        school board members, the principal, community college staff, really any
        partner who supports your advocacy goal.
      </p>

      <p>
        Make a list of possible allies. We made a few suggestions on where to
        start below but don't let this list limit you. You should try to find as
        many allies as possible and get creative on where to search for allies.
      </p>

      <h5 class="text-h6 primary--text mt-12">
        Who will be your school's higher learning partner?
      </h5>
      <p>
        High schools that offer dual credit must first develop a partnership
        with a higher education institution, which must ensure that the course
        meets college-level rigor and has an appropriately-credentialled
        teacher. The institution of higher education can be a community college
        or a four-year college or university. Your local community college is
        the most likely partner, but not your only option.
      </p>

      <v-alert border="left" color="primary lighten-5" elevation="0">
        <div class="font-weight-bold mb-3">
          Does your community college partner with other local high schools to
          offer dual credit?
        </div>
        <v-divider></v-divider>
        <p class="mt-3">
          If so, which ones? High schools within your community college district
          that offer dual credit programs can make great allies and source for
          information.
        </p>
        <div class="mt-3 mb-2 font-weight-medium">Questions to consider:</div>
        <ol>
          <li class="mb-2">What works with their program?</li>
          <li class="mb-2">What would they change?</li>
          <li class="mb-2">How did they get started?</li>
          <li>
            Who were their champions at the community college? Connect with
            their program directors if you can so you can learn from their
            experience.
          </li>
        </ol>
      </v-alert>

      <v-alert border="left" color="primary lighten-5" elevation="0">
        <div class="font-weight-bold mb-3">
          Explore non-traditional dual credit partners
        </div>
        <v-divider></v-divider>
        <ul>
          <li class="mb-2">
            Community colleges are the primary partners for high schools seeking
            to offer dual credit, but four-year college and universities are
            also standing up to serve students. State law requires high schools
            to pursue Illinois-based partnerships first, but within that space,
            there a multitude of options.
          </li>
          <li>
            The
            <a href="https://www.isbe.net/virtualcourses" target="_blank"
              >Virtual Course Catalog</a
            >
            is a great option for schools struggling to overcome long commutes
            to a community college or an acute teacher shortage.
          </li>
        </ul>
      </v-alert>
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
  computed: {
    entity() {
      let entities = this.$store.state.datasets.loaded.find(
        (x) => x.key === datasets.il_dualcredit_entity
      );

      let target = null;

      if (entities) target = entities.data.find((x) => x.RCDTS === this.rcdts);

      return target ? target : {};
    },
    rcdts() {
      return this.$store.state.toolkit.loaded.rcdts;
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
      StepBus.$on("prev", () => this.go("il-dc.school-profile"));
    });
  },
};
</script>
