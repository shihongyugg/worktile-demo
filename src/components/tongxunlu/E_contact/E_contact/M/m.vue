<template>
    <div class='contact-detail-area'>
        <div class='profile-header'>
            <div class='profile-header-avatar'>
                <div class='lc-avatar'>
                    M
                </div> 
            </div>
            <div class='profile-header-profiles'>
                <div class='display_name'>
                    M
                    <span class="name">@17600978244</span>
                </div>
                <ul>
                    <li v-for='(item,i) of info'>
                        <i></i>
                        {{item}}
                    </li>
                </ul>
               <div class='profile-header-action'>
                   <a href="#" class="bj">编辑资料</a>
                   <a href="#" class="fp">分配任务</a>
               </div>    
            </div>
        </div>
        <div class='profile-body module-body'>
            <div class='profile-body-content'>

            </div>
            <div class='profile-body-side'>
                <div class="panel-body panel">
                    <ul>
                        <li>
                            <div>0</div>
                            已完成
                        </li>
                        <li class="line"></li>
                        <li>
                            <div>0</div>
                            待完成
                        </li>
                        <li class="line"></li>
                        <li>
                            <div>0</div>
                            延期
                        </li>
                    </ul>
                </div>
                <div class="panel ng-isolate-scope">
                    <div class="panel-heading">
                        <span class="panel-title">
                            今日日程
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="cover" style='display:none'>
            <div class="modal-dialog ">
                <div class="modal-content">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            info:[
                "技术总监",
                "暂无",
                "17600978244"
            ]
        }
    }
}
</script>

<style scoped>
    .contact-detail-area{
        width: calc(100% - 311px);
        height: 100%;
        overflow-y: auto;
        float: right;
        box-sizing: border-box;
        background:url(../../../assets/desktop-5.jpg);
        background-size:cover;
    }
    /*滚动条样式*/
    .contact-detail-area::-webkit-scrollbar {/*滚动条整体样式*/
        width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 5px;
    }
    .contact-detail-area::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(0, 0, 0, 0.048);
    }
    .contact-detail-area::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 0;
        background: rgba(0,0,0,0.1);
    }
    .profile-header{
        position: relative;
        padding: 120px 0 0 15px;
        height: 130px;
        background: url(../../../assets/profile-bg.jpg) top left repeat-x #fff;
        background-size: auto 200px;
    }
    .profile-header-avatar{
        margin-right: 20px;
        width: 110px;
        height: 110px;
        border-radius: 100%;
        float: left;
    }
    .lc-avatar {
        overflow: hidden;
        width: 100%;
        text-align: center;
        line-height: 110px;
        height: 100%;
        border: 5px solid #fff;
        border-radius: 100%;
        background-color: rgb(239, 126, 222);
        color:#fff;
        font-size: 45px;
    }
    .profile-header-profiles{
        float: left;
    }
    .profile-header-profiles .display_name{
        margin-bottom: 15px;
        padding-top: 35px;
        line-height: 1;
        font-size: 20px;
        color: #666;
    }
    .profile-header-profiles .name{
        font-size: 16px;
        color: #888;
    }
    .profile-header-profiles ul{
        list-style: none;
        padding-top: 18px;
        overflow: hidden;
    }
    .profile-header-profiles ul li{
        float: left;
        margin-right: 25px;
        color: #333;
        vertical-align: middle
    }
    .profile-header-action{
        width: 300px;
        text-align: right;
        position: absolute;
        right: 15px;
        bottom: 15px;
    }
    .profile-header-action a{
        width: 100px;
        height: 35px;
        color: #888;
        background-color: transparent;
        text-align: center;
        line-height: 35px;
        text-decoration: none;
        border: 1px solid #ddd;
        padding: .469rem 26px;
        font-size: .875rem;
        line-height: 1.5;
        min-width: 106px;
        border-radius: 1.25rem;
    }
    .profile-header-action a.bj{
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
    }
    .profile-header-action a.fp:hover{
        border-color: #22d7bb;
        color:#22d7bb
    }
    .profile-body{
        width: 100%;
        display: -webkit-flex;
        position: relative;
        padding: 15px;
        box-sizing:border-box
    }
    .profile-body-content{
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        border-radius: 2px;
        background-color: #fdfdfd;
        height: 500px;
    }
    .profile-body-side{
        margin-left: 15px;
        width: 300px;
        
    }
    .panel-body{
        padding: 15px 0;
    }
    .panel-body ul{
        list-style: none;
        overflow: hidden;
    }
    .panel-body ul li{
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        width: calc(98% / 3);
        font-size: 12px;
        color: #888;
        text-align: center;
        float: left;
    }
    .panel-body ul li.line{
        -webkit-box-flex: 0;
        -ms-flex: 0;
        flex: 0;
        margin-top: 6px;
        width: 1px;
        height: 43px;
        border-right: solid 1px #eee;
    }
    .panel-body ul li div{
        font-size: 24px;
        font-family: lcletter;
    }
    .panel {
        background-color: #fdfdfd;
        margin-bottom: 15px;
        border-radius: 2px;
    }
    .panel-heading{
        padding: 10px 20px 0;
        line-height: 30px;
        font-size: 14px;
        border-bottom: none;
    }
    .panel-heading .panel-title{
        display: inline-block;
        padding-left: 8px;
        line-height: 1;
        color: #333;
        font-size: 14px;
        border-left: solid 3px #22d7bb;
    }
    .cover{
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.3;
        position: absolute;
        top:0;
        left:0;
    }
    .modal-dialog {
        max-width: 660px;
        margin: 3.75rem auto;
        width: auto;
    }
    .modal-content{
        box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
        display: flex;
        flex-direction: column;
        width: 100%;
        pointer-events: auto;
        background-color: #fff;
        background-clip: padding-box;
        border: 0 solid rgba(0,0,0,.2);
        border-radius: .3rem;
    }
</style>
