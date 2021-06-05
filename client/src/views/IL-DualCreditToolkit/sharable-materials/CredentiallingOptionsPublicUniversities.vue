<template>
  <v-sheet
    color="primary"
    class="white--text rounded py-1 px-1 text-center text-button pointer"
    v-ripple
    elevation="2"
    @click="download"
    >IBHE credentialling options at Illinois Public Universities
    <a
      class="d-none"
      ref="link"
      href="https://www.ibhe.org/pdf/IBHE_Dual_Credit_Credentials_May_2020.pdf"
      target="_blank"
    ></a>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    download() {
      this.$refs.link.click();
    },
  },
};
</script>
