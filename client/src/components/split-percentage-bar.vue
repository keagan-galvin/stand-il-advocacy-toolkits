<template>
  <div>
    <div class="text-center text-subtitle-2">{{ barLabel }}</div>
    <div class="position-relative">
      <div
        class="d-flex mx-2 mb-4 mt-2"
        v-resize="onResize"
        :style="`height: ${wrapperHeight}`"
      >
        <div
          v-for="(num, i) in belowInterval"
          :key="`reverse_${num}`"
          class="border-left h-100 position-relative"
          :style="`width: ${intervalSize / 2}%`"
        >
          <div
            class="reverse-label pt-6 text-caption"
            v-offset-centered="'left bottom'"
          >
            {{ num + (i == 0 ? "%" : "") }}
          </div>
        </div>
        <div
          v-for="(num, i) in aboveInterval"
          :key="`forward_${num}`"
          class="border-right h-100 position-relative"
          :style="`width: ${intervalSize / 2}%`"
          :class="{ 'border-left': i == 0 }"
        >
          <div
            v-if="i == 0"
            class="reverse-label pt-6 text-caption"
            v-offset-centered="'left bottom'"
          >
            0
          </div>
          <div
            class="forward-label pt-6 text-caption"
            v-offset-centered="'right bottom'"
          >
            {{ num + (i == aboveInterval.length - 1 ? "%" : "") }}
          </div>
        </div>
      </div>

      <div
        class="position-absolute bar-wrapper mx-2 mb-4 mt-2 d-flex flex-column"
        :style="`height: ${wrapperHeight}`"
      >
        <div class="flex-fill">
          <div
            class="bar d-flex"
            :style="`height: ${barHeight}`"
            v-offset-centered="'-top'"
          >
            <div class="belowData h-100 d-flex justify-end" style="width: 50%">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <div
                    :style="`width: ${level_1}%`"
                    class="red h-100"
                    v-bind="attrs"
                    v-on="on"
                  ></div>
                </template>
                <span>{{ level_1 }}%</span>
              </v-tooltip>

              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <div
                    :style="`width: ${level_2}%`"
                    class="orange h-100"
                    v-bind="attrs"
                    v-on="on"
                  ></div>
                </template>
                <span>{{ level_2 }}%</span>
              </v-tooltip>
            </div>
            <div class="aboveData h-100 d-flex align-start" style="width: 50%">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <div
                    :style="`width: ${level_3}%`"
                    class="success h-100"
                    v-bind="attrs"
                    v-on="on"
                  ></div>
                </template>
                <span>{{ level_3 }}%</span>
              </v-tooltip>

              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <div
                    :style="`width: ${level_4}%`"
                    class="success darken-2 h-100"
                    v-bind="attrs"
                    v-on="on"
                  ></div>
                </template>
                <span>{{ level_4 }}%</span>
              </v-tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-left {
  border-left: 1px solid #ccc;
}
.border-right {
  border-right: 1px solid #ccc;
}

.reverse-label {
  position: absolute;
  left: 0;
  bottom: 0;
}

.forward-label {
  position: absolute;
  right: 0;
  bottom: 0;
}

.bar-wrapper {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

<script>
export default {
  props: {
    barLabel: String,
    level_1: Number,
    level_2: Number,
    level_3: Number,
    level_4: Number,
    intervalSize: {
      type: Number,
      default: 20,
    },
    rangeMax: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      wrapperHeight: "0px",
      barHeight: "0px",
    };
  },
  computed: {
    aboveInterval() {
      let result = [];
      let current = 0;

      while (current < this.rangeMax) {
        current += this.intervalSize;
        result.push(current);
      }

      return result;
    },
    belowInterval() {
      return JSON.parse(JSON.stringify(this.aboveInterval)).reverse();
    },
  },
  methods: {
    onResize() {
      this.wrapperHeight = this.$el.offsetWidth / 6 + "px";
      this.barHeight = this.$el.offsetWidth / 15 + "px";
    },
  },
};
</script>
