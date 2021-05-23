import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import "./utilities/vee-validate";
import VueMask from "v-mask";
import vueNumeralFilterInstaller from "vue-numeral-filter";

Vue.config.productionTip = false;
Vue.use(VueMask);
Vue.use(vueNumeralFilterInstaller, { locale: "en-gb" });

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  beforeCreate() {
    this.$store.commit("initializeStore");
  },
}).$mount("#app");
