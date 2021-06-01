<template>
  <v-sheet
    color="primary"
    class="white--text rounded py-1 px-1 text-center text-button pointer"
    v-ripple
    elevation="2"
    @click="go('il-dc.school-profile')"
  >
    School Dual Credit Profile
  </v-sheet>
</template>

<script>
export default {
  methods: {
    go(name) {
      this.$router.push({ name });
    },
  },
};
</script>
