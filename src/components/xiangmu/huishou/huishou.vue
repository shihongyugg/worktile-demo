<template>
    <div class="Xia">
        <div class="pic">
            <div class="X_tit">
                <span><i class="iconfont icon-huishouzhan"></i>回收站</span>
            </div>
            <div class="yier">
                <div class="Y_title">
                    <span><i class="iconfont icon-wenjian1"></i></span>
                    <p>没有任务</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>

<style style="scss" scoped>
    .Xia{
        width: 100%;
        height: 100%;
    }
    .pic{
        width:100%;
        height: 100%;
        background-size: cover;
        background-position: -160px 58px;
    }
    .icon-huishouzhan{
        padding-right:5px;
        color: #22d7bb;
    }
    .X_tit{
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #eee;
        background: #fff;
        line-height: 50px;
        color: #333;
        font-size: 15px;
    }
    .X_tit span{
        padding: 0 15px;
        display: inline-block;
    }
    .yier{
        width: calc(100% - 30px);
        height:calc(100% - 30px);
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
        color: #eee;
        font-size: 64px;
    }
    .yier p{
       text-align: center;
        color: #cacaca;
        font-size: 14px;
    }
</style>
