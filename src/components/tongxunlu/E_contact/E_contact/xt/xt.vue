<template>
    <div class='contact-detail-area'>
        <div class='profile-robot-wrapper'>
            <div class='body-content'>
                <div class='profile-detail-header'>
                    <img src="../../../assets/381df779-62e6-49de-8792-620b94a5582d_160x160.png" alt="">
                    <h2>日程助手</h2>
                    <p class="username">@xiaote</p>
                </div>
                <div class='profile-detail-body'>
                    <span class="title">
                        简介
                    </span>
                    <div class="content">
                        暂无
                    </div>
                </div>
                <div class="btn">
                    <button>发消息</button>
                </div>
            </div>
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
        padding: 15px;
        height: 100%;
        overflow: hidden;
        
        float: right;
        overflow: hidden;
        box-sizing: border-box;
        background:url(../../../assets/desktop-5.jpg);
        background-size:cover;
    }
    .profile-robot-wrapper{
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,.97);
    }
    .body-content{
        margin: 0 auto;
        padding-top: 80px;
        box-sizing: border-box;
        width: 660px;
    }
    .profile-detail-header{
        text-align: center;
    }
    .profile-detail-header img{
        width: 160px;
        height: 160px;
        line-height: 160px;
        font-size: 50px;
        border-radius: 160px
    }
    .profile-detail-header h2{
        color:#666;
        margin-top: 10px;
    } 
    .profile-detail-header .username{
        color: #888;
        font-size: 16px;
        margin: 20px 0;
    }
    .profile-detail-body{
        padding: 30px 0;
        border-top: 1px solid #eee;
    }
    .profile-detail-body .title{
        float: left;
        width: 145px;
        font-weight: 700;
        text-align: right;
        color: #aaa;
    }
    .profile-detail-body .content{
        float: left;
        margin-left: 45px;
        width: 300px;
        font-size: 15px;
        color: #666;
    }
    .btn{
        text-align: center;
        margin-top: 50px;
    }
    .btn button{
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
        cursor: pointer;
        padding: .5rem 2.215rem;
        font-size: 1.25rem;
        line-height: 1.5;
        min-width: 108px;
        border-radius: 1.25rem;
        outline: none;
        border:none;
    }
</style>
