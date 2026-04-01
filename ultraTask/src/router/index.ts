import { createRouter, createWebHistory } from 'vue-router';
import UsersView from '../views/UsersView.vue';

const routes = [
  {
    path: '/',
    name: 'users',
    component: UsersView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
