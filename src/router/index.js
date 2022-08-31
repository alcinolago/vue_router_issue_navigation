import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/analise',
    name: 'analise',
    component: () => import('../views/analysis/AnalysisTableView.vue'),
  },
  {
    path: '/analise/:id',
    name: 'analiseDetalhes',
    component: () => import('../views/analysis/ProfileAnalysisView.vue'),
  },
  {
    path:'/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/HomeView.vue')
  }
  
]


const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router