import { createRouter, createWebHistory } from 'vue-router';
import Setup from '../components/Setup.vue';  
const routes = [
  {
    path: '/',
    name: 'home',
    component: Setup,
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: 'login',
    component: () => import("../components/page/Login.vue")
  },
  {
    path: '/user',
    name: 'user',
    component: Setup,
    meta: { requiresAuth: true } 
  },
  {
    path: '/product',
    name: 'product',
    component: Setup,
    meta: { requiresAuth: true }
  },
  {
    path: '/team',
    name: 'team',
    component: Setup,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history:  createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === "true"; // Cek apakah pengguna sudah login

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
