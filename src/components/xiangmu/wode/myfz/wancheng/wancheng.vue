<template>
    <div class="box">
        <div class="b_center"><i class="iconfont icon-fuzhi"></i>
        <p>没有任务</p></div>
    </div>
</template>

<script>
export default {

}
</script>

<style style="scss" scoped>
    .box{
        margin:15px;
        height: calc(100% - 120px);
        width:calc(100% - 30px) ;
        background-color: #fff;
        position: relative;
    }
    .b_center{
        text-align: center;
        position: absolute;
        top:50%;
        left:50%;
        margin-top:-50px;
    }
    .b_center .iconfont{
        color:#ddd;
        font-size: 64px;
    }
    .b_center p{
        color: #cacaca;
        font-size:12px;
    }
</style>
