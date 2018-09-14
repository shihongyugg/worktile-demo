<template>
    <div class="Xia">
        <div class="pic">
            <div class="X_tit">
                <span><i class="iconfont icon-xiashurenwu-"></i>下属任务</span>
            </div>
            <div class="X_wrap">
                <div class="X_center">
                    <img src="https://cdn.worktile.com/pro/image/app/mission/coming_soon.png" alt="">
                    <p>新功能正在开发中，敬请期待。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            img:"src/assets/desktop-5.jpg"
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
    .X_tit{
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #eee;
        background: #fff;
        line-height: 50px;
        color: #333;
        font-size: 14px;
    }
    .X_tit span{
        padding: 0 15px;
        display: inline-block;
    }
    .X_wrap{
        margin: 15px;
        width: calc(100% - 30px);
        height: calc(100% - 30px);
        background: #fff;
        position: relative;
    }
    .X_wrap .X_center{
        height: 335px;
        width: 100%;
        text-align: center;
        position: absolute;
        top:50%;
        margin-top:-165px;
        left:0;
    }
    .X_center img{
        width: 24%;
    }
    .X_center p{
        margin: 40px 0 12px;
        color:#333;
        font-size: 14px;
    }
    .icon-xiashurenwu-{
        vertical-align: middle;
        font-weight: 400;
        margin-right:5px;
        color:#22d7bb;
    }
</style>
