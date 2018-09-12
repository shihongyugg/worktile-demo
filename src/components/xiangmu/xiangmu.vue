<template>
<div class="Big" :style="{backgroundImage:'url('+img+')'}">
    <div class="B_xm">
        <div class="Xm">
            <div class="X_head">
                <span>项目</span>
                <div><i></i></div>
            </div>
        </div>
        <div>
            <div class="serch">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜索任务">
            </div>
            <div class="work">
                <ul>
                    <li >
                        <span @click="fun" :class="{'iconfont icon-sanx-up':!show,'iconfont icon-xiesanjiao':show}">工作</span>
                        <div v-show="show">
                            <router-link class="left" v-for="v of Olist" :to="v.url"><i :class="{'iconfont icon-xiashurenwu-':v.title == '下属任务','iconfont icon-woderenwu1':v.title == '我的任务'}"></i>{{v.title}}</router-link>
                        </div>
                    </li>
                    <li>
                        <span @click="funt" :class="{'iconfont icon-sanx-up':!show1,'iconfont icon-xiesanjiao':show1}">项目</span>
                        <div v-show="show1">
                            <router-link class="left" v-for="vs of Vlist" :to="vs.url">
                                <i class="iconfont icon-woderenwu1"></i>{{vs.title}}
                            </router-link>
                        </div>
                    </li>
                </ul>
                <ul class="El">
                    <li v-for="value of Elist">
                        <router-link :to="value.url"><i :class="{'iconfont icon-shezhi':value.title == '配置中心','iconfont icon-huishouzhan':value.title == '回收站'}"></i>{{value.title}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="view"><router-view></router-view></div>
</div>

</template>
<script>
export default {
    data(){
        return{
            show:true,
            show1:true,
            img:"src/assets/desktop-5.jpg",
            Olist:[
                {
                    title:"下属任务",
                    url:"/xiangmu/xiashu"
                },
                {
                    title:"我的任务",
                    url:"/xiangmu/wode/"
                }
            ],
            Vlist:[
                {
                    title:"123",
                    url:"/xiangmu/yier"
                }
            ],
            Elist:[
                {
                    title:"配置中心",
                    url:"/xiangmu/peizhi/"
                },
                {
                    title:"回收站",
                    url:"/xiangmu/huishou"
                }
            ]
        }
    },
    methods:{
        fun(){
            this.show =! this.show
        },
        funt(){
            this.show1 =! this.show1
        }
    }
}
</script>

<style style="scss" scoped>
    .Big{
        width:100%;
        height: 100%;
        background:#fff;
        background-size:cover;
        background-position: 58px -25px;
    }
    .B_xm{
        width: 240px;
        height: 100%;
        float: left;
        background: rgba(253,253,253,.95);
        border-right: 1px solid #ddd;
        
    }
    .Xm{
        background-color: #fff;
    }
    .X_head{
        height: 50px;
        line-height: 50px;
    }
    .X_head span{
        float: left;
        margin: 0 20px;
        color: #333;
        font-size: 16px;
    }
    .X_head div{
        float: right;
        width: 22px;
        height: 50px;
        margin: 0 20px;
    }
    .X_head div i{
        display: inline-block;
        width: 20px;
        height: 20px;
    }
    .serch{
        padding: 0 20px 10px;
        position: relative;
    }
    .serch i{
        position: absolute;
        top: 6px;
        left: 27px;
        color: #8f8f8f;
        font-size: 25px;
    }
    .serch input{
        box-shadow: none;
        color: #666;
        height: 36px;
        font-size: 14px;
        padding-left: 28px;
        border-radius: 20px;
        outline: none;
        background: #fdfdfd;
        border: 1px solid #ddd;
    }
    .work li span,.work div a,.El a{ 
        display: block;
        margin-bottom: 2px;
        padding: 8px 20px;
        position: relative;
        cursor: pointer;
        font-size:14px;
        color:#333;
    }
    .work li span:hover,.work div a:hover{
        box-shadow: 0 0 8px 2px #eee;
        text-decoration: none;
    }
    .work .router-link-active{
        background:0 0;
        color:#22d7bb;
        border-right: 4px solid #22d7bb;
    }
    .work .left{
        padding-left: 35px;
    }
    .icon-shezhi,.icon-huishouzhan,.icon-woderenwu1,.icon-xiashurenwu-{
        vertical-align: middle;
        font-weight: 400;
        margin-right:5px;
        color:#22d7bb;
    }
    .view{
        overflow: hidden;
        box-sizing: border-box;
        width: calc(100% - 311px);
        height: 100%;
        float: left;
    }
</style>
