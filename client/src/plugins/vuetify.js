import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#0067B1",
        secondary: "#E6E6E6",
        accent: "#F1645D",
        error: "#FF5252",
        info: "#F89720",
        success: "#4CAF50",
        warning: "#FDB912",
      },
    },
  },
});
