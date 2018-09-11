import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
 
import I from '../components/xiaoxi/com/index/index.vue'
import Xiao from '../components/xiaoxi/com/xiao/xiao.vue'

import Qi from '../components/xiaoxi/com/qi/qi.vue'
import Qwerty from '../components/xiaoxi/com/qwerty/qwerty.vue'
import R from '../components/xiaoxi/com/r/r.vue'

import Weidu from '../components/xiaoxi/com/index/weidu/weidu.vue'
export default ({
    xx:[
        {
            path:'/xiaoxi/index',
            component:I,
            name:'index',
            children:[
                     {
                        path:'/xiaoxi/index/weidu',
                        component:Weidu,
                        name:'我是新闻页'
                      },
            ]
          },
          {
            path:'/xiaoxi/xiao',
            component:Xiao,
            name:'xiao', 
          },
          {
            path:'/xiaoxi/qi',
            component:Qi,
            name:'qi', 
          },
          {
            path:'/xiaoxi/qwerty',
            component:Qwerty,
            name:'qwerty', 
          },
          {
            path:'/xiaoxi/r',
            component:R,
            name:'r', 
          },
          {
            //如果用户随便输入地址,转到首页
            path: '*',
            redirect: '/xiaoxi/index'
            }
        //   {
        //     path:'/xiaoxi/components/index',
        //     component:require('./xiaoxi./components/xiaoxi/xiaoxi.vue').default,
        //     name:'欧美视频'
        //   },
        
    ]
})
