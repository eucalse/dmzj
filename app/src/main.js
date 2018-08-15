// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// import 'bootstrap/dist/js/bootstrap.min'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    index: 2
  },
  mutations: {
    getContent (state, n) {
      state.index = n
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
