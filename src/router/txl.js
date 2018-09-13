import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default ({
    txl: [
        {
            path: '/tongxunlu/rc',
            component: require('../components/tongxunlu/E_contact/rc/rc.vue').default,
            name: "日程助手",
        },
        {
            path: '/tongxunlu/wp',
            component: require('../components/tongxunlu/E_contact/wp/wp.vue').default,
            name: "网盘助手",
        },
        {
            path: '/tongxunlu/xm',
            component: require('../components/tongxunlu/E_contact/xm/xm.vue').default,
            name: "项目助手",
        },
        {
            path: '/tongxunlu/xt',
            component: require('../components/tongxunlu/E_contact/xt/xt.vue').default,
            name: "小特机器人",
        },
        {
            path: '/tongxunlu/M',
            component: require('../components/tongxunlu/E_contact/M/m.vue').default,
            name: "m",
        },
        {
            path: '/tongxunlu/:name1',
            component: require('../components/tongxunlu/E_contact/channels/123.vue').default,
            name: "qz123",
        },
        {
            path: '*',
            redirect: '/tongxunlu/M'
        }
    ]
})
