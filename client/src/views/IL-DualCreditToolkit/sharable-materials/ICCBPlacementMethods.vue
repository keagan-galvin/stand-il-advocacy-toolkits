<template>
  <v-sheet
    color="primary"
    class="white--text rounded py-1 px-1 text-center text-button pointer"
    v-ripple
    elevation="2"
    @click="download"
    >ICCB’s Placement Methods and Score Recommendations
    <a
      class="d-none"
      ref="link"
      href="https://www.iccb.org/academic_affairs/baccalaureate-transfer/final-placement-recommendations/"
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
