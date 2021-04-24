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
  const tryNext = () => {
    if (store.state.initialized) {
      if (!store.getters.authorized && to.path !== "/") next("/");
      else next();
    } else setTimeout(tryNext, 10);
  };

  tryNext();
});

router.afterEach((to, from) => {
  if (store.getters.authorized)
    localStorage.setItem("last_pos:" + store.state.user.email, to.path);
});

export default router;
