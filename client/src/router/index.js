import Vue from "vue";
import VueRouter from "vue-router";

import IL_DCT from "../views/IL-DualCreditToolkit/Toolkit.vue";
import IL_DCT_Introduction from "../views/IL-DualCreditToolkit/Introduction.vue";
import IL_DCT_PolicyGoals from "../views/IL-DualCreditToolkit/PolicyGoals.vue";

// import IL_OCT from "../views/IL-OtherToolkit/Toolkit.vue";
// import IL_OCT_Introduction from "../views/IL-OtherToolkit/Introduction.vue";

import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/", // "/il-dualCredit",
    component: IL_DCT,
    children: [
      {
        path: "",
        component: IL_DCT_Introduction,
        meta: {
          position: 0,
        },
      },
      {
        path: "/policy-goals",
        component: IL_DCT_PolicyGoals,
        meta: {
          position: 1,
        },
      },
    ],
  },
  // {
  //   path: "/il-other",
  //   component: IL_OCT,
  //   beforeEach(to, from, next) {
  //     const tryNext = () => {
  //       if (store.state.initialized) {
  //         console.log(store.getters["user/authorized"]);
  //         if (!store.getters["user/authorized"] && to.path !== "/") next("/");
  //         else next();
  //       } else setTimeout(tryNext, 10);
  //     };

  //     tryNext();
  //   },
  //   children: [
  //     {
  //       path: "",
  //       component: IL_OCT_Introduction,
  //       meta: {
  //         position: 0,
  //       },
  //     },
  //   ],
  // },
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
      console.log(store.getters["user/authorized"]);
      if (!store.getters["user/authorized"] && to.path !== "/") next("/");
      else next();
    } else setTimeout(tryNext, 10);
  };

  tryNext();
});

router.afterEach((to) => {
  if (store.getters["user/authorized"])
    localStorage.setItem("last_pos:" + store.state.user.email, to.path);
});

export default router;
