<template>
  <div class="pa-6">
    <v-expansion-panels>
      <users></users>
    </v-expansion-panels>
  </div>
</template>

<script>
import Users from "../../components/users.vue";
export default {
  components: { Users },
};
</script>
