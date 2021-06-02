<template>
  <div class="d-flex align-center justify-center flex-wrap">
    <div
      class="d-flex flex-fill align-center"
      v-for="(key, i) in keys"
      :key="`key_${i}`"
    >
      <div :class="`${key.classes} pa-2 mx-3`" style="width: 50px"></div>
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
          label: "Partially Meets",
          classes: "red",
        },
        {
          label: "Approaching",
          classes: "orange",
        },
        {
          label: "Meets",
          classes: "success",
        },
        {
          label: "Exceeds",
          classes: "success darken-2",
        },
      ],
    };
  },
};
</script>
