<template>
    <div class="yier">
        <div class="Y_title">
            <span><i class="iconfont icon-wenjian1"></i></span>
            <p>项目不存在或者没有权限查看</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style style="scss" scoped>
    .yier{
        width: calc(100% - 30px);
        height: calc(100% - 30px);
        background:#fff;
        margin: 15px; 
    }
    .yier .Y_title{
        padding-top:240px;
    }
    .yier .Y_title span{
        display: block;
        text-align: center;
    }
    .yier .Y_title i{
        font-size:64px;
        color:#ddd;
    }
    .yier p{
       text-align: center;
        color: #cacaca;
        font-size: 14px;
    }
    .icon-woderenwu1{
        vertical-align: middle;
        font-weight: 400;
        margin-right:5px;
        color:#22d7bb;
    }
</style>
