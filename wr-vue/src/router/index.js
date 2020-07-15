import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
        path: '/signup',
        name: 'SignUp',
        component:SignUp
    },

    {
      path:'/index',
      name:'AppIndex',
      component:AppIndex
    }
  ]
})
