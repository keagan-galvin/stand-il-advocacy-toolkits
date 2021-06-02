<template>
  <div class="d-flex align-center justify-center flex-wrap">
    <div
      class="d-flex flex-fill align-center"
      v-for="(key, i) in keys"
      :key="`key_${i}`"
    >
      <div :class="`${key.classes} flex-fill pa-2 mx-3`"></div>
      <span class="text-nowrap">{{ key.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keys: [
        {
          label: "Level 1",
          classes: "red",
        },
        {
          label: "Level 2",
          classes: "orange",
        },
        {
          label: "Level 3",
          classes: "success",
        },
        {
          label: "Level 4",
          classes: "success darken-2",
        },
      ],
    };
  },
};
</script>
