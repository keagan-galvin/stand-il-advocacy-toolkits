<template>
  <div
    class="secondary alignment mx-auto"
    :style="`width: ${width}; height: ${height}; max-width: 100%`"
    v-resize="onResize"
  >
    <v-btn v-if="!show" fab x-large color="accent" @click="show = true"
      ><v-icon>mdi-play</v-icon></v-btn
    >
    <div v-else class="video"><slot /></div>
  </div>
</template>

<script>
export default {
  data() {
    return { show: false, height: "0px" };
  },
  props: {
    width: {
      type: String,
      default: "560px",
    },
  },
  methods: {
    onResize() {
      this.height = this.$el.offsetWidth * 0.5625 + "px";
    },
  },
  mounted() {
    this.onResize();
  },
};
</script>

<style lang="scss">
.video {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.alignment {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
