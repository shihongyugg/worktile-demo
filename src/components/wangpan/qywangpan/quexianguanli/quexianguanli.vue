<template>
    <div class="div">  
        <div class="div1">
            <a href="javascript:;" class="ng-binding"><i class="iconfont icon-wenjianjia"></i>  企业网盘>缺陷管理</a>  
       <div class="fr">
            <button>+ 新建</button>
            <button v-on:click="show = !show"> <i class="iconfont icon-shangchuan i4"></i> 上传文件</button>
            <div class="xlk" v-if="show">
                <ul>
                    <li>上传文件</li>
                    <li>上传文件夹</li>
                </ul>
            </div>
        </div>  
        
        </div>  
        <div class="div2">
             <p class="empty-text ng-binding"> <i class="iconfont icon-wenjian i2"></i>没有文件</p>
        </div>    
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            show:false 
        }          
    }
}
</script>

<style lang='css' scoped>
    .div{
        background-color: #d8d8d8;
        width: 100%;
        height: 100%;
    }
    .div1{
        width: 100%;
        height: 50px;
        background-color: white;        
    }
    .div1 a{
         margin: 0 60px;
        line-height: 47px;
        color: #aaa;
    }
    .div1 .fr{
        float:right;
        line-height: 48px;
        position: relative;
    }
    .div1 .fr button{
        padding: 3px 20px;
        font-size: 14px;
        background-color: white;
        color: #22d7bb;
        background-color: transparent;
        border: 1px solid #22d7bb;
        border-radius: .25rem;
          min-width: 106px;
        margin-right: 20px;
    }
    button:nth-child(1):hover{
        background-color:#22fada!important;
        color: #fff!important;
    }
    button:nth-child(2){
       border-radius: 1.25rem!important;
        background-color:#22fada!important;
        color: #fff!important;
    }
     button:nth-child(2)::after{
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        vertical-align: .255em;
        border-top: .3em solid;
        border-right: .3em solid transparent;
        border-bottom: 0;
        margin-left: 8px;
        border-left: .3em solid transparent;
     }
     .xlk{
         background-color: #fff;
         padding: 5px 0;
         min-width: 240px;
         border:1px solid #fff;
         position: absolute;
         left: -39px;
         box-shadow: 0 0 24px rgba(0,0,0,.18);
     }
     .xlk ul li{
             padding: 5px 18px;
            line-height: 30px;
            color: #666;
            text-decoration: none;
            box-sizing: border-box;
            transition: padding-left .2s;
            font-size: 14px;
     }
    .div2{
        width: 95%;
        margin: 20px auto;
        height: 100%;
        background-color: white!important;
    }
     p{
        color: #cacaca;
       text-align: center;
       position: relative;  
       top: 50px;
    }
     .i2{
        display: block;
        color:  #eee;
        font-size: 5rem;
    }
</style>
