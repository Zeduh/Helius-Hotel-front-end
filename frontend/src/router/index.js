import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/reservas",
    name: "reservas",
    component: () => import("../views/ReservationView.vue"),
    children: [
      {
        path: "/reservas/acomodacoes",
        name: "reservasOption",
        component: () =>
          import("../components/reservation/ReservationOption.vue"),
      },
      {
        path: "/reservas/pedido-finalizado",
        name: "reservasOrder",
        component: () =>
          import("../components/reservation/ReservationOrder.vue"),
      },
    ],
  },
  {
    path: "/acomodacoes",
    name: "acomodacoes",
    component: () => import("../views/AccommodationsView.vue"),
    
  },
  {
    path: "/contato",
    name: "Contato",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/admin",
    name: "administrativo",
    component: () => import("../views/AdminView.vue"),
    children: [
      {
        path: "/admin/view-users",
        name: "adminViewUsers",
        component: () => import("../components/admin/UsersList.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      console.log(to)
    } else {
      return {top: 0}
    }
  }
});

export default router;
