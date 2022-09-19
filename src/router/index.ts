import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/dashboard/:id',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: '/dashboard/home',
        name: 'home',
        component: () => import('../components/DashboardHome.vue'),
      },
      {
        path: '/dashboard/orders',
        name: 'orders',
        component: () => import('../components/DashboardOrders.vue'),
      },
      {
        path: '/dashboard/products',
        name: 'products',
        component: () => import('../components/DashboardProducts.vue'),
      },
      {
        path: '/dashboard/addproduct',
        name: 'addproduct',
        component: () => import('../components/DashboardAddProduct.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
