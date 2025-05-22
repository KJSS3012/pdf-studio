import { createRouter, createWebHashHistory } from 'vue-router'
import BaseView from '@/views/BaseView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'base',
      component: BaseView,
    },
  ],
})

export default router
