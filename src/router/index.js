import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import GettingStarted from '@/components/GettingStarted'
import RbaNew from '@/components/RbaNew'
import Documentation from '@/components/Documentation'
import Downloads from '@/components/Downloads'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/getting_started',
      name: 'GettingStarted',
      component: GettingStarted
    },
    {
      path: '/rba_new',
      name: 'RbaNew',
      component: RbaNew
    },
    {
      path: '/documentation',
      name: 'Documentation',
      component: Documentation
    },
    {
      path: '/downloads',
      name: 'Downloads',
      component: Downloads
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
