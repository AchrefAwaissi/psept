import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Create.vue')
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: () => import('../views/Inscription.vue')
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import('../views/Connexion.vue')
  },
  {
    path: '/compte',
    name: 'Compte',
    meta: {requiresAuth: true},
    component: () => import('../views/Compte.vue')
  },
 
  {
    path: '/forum',
    name: 'Forum',
    meta: {requiresAuth: true},
    component: () => import('../views/Forum.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});



export default router;
