<template>
    <div>
        <div class="unread">
            <div class="unread_header">
                <div class="unread_header_l">
                    <img src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png" alt="">
                    <a href="javascript:;">
                     小特机器人</a>
                </div>
                <div class="secondary-text">
    @xiaote</div>
                <!-- <div class="unread_header_r">
                    <a href="">全部标记为已读</a>
                </div> -->
                <div class="h_m">
                    <ul class="nav-pills">
                        <li v-for="item of tabNav" :class="{cur:item.title == $route.name}" >
                            <router-link :to="item.url">{{item.title}}</router-link>
                        </li>

                    </ul>
                </div>
               
            </div>
           <!-- <div class="unread_cont"> -->
                <!-- <div class="channel-meta ">
                    <span class="ng-scope">这里是你和机器人</span>
                    <a href="javascript:;">小特机器人</a>
                    <span class="ng-scope">的私聊，在当前对话中发送的消息只有你自己可以访问，其他成员无法看到。</span>
                </div> -->
           <!-- </div> -->
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
            title:"消息",
            url:'/xiaoxi/xiao/news'
          },
          {
            title:"文件",
            url:'/xiaoxi/xiao/files'
          },
          {
            title:"固定消息",
            url:'/xiaoxi/xiao/fix'
          },
          
        ]
    }
  }
}
</script>

<style lang='scss' scoped>
     .nav-pills li.cur {
        color:#22d7bb;
     }
    .unread{
         width: 1056px;
        height: 100%;
        position: absolute;
        right: 0;
    }
    .unread_header{
        height: 86px;
        background: rgba(253,253,253,.95);
    }
    .unread_header_l{
        width: 120px;
        height: 50px;
        line-height: 50px;
        padding-left: 12px;
        float: left;
    }
    .unread_header_l img{
        position: absolute;
         top: 12px;
         left: 17px;
         width: 24px;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        border-radius: 24px;
    }
    .unread_header_l a{
       padding-left: 32px;
        color: #000;
    }
 .secondary-text {
     width: 800px;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    line-height: 50px;
    padding: 0 10px;
    color: #aaa;
   height: 50px;
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
.nav-pills{
    margin-bottom: 20px;
    padding: 0 20px;
    border-bottom: 1px solid #eee;
}
.nav-pills>li {
    width: 102px;
    height: 37px;
    float: left;
   text-align: center;
}
.nav-pills>li>a{
     background-color: #fff;
}
.nav-pills li:hover{
    border-bottom: solid 2px #22d7bb;
    text-align: center;
     background: 0 0;
    color: #22d7bb;
}

.nav-pills a{
    color: #000;
    font-size: 14px;
}


</style>
