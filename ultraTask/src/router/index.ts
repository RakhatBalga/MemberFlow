import { createRouter, createWebHistory } from 'vue-router';
import UsersView from '../views/UsersView.vue';

const routes = [
  {
    path: '/',
    name: 'users',
    component: UsersView,
  },
  {
    path: '/users/:id/edit',
    name: 'user-edit',
    component: () => import('../views/UserEditView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
