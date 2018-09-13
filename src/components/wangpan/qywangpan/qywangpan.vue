<template>
    <div class="div">  
        <div class="div1">
            <a href="javascript:;" class="ng-binding"><i class="iconfont icon-wenjianjia i3"></i>企业网盘</a>  
        <div class="fr">
            <input type="text" v-model="addDetail.title" placeholder="文件夹" />
			<input type="text" v-model="addDetail.daxiao" placeholder="大小" />
			<input type="text" v-model="addDetail.ren"  placeholder="发布人" />
			<input type="date" v-model="addDetail.shijian"  placeholder="发布时间" />
            <button @click="adddetail">+ 新建</button>
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
            <table>
                <tr>
                    <td>文件名<i class="iconfont icon-xiazai i3"></i></td> 
                    <td>大小</td>
                    <td>更新人</td>
                    <td>更新时间</td>
                </tr>
                <tr v-for="(item,index) of list">
                        <td v-model="addDetail.title"><router-link :to='item.url'><i class="iconfont icon-wenjianjia i3"></i>{{item.title}}</router-link> </td>
                        <td v-model="addDetail.daxiao" >{{item.daxiao}} </td>
                        <td v-model="addDetail.ren" >
                            <span>M</span>
                            {{item.ren}}
                        </td>
                        <td v-model="addDetail.shijian" >{{item.shijian}} </td> <i class="iconfont icon-huishouzhan-copy i5"  @click="deletelist(index)"></i>   
                </tr>
            </table>
        </div>   
         <router-view class="view"></router-view> 
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            addDetail: {},
            show:false,
            list:[
                {
                    title:'资料共享',
                    daxiao:'-',
                    ren:'M',
                    shijian:'9月11 10:21',
                    url:'/wangpan/qywangpan/quexianguanli'
                },
                 {
                    title:'缺陷管理',
                    daxiao:'-',
                    ren:'M',
                    shijian:'9月11 10:22',
                    url:'/wangpan/qywangpan/quexianguanli'
                },
                 {
                    title:'公司制度',
                    daxiao:'-',
                    ren:'M',
                    shijian:'9月11 10:21',
                    url:'/wangpan/qywangpan/gongsizhidu'
                }   
            ]
        }          
    },
    methods:{
        deletelist(index) {
            this.list.splice(index, 1);
        },
        adddetail() {
            this.list.push({
                title: this.addDetail.title,
                daxiao: this.addDetail.daxiao,
                ren: this.addDetail.ren,
                shijian:this.addDetail.shijian,
            })
        }
    }
}
</script>

<style lang='css' scoped>
    .div{
        background-color: #d8d8d8;
        height: 100%;
    }
    .div1{
        position: relative; 
    }
    .view{
        position: absolute;
        top: 0;
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
        outline:none;
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
         left: 22px;
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
     td a{
        color: #666;  
     }
    .div2{
        width: 95%;
        margin: 20px auto;
        height: 100%;
        background-color: white;
    }
    .div2 table{
           line-height: 27px;
            color: #666;
            padding: 14px 35px;
            text-align: left;
    }
     .div2 table tr td{
         width: 130px;
         cursor: pointer;
          padding: 14px 35px;
     }
     .div2 table tr:nth-child(1) td:nth-child(1){
         width: 474px;
     }
     .div2 table tr td span{
            width: 24px;
            height: 24px;
            line-height: 24px;
            font-size: 12px;
            border-radius: 24px;
            background-color: rgb(239, 126, 222);
            color: white;
            padding: 6px 9px;
     }
     .div2 table tr:hover{
         box-shadow: 0 0 24px rgba(0,0,0,.18);
     }
     .i3{
            font-size: 19px;
            margin: 0 10px 4px 0;
            color: #22d7bb;
     }
     .i4{
         font-size: 18px;
     }
     .i5{
         margin: 14px 0;
         display: inline-block;
     }
     .fr input{
         width: 119px;
     }
</style>
