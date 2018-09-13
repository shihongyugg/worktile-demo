import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Xiashu from '../components/xiangmu/xiashu/xiashu'
import Wode from '../components/xiangmu/wode/wode'
import Myfz from '../components/xiangmu/wode/myfz/myfz'
import Huod from '../components/xiangmu/wode/myfz/huodong/huodong'
import Wanc from '../components/xiangmu/wode/myfz/wancheng/wancheng'



import Myfp from '../components/xiangmu/wode/myfp/myfp'
import Huod1 from '../components/xiangmu/wode/myfp/huodong/huodong'
import Wanc1 from '../components/xiangmu/wode/myfp/wancheng/wancheng'
import Mycy from '../components/xiangmu/wode/mycy/mycy'
import Huod2 from '../components/xiangmu/wode/mycy/huodong/huodong'
import Wanc2 from '../components/xiangmu/wode/mycy/wancheng/wancheng'
import Mycj from '../components/xiangmu/wode/mycj/mycj'
import Huod3 from '../components/xiangmu/wode/mycj/huodong/huodong'
import Wanc3 from '../components/xiangmu/wode/mycj/wancheng/wancheng'
import Yier from '../components/xiangmu/yier/yier'
import Peizhi from '../components/xiangmu/paizhi/paizhi'
import Xm from '../components/xiangmu/paizhi/xiang/xiang'
import Muban from '../components/xiangmu/paizhi/xiang/muban/muban'
import Zujian from '../components/xiangmu/paizhi/xiang/zujian/zujian'
import Baobiao from '../components/xiangmu/paizhi/xiang/baobiao/baobiao'
import Rw from '../components/xiangmu/paizhi/ren/ren'

import Type from '../components/xiangmu/paizhi/ren/type/type'
import Zhuangtai from '../components/xiangmu/paizhi/ren/zhuangtai/zhuangtai'
import Shuxing from '../components/xiangmu/paizhi/ren/shuxing/shuxing'
import Shujv from '../components/xiangmu/paizhi/ren/shujv/shujv'
import Biaoqian from '../components/xiangmu/paizhi/ren/biaoqian/biaoqian'
import Youxian from '../components/xiangmu/paizhi/ren/youxian/youxian'
import Aq from '../components/xiangmu/paizhi/an/an'

import Juese from '../components/xiangmu/paizhi/an/juese/juese'
import Anquan from '../components/xiangmu/paizhi/an/anquan/anquan'
import Quanxian from '../components/xiangmu/paizhi/an/quanxian/quanxian'
import Gj from '../components/xiangmu/paizhi/gao/gao'
import Tixing from '../components/xiangmu/paizhi/gao/tixing/tixing'
import Tongzhi from '../components/xiangmu/paizhi/gao/tongzhi/tongzhi'
import Shijian from '../components/xiangmu/paizhi/gao/shijian/shijian'
import Qj from '../components/xiangmu/paizhi/quan/quan'
import Gongzuo from '../components/xiangmu/paizhi/quan/gongzuo/gongzuo'

import Huishou from '../components/xiangmu/huishou/huishou'

export default ({
    xm:[
        {
            path:'/xiangmu/xiashu',
            name:'下属任务',
            component:Xiashu
        },
        {
            path:'/xiangmu/wode/',
            name:'我的任务',
            component:Wode,
            children:[
                {
                    path:'/xiangmu/wode/myfz/',
                    name:'我负责的',
                    component:Myfz,
                    children:[
                        {
                            path:'/xiangmu/wode/myfz/huodong/',
                            name:'活动任务',
                            component:Huod
                        },
                        {
                            path:'/xiangmu/wode/myfz/wancheng',
                            name:'完成任务',
                            component:Wanc
                        }
                    ],redirect:'/xiangmu/wode/myfz/huodong/'
                },
                {
                    path:'/xiangmu/wode/myfp',
                    name:'我分配的',
                    component:Myfp,
                    children:[
                        {
                            path:'/xiangmu/wode/myfp/huodong/',
                            name:'活动任务',
                            component:Huod1
                        },
                        {
                            path:'/xiangmu/wode/myfp/wancheng',
                            name:'完成任务',
                            component:Wanc1
                        }
                    ],redirect:'/xiangmu/wode/myfp/huodong/'
                },
                {
                    path:'/xiangmu/wode/mycy',
                    name:'我参与的',
                    component:Mycy,
                    children:[
                        {
                            path:'/xiangmu/wode/mycy/huodong/',
                            name:'活动任务',
                            component:Huod2
                        },
                        {
                            path:'/xiangmu/wode/mycy/wancheng',
                            name:'完成任务',
                            component:Wanc2
                        }
                    ],redirect:'/xiangmu/wode/mycy/huodong/'
                },
                {
                    path:'/xiangmu/wode/mycj',
                    name:'我创建的',
                    component:Mycj,
                    children:[
                        {
                            path:'/xiangmu/wode/mycj/huodong/',
                            name:'活动任务',
                            component:Huod3
                        },
                        {
                            path:'/xiangmu/wode/mycj/wancheng',
                            name:'完成任务',
                            component:Wanc3
                        }
                    ],redirect:'/xiangmu/wode/mycj/huodong/'
                },
                {
                    path: '*',
                    redirect: '/xiangmu/wode/myfz'
                }
            ]
        },
        {
            path:'/xiangmu/yier',
            name:'123',
            component:Yier
        },
        {
            path:'/xiangmu/peizhi/',
            name:'配置中心',
            component:Peizhi,
            children:[
                {
                    path:'/xiangmu/peizhi/xiang/',
                    name:'项目',
                    component:Xm,
                    children:[
                        {
                            path:'/xiangmu/peizhi/xiang/muban/',
                            name:"项目模板",
                            component:Muban
                        },
                        {
                            path:'/xiangmu/peizhi/xiang/zujian',
                            name:"组件管理",
                            component:Zujian
                        },
                        {
                            path:'/xiangmu/peizhi/xiang/baobiao',
                            name:"报表管理",
                            component:Baobiao
                        },
                        {
                            path: '*',
                            redirect:'/xiangmu/peizhi/xiang/muban'
                        }
                        
                    ]
                },
                {
                    path:'/xiangmu/peizhi/ren/',
                    name:'任务',
                    component:Rw,
                    children:[
                        {
                            path:'/xiangmu/peizhi/ren/type/',
                            name:"任务类型",
                            component:Type
                        },
                        {
                            path:'/xiangmu/peizhi/ren/zhuangtai',
                            name:"状态管理",
                            component:Zhuangtai
                        },
                        {
                            path:'/xiangmu/peizhi/ren/shuxing',
                            name:"属性管理",
                            component:Shuxing
                        },
                        {
                            path:'/xiangmu/peizhi/ren/shujv',
                            name:"数据管理",
                            component:Shujv
                        },
                        {
                            path:'/xiangmu/peizhi/ren/biaoqian',
                            name:"标签管理",
                            component:Biaoqian
                        },
                        {
                            path:'/xiangmu/peizhi/ren/youxian',
                            name:"优先级管理",
                            component:Youxian
                        },
                        {
                            path: '*',
                            redirect:'/xiangmu/peizhi/ren/type'
                        }
                    ]
                },
                {
                    path:'/xiangmu/peizhi/an/',
                    name:'安全',
                    component:Aq,
                    children:[
                        {
                            path:'/xiangmu/peizhi/an/juese/',
                            name:'角色管理',
                            component:Juese
                        },
                        {
                            path:'/xiangmu/peizhi/an/anquan',
                            name:'安全管理',
                            component:Anquan
                        },
                        {
                            path:'/xiangmu/peizhi/an/quanxian',
                            name:'权限管理',
                            component:Quanxian
                        },
                        {
                            path: '*',
                            redirect:'/xiangmu/peizhi/an/juese'
                        }
                    ]
                },
                {
                    path:'/xiangmu/peizhi/gao/',
                    name:'高级',
                    component:Gj,
                    children:[
                        {
                            path:'/xiangmu/peizhi/gao/tixing/',
                            name:'提醒管理',
                            component:Tixing
                        },
                        {
                            path:'/xiangmu/peizhi/gao/tongzhi',
                            name:'通知管理',
                            component:Tongzhi
                        },
                        {
                            path:'/xiangmu/peizhi/gao/shijian',
                            name:'事件管理',
                            component:Shijian
                        },
                        {
                            path:'*',
                            redirect:'/xiangmu/peizhi/gao/tixing'    
                        }
                    ]
                },
                {
                    path:'/xiangmu/peizhi/quan/',
                    name:'全局',
                    component:Qj,
                    children:[
                        {
                            path:'/xiangmu/peizhi/quan/gongzuo/',
                            name:'工作组件',
                            component:Gongzuo
                        },
                        {
                            path: '*',
                            redirect: '/xiangmu/peizhi/quan/gongzuo'  
                        }
                    ]
                },
                {
                    path: '*',
                    redirect: '/xiangmu/peizhi/xiang/muban'  
                }
            ]
        },
        {
            path:'/xiangmu/huishou',
            name:'回收站',
            component:Huishou
        },
        {
            path: '*',
            redirect: '/xiangmu/wode/myfz'
        }
    ]
})
