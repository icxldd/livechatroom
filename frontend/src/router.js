import Vue from 'vue'
import Router from 'vue-router'
import Rtc from '@/components/rtc.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'webrtc',
      component:Rtc
    }
  ]
})
