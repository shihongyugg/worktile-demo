<template>
    <div>
        <div class="unread">
            <div class="unread_header">
                <div class="unread_header_l">
                   <img src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png" alt="">
                      <a href="">QWERTY
    </a>    
                </div>
                <div class="secondary-text"></div>
                <div class="unread_header_r">
                    <a href="">全部标记为已读</a>
                </div>
            </div>
            <!-- <ul>
                   <li v-for="item of tabNav" :class="{cur:item.title == $route.name}" >
              <router-link :to="item.url">{{item.title}}</router-link>
            </li>

            </ul> -->
        </div>
         <router-view></router-view>
    </div>
</template>

<script>
export default {
data () {
    return {
        // tabNav:[
        //   {
        //     title:"首页",
        //     url:'/xiaoxi/index/weidu'
        //   },
          
          
        // ]
    }
  }
}
</script>

<style lang='scss' scoped>
    .unread{
         width: 1056px;
        height: 100%;
        position: absolute;
        right: 0;
        background-color: #ddd;
    }
    .unread_header{
        height: 86px;
        background: rgba(253,253,253,.95);
    }
    .unread_header_l{
        width: 150px;
        height: 50px;
        line-height: 50px;
        padding-left: 12px;
        padding-top: 10px;
        float: left;
    }
    
    .unread_header_l a{
        padding-top: 9px;
        color: #000;
    }
 .secondary-text {
     width: 706px;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    line-height: 50px;
    padding: 0 10px;
    color: #aaa;
    border: 1px solid #000;
}
.unread_header_r{
    width: 206px;
    height: 50px;
    margin-right: 20px;
    line-height: 50px;
    float: right;
    right: 0;
}
.unread_header_r a{
        color: #22d7bb;
        font-size: 14px;
}
</style>
