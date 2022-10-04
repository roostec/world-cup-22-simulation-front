import { createRouter, createWebHistory } from "vue-router";
import authGuard from "./authGuard";

export const routes = [
  {
    path: '',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: "", redirect: "signin" },
      // {
      //   path: "404",
      //   name: "404",
      //   component: () =>
      //     import(/* webpackChunkName: "auth" */ "../pages/404Page.vue"),
      // },
      {
        path: "signin",
        name: "SignIn",
        component: () =>
          import(/* webpackChunkName: "auth" */ "../pages/SignInPage.vue"),
      },
      // {
      //   path: "signup",
      //   name: "SignUp",
      //   component: () =>
      //     import(/* webpackChunkName: "auth" */ "../pages/SignUpPage.vue"),
      // },
      // {
      //   path: "forgoutpassword",
      //   name: "ForgotPassword",
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "auth" */ "../pages/ForgotPasswordPage.vue"
      //     ),
      // },
    ],
    
  },
  {
    path: "",
    component: () =>
      import(/* webpackChunkName: "main" */ "../layouts/MainLayout.vue"),
    children: [
      {
        path: "main",
        name: "Main",
        component: () =>
          import(/* webpackChunkName: "main" */ "../pages/MainPage.vue"),
      },
    ],
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeEach(authGuard);

export default router;