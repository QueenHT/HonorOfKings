import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'main',
    component: resolve => require(['@/components/MainVue'], resolve),
    meta: {
      keepAlive: false
    },    
    redirect: '/login',
    children: [
    {
      path: 'winnerslist',
      name: 'winnerslist',
      component: resolve => require(['@/components/view/WinnersList'], resolve),
      meta: {
        keepAlive: false
      }
    },{
      path: 'treatmentsituation',
      name: 'treatmentsituation',
      component: resolve => require(['@/components/view/TreatmentSituation'], resolve),
      meta: {
        keepAlive: false
      }
    },{
      path: 'homepage',
      name: 'homepage',
      component: resolve => require(['@/components/view/HomePage'], resolve),
      meta: {
        keepAlive: false
      }
    },{
      path: 'lawenforcementcorrection',
      name: 'lawenforcementcorrection',
      component: resolve => require(['@/components/view/LawEnforcementCorrection'], resolve),
      meta: {
        keepAlive: false
      }
    },{
      path: 'stronglearning',
      name: 'stronglearning',
      component: resolve => require(['@/components/view/StrongLearning'], resolve),
      meta: {
        keepAlive: false
      }
    },
   
  ]
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/components/login'], resolve),
    meta: {
      keepAlive: false
    }
  },]
})
