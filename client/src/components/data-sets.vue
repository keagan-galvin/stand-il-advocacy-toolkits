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

      <v-dialog v-model="dialog" max-width="400" :persistant="loading">
        <v-card class="px-1 pt-1 d-flex flex-column">
          <v-card-title class="headline d-flex">
            <div class="flex-fill">
              <v-icon>mdi-cloud-upload</v-icon> Upload Data Set
            </div>
            <v-btn icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <p>
              Upload a <strong>csv</strong> file to refresh the
              <strong class="primary--text">{{ dataset.name }}</strong> data
              set.
            </p>
            <v-file-input
              v-model="file"
              accepts=".csv"
              label="Data Set"
              placeholder="Select your file"
              :show-size="1000"
              :disabled="loading"
              :error-messages="errors"
            >
            </v-file-input>
          </v-card-text>
          <v-card-text>
            <v-btn
              block
              color="primary"
              :disabled="!file || loading || errors.length > 0"
              :loading="loading"
              @click="submit"
            >
              Upload
            </v-btn>

            <v-btn
              color="cancel"
              outlined
              block
              text
              @click="dialog = false"
              class="mt-3"
            >
              Cancel
            </v-btn>
          </v-card-text>
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
        key: "IL_DualCredit_Entities",
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
  computed: {
    errors() {
      let errors = [];

      if (
        this.file &&
        this.file.name.indexOf(".csv") != this.file.name.length - 4
      ) {
        errors.push("File must be a .csv");
      }

      return errors;
    },
  },
  watch: {
    dialog(val, prev) {
      if (val != prev && !val) {
        this.file = null;
      }
    },
  },
  methods: {
    upload(dataset) {
      this.dataset = dataset;
      this.dialog = true;
    },
    submit() {
      if (!this.file) return;

      this.loading = true;

      let formData = new FormData();

      formData.append("data_set", this.file, this.file.name);
      formData.append("key", this.dataset.key);

      this.$store
        .dispatch("handleApiFetch", {
          method: "post",
          url: `/api/datasets/upload`,
          body: formData,
        })
        .then(
          //success
          () => {
            this.$store.dispatch("notifications/send", {
              message: `Successfully refreshed the data set.`,
              type: "success",
            });

            this.dialog = false;
          },
          //error
          () => {
            this.$store.dispatch("notifications/send", {
              message: `Unexpected error occured while uploading the data set.`,
              type: "error",
            });
            ``;
          }
        )
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
