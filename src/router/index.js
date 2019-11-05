import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'app',
    component: () => import('@/components/Main'),
    meta: {
      keepAlive: false
    },
    redirect: '/login',
    children: [{
      path: 'login',
      name: 'login',
      component: () => import('@/components/Login'),
      meta: {
        keepAlive: false
      }
    }]
  }]
})
