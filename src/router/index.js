import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './login'
import Index from './index'
Vue.use(VueRouter)

const routes = [
  Login,
  Index
  // {
  //   path: '/',
  //   redirect:'/login'
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
