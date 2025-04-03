import { createRouter, createWebHistory } from 'vue-router';
import Setup from '../components/Setup.vue';  
const routes = [
  {
    path: '/',
    name: 'home',
    component: Setup,
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../components/main/MainComponent.vue'), 
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../components/main/MainComponent.vue'), 
  },
];

const router = createRouter({
  history:  createWebHistory(),
  routes,
});

export default router;
