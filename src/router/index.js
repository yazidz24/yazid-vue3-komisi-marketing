import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PenjualanView from '@/views/PenjualanView.vue'
import MarketingView from '@/views/MarketingView.vue'
import AddPenjualanView from '@/views/AddPenjualanView.vue'
import EditPenjualanView from '@/views/EditPenjualanView.vue'
import KreditView from '@/views/KreditView.vue'
import AddKreditView from '@/views/AddKreditView.vue'

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
      path: '/penjualan/add',
      name: 'penjualan.add',
      component: AddPenjualanView,
    },
    {
      path: '/penjualan/:id/edit',
      name: 'penjualan.edit',
      component: EditPenjualanView,
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: MarketingView,
    },
    {
      path: '/kredit',
      name: 'kredit',
      component: KreditView,
    },
    {
      path: '/kredit/:id/add',
      name: 'kredit.add',
      component: AddKreditView,
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
