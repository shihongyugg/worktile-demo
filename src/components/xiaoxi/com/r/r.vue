<template>
    <div>
        <div class="unread">
            <div class="unread_header">
                <div class="unread_header_l">
                     <el-dropdown>
                    <span class="el-dropdown-link">
                        <img src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/calendar_24x24.png" alt="">
                    <a href="javascript:;">
                     日程助手<i class="el-icon-arrow-down el-icon--right"></i>
                     </a>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item> 置顶当前会话</el-dropdown-item>
                        <el-dropdown-item> 设置 </el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="secondary-text"></div>
                <div class="unread_header_r">
                    <a href="">全部标记为已读</a>
                </div>
                <div class="h_m">
                    <ul class="nav-pills">
                        <li v-for="item of tabNav" :class="{cur:item.title == $route.name}" >
                            <router-link :to="item.url">{{item.title}}</router-link>
                        </li>

                    </ul>
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
            title:"未读",
            url:'/xiaoxi/r/weidu'
          },
          {
            title:"已读",
            url:'/xiaoxi/r/yidu'
          },
          {
            title:"待处理",
            url:'/xiaoxi/r/dai'
          },
          
        ]
    }
  }
}
</script>

<style lang='scss' scoped>

    .unread{
       width:calc(100% - 310px);
        height: 100%;
        float: left;
        position: relative;
        left: 236px;
    }
    .unread_header{
        height: 86px;

        background: rgba(253,253,253,.95);
    }
    .unread_header_l{
        width: 109px;
        height: 50px;
        line-height: 50px;
        padding-left: 12px;
        float: left;
    }
    .unread_header_l img{
        position: absolute;
        top: 10px;
    }
    .unread_header_l a{
       padding-left: 32px;
        color: #000;
    }
 .secondary-text {
    width: 600px;
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
.unread_cont{
    width:calc(100% - 310px);
    height: 80%;
    overflow: auto;
    position: absolute;
    margin-top: 20px;
    left: 20px;
    right: 10px;
    background-color: #fff;
}


</style>
