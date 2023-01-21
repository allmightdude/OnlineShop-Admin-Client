import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c51c4940 = () => interopDefault(import('..\\pages\\address\\index.vue' /* webpackChunkName: "pages/address/index" */))
const _74398b22 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _bb28f552 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _43f155e7 = () => interopDefault(import('..\\pages\\orders.vue' /* webpackChunkName: "pages/orders" */))
const _4a6493f4 = () => interopDefault(import('..\\pages\\payment.vue' /* webpackChunkName: "pages/payment" */))
const _979210ae = () => interopDefault(import('..\\pages\\placeorder.vue' /* webpackChunkName: "pages/placeorder" */))
const _9e673bd2 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _1141dacc = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _1c791da2 = () => interopDefault(import('..\\pages\\address\\add.vue' /* webpackChunkName: "pages/address/add" */))
const _df019470 = () => interopDefault(import('..\\pages\\address\\_id.vue' /* webpackChunkName: "pages/address/_id" */))
const _6e167678 = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _90cbccfe = () => interopDefault(import('..\\pages\\reviews\\_id.vue' /* webpackChunkName: "pages/reviews/_id" */))
const _4e783b80 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/address",
    component: _c51c4940,
    name: "address"
  }, {
    path: "/cart",
    component: _74398b22,
    name: "cart"
  }, {
    path: "/login",
    component: _bb28f552,
    name: "login"
  }, {
    path: "/orders",
    component: _43f155e7,
    name: "orders"
  }, {
    path: "/payment",
    component: _4a6493f4,
    name: "payment"
  }, {
    path: "/placeorder",
    component: _979210ae,
    name: "placeorder"
  }, {
    path: "/profile",
    component: _9e673bd2,
    name: "profile"
  }, {
    path: "/signup",
    component: _1141dacc,
    name: "signup"
  }, {
    path: "/address/add",
    component: _1c791da2,
    name: "address-add"
  }, {
    path: "/address/:id",
    component: _df019470,
    name: "address-id"
  }, {
    path: "/products/:id?",
    component: _6e167678,
    name: "products-id"
  }, {
    path: "/reviews/:id?",
    component: _90cbccfe,
    name: "reviews-id"
  }, {
    path: "/",
    component: _4e783b80,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
