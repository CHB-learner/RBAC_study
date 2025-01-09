import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/login',
    name: 'login',
    component:() => import('../views/LoginView.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component:() => import('../views/AdminView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
