<template>
  <transition
    :name="transitionName"
    :mode="transitionMode"
    :enter-active-class="transitionEnterActiveClass"
    @beforeLeave="beforeLeave"
    @enter="enter"
    @afterEnter="afterEnter"
  >
    <slot />
  </transition>
</template>

<script>
const DEFAULT_TRANSITION = "slide";
const DEFAULT_TRANSITION_MODE = "out-in";

export default {
  name: "TransitionPage",
  data() {
    return {
      prevHeight: 0,
      transitionName: DEFAULT_TRANSITION,
      transitionMode: DEFAULT_TRANSITION_MODE,
      transitionEnterActiveClass: "",
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName =
        to.meta.transitionName ||
        from.meta.transitionName ||
        DEFAULT_TRANSITION;

      if (!this.$store.getters["user/authorized"]) transitionName = "fade";

      if (transitionName === "slide") {
        transitionName =
          to.meta.position < from.meta.position ? "slide-bottom" : "slide-top";
      }

      this.transitionMode = DEFAULT_TRANSITION_MODE;
      this.transitionEnterActiveClass = `${transitionName}-enter-active`;

      if (to.meta.transitionName === "zoom") {
        this.transitionMode = "in-out";
        this.transitionEnterActiveClass = "zoom-enter-active";
        document.body.style.overflow = "hidden";
      }

      if (from.meta.transitionName === "zoom") {
        this.transitionMode = null;
        this.transitionEnterActiveClass = null;
        document.body.style.overflow = null;
      }

      this.transitionName = transitionName;

      next();
    });
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      if (
        this.transitionName == "slide-top" ||
        this.transitionName == "slide-bottom" ||
        !this.$store.authorized
      )
        return;

      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.slide-top-enter-active,
.slide-top-leave-active,
.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition-duration: 0.4s;
  transition-property: height, transform;
  transition-timing-function: ease-in-out;
  overflow: hidden;
}

.slide-top-enter,
.slide-bottom-leave-active {
  //opacity: 0;
  transform: translate(0, 110%);
}

.slide-top-leave-active,
.slide-bottom-enter {
  //opacity: 0;
  transform: translate(0, -110%);
}

.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.zoom-leave-active {
  animation-direction: reverse;
}

@keyframes zoom {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  100% {
    opacity: 1;
  }
}
</style>
