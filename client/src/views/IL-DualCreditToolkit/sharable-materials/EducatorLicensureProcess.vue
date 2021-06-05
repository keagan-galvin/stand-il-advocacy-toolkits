<template>
  <v-sheet
    color="primary"
    class="white--text rounded py-1 px-1 text-center text-button pointer"
    v-ripple
    elevation="2"
    @click="download"
  >
    ISBE CTE educator licensure process and forms
    <a
      class="d-none"
      ref="link"
      href="https://www.isbe.net/Pages/career-technical-educator.aspx"
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
