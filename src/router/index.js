import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
/* import HelloWorld from '@/components/HelloWorld' */
import RbaNew from '@/components/RbaNew'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    /*
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, */
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/rba_new',
      name: 'RbaNew',
      component: RbaNew
    }
  ]
})
