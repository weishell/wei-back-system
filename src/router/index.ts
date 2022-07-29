import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'Home',
    redirect: 'index',
    meta: {
      name: '首页',
      icon: 'Document',
      index: '1'
    },
    component: Home,
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          name: '首页',
          index: '1.1'
        },
        component: () => import(/* webpackChunkName: "display" */ '../views/all/display/index.vue')
      },
      {
        path: '/localforage',
        name: 'Localforage',
        meta: {
          name: '本地存储',
          index: '1.2'
        },
        component: () => import(/* webpackChunkName: "localforage" */ '../views/all/localforage/index.vue')
      },
      {
        path: '/slot',
        name: 'Slot',
        meta: {
          name: '插槽',
          index: '1.3'
        },
        component: () => import(/* webpackChunkName: "slot" */ '../views/all/slot/index.vue')
      },
      {
        path: '/props',
        name: 'Props',
        meta: {
          name: '组件数据交互',
          index: '1.4'
        },
        component: () => import(/* webpackChunkName: "props" */ '../views/all/props/index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      name: '关于',
      icon: 'Cherry',
      index: '2'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      name: '登录',
      icon: 'CoffeeCup',
      index: '3'
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
