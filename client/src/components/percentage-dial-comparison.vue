<template>
  <div class="d-flex">
    <div class="dial-compare d-flex">
      <div class="ring-wrapper">
        <div class="progress-ring ring-1">
          <svg height="200" width="200" class="progress">
            <circle
              stroke-linecap="round"
              stroke="#F1645D"
              stroke-dasharray="502.6548245743669 502.6548245743669"
              stroke-width="10"
              fill="transparent"
              r="80"
              cx="100"
              cy="100"
              :style="`stroke-dashoffset: ${strokeOffsetB}`"
            ></circle></svg
          ><svg height="200" width="200" class="background">
            <circle
              stroke-linecap="round"
              stroke="#E6E6E6"
              stroke-dasharray="502.6548245743669 502.6548245743669"
              stroke-width="11"
              fill="transparent"
              r="80"
              cx="100"
              cy="100"
              style="stroke-dashoffset: 0"
            ></circle>
          </svg>
        </div>
        <div class="progress-ring ring-2">
          <svg height="174" width="174" class="progress">
            <circle
              stroke-linecap="round"
              stroke="#0067B1"
              stroke-dasharray="420.97341558103227 420.97341558103227"
              stroke-width="10"
              fill="transparent"
              r="67"
              cx="87"
              cy="87"
              :style="`stroke-dashoffset: ${strokeOffsetA}`"
            ></circle></svg
          ><svg height="174" width="174" class="background">
            <circle
              stroke-linecap="round"
              stroke="#E6E6E6"
              stroke-dasharray="420.97341558103227 420.97341558103227"
              stroke-width="11"
              fill="transparent"
              r="67"
              cx="87"
              cy="87"
              style="stroke-dashoffset: 0"
            ></circle>
          </svg>
        </div>
        <div class="rootLabel d-flex align-center">
          <div v-html="label"></div>
        </div>
      </div>
      <div class="d-flex align-center">
        <div class="label-wrapper">
          <div class="text-secondary font-weight-bold text-nowrap">
            <span class="value spin-in" style="color: #0067b1"
              ><span>{{ (valueA * 100).toFixed(2) }}</span
              >%
            </span>
          </div>
          <div class="label mb-2" v-html="labelA"></div>
          <div class="text-primary font-weight-bold text-nowrap">
            <span class="value" style="color: #f1645d"
              ><span>{{ (valueB * 100).toFixed(2) }}</span
              >%
            </span>
          </div>
          <div class="label" v-html="labelB"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
circle {
  transition: stroke-dashoffset 3s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.progress-ring {
  position: relative;
  z-index: 0;
}

.progress-ring .progress {
  z-index: 1;
  position: relative;
}

.progress-ring .background {
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
}

.dial-compare,
.dial-compare .ring-wrapper {
  position: relative;
}

.dial-compare .label-wrapper {
  min-width: 6.25rem;
}

.dial-compare .label-wrapper .value {
  transition: opacity 175ms ease-in-out, transform 0.6s ease-in-out;
}

.dial-compare .label-wrapper .label {
  transition: opacity 0.5s ease-in-out;
  line-height: 1;
}

.dial-compare .label-wrapper .label,
.dial-compare .label-wrapper .value {
  display: inline-block;
  opacity: 1;
  transform: scale(1) rotate(0);
}

.dial-compare .label-wrapper .label.hidden,
.dial-compare .label-wrapper .value.hidden {
  opacity: 0;
}

.dial-compare .label-wrapper .label.hidden.spin-in,
.dial-compare .label-wrapper .value.hidden.spin-in {
  transform: scale(0) rotate(-180deg);
}

.dial-compare .rootLabel {
  font-weight: 700;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  line-height: 1;
}

.dial-compare .rootLabel div {
  padding: 2.5rem;
  text-align: center;
  width: 100%;
}

.dial-compare .ring-1 {
  position: relative;
  left: 0;
  top: 0;
}

.dial-compare .ring-2 {
  position: absolute;
  left: 13px;
  top: 13px;
}
</style>

<script>
export default {
  props: {
    label: String,
    labelA: String,
    valueA: Number,
    labelB: String,
    valueB: Number,
    delay: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      a: 0,
      b: 0,
    };
  },
  computed: {
    strokeOffsetA() {
      return (1 - this.a) * 420;
    },
    strokeOffsetB() {
      return (1 - this.b) * 502;
    },
  },
  mounted() {
    setTimeout(() => {
      this.a = this.valueA;
      this.b = this.valueB;
    }, this.delay);
  },
};
</script>
