<template>
   <div class="box">
       <div class="fl">
           <div class="header">
                <span>网盘</span>
               <input type="text"  class="input"  placeholder="   搜索文件、文件夹"> <i class="iconfont icon-fangdajing i2"></i>
            </div>
            <ul>
                <li>  
                   <i class="iconfont icon-xiaosanjiaodown-copy" @click="show = !show"></i><router-link to='/wangpan/qywangpan' class="left"><i class="iconfont icon-wenjianjia i3"></i>企业网盘</router-link> 
                </li>
                 <div v-for="item of list" v-if="show">
                      <ul class="ul2">
                          <li @click="routerGo(item.url)"> 
                              <i class="iconfont icon-wenjianjia i3"></i> {{item.title}}
                          </li>
                      </ul>
                   </div>
                 <li>
                    <i class="iconfont icon-xiaosanjiaodown-copy" @click="show1 = !show1"></i><router-link to='/wangpan/gerenwangpan' class="left"><i class="iconfont icon-wenjianjia i4"></i>个人网盘</router-link>
                </li> 
                <div v-for="item of list2" v-if="show1"> 
                     <ul class="ul2">
                          <li @click="routerGo1(item.url)"> 
                              <i class="iconfont icon-wenjianjia i4"></i>  {{item.title}}
                          </li>
                      </ul>
                </div>
                 <li >
                    <i class="iconfont icon-xiaosanjiaodown-copy" ></i> 成员
                </li> 
                 <li data-toggle="modal" data-target="#layer">
                    <i class="iconfont icon-xiaosanjiaodown-copy"></i>标签
                </li> 
                 <li >
                    <i class="iconfont icon-gongxiang"> </i><router-link to='/wangpan/yuwogongxiang' class="left">与我共享</router-link>
                </li> 
                 <li >
                   <i class="iconfont icon-huishouzhan-copy"></i> <router-link to='/wangpan/huishouzhan' class="left">回收站</router-link>
                </li> 
            </ul>
       </div>
       <div class="fr">    
           <router-view> 
               
           </router-view>
       </div>
       <div role="dialog" id="layer">
           <div class="modal-header">
                <i  class="iconfont icon-guanbi" data-dismiss="modal"></i>
                <p>标签管理</p>  
                <div>提示：企业全局标签对所有成员均可见，请谨慎添加、编辑和删除标签。</div>
                <input type="text" placeholder="       搜索标签...">
                <p class="p2">
                     <i class="iconfont icon-wenjian i6"></i>
                    没有标签
                </p>
            </div>
       </div>
       
   </div>
</template>

<script>
export default {
    data() {
        return {
           list:[
               {
                   title:'资料共享',
                   url: '/wangpan/qywangpan/ziliaogongxiang'    
               },
               {
                   title:'缺陷管理',
                   url:'/wangpan/qywangpan/quexianguanli'   
               },
               {
                   title:'公司制度',
                   url:'/wangpan/qywangpan/gongsizhidu'   
               }
           ],
           list2:[
              {
                   title:'preson',
                   url: '/wangpan/gerenwangpan/preson'        
               } 
           ],
            show:false,
            show1:false 
        } 
    },
     methods:{
            routerGo(url){
                //路由跳转
                this.$router.push({path:url})
            },
            routerGo1(url){
                //路由跳转
                this.$router.push({path:url})
            }
        }
}
</script>

<style lang="css" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .box{
        width: 94%;
        height: 100%;
        background: rgb(238, 238, 238);
        float: left;
        border-right: 1px solid #ddd;
        position: relative;
        font-size: .875rem;
    }
    .fl{
        width: 240px;
        height: 100%;
        background-color: white;
    }
    .header span{
        float: left;
        margin: 0 20px;
        color: #333;
        line-height: 50px;
        font-size: 16px;
    }
    .input{
        background: #f3f3f3;
        box-shadow: none;
        color: #666;
        height: 36px;
        font-size: 14px;
        padding-left: 28px;
        border-radius: 20px;
        border: 1px solid transparent;
        margin: 0 20px;
        outline: none;
    }
    ul{
        width: 100%;
    }
    li{
        padding: 8px 10px 8px 45px;
        line-height: 24px;
        cursor: pointer;
        color: #666;  
    }
    li a{
        color: #666;  
    }
    .router-link-active {
        background: 0 0;
    }
    .fr{
        width: 81%;
        height: 100%;
        background: #f3f3f3;
        float: right;
        position: absolute;
        top: 0;
        right: 0;
    }
    li:hover{
         box-shadow: 0 0 24px rgba(0,0,0,.18);
     }
     i{
         color: #aaaaaa;
         font-size: 24px;
     }
     .i2{
        font-size: 20px;
        position: relative;
        top: -32px;
        left: 39px;
     }
     .i3{
        font-size: 14px;
       color: rgb(34, 215, 187);
     }
     .i4{
        font-size: 14px;
        color: rgb(249, 105, 170);
     }
     .ul2{
         text-align: center;
         color: #666;
     }
     #layer{
         display: none;
     }
     .modal-header{
        width: 660px;
        height: 410px;
        background-color: #eee;
        position: absolute;
        top: 108px;
        left: 300px;
        border-radius: 8px;
    }
    .modal-header  i{
           font-size: 35px;
            float: right;
            margin: 8px 26px;
    }
    .modal-header p{
       padding: 17px 22px;
        font-size: 1rem;
        font-weight: 500;
        border-bottom: 1px solid #ffffff;
    }
    .modal-header div{
         padding: 17px 22px;
    }
    .modal-header input{
         width: 90%;
         height: 38px;
         margin: 0 32px;
        display: block;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out
    }
     .modal-header .p2{
        text-align: center;
        border: none;
           color: #cacaca;
    }
    .modal-header .p2 .i6{
        display: block;
        font-size: 5rem;
        margin: 35px 265px;
    }
    .router-link-active{
        background:0 0;
        color:#22d7bb;
        border-right: 4px solid #22d7bb;
    }
    .left{
        padding-right:96px;
    }
</style>
