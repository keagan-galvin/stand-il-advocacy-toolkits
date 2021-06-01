<template>
  <router-view />
</template>

<script>
export default {};
</script>

<style lang="scss">
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
