export default [
  {
    path: '',
    component: () => import('@/layouts/AuthLayout.vue'),
    meta: {
      requiresAuth: false,
  },
    children: [
      { path: "", redirect: "signin" },
      {
        path: "signin",
        name: "SignIn",
        component: () =>
          import(/* webpackChunkName: "auth" */ "@/pages/SignInPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: "signup",
        name: "SignUp",
        component: () =>
          import(/* webpackChunkName: "auth" */ "@/pages/SignUpPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: "forgotpassword",
        name: "ForgotPassword",
        component: () =>
          import( /* webpackChunkName: "auth" */ "@/pages/ForgotPasswordPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
    ],    
  },
  {
    path: "",
    component: () =>
      import(/* webpackChunkName: "main" */ "@/layouts/MainLayout.vue"),
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "main" */ "@/pages/MainPage.vue"),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "classification",
        name: "Classification",
        component: () =>
          import(/* webpackChunkName: "main" */ "@/pages/ClassificationPage.vue"),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "hunch",
        name: "Hunch",
        component: () =>
          import(/* webpackChunkName: "main" */ "@/pages/HunchPage.vue"),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "invite",
        name: "Invite",
        component: () =>
          import(/* webpackChunkName: "main" */ "@/pages/MainPage.vue"),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "moderation",
        name: "Moderation",
        component: () =>
          import(/* webpackChunkName: "main" */ "@/pages/MainPage.vue"),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "edit",
        name: "Edit",
        component: () =>
          import(/* webpackChunkName: "main" */ "@/pages/MainPage.vue"),
        meta: {
          requiresAuth: true
        }
      },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import("@/layouts/404Layout.vue") },
];