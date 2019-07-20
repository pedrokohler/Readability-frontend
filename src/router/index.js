import Vue from 'vue'
import Router from 'vue-router'
import Text from '@/components/Text'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Text
    }
  ]
})
