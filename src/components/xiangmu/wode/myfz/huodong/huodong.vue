<template>
    <div class="Huo">
        <div class="H_ren">
            <div class="H-box" v-for="(item,index) of list">
                <div class="group">
                    <span class="shou">{{item.title}}</span>
                    <span class="gry"><span class="fir">0</span> / <span class="sec">0</span> / 0 </span>
                </div>
                <div class="line"></div>
                <div class="hide" v-show="nowindex == index">
                    <textarea name="Title" id="co" cols="38"></textarea>
                    <div class="but">
                        <button>确定</button>
                        <button @click="delet">删除</button>
                    </div>
                </div>
                <div class="jia">
                    <a href="javascript:" @click='add(index)'>
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
            nowindex:-1,
            show:true,
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
    },
    methods:{
        add(index){
            this.nowindex = index;
        },
        delet(){
            this.nowindex = -1;
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
        height: 100%;
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
        padding: 0 10px 0 10px;
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
    .hide{
        padding: 0 10px 10px;
        /* display: none; */
    }
    #co{
        width: 100%;
        height: 50px;
        
        border:1px solid #eee;
        border-radius: 5px;
    }
    .but button{
        color: #fff;
        padding:5px 15px;
        
        border-radius: 20px;
        outline: 0;
        border: none;
    }
    .but button:nth-child(1){
        background-color: #22d7bb;
        border-color: #22d7bb;
    }
    .but button:nth-child(2){
        background-color: #fff;
        color:#333;
        border:1px solid #eee;
    }
</style>
