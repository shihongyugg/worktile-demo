import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Anquan from '../components/home/anquan/anquan'
import Gaoji from '../components/home/gaoji/gaoji'
import Quanju from '../components/home/quanju/quanju'
import Renwu from '../components/home/renwu/renwu'
import Xiangmu from '../components/home/xiangmu/xiangmu'

export default new Router({
    routes: [{
            path: '/anquan',
            component: Anquan,
            name: '安全'
        }, {
            path: '/xiangmu',
            component: Xiangmu,
            name: '项目'
        },{
            path: '/renwu',
            component: Renwu,
            name: '任务'
        }, {
            path: '/gaoji',
            component: Gaoji,
            name: '高级'
        },{
          path: '/quanju/:id',
          name:'quanju',
          component: Quanju,
          
      },{
        //如果用户随便输入地址,转到首页
        path: '*',
        redirect: '/xiangmu'
    }

        
    ]
})
