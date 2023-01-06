import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../view/HomePage.vue')
  },
  {
    path: '/sub/:id(\\d+)',
    name: 'sub',
    component: () => import('../view/SubPage.vue'),
    props: r => ({ id: Number(r.params.id) }),
  },
  {
    path: '/:_(.*)*',
    component: () => import('../view/NotFoundPage.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
})