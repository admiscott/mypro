import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index.vue'
import lend from './components/lend.vue'
import reg from './components/reg.vue'
import home from './components/home.vue'
import letter from './components/letter.vue'
import lend1 from './components/lend/lend1.vue'
import lend2 from './components/lend/lend2.vue'
import lend3 from './components/lend/lend3.vue'
import lend_top from './components/lend/lend_top.vue'
import lend2_1 from './components/lend/lend2_1.vue'
import lend3_1 from './components/lend/lend3_1.vue'
import reg2 from './components/reg/reg2.vue'
import reg1 from './components/reg/reg1.vue'
import login from './components/login.vue'
import register from './components/register.vue'
import user from './components/user.vue'
import userMore from './components/userMore.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/index',
      component: index
    },
    {
      path: '/lend',
      component: lend
    },
    {
      path: '/lend_top',
      component: lend_top
    },
    {
      path: '/lend1',
      component: lend1
    },
    {
      path: '/lend2',
      component: lend2
    },
    {
      path: '/lend3',
      component: lend3
    },
    {
      path: '/lend2_1',
      component: lend2_1
    },
    {
      path: '/lend3_1',
      component: lend3_1
    },
    {
      path: '/letter',
      component: letter
    },
    {
      path: '/reg',
      component: reg
    },
    {
      path: '/reg2',
      component: reg2
    },
    {
      path: '/reg1',
      component: reg1
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/userMore',
      component: userMore
    },
  ]
})