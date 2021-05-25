<template>
  <v-container>profile</v-container>
</template>

<script>
import StepBus from "../../step-bus.js";
import { datasets } from "../../common/constants.js";

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
