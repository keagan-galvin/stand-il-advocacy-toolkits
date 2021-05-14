<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <div class="d-flex align-center">
        <div class="flex-fill text-h5">
          <v-icon>mdi-database</v-icon> Data Sets
        </div>
      </div>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <ul>
        <li
          v-for="dataset in datasets"
          :key="dataset.key"
          @click="upload(dataset)"
          v-ripple
        >
          <div class="flex-fill">{{ dataset.name }}</div>
          <v-btn icon small @click="upload(dataset)"
            ><v-icon>mdi-cloud-upload</v-icon></v-btn
          >
        </li>
      </ul>

      <v-dialog v-model="dialog" max-width="400">
        <v-card class="px-1 pt-1 d-flex flex-column">
          <v-card-title class="headline"
            >Upload {{ dataset.name }}</v-card-title
          >
          <v-card-text>
            <v-file-input
              v-model="file"
              accepts=".csv"
              label="Data Set"
              placeholder="Select your file"
              :show-size="1000"
              :disabled="loading"
            >
            </v-file-input>
          </v-card-text>
          <v-card-actions>
            <v-btn
              block
              color="primary"
              :disabled="!file || loading"
              :loading="loading"
              @click="submit"
            >
              Upload
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<style lang="scss" scoped>
ul {
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    padding: 0.35rem 0.75rem;
    cursor: pointer;

    &:nth-child(odd) {
      background: rgba(0, 0, 0, 0.085);
    }
  }
}
</style>

<script>
export default {
  data() {
    let datasets = [
      {
        name: "Illinois Report Card",
        key: "il-report-card",
      },
    ].sort((a, b) => {
      let textA = a.name.toUpperCase();
      let textB = b.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

    return {
      datasets,
      dataset: {
        name: "",
        key: "",
      },
      file: null,
      dialog: false,
      loading: false,
    };
  },
  methods: {
    upload(dataset) {
      this.dataset = dataset;
      this.dialog = true;
    },
    submit() {
      this.loading = true;

      this.$store.dispatch("handleApiFetch", {
        mode: "get",
        url: `/api/datasets/upload`,
      });
    },
  },
};
</script>
