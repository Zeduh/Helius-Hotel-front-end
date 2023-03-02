import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/reservas',
    name: 'reservas',
    component: () => import('../views/ReservationView.vue'),
    children: [
      {path: ':name', name: 'reservasOption', component: () => import('../components/reservation/ReservationOption.vue')},
      {path: ':name', name: 'reservasOrder', component: () => import('../components/reservation/ReservationOrder.vue')}
    ]
  },
  {
    path: '/contato',
    name: 'Contato',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
