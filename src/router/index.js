import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '@/views/404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: () => import('../views/home.vue')
  },
  {
    path: '/products',
    name: 'products',
    meta: { layout: 'main' },
    component: () => import('../views/products.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: { layout: 'main' },
    component: () => import('../views/categories.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: { layout: 'main' },
    component: () => import('../views/about.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    meta: { layout: 'main' },
    component: () => import('../views/contact.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})
export default router