<template>
    <div class='contact-detail-area'>
        <div class="title">
            <span class='channel-icon'>
                <i class='iconfont  icon-chengyuan'></i>
            </span> 
            <span class="name">123</span>
            <span class="num">1人</span>
        </div>
        <div class='profile-robot-wrapper'>
            
        </div>   
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .contact-detail-area{
        width: calc(100% - 311px);
        overflow: hidden;
         float: right;
        overflow: hidden;
        box-sizing: border-box;
        background:url(../../../assets/desktop-5.jpg);
        background-size:cover;
        height: 100%;
    }
    .profile-robot-wrapper{
        /* width: 100%; */
        height: 100%;
        background: rgba(255,255,255,.97);
        padding: 15px;
    }
    .title{
        width: 100%;
        display: block;
        height: 50px;
        margin: 0;
        padding: 0 15px;
        position: relative;
        background: rgba(253,253,253,.95);
    }
    .channel-icon{
        width: 24px;
        height: 24px;
        background-color: rgb(239, 126, 222);
        display: inline-block;
        text-align: center;
        margin-top: 10px;
        border-radius: 50%;
        font-size: 12px;
        color:#fff;
        line-height: 23px;
        
    }
    .num{
        color: #aaa;
    }
</style>
