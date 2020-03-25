import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index'
  },
  {
    path: '',
    name: 'Index',
    component: Home,
    children:[
      {path: '/index', component: ()=> import('@/views/index/Index')},
      {path: '/user', component: ()=> import('@/views/user/Index')}
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
