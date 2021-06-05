<template>
  <v-sheet
    color="primary"
    class="white--text rounded py-1 px-1 text-center text-button pointer"
    v-ripple
    elevation="2"
    @click="download"
    >ICCB faculty qualification requirements
    <a
      class="d-none"
      ref="link"
      href="https://www.iccb.org/iccb/wp-content/pdfs/academic_affairs/Faculty_Qualifications_Requirements_Dual_Credit_3-12-18.pdf"
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
