import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/Tailwind'
  },
  {
    path: '/Tailwind',
    name: 'Tailwind',
    component: () => import('../views/Tailwind.vue')
  },
  {
    path: '/Bootstrap',
    name: 'Bootstrap',
    component: () => import('../views/Bootstrap.vue')
  },
  {
    path: '/Bulma',
    name: 'Bulma',
    component: () => import('../views/Bulma.vue')
  },
  {
    path: '/Material',
    name: 'Material',
    component: () => import('../views/Material.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
