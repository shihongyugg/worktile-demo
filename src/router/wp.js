import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default ({
    wp:[
        {
            path:'/wangpan/qywangpan',
            component:require('../components/wangpan/qywangpan/qywangpan.vue').default,
            name:'企业网盘',
            children:[
                {
                    path:'/wangpan/qywangpan/gongsizhidu',
                    component:require('../components/wangpan/qywangpan/gongsizhidu/gongsizhidu.vue').default,
                    name:'公司制度'
                },
                {
                    path:'/wangpan/qywangpan/ziliaogongxiang',
                    component:require('../components/wangpan/qywangpan/ziliaogongxiang/ziliaogongxiang.vue').default,
                    name:'资料共享'   
                },
                {
                    path:'/wangpan/qywangpan/quexianguanli',
                    component:require('../components/wangpan/qywangpan/quexianguanli/quexianguanli.vue').default,
                    name:'缺陷管理'   
                },
            ]
        }, 
        {
            path:'/wangpan/gerenwangpan',
            component:require('../components/wangpan/gerenwangpan/gerenwangpan.vue').default,
            name:'个人网盘',
            children:[
                {
                    path:'/wangpan/gerenwangpan/preson',
                    component:require('../components/wangpan/gerenwangpan/preson/preson.vue').default,
                    name:'preson'
                }
            ]
        }, 
        {
            path:'/wangpan/chengyuan',
            component:require('../components/wangpan/chengyuan/chengyuan.vue').default,
            name:'成员'
        }, 
        {
            path:'/wangpan/biaoqian',
            component:require('../components/wangpan/biaoqian/biaoqian.vue').default,
            name:'标签'
        }, 
        {
            path:'/wangpan/yuwogongxiang',
            component:require('../components/wangpan/yuwogongxiang/yuwogongxiang.vue').default,
            name:'与我共享'
        }, 
        {
            path:'/wangpan/huishouzhan',
            component:require('../components/wangpan/huishouzhan/huishouzhan.vue').default,
            name:'回收站'
        },
        {
            //如果用户随便输入地址,转到首页
            path: '*',
            redirect: '/qywangpan'
        }     
    ]
})
