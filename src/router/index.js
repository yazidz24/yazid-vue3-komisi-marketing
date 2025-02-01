import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PenjualanView from '@/views/PenjualanView.vue'
import MarketingView from '@/views/MarketingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'komisi',
      component: HomeView,
    },
    {
      path: '/penjualan',
      name: 'penjualan',
      component: PenjualanView,
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: MarketingView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
