import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import ReadabilityTest from '@/components/ReadabilityTest'
import FleschKincaidTest from '@/components/FleschKincaidTest'
import FleschReadabilityTest from '@/components/FleschReadabilityTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },    
    {
      path: '/ReadabilityTest',
      name: 'ReadabilityTest',
      component: ReadabilityTest
    },
    {
      path: '/FleschKincaidTest',
      name: 'FleschKincaidTest',
      component: FleschKincaidTest
    },
    {
      path: '/FleschReadabilityTest',
      name: 'FleschReadabilityTest',
      component: FleschReadabilityTest
    }
  ]
})
