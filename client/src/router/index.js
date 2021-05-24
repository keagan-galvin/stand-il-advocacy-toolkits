import Vue from "vue";
import VueRouter from "vue-router";

import IL_DCT from "../views/IL-DualCreditToolkit/Toolkit.vue";
import IL_DCT_Introduction from "../views/IL-DualCreditToolkit/Introduction.vue";
import IL_DCT_PolicyGoals from "../views/IL-DualCreditToolkit/PolicyGoals.vue";
import IL_DCT_SchoolProfile from "../views/IL-DualCreditToolkit/SchoolProfile.vue";
import IL_DCT_KeyPlayers from "../views/IL-DualCreditToolkit/KeyPlayers.vue";

import Admin from "../views/Admin/Admin.vue";
import Admin_Login from "../views/Admin/Login.vue";
import Admin_Dashboard from "../views/Admin/Dashboard.vue";

// import IL_OCT from "../views/IL-OtherToolkit/Toolkit.vue";
// import IL_OCT_Introduction from "../views/IL-OtherToolkit/Introduction.vue";

import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/il-dual-credit",
    component: IL_DCT,
    children: [
      {
        name: "il-dc.introduction",
        path: "",
        component: IL_DCT_Introduction,
        meta: {
          position: 0,
        },
      },
      {
        name: "il-dc.policy-goals",
        path: "policy-goals",
        component: IL_DCT_PolicyGoals,
        meta: {
          position: 1,
        },
      },
      {
        name: "il-dc.school-profile",
        path: "school-profile",
        component: IL_DCT_SchoolProfile,
        meta: {
          position: 2,
        },
      },
      {
        name: "il-dc.key-players",
        path: "key-players",
        component: IL_DCT_KeyPlayers,
        meta: {
          position: 3,
        },
      },
    ],
  },
  {
    path: "/admin",
    component: Admin,
    children: [
      {
        name: "admin.login",
        path: "login",
        component: Admin_Login,
        meta: {
          transitionName: "fade",
          position: 0,
        },
      },
      {
        name: "admin",
        path: "",
        component: Admin_Dashboard,
        meta: {
          transitionName: "fade",
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
      var paths = {
        admin: {
          root: "/admin",
          login: "/admin/login",
        },
        ilDCT: {
          root: "/il-dual-credit",
        },
      };

      if (to.path.startsWith(paths.admin.root)) {
        if (!store.getters["user/isAdmin"] && to.path !== paths.admin.login)
          next(paths.admin.login);
        else if (store.getters["user/isAdmin"] && to.path === paths.admin.login)
          next(paths.admin.root);
        else next();
      } else {
        if (
          to.path === "/" ||
          (to.path != paths.ilDCT.root && !store.getters["user/authorized"])
        )
          next(paths.ilDCT.root);
        else next();
      }
    } else setTimeout(tryNext, 10);
  };

  tryNext();
});

export default router;
