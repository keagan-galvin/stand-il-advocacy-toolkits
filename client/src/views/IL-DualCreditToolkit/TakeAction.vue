<template>
  <v-container>
    <div class="px-2 px-lg-16">
      <h2 class="text-md-h4 text-h5 primary--text mb-5">
        STEP FOUR: TAKE ACTION
      </h2>
      <template v-if="policyGoal === 'Start a new dual credit program'">
        <p>
          You're on a roll now! Hopefully by now, you've identified some
          community-based allies, had a good introductory call with your
          school's principal, and now you are ready to take action.
        </p>

        <p>
          You do not have to complete each of the activities below to achieve
          your advocacy goal. Sometimes well-timed and well-prepared testimony
          by you and allies at a school board meeting will be all you need to
          get the job done. More often, you'll use a combination of two or three
          of the below tactics to achieve your advocacy goal.I f one approach
          does not work, do not be discouraged. Advocacy takes time and the
          adage is true; if at first you don't succeed, try, try, and try again.
        </p>

        <p>
          To get started you may want to host an introductory call with your
          allies to coordinate activities. Don't forget to collaborate with your
          school's principal if they are supportive, or talk through ideas with
          an allied school board member. They will help you brainstorm on which
          tactics will be the most effective in your community.
        </p>

        <div style="height: 25px"></div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="500">
          <v-checkbox v-model="postedToSocialMedia">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Post on social media and begin following key allies and decision
                makers
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="600">
          <v-checkbox v-model="createdFacebookGroup">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Create a
                <a
                  @click.stop
                  href="https://www.facebook.com/help/167970719931213?helpref=about_content"
                  target="_blank"
                  >Facebook Group</a
                >
                for easy collaboration and communication among allies
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="700">
          <v-checkbox v-model="startedPetition">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Start a
                <a
                  @click.stop
                  href="https://www.change.org/start-a-petition?utm_source=sem&utm_medium=google_ad&utm_campaign=G%3ESearch%3ESAP%3EUS%3ENonBrand%3EAll-Match-Types&utm_term=create%20petition%20online|b|AG:119958211827|AD:494379776572&utm_content=2021_03_22&gclid=CjwKCAjwgOGCBhAlEiwA7FUXkhawDnOrXNZ6hrXwieWynS_9MR-yGL6UCb7yQpjiZAq-qmV9dZ_uCBoCJvoQAvD_BwE"
                  target="_blank"
                  >change.org petition</a
                >
                so you can show strong community support
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="800">
          <v-checkbox v-model="spokeToSchoolBoard">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Speak at a school board meeting to create new allies and make
                your case (<a @click.prevent.stop="schoolBoardTips = true"
                  >tips</a
                >)
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="900">
          <v-checkbox v-model="organizedLetterCampaign">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Organize a letter writing campaign among parents and students to
                help persuade key decision makers (<a
                  @click.prevent.stop="letterWritingTips = true"
                  >tips</a
                >)
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="1000">
          <v-checkbox v-model="wroteEditorial">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Write an editorial to your local paper signed by all of your
                allies to build community support (<a
                  @click.prevent.stop="letterWritingTips = true"
                  >tips</a
                >)
              </div>
            </template>
          </v-checkbox>
        </div>
      </template>

      <template
        v-if="
          policyGoal ===
          'Introduce a new course to an existing dual credit program'
        "
      >
        <p>
          You're on a roll now! Hopefully by now, you've identified some
          community-based allies, had a good introductory call with your
          school's principal, and now you are ready to take action.
        </p>

        <p>
          You do not have to complete each of the activities below to achieve
          your advocacy goal. Sometimes well-timed and well-prepared testimony
          by you and allies at a school board meeting will be all you need to
          get the job done. More often, you'll use a combination of two or three
          of the below tactics to achieve your advocacy goal. If one approach
          does not work, do not be discouraged. Advocacy takes time and the
          adage is true; if at first you don't succeed, try, try, and try again.
        </p>

        <p>
          To get started you may want to host an introductory call with your
          allies to coordinate activities. Don't forget to collaborate with your
          school's principal, if they are supportive, or talk through ideas with
          an allied school board member. They will help you brainstorm on which
          tactics will be the most effective in your community.
        </p>

        <div style="height: 25px"></div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="500">
          <v-checkbox v-model="postedToSocialMedia">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Post on social media and begin following key allies and decision
                makers
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="600">
          <v-checkbox v-model="createdFacebookGroup">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Create a
                <a
                  @click.stop
                  href="https://www.facebook.com/help/167970719931213?helpref=about_content"
                  target="_blank"
                  >Facebook Group</a
                >
                for easy collaboration and communication among allies
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="700">
          <v-checkbox v-model="startedPetition">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Start a
                <a
                  @click.stop
                  href="https://www.change.org/start-a-petition?utm_source=sem&utm_medium=google_ad&utm_campaign=G%3ESearch%3ESAP%3EUS%3ENonBrand%3EAll-Match-Types&utm_term=create%20petition%20online|b|AG:119958211827|AD:494379776572&utm_content=2021_03_22&gclid=CjwKCAjwgOGCBhAlEiwA7FUXkhawDnOrXNZ6hrXwieWynS_9MR-yGL6UCb7yQpjiZAq-qmV9dZ_uCBoCJvoQAvD_BwE"
                  target="_blank"
                  >change.org petition</a
                >
                so you can show strong community support
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="800">
          <v-checkbox v-model="spokeToSchoolBoard">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Speak at a school board meeting to create new allies and make
                your case (<a @click.prevent.stop="schoolBoardTips = true"
                  >tips</a
                >)
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="900">
          <v-checkbox v-model="organizedLetterCampaign">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Organize a letter writing campaign among parents and students to
                help persuade key decision makers (<a
                  @click.prevent.stop="letterWritingTips = true"
                  >tips</a
                >)
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="1000">
          <v-checkbox v-model="wroteEditorial">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Write an editorial to your local paper signed by all of your
                allies to build community support (<a
                  @click.prevent.stop="letterWritingTips = true"
                  >tips</a
                >)
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="1000">
          <v-checkbox v-model="organizedCall">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Organize a call between your higher learning partner and your
                school
              </div>
            </template>
          </v-checkbox>
        </div>
      </template>

      <template
        v-if="
          policyGoal ===
          'Expand eligibility criteria for an existing dual credit program'
        "
      >
        <p>
          You're on a roll now! Hopefully by now, you've identified some
          community-based allies, had a good introductory call with your
          school's principal, and now you are ready to take action.
        </p>

        <p>
          You do not have to complete each of the activities below to achieve
          your advocacy goal. Sometimes well-timed and well-prepared testimony
          by you and allies at a school board meeting will be all you need to
          get the job done. More often, you'll use a combination of two or three
          of the below tactics to achieve your advocacy goal. Talk to your
          allies, coordinate with your school's principal if they are
          supportive, or talk through ideas with an allied school board member.
          They will help you brainstorm on which tactics will be the most
          effective in your community. If one approach does not work, do not be
          discouraged. Advocacy takes time and the adage is true; if at first
          you don't succeed, try, try, and try again.
        </p>

        <p>
          To get started you may want to host an introductory call with your
          allies to coordinate activities. Don't forget to collaborate with your
          school's principal if they are supportive, or talk through ideas with
          an allied school board member. They will help you brainstorm on which
          tactics will be the most effective in your community.
        </p>

        <div style="height: 25px"></div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="500">
          <v-checkbox v-model="postedToSocialMedia">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Post on social media and begin following key allies and decision
                makers
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="600">
          <v-checkbox v-model="createdFacebookGroup">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Create a
                <a
                  @click.stop
                  href="https://www.facebook.com/help/167970719931213?helpref=about_content"
                  target="_blank"
                  >Facebook Group</a
                >
                for easy collaboration and communication among allies
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="700">
          <v-checkbox v-model="startedPetition">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Start a
                <a
                  @click.stop
                  href="https://www.change.org/start-a-petition?utm_source=sem&utm_medium=google_ad&utm_campaign=G%3ESearch%3ESAP%3EUS%3ENonBrand%3EAll-Match-Types&utm_term=create%20petition%20online|b|AG:119958211827|AD:494379776572&utm_content=2021_03_22&gclid=CjwKCAjwgOGCBhAlEiwA7FUXkhawDnOrXNZ6hrXwieWynS_9MR-yGL6UCb7yQpjiZAq-qmV9dZ_uCBoCJvoQAvD_BwE"
                  target="_blank"
                  >change.org petition</a
                >
                so you can show strong community support
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="800">
          <v-checkbox v-model="spokeToSchoolBoard">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Speak at a school board meeting to create new allies and make
                your case (<a @click.prevent.stop="schoolBoardTips = true"
                  >tips</a
                >)
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="900">
          <v-checkbox v-model="organizedLetterCampaign">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Organize a letter writing campaign among parents and students to
                help persuade key decision makers (<a
                  @click.prevent.stop="letterWritingTips = true"
                  >tips</a
                >)
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="1000">
          <v-checkbox v-model="wroteEditorial">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Write an editorial to your local paper signed by all of your
                allies to build community support (<a
                  @click.prevent.stop="letterWritingTips = true"
                  >tips</a
                >)
              </div>
            </template>
          </v-checkbox>
        </div>
      </template>

      <template
        v-if="
          policyGoal ===
          'Lower the costs of dual credit courses for schools and students'
        "
      >
        <p>
          You're on a roll now! Hopefully by now, you've identified some
          community-based allies, had a good introductory call with your
          school's principal, and now you are ready to take action.
        </p>

        <p>
          You do not have to complete each of the activities below to achieve
          your advocacy goal. Sometimes well-timed and well-prepared testimony
          by you and allies at a school board meeting will be all you need to
          get the job done. More often, you'll use a combination of two or three
          of the below tactics to achieve your advocacy goal. Talk to your
          allies, coordinate with your school's principal if they are
          supportive, or talk through ideas with an allied school board member.
          They will help you brainstorm on which tactics will be the most
          effective in your community. If one approach does not work, do not be
          discouraged. Advocacy takes time and the adage is true; if at first
          you don't succeed, try, try, and try again.
        </p>

        <p>
          To get started you may want to host an introductory call with your
          allies to coordinate activities. Don't forget to collaborate with your
          school's principal if they are supportive, or talk through ideas with
          an allied school board member. They will help you brainstorm on which
          tactics will be the most effective in your community.
        </p>

        <div style="height: 25px"></div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="500">
          <v-checkbox v-model="postedToSocialMedia">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Post on social media and begin following key allies and decision
                makers
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="600">
          <v-checkbox v-model="createdFacebookGroup">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Create a
                <a
                  @click.stop
                  href="https://www.facebook.com/help/167970719931213?helpref=about_content"
                  target="_blank"
                  >Facebook Group</a
                >
                for easy collaboration and communication among allies
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="700">
          <v-checkbox v-model="startedPetition">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Start a
                <a
                  @click.stop
                  href="https://www.change.org/start-a-petition?utm_source=sem&utm_medium=google_ad&utm_campaign=G%3ESearch%3ESAP%3EUS%3ENonBrand%3EAll-Match-Types&utm_term=create%20petition%20online|b|AG:119958211827|AD:494379776572&utm_content=2021_03_22&gclid=CjwKCAjwgOGCBhAlEiwA7FUXkhawDnOrXNZ6hrXwieWynS_9MR-yGL6UCb7yQpjiZAq-qmV9dZ_uCBoCJvoQAvD_BwE"
                  target="_blank"
                  >change.org petition</a
                >
                so you can show strong community support
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="800">
          <v-checkbox v-model="spokeToSchoolBoard">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Speak at a school board meeting to create new allies and make
                your case (<a @click.prevent.stop="schoolBoardTips = true"
                  >tips</a
                >)
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="900">
          <v-checkbox v-model="organizedLetterCampaign">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Organize a letter writing campaign among parents and students to
                help persuade key decision makers (<a
                  @click.prevent.stop="letterWritingTips = true"
                  >tips</a
                >)
              </div>
            </template>
          </v-checkbox>
        </div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="1000">
          <v-checkbox v-model="wroteEditorial">
            <template v-slot:label>
              <div class="text-body-1 black--text">
                Write an editorial to your local paper signed by all of your
                allies to build community support (<a
                  @click.prevent.stop="letterWritingTips = true"
                  >tips</a
                >)
              </div>
            </template>
          </v-checkbox>
        </div>
      </template>
    </div>
    <v-dialog
      v-model="schoolBoardTips"
      max-width="600px"
      :fullscreen="isMobile"
    >
      <v-card class="pb-2 px-1 pt-1 d-flex flex-column">
        <v-card-title class="d-flex">
          <span class="headline flex-fill"
            >Tips for speaking at a school board meeting
          </span>
          <v-btn icon @click="schoolBoardTips = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="text-body-1 black--text">
          <ul class="mt-6">
            <li class="mb-4">
              Visit your school's website to learn more about the board.
            </li>
            <li class="mb-4">
              Learn how long you will have to speak and prepare your speech
              ahead of time.
            </li>
            <li class="mb-4">
              If you are speaking as a group, decide ahead of time who will
              speak when and on what topic.
            </li>
            <li class="mb-4">
              Show up with numbers, research, facts, and real stories to help
              make your case.
            </li>
          </ul>
          <v-divider class="my-3"></v-divider>
          <span class="text-h6">Questions to consider:</span>

          <ul class="mt-4">
            <li class="mb-4">
              From what you know of the school board, are they likely to support
              your goal or will they need to be persuaded?
            </li>
            <li class="mb-4">
              Does the board have a good relationship with the community?
            </li>
            <li class="mb-4">
              Does the board have a good relationship with the school principal?
            </li>
          </ul>
        </v-card-text>
        <v-card-text>
          <v-btn
            color="primary"
            block
            :disabled="loading"
            :loading="loading"
            @click="schoolBoardTips = false"
          >
            close
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="letterWritingTips"
      max-width="700px"
      :fullscreen="isMobile"
    >
      <v-card class="pb-2 px-1 pt-1 d-flex flex-column">
        <v-card-title class="d-flex">
          <span class="headline flex-fill">Letter Writing Tips </span>
          <v-btn icon @click="letterWritingTips = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="text-body-1 black--text">
          <ul class="mt-6">
            <li class="mb-4">
              Use correct salutations and addresses for the recipient
            </li>
            <li class="mb-4">
              If it is a letter to the editor you can begin by, "Dear Editor"
            </li>
            <li class="mb-4">
              If you're writing a letter to the editor double check the
              requirements for submission like word count and format.
            </li>
            <li class="mb-4">
              Include your name and address on both your letter and envelope
            </li>
            <li class="mb-4">
              Include your other important contact information such as your
              phone number or email address
            </li>
            <li class="mb-4">Keep it to one page</li>
          </ul>
          <v-divider class="my-3"></v-divider>
          <span class="text-h6">Sample letter</span>
          <div>
            <div class="font-weight-medium text-subtitle-2 mt-2">
              First Paragraph
            </div>
            <p class="text-body-2">
              Introduce yourself and tell who you are. State your reason for
              writing — what you want and why.
            </p>

            <div class="font-weight-medium text-subtitle-2 mt-2">
              Second Paragraph
            </div>
            <p class="text-body-2">
              Support the issue you are addressing with key statistics,
              compelling facts, and/or background information.
            </p>

            <div class="font-weight-medium text-subtitle-2 mt-2">
              Third Paragraph
            </div>

            <p class="text-body-2">
              Share your story to clarify your position.
            </p>

            <div class="font-weight-medium text-subtitle-2 mt-2">
              Fourth Paragraph
            </div>

            <p class="text-body-2">
              Summarize and reiterate your position/request.
            </p>

            <div class="font-weight-medium text-subtitle-2 mt-2">
              Fifth Paragraph
            </div>

            <p class="text-body-2">Thank recipient for reading the letter.</p>
          </div>
        </v-card-text>
        <v-card-text>
          <v-btn
            color="primary"
            block
            :disabled="loading"
            :loading="loading"
            @click="letterWritingTips = false"
          >
            close
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import StepBus from "../../step-bus.js";
import { datasets } from "../../common/constants.js";
export default {
  data() {
    return {
      schoolBoardTips: false,
      letterWritingTips: false,
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
    postedToSocialMedia: {
      get() {
        return this.$store.state.toolkit.loaded.postedToSocialMedia;
      },
      set(value) {
        this.updateToolkit("postedToSocialMedia", value);
      },
    },
    createdFacebookGroup: {
      get() {
        return this.$store.state.toolkit.loaded.createdFacebookGroup;
      },
      set(value) {
        this.updateToolkit("createdFacebookGroup", value);
      },
    },
    startedPetition: {
      get() {
        return this.$store.state.toolkit.loaded.startedPetition;
      },
      set(value) {
        this.updateToolkit("startedPetition", value);
      },
    },
    spokeToSchoolBoard: {
      get() {
        return this.$store.state.toolkit.loaded.spokeToSchoolBoard;
      },
      set(value) {
        this.updateToolkit("spokeToSchoolBoard", value);
      },
    },
    organizedLetterCampaign: {
      get() {
        return this.$store.state.toolkit.loaded.organizedLetterCampaign;
      },
      set(value) {
        this.updateToolkit("organizedLetterCampaign", value);
      },
    },
    wroteEditorial: {
      get() {
        return this.$store.state.toolkit.loaded.wroteEditorial;
      },
      set(value) {
        this.updateToolkit("wroteEditorial", value);
      },
    },
    organizedCall: {
      get() {
        return this.$store.state.toolkit.loaded.organizedCall;
      },
      set(value) {
        this.updateToolkit("organizedCall", value);
      },
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
      StepBus.$on("prev", () => this.go("il-dc.make-connections"));
      StepBus.$on("next", () => this.go("il-dc.define-success"));
    });
  },
};
</script>
