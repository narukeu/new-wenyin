import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title:"页面展览"
      }
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },

    // 404 页面
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: import('../views/404.vue'),
      meta:{
        title:"404"
      }
    },
  ]
})

export default router
