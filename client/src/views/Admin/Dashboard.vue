<template>
  <div class="pa-6">
    <v-expansion-panels>
      <users />
      <data-sets />
    </v-expansion-panels>
  </div>
</template>

<script>
import Users from "../../components/users.vue";
import DataSets from "../../components/data-sets.vue";
export default {
  components: { Users, DataSets },
};
</script>
