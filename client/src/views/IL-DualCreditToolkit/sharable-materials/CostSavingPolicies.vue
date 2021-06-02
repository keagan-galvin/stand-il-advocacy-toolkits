<template>
  <v-sheet
    color="primary"
    class="white--text rounded py-1 px-1 text-center text-button pointer"
    v-ripple
    elevation="2"
    @click="download"
  >
    Cost Saving Policies
    <a class="d-none" ref="link" :href="pdf" target="_blank"></a>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      pdf: require("../../../assets/il-dc/DualCreditAdvocacyToolkit_CostSavingPolicies.pdf"),
    };
  },
  methods: {
    download() {
      this.$refs.link.click();
    },
  },
};
</script>
