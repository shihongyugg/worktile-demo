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
// --------------------------------------------------------
import VCalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'
Vue.use(VCalendar,{
    firstDayOfWeek:1,
})
// --------------------------------------------------

// import './assets/iconfont/iconfont.css'
// ----------------------------------------------------


// -------------------------------------------------
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})


