import Home from '../home.vue';
export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/history',
    component: () => import('../history.vue'),
  },
  {
    path: '/knowledge',
    component: () => import('../knowledge.vue'),
  },
];
