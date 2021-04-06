import Vue from "vue";
import VueRouter from "vue-router";

import Introduction from "../views/Introduction.vue";
import PolicyGoals from "../views/PolicyGoals.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Introduction,
    meta: {
      position: 0,
    },
  },
  {
    path: "/policy-goals",
    component: PolicyGoals,
    meta: {
      position: 1,
    },
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0,
      };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (!store.getters.authorized && to.path !== "/") next("/");
  else next();
});

export default router;
