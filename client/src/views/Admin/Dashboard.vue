<template>
  <div class="pa-6">
    <v-expansion-panels>
      <users />
      <data-sets />
      <toolkits />
    </v-expansion-panels>
  </div>
</template>

<script>
import Users from "../../components/users.vue";
import DataSets from "../../components/data-sets.vue";
import Toolkits from "../../components/toolkits.vue";
export default {
  components: { Users, DataSets, Toolkits },
};
</script>
