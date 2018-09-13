<template>
    <div class="Huo">
        <div class="H_ren">
            <div class="H-box" v-for="item of list">
                <div class="group">
                    <span class="shou">{{item.title}}</span>
                    <span class="gry"><span class="fir">0</span> / <span class="sec">0</span> / 0 </span>
                </div>
                <div class="line"></div>
                <div class="jia">
                    <a href="javascript:">
                        <i class="iconfont icon-jiahao"></i>{{item.shi}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    title:'收件箱',
                    shi:'添加新任务'
                },
                {
                    title:'今天要做',
                    shi:'添加新任务'
                },
                {
                    title:'下一步要做',
                    shi:'添加新任务'
                }
            ]
        }
    }
}
</script>

<style style="scss" scoped>
    .Huo{
        padding:15px;
    }
    .H_ren{
        width: 100%;
        height: calc(100% - 30px);
    }
    .H-box{
        width: 275px;
        height: 110px;
        float: left;
        box-sizing: content-box;
        margin: 0 7px;
        background-color: #fff;
    }
    .group{
        padding: 17px 10px 10px;
    }
    .group .shou,.gry{
        font-size:14px;
        color: #333;
    }
    .gry{
        color:#aaa;
    }
    .group .fir{
        color: #22d7bb;
    }
    .group .sec{
        color: #ffc442
    }
    .line{
        height: 8px;
        background: #ddd;
        margin-top: 13px;
        padding-left:10px;
    }
    .jia{
        padding: 0 10px 10px;
    }
    .jia a{
        font-size:13px;
        color: #333;
        line-height:40px;
    }
    .jia .icon-jiahao{
        vertical-align: middle;
        margin-right: 5px;
    }
</style>
