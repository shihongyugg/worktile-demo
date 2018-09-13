<template>
    <div>
        <div class="unread">
            <div class="unread_header">
                <div class="unread_header_l">
                     <el-dropdown>
                    <span class="el-dropdown-link">
                        <img src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/calendar_24x24.png" alt="">
                    <a href="javascript:;">
                     企业公告<i class="el-icon-arrow-down el-icon--right"></i>
                     </a>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item> 置顶当前会话
        </el-dropdown-item>
                        <el-dropdown-item> 添加服务集成
        </el-dropdown-item>
                        <el-dropdown-item> 消息通知设置
        </el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="secondary-text">
    用于全企业成员发布公告</div>
                <div class="unread_header_r">
                   <i class="iconfont unread_i" @click="show1 = !show1">&#xe629;</i>

                </div>
                <transition name="fade">
                     <div class="slide-show" v-if="show1">
                        <div class="slide-header">
                            <h3  class="ng-binding ">成员</h3>
                            <a href="javascript:;" class="slide-close" >
                                <i class=" iconfont close-link" @click="show1 = !show1">&#xe617;</i>
                                </a>
                        </div>
                        <div class="slide-cont">
                            <div class="slide-info">
                                <img src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_80x80.png" alt="">
                            </div>
                            <div class="account-info-meta">
                                <span class="display_name ">小特机器人</span>
                                <lc-state state="vm.member.state"></lc-state>
                              <span class="member-meta" >机器人</span><!-- end ngIf: (vm.member | isBot) -->
                                <br>
                                <span class="name">@xiaote</span>
                            </div>
                            <dl class="account-ext ng-scope" ng-if="(vm.member.uid == global.config.botId)">
                                <div class="info-item">
                                    <span class="info-name ng-scope" translate="message.EMAIL">邮箱</span>
                                    <span class="info-text ng-binding">support@worktile.com</span>
                                </div>
                            </dl>
                        </div>
                     </div>
                </transition>

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
          show1:false,
        tabNav:[
          {
            title:"消息",
            url:'/xiaoxi/qi/news'
          },
          {
            title:"文件",
            url:'/xiaoxi/qi/files'
          },
          {
            title:"固定消息",
            url:'/xiaoxi/qi/fix'
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
         left: 0px;
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

.slide-show{
    box-shadow: 0 16px 24px 2px rgba(0,0,0,.04), 0 6px 30px 5px rgba(0,0,0,.08), 0 8px 10px -5px rgba(0,0,0,.12);
    position: fixed;
    right: 0;
    width: 350px;
    height: 100%;
    background: #fff;
    z-index: 1;
    transition: right .1s ease-in-out;
    flex-direction: column;
}
 .slide-header {
    height: 50px;
    padding: 0 20px;
    border-bottom: solid 1px #eee;
}
 .slide-header h3 {
    float: left;
    font-size: 16px;
    margin-top: 0;
    line-height: 50px;
    margin-bottom: 0;
    color: #333;
}
.slide-close {
    line-height: 50px;
    color: #ddd;
    float: right;
}

.close-link {
    color: #ddd;
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
}
.close-link:hover{
    color: #22d7bb;
}
.slide-info{
    padding: 25px 0;
}
 .slide-info img {
    width: 68px;
    height: 68px;
    line-height: 68px;
    font-size: 14px;
    border-radius: 38px;
    margin-left: 34px;
}
.account-info-meta {
    display: inline-block;
    vertical-align: middle;
    margin-left: 136px;
    margin-top: -146px;
}
 .display_name {
    color: #333;
    font-size: 16px;
    font-weight: 700;
    margin-right: 5px;
}
.member-meta {
    display: inline-block;
    background: #fff;
    padding: 2px 6px;
    border-radius: 3px;
    color: #8f8f8f;
    font-size: 12px;
}
 .name {
    color: #aaa;
    font-size: 12px;
    margin-top: 8px;
    display: inline-block;
}
 dl.account-ext {
    padding: 5px 10px;
    margin-bottom: 15px;
}
 dl.account-ext .info-item {
    padding: 10px;
    font-size: 14px;
}
 dl.account-ext .info-item .info-name {
    float: left;
    margin-left: 47px;
    color: #aaa;
}
 dl.account-ext .info-item .info-text {
    float: right;
    width: 190px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.unread_i{
    position: absolute;
   right: 57px;
    top: 17px;
    font-size: 24px;
    color: #ddd;
}
.unread_i:hover{
     color:#22d7bb;
}
</style>
