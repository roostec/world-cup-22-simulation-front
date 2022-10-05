import { createRouter, createWebHistory } from "vue-router";
import authGuard from "./authGuard";

export const routes = [
  {
    path: '',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      { path: "", redirect: "signin" },
      {
        path: "signin",
        name: "SignIn",
        component: () =>
          import(/* webpackChunkName: "auth" */ "@/pages/SignInPage.vue"),
      },
      {
        path: "signup",
        name: "SignUp",
        component: () =>
          import(/* webpackChunkName: "auth" */ "@/pages/SignUpPage.vue"),
      },
      {
        path: "forgotpassword",
        name: "ForgotPassword",
        component: () =>
          import(
            /* webpackChunkName: "auth" */ "@/pages/ForgotPasswordPage.vue"
          ),
      },
    ],
    
  },
  {
    path: "",
    component: () =>
      import(/* webpackChunkName: "main" */ "@/layouts/MainLayout.vue"),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "main" */ "@/pages/MainPage.vue"),
      },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import("@/layouts/404Layout.vue") },
];


const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeEach(authGuard);

export default router;