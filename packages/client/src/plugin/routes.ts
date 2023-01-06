import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../view/HomePage.vue')
  },
  {
    path: '/sub',
    component: () => import('../view/SubPage.vue')
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
})