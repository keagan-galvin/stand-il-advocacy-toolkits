import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueConfetti from "vue-confetti";

import "./utilities/vee-validate";
import VueMask from "v-mask";
import vueNumeralFilterInstaller from "vue-numeral-filter";

import OffsetFull from "./directives/offset.full.js";
import OffsetCentered from "./directives/offset.centered.js";

Vue.config.productionTip = false;

Vue.use(VueMask);
Vue.use(vueNumeralFilterInstaller, { locale: "en-gb" });
Vue.use(VueConfetti);

Vue.directive("offset-full", OffsetFull);
Vue.directive("offset-centered", OffsetCentered);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  beforeCreate() {
    this.$store.commit("initializeStore");
  },
}).$mount("#app");

Object.defineProperty(Array.prototype, "chunk", {
  value: function (chunkSize) {
    var R = [];
    for (var i = 0; i < this.length; i += chunkSize)
      R.push(this.slice(i, i + chunkSize));
    return R;
  },
});
