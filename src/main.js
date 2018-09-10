import "babel-polyfill"
import Vue from 'vue'
import App from './App.vue'
// ----------------------------------------------------------------
import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex)

// --------------------------------------------------------------
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// --------------------------------------------------------------------

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'//router/index.js
// -------------------------------------------------------------


new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})


