import { createRouter, createWebHistory } from 'vue-router'
import {  HomeView, CartView, AdminView} from '../views'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/adminpanel',
      name: 'adminpanel',
      component: AdminView
    },
  ]
})

export default router
