<template>
    <div style="height:100%">
        <div class="M_tit">
            <span><i class="iconfont icon-woderenwu1"></i>我的任务</span>
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
                   title:"我负责的",
                   url:"/xiangmu/wode/myfz/"
                },
                {
                   title:"我分配的",
                   url:"/xiangmu/wode/myfp"
                },
                {
                   title:"我参与的",
                   url:"/xiangmu/wode/mycy"
                },
                {
                   title:"我创建的",
                   url:"/xiangmu/wode/mycj"
                }
            ]
        }
    }
}
</script>

<style style="scss" scoped>
    .M_tit{
        height: 50px;
        padding: 0 15px;
        border-bottom: 1px solid #eee;
        background: #fff;
        line-height: 50px;
        color: #333;
        font-size: 15px;
    }
    .M_tit span{
        float: left;
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
        padding: 0 10px 0px 10px;
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
    .icon-woderenwu1{
        vertical-align: middle;
        font-weight: 400;
        margin-right:5px;
        color:#22d7bb;
    }
</style>
