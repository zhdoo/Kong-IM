import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import chat from '@/components/chat'
import init from '@/components/init'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {keepAlive: true}
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat,
      meta: {keepAlive: true}
    },
    {
      path: '/init',
      name: 'init',
      component: init,
      meta: {keepAlive: true}

    }
  ]
})
