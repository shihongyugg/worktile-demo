<template>
    <div class="Xnim">
        <div class="Xnim_tit">
            <!-- <a href="javascript:" class="a_link">活动任务</a>
            <a href="javascript:">完成任务</a>
            <a href="javascript:">报表管理</a> -->
            <router-link v-for="(X,index) of Xlist" :to="X.url" class="a_link">{{X.title}}</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
           Xlist:[
               {
                   title:"提醒管理",
                   url:"/xiangmu/peizhi/gao/tixing"
               },
               {
                   title:"通知管理",
                   url:"/xiangmu/peizhi/gao/tongzhi"
               },
               {
                   title:"事件管理",
                   url:"/xiangmu/peizhi/gao/shijian"
               }
           ]
        }
    }
}
</script>

<style style="scss" scoped>
    .Xnim_tit{
        line-height: 38px;
        font-size: 13px;
        
    }
    .Xnim_tit .a_link{
        position: relative;
        padding-left: 20px;
        margin-right: 40px;
    }
    .Xnim_tit a{
        color:#888;
    }
    .Xnim_tit a:hover{
        color:#22d7bb;
    }
    .Xnim_tit .a_link:after{
        width: 0;
        content: "";
        border-right: 1px solid #eee;
        top: calc(50% - 15px / 2);
        height: 15px;
        display: block;
        position: absolute;
        right: -20px;
    }
    .Xnim_tit a:nth-child(3):after{
        height:0px;
    }
    .Xnim_tit .router-link-active{
        background: 0 0;
        color:#22d7bb;
    }
</style>

