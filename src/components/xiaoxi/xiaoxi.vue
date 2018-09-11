<template>
<div>
    <div class="message_main">  
        <div class="m_main_pic"> 
             <div class="m_main_left">
                 <div class="m_left_header">
                     <span>
                         消息
                     </span>

                 </div>
                 <div class="m_left_list">
                    <div class="search-area">
                        <i class="lcfont lc-search"></i>
                        <input type="text" placeholder="搜索成员、消息"> 
                    </div>
                        <ul>
                           <li v-for="item of tabNav" :class="{cur:item.title == $route.name}" >
                                <router-link :to="item.url">
                                    <div>
                                        <img :src="item.pic" alt="">
                                    </div>
                                    <div class="m_name">{{item.title}}</div>
                                </router-link>
                            </li>
                        </ul>
                   
                 </div>
                 <!-- <div class="m_left_right">

                 </div> -->
             </div>
        </div>
    </div>
       <router-view></router-view>
</div>
  
</template>

<script>
export default {
    data () {
    return {
        tabNav:[
        {
            pic:"https://s3.cn-north-1.amazonaws.com.cn/lcavatar/mission_24x24.png",
            title:"网盘助手",
            url:'/xiaoxi/index/'
          },
          {
              pic:"https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png",
            title:'小特机器人',
            url:'/xiaoxi/xiao'
          },
          {
              pic:"https://s3.cn-north-1.amazonaws.com.cn/lcavatar/mission_24x24.png",
            title:'企业公告',
            url:'/xiaoxi/qi'
          },
          {
              pic:"https://s3.cn-north-1.amazonaws.com.cn/lcavatar/mission_24x24.png",
            title:'QWERTY',
            url:'/xiaoxi/qwerty'
          },
          {
              pic:"https://s3.cn-north-1.amazonaws.com.cn/lcavatar/calendar_24x24.png",
            title:'日程助手',
            url:'/xiaoxi/r'
          },
        {
        //如果用户随便输入地址,转到首页
        path: '*',
        redirect: '/xiaoxi/index'
        }

      
        ]
    }
  },

}
</script>

<style lang='scss' scoped>

    .message_main{
        overflow: hidden;
        width: 1296px;
        height: 100%;
        position: absolute;
        background-color:#eee;
        margin-left: 70px;
    }
    .m_main_pic{
      width: 100%;
      height: 100%;
     background: url(https://cdn.worktile.com/pro/image/app/desktop.background/desktop-6.jpg?v=7.0.3+20180830) 0% 0% / cover;
    }
    .m_main_left{
        width: 240px;
        height:100%;
        background-color: #fff;
        float: left;
    }
    .m_left_header{
        height: 50px;
    }
    .m_left_header span{
        float: left;
        margin: 0 20px;
        color: #333;
        line-height: 50px;
        font-size: 16px;
        }
   .search-area{
       padding: 0 20px 10px;
        position: relative;
   }
   .search-area input {
        background: #f3f3f3;
        -webkit-box-shadow: none;
        box-shadow: none;
        color: #666;
        height: 36px;
        font-size: 14px;
        padding-left: 28px;
        border-radius: 20px;
        border: 1px solid transparent;
    }
    .search-area input:hover{
        background-color: #fff;
    }
    .m_left_list ul{
        margin-top: 10px;
    }
    .m_left_list ul li{
        background: #fff;
        color: #22d7bb;
        padding: 14px 0 11px 30px;
        font-size: 14px;
        cursor: pointer;
         margin-left: -17px;
    }
  .m_left_list ul li:hover{
           background: #e7f9f6;
        color: #22d7bb;
        border-right: 4px solid #22d7bb;
        box-shadow: 0 0 8px 2px #eee;
    }
  .m_left_list ul li a{
         
        color: #666;
      
    }
    .m_left_list ul li img{
        width: 24px;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        border-radius: 24px;
        padding-left: 10px;
    }
    .m_name{
        padding-left: 47px;
        margin-top: -27px;
    }
  
    </style>
