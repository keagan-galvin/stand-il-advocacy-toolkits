<template>
  <v-container>profile</v-container>
</template>

<script>
import StepBus from "../../step-bus.js";
export default {
  data() {
    return {};
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
      StepBus.$on("prev", () => this.go("il-dc.policy-goals"));
      StepBus.$on("next", () => this.go("il-dc.key-players"));
    });
  },
};
</script>
