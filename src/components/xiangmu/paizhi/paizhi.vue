<template>
    <div style="height:100%">
        <div class="M_tit">
            <span><i class="iconfont icon-shezhi"></i>配置中心<i class="iconfont icon-iconset0143"></i></span>
            <div class="M_top">
                <router-link v-for="v of Mlist" :to="v.url">{{v.title}}</router-link>
            </div>
            
        </div>
        <div class="M_down">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            Mlist:[
                {
                   title:"项目",
                   url:"/xiangmu/peizhi/xiang/"
                },
                {
                   title:"任务",
                   url:"/xiangmu/peizhi/ren/"
                },
                {
                   title:"安全",
                   url:"/xiangmu/peizhi/an/"
                },
                {
                   title:"高级",
                   url:"/xiangmu/peizhi/gao/"
                },
                {
                   title:"全局",
                    url:"/xiangmu/peizhi/quan/"
                }
            ]
        }
    }
}
</script>

<style style="scss" scoped>
    .icon-iconset0143{
        /* position: absolute; */
        /* top:0; */
        /* left:0;  */
        margin-left:5px;
        vertical-align: middle;
    }
    .M_tit{
        height: 50px;
        padding: 0 15px;
        border-bottom: 1px solid #eee;
        background: #fff;
        line-height: 50px;
        color: #333;
        font-size: 15px;
        padding: 1px 15px;
    }
    .M_tit span{
        float: left;
    }
    .icon-shezhi{
        color: #22d7bb;
        vertical-align: middle;
        font-weight: 600;
        margin-right:5px;
    }
    .M_tit .M_top{
        display: flex;
        flex:auto;
        justify-content: center;
    }
    .M_top a{
        margin-right: 20px;
        display: inline-block;
        font-size:14px;
        padding: 0 24px 0px 25px;
        color:#333;
    }
    .M_top .router-link-active{
        background:0 0;
        color: #22d7bb;
        border-bottom: 2px solid #22d7bb;
    }
    .M_down{
        height:100%;
    }
</style>

