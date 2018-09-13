<template>
<div id="app">
    <div class="message_main">  
        <div class="m_main_pic"> 
             <div class="m_main_left">
                 <div class="m_left_header">
                     <span>
                         消息
                     </span>

                    <i class="iconfont m_i" @click="show1 = !show1">&#xe64e;</i>
                   <!-- 设置休眠时间 -->
                    <!-- <transition name="el-fade-in">
                          <div class="pop-menu" v-if="show1">
                            <span class="setting-title">设置休眠时间</span>
                            <ul>
                                <li><a href="javascript:;">10分钟</a></li>
                                <li><a href="javascript:;">20分钟</a></li>
                                <li><a href="javascript:;">1小时</a></li>
                                <li><a href="javascript:;">2小时</a></li>
                                <li><a href="javascript:;">4小时</a></li>
                                <li><a href="javascript:;">8小时</a></li>
                                <li><a href="javascript:;">24小时</a></li>
                                
                            </ul>
                          </div>
                    </transition> -->
                  
                 </div>
                 <div class="m_left_header_i">
                         <i class="iconfont h_font" @click="show2 = !show2">&#xe63e;</i>
                 </div>
                  <!-- <transition name="el-fade-in">
                          <div class="dropdown-menu" v-if="show2">
                            <ul>
                                <li>
                                    <a href="javascript:;">创建群组</a>
                                </li>
                                <li>
                                    <a href="javascript:;">加入群组</a>
                                </li>
                                <li>
                                    <a href="javascript:;">发起私聊</a>
                                </li>
                                <li>
                                    <a href="javascript:;">添加成员</a>
                                </li>
                            </ul>
                        </div>
                    </transition> -->
                
                 <div class="m_left_list">
                    <div class="search-area">
                        <i class="lcfont lc-search"></i>
                        <input type="text" placeholder="搜索成员、消息"> 
                    </div>
                        <ul>
                           <li v-for="item of tabNav" :class="{cur:item.title == $route.name}" >
                                <router-link :to="item.url">
                                    <div>
                                        <img :src="item.pic" alt="" >
                                    </div>
                                    <div class="m_name">{{item.title}}</div>
                                </router-link>
                                  <i class="iconfont i_font">&#xe617;</i>
                                  
                            </li>
                        </ul>
                   
                 </div>
                 
             </div>
        </div>
    </div>
       <router-view></router-view>
</div>
  
</template>

<script>
import '../../assets/font/iconfont.css'
export default {
    data () {
    return {
         show1:false,
         show2:false,
         
        tabNav:[
        {
            pic:"https://s3.cn-north-1.amazonaws.com.cn/lcavatar/mission_24x24.png",
            title:"项目助手",
            url:'/xiaoxi/index/'
          },
          {
              pic:"https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png",
            title:'小特机器人',
            url:'/xiaoxi/xiao'
          },
          {
              pic:"https://s3.cn-north-1.amazonaws.com.cn/lcavatar/calendar_24x24.png",
            title:'企业公告',
            url:'/xiaoxi/qi'
          },
       
          {
              pic:"https://s3.cn-north-1.amazonaws.com.cn/lcavatar/calendar_24x24.png",
            title:'日程助手',
            url:'/xiaoxi/r'
          },

      
        ]
    }
  },

}
</script>

<style lang='scss' scoped>
.m_i{
      color: #ddd;
    font-size: 20px;
    padding-top: 18px;
    position: absolute;
}
.h_font{
    color: #ddd;
    font-size: 24px;
    padding-top: 20px;
}
//设置休眠时间
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
.pop-menu {
    padding: 5px 0;
    position: absolute;
    bottom: 267px;
    left: 50px;
    z-index: 1;
    background: #fff;
}

.setting-title {
    color: #888;
    display: inline-block;
    margin: 16px 0 8px 20px;
}
.pop-menu a {
    padding: 4px 24px;
      display: block;
    line-height: 30px;
    color: #666;
    text-decoration: none;

}

.dropdown-menu {
   margin-top: -2px;
    min-width: 240px;
    position: absolute;
    z-index: 1000;
    padding: 5px 0;
    margin-left: 213px;
    background-color: #fff;
}
.dropdown-menu li {
    padding-top: 12px;
    font-size: 14px;
    padding: 0;
    margin: 0;
    display: block;
    -webkit-transition: background .2s;
    transition: background .2s;
}

.dropdown-menu li a {
    font-weight: 400;
    color: #666;
    padding: 12px 18px;
    -webkit-transition: padding-left .2s;
    display: block;
    padding: 3px 20px;
    line-height: 1.42857143;
}


.i_font{
   font-size: 12px;
    position: absolute;
    margin-top: -16px;
    margin-left: 185px;
    color: #aaa;
    display: none;
}
 .m_left_list ul li:hover .i_font{
    display: block;
 }
 .h_font{
     font-size: 16px;
     float: right;
     margin-right: 20px;
    margin-top: -50px;
 }
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
        position: fixed;
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
        outline: none;
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
    }
  .m_left_list ul li:hover{
        background: #e7f9f6;
        color: #22d7bb;
        border-right: 4px solid #22d7bb;
        box-shadow: 0 0 8px 2px #eee;
        background: 0 0;
    }
  .m_left_list ul li a{ 
        box-shadow: 0 0 8px 2px #eee;
        color: #666;
    }
     .m_left_list ul li a:hover{
        box-shadow: 0 0 8px 2px #eee;
        text-decoration: none;
     }
    .m_left_list ul li img{
        width: 24px;
        height: 24px;
        border-radius: 50px;
        // padding-left: 10px;
        margin-left: 10px;
    }
    .m_name{
        padding-left: 47px;
        margin-top: -27px;
    }

    </style>
