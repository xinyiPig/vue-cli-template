// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import promise from 'es6-promise'
import ElementUI from 'element-ui'
// vuex
import store from '@/store/store.js'
import './common/js/axios_set'
import 'element-ui/lib/theme-chalk/index.css'
promise.polyfill()
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
