<template>
<div class="Big">
    <div class="Xm">
        <div class="X_head">
            <span>项目</span>
            <div><i></i></div>
        </div>
    </div>
    <div>
        <div class="serch">
            <i></i>
            <input type="text" placeholder="搜索任务">
        </div>
        <div class="work">
            <ul>
                <li >
                    <span @click="fun">工作</span>
                    <div v-show="show">
                        <p v-for="v of Olist">{{v.title}}</p>
                    </div>
                </li>
                <li>
                    <span @click="funt">项目</span>
                    <div v-show="show1">
                        <p>123</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            show:false,
            show1:false,
            Olist:[
                {
                    title:"下属任务",
                    url:"/xiashu"
                },
                {
                    title:"我的任务",
                    url:"/wode"
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
        float: left;
        width: 240px;
        height: 100%;
        background:#fff;
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
        display: block;
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
        left: 30px;
        color: #8f8f8f;
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
    .work li span,.work div p{ 
        display: block;
        margin-bottom: 2px;
        padding: 8px 20px;
        position: relative;
        cursor: pointer;
        font-size:14px;
        color:#333;
    }
    .work li span:hover,.work div p:hover{
        box-shadow: 0 0 8px 2px #eee;
        text-decoration: none;
    }
</style>
