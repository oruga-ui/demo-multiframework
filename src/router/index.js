import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/tailwind'
  },
  {
    path: '/tailwind',
    name: 'Tailwind',
    component: () => import('../views/Tailwind.vue')
  },
  {
    path: '/bootstrap',
    name: 'Bootstrap',
    component: () => import('../views/Bootstrap.vue')
  },
  {
    path: '/bulma',
    name: 'Bulma',
    component: () => import('../views/Bulma.vue')
  },
  {
    path: '/material',
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
