<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <div class="d-flex align-center">
        <div class="flex-fill text-h5">
          <v-icon v-if="!loading">mdi-database</v-icon>
          <v-progress-circular
            v-else
            indeterminate
            color="primary"
          ></v-progress-circular>
          Export Toolkits
        </div>
      </div>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <ul>
        <li
          v-for="toolkit in toolkits"
          :key="toolkit.key"
          @click="download(toolkit.key)"
        >
          <div class="flex-fill">{{ toolkit.name }}</div>
          <v-btn
            icon
            small
            target="_blank"
            :ref="`btn_${toolkit.key}`"
            @click.stop
            :href="`/api/toolkits/${toolkit.key}?token=${encodeURI(
              'Bearer ' + jwt.token
            )}`"
            ><v-icon>mdi-download</v-icon></v-btn
          >
        </li>
      </ul>
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
    return {
      toolkits: [],
      loading: false,
    };
  },
  computed: {
    jwt() {
      return this.$store.state.jwt;
    },
  },
  methods: {
    load() {
      this.loading = true;

      this.$store
        .dispatch("handleApiFetch", {
          method: "get",
          url: `/api/toolkits/`,
        })
        .then(
          (results) => {
            this.toolkits = results.sort((a, b) => {
              let textA = a.name.toUpperCase();
              let textB = b.name.toUpperCase();
              return textA < textB ? -1 : textA > textB ? 1 : 0;
            });
          },
          //error
          () => {
            this.$store.dispatch("notifications/send", {
              message: `Unexpected error occured while loading toolkits.`,
              type: "error",
            });
          }
        )
        .finally(() => {
          this.loading = false;
        });
    },
    download(key) {
      window.open(
        `/api/toolkits/${key}?token=${encodeURI("Bearer " + this.jwt.token)}`,
        "_blank"
      );
    },
  },
  mounted() {
    this.load();
  },
};
</script>
