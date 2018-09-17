import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/home'
import ElementTable from "@/components/eleTable"
import Template from '@/components/Template'
import DetailInfo from '@/components/detailInfo'

Vue.use(Router)

export default new Router({
  routes: [
//  {
//    path: '/',
//    name: 'home',
//    component: Home
//  },
    {
      path: '/',
      name: '首页',
      component: HelloWorld
    },
    {
      path: '/user',
      name: '用户管理',
      component: ElementTable,
    },
    {
        path: '/userInfo/:id',
        name: '用户详情页',
        component: DetailInfo
    },
    {
      path: '/psd',
      name: '密码管理',
      component: Template
    },
    {
      path: '/salary',
      name: '工资管理',
      component: Template
    },
    {
      path: '/attendence',
      name: '考勤管理',
      component: Template
    },
    {
      path: '/perform',
      name: '绩效管理',
      component: Template
    },
    {
      path: '/admin',
      name: '系统管理',
      component: Template
    },
    {
      path: '/feedback',
      name: '意见反馈',
      component: Template
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
