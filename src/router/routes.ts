export default [
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
        meta: {
          requiresAuth: true,
          label: '',
        },
      },
      {
        path: "classification",
        name: "Classification",
        component: () =>
          import(/* webpackChunkName: "main" */ "@/pages/ClassificationPage.vue"),
      },
      {
        path: "hunch",
        name: "Hunch",
        component: () =>
          import(/* webpackChunkName: "main" */ "@/pages/HunchPage.vue"),
      },
      {
        path: "invite",
        name: "Invite",
        component: () =>
          import(/* webpackChunkName: "main" */ "@/pages/MainPage.vue"),
      },
      {
        path: "moderation",
        name: "Moderation",
        component: () =>
          import(/* webpackChunkName: "main" */ "@/pages/MainPage.vue"),
      },
      {
        path: "edit",
        name: "Edit",
        component: () =>
          import(/* webpackChunkName: "main" */ "@/pages/MainPage.vue"),
      },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import("@/layouts/404Layout.vue") },
];