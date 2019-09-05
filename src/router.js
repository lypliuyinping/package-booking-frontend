import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PackageStorage from './views/PackageStorage.vue'
import AllPackages from './views/AllPackages.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'PackageStorage',
      component: PackageStorage
    },
    {
      path: '/AllPackages',
      name: 'AllPackages',
      component:AllPackages
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
