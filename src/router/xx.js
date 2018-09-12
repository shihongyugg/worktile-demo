import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
 
import I from '../components/xiaoxi/com/index/index.vue'
import Xiao from '../components/xiaoxi/com/xiao/xiao.vue'

import Qi from '../components/xiaoxi/com/qi/qi.vue'
import Qwerty from '../components/xiaoxi/com/qwerty/qwerty.vue'
import R from '../components/xiaoxi/com/r/r.vue'

import Weidu from '../components/xiaoxi/com/index/weidu/weidu.vue'
import Yidu from '../components/xiaoxi/com/index/yidu/yidu.vue'
import Dai from '../components/xiaoxi/com/index/dai/dai.vue'

import News from '../components/xiaoxi/com/xiao/news/news.vue'
import Files from '../components/xiaoxi/com/xiao/files/files.vue'
import Fix from '../components/xiaoxi/com/xiao/fix/fix.vue'

import Newsqi from '../components/xiaoxi/com/qi/news/news.vue'
import Filesqi from '../components/xiaoxi/com/qi/files/files.vue'
import Fixqi from '../components/xiaoxi/com/qi/fix/fix.vue'

import Newsr from '../components/xiaoxi/com/r/weidu/weidu.vue'
import Filesr from '../components/xiaoxi/com/r/yidu/yidu.vue'
import Fixr from '../components/xiaoxi/com/r/dai/dai.vue'
export default ({
    xx:[
        {
            path:'/xiaoxi/index',
            component:I,
            name:'项目助手',
            children:[
                     {
                        path:'/xiaoxi/index/weidu',
                        component:Weidu,
                        name:'项目助手未读'
                      },
                      {
                        path:'/xiaoxi/index/yidu',
                        component:Yidu,
                        name:'项目助手已读'
                      },
                      {
                        path:'/xiaoxi/index/dai',
                        component:Dai,
                        name:'项目助手待处理'
                      },
                      {
                        //如果用户随便输入地址,转到首页
                            path: '/xiaoxi/index/',
                            redirect: '/xiaoxi/index/weidu'
                        }
            ]
          },
          {
            path:'/xiaoxi/xiao',
            component:Xiao,
            name:'小特机器人', 
            children:[
                {
                   path:'/xiaoxi/xiao/news',
                   component:News,
                   name:'小特机器人消息'
                 },
                 {  
                   path:'/xiaoxi/xiao/files',
                   component:Files,
                   name:'小特机器人文件'
                 },
                 {
                   path:'/xiaoxi/xiao/fix',
                   component:Fix,
                   name:'小特机器人固定消息'
                 },
                 {
                  //如果用户随便输入地址,转到首页
                      path: '/xiaoxi/xiao/',
                      redirect: '/xiaoxi/xiao/news'
                  }
       ]
          },
          {
            path:'/xiaoxi/qi',
            component:Qi,
            name:'企业公告', 
            children:[
              {
                 path:'/xiaoxi/qi/news',
                 component:Newsqi,
                 name:'企业公告消息'
               },
               {  
                 path:'/xiaoxi/qi/files',
                 component:Filesqi,
                 name:'企业公告文件'
               },
               {
                 path:'/xiaoxi/qi/fix',
                 component:Fixqi,
                 name:'企业公告固定消息'
               },
               {
                //如果用户随便输入地址,转到首页
                    path: '/xiaoxi/qi/',
                    redirect: '/xiaoxi/qi/news'
                }
     ]
          },
          {
            path:'/xiaoxi/qwerty',
            component:Qwerty,
            name:'qwerty', 
          },
          {
            path:'/xiaoxi/r',
            component:R,
            name:'日程助手', 
            children:[
              {
                 path:'/xiaoxi/r/weidu',
                 component:Newsr,
                 name:'日程助手未读'
               },
               {  
                 path:'/xiaoxi/r/yidu',
                 component:Filesr,
                 name:'日程助手已读'
               },
               {
                 path:'/xiaoxi/r/dai',
                 component:Fixr,
                 name:'日程助手待处理'
               },
               {
                //如果用户随便输入地址,转到首页
                    path: '/xiaoxi/r/',
                    redirect: '/xiaoxi/r/weidu'
                }
     ]
          },
         
          {
            //如果用户随便输入地址,转到首页
                path: '/xiaoxi/index/',
                redirect: '/xiaoxi/index/yidu'
            }
        
    ],
    
})


