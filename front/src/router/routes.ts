import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/presentation'
  },

  {
    path: '/presentation',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Presentation.vue') }
    ]
  },

  {
    path: '/login',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },

  {
    path: '/register',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Register.vue') }
    ]
  },

  {
    path: '/app',
    component: () => import('components/public/JustRouterView.vue'),
    children: [
      {
        path: 'home',
        component: () => import('layouts/HomeLayout.vue'),
        redirect: 'home/discussion',
        children: [
          {
            path: 'discussion',
            component: () => import('pages/Discussion.vue')
          },
          {
            path: 'discovery',
            component: () => import('pages/Discovery.vue')
          }
        ]
      },
      {
        path: '',
        component: () => import('layouts/EmptyLayout.vue'),
        children: [
          {
            path: 'profile',
            component: () => import('pages/Profile.vue')
          }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
