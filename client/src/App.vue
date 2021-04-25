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

.w-100 {
  width: 100%;
}

.v-main__wrap {
  display: flex;
  flex-direction: column;
}
</style>
