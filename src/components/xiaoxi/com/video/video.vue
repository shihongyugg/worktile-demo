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
                        <ul>
                           <li v-for="item of tabNav" :class="{cur:item.title == $route.name}" @click="routerGo(item.url)">
                            {{item.title}}
                            </li>
                        </ul>
                    </div>
                 </div>
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
            title:"首页",
            url:'/index'
          },
          {
            title:'新闻',
            url:'/news'
          },
          {
            title:'视频',
            url:'/video'
          },
          
        ]
    }
  },

}
</script>

<style lang='scss' scoped>
    .message_main{
        width: 1296px;
        height: 100%;
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
        height:auto;
        background-color: pink;
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
</style>
