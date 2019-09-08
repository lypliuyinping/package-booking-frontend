import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PackageStorage from './views/PackageStorage.vue'
import PackageList from './views/PackageList.vue'

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
      path: '/PackageList',
      name: 'PackageList',
      component:PackageList
    }
  ]
})
