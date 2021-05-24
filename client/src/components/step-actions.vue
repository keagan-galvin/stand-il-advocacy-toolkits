<template>
  <div class="secondary" style="z-index: 5">
    <v-divider></v-divider>
    <v-container>
      <div class="px-2 px-lg-16" :class="{ 'd-flex': !isMobile }">
        <v-scale-transition origin="center">
          <v-btn
            v-if="showPrev"
            @click="StepBusEvent('prev')"
            :disabled="!canPrev"
            :block="isMobile"
            large
            plain
            :class="{ 'mb-3 white text-center black--text': isMobile }"
          >
            <v-icon v-if="prevIcon">{{ prevIcon }}</v-icon> {{ labelA }}
          </v-btn>
        </v-scale-transition>

        <v-spacer v-if="!isMobile"></v-spacer>
        <v-fade-transition origin="center">
          <v-btn
            v-if="showNext"
            @click="StepBusEvent('next')"
            :disabled="!canNext"
            color="accent"
            large
            class="white--text"
            :block="isMobile"
          >
            <span class="text-center">{{ labelB }}</span>
            <v-icon v-if="nextIcon">{{ nextIcon }}</v-icon>
          </v-btn>
        </v-fade-transition>
      </div>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import StepBus from "../step-bus.js";

const defaultSettings = () => {
  return {
    prevLabel: "Previous",
    prevIcon: "mdi-chevron-up",
    showPrev: true,
    canPrev: true,
    nextLabel: "Continue",
    nextIcon: "mdi-chevron-down",
    showNext: true,
    canNext: true,
    labelA: "Previous",
    labelB: "Continue",
  };
};

export default {
  data() {
    return {
      ...defaultSettings(),
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },
  watch: {
    prevLabel(val, prev) {
      if (val != prev) {
        this.showPrev = false;
        setTimeout(() => {
          this.labelA = val;
          this.showPrev = true;
        }, 200);
      }
    },
    nextLabel(val, prev) {
      if (val != prev) {
        this.showNext = false;
        setTimeout(() => {
          this.labelB = val;
          this.showNext = true;
        }, 200);
      }
    },
  },
  methods: {
    StepBusEvent(event, data) {
      StepBus.$emit(event, data);
    },
  },
  mounted() {
    StepBus.$on("configure", (payload = {}) => {
      let defaults = defaultSettings();
      for (let key in defaults) {
        Vue.set(this, key, payload[key] ?? defaults[key]);
      }
    });

    StepBus.$on("patch", (payload) => {
      console.log(payload);
      let defaults = defaultSettings();

      for (let key in payload) {
        if (defaults[key]) Vue.set(this, key, payload[key]);
      }
    });
  },
};
</script>
