<template>
    <div class="Cy">
        <div class="Cy_tit">
            <router-link v-for="v of list" :to="v.url" class="a_link">{{v.title}}</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                   title:"活动任务",
                   url:"/xiangmu/wode/mycy/huodong/"
                },
                {
                   title:"完成任务",
                   url:"/xiangmu/wode/mycy/wancheng"
                }
            ]
        }
    }
}
</script>

<style style="scss" scoped>
    .Cy{
        height: 100%;
    }
    .Cy_tit{
        height: 38px;
        line-height: 38px;
        font-size: 14px;
        padding: 1px 15px;
        background-color: #fff;
    }
    .Cy_tit .a_link{
        position: relative;
        padding-left: 20px;
        margin-right: 40px;
        color:#333;
    }
    .Cy_tit .router-link-active{
        color:#22d7bb;
    }
    .Cy_tit a{
        color:#888;
    }
    .Cy_tit a:hover{
        color:#22d7bb;
    }
    .Cy_tit .a_link:after{
        width: 0;
        content: "";
        border-right: 1px solid #eee;
        top: calc(50% - 15px / 2);
        height: 15px;
        display: block;
        position: absolute;
        right: -20px;
    }
</style>
