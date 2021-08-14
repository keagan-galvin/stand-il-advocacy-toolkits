<template>
  <router-view />
</template>

<script>
export default {
  data() {},
  metaInfo: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@illinoisstand" },
      { name: "twitter:creator", content: "@illinoisstand" },
      { name: "twitter:title", content: "Stand Advocacy Toolkit" },
      {
        name: "twitter:description",
        content:
          "This toolkit will help you advocate for better dual credit opportunities in your own school community.",
      },
      {
        name: "twitter:image",
        content:
          "https://standadvocacytoolkit.org/img/Video-Thumbnail.c878b61d.jpg",
      },
      // Facebook OpenGraph
      { property: "og:title", content: "Stand Advocacy Toolkit" },
      { property: "og:site_name", content: "Stand Advocacy Toolkit" },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://standadvocacytoolkit.org/img/Video-Thumbnail.c878b61d.jpg",
      },
      {
        property: "og:description",
        content:
          "This toolkit will help you advocate for better dual credit opportunities in your own school community.",
      },
    ],
  },
};
</script>

<style lang="scss">
body {
  overflow: hidden;
}

#mainNav {
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 2rem;
    box-shadow: inset 0 0 0 0 rgb(0 0 0 / 24%);
    pointer-events: none;
    z-index: 1;
    transition: box-shadow 450ms ease-out;
  }
}

@media only screen and (min-width: 1265px) {
  #mainNav {
    &::before {
      box-shadow: inset -2rem 0 2rem -2rem rgb(0 0 0 / 24%) !important;
    }
  }
}

@media screen and (max-width: 800px) {
  [data-aos-delay] {
    transition-delay: 0s !important;
    transition-duration: 0s !important;
  }
}

.w-100 {
  width: 100%;
}

.h-100 {
  height: 100%;
}

.v-main__wrap {
  display: flex;
  flex-direction: column;
}

.flush {
  &.v-expansion-panel-content > div {
    padding: 0 !important;
  }
}

.pointer {
  cursor: pointer;
}

* {
  color-adjust: exact;
  -webkit-print-color-adjust: exact;
}

.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}
</style>
