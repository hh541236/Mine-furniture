import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/product/:id',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/order',
    component: () => import('../views/OrderView.vue')
  },
  {
    path: '/result',
    component: () => import('../views/OrderResultView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
