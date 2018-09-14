<template>
    <div class="Muban">
        <div class="moudle">
            <div class="M_sour">
                <i class="icon iconfont icon-search"></i>
                <input type="text" placeholder="搜索项目模板">
                <div class="area">
                    <button class="ar_ico" @click='show()'>
                        <i class="iconfont icon-jiahao"></i>
                        <span>新建模板</span>
                    </button>
                    <button class="ar_icon">
                        <i class="iconfont icon-shezhi"></i>
                        <span>类型管理</span>
                    </button>
                </div>
            </div>
            
        </div>
        <div class="body">
            <div class="body-table">
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th v-for="val of ind">{{val}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v,index) of mu">
                                <td>
                                    <div class="shi">
                                        <i :class="v.img"></i>
                                        <span>{{v.sp}}</span>
                                    </div>
                                </td>
                                <td>
                                    <span class="beizhu">{{v.content}}</span>
                                </td>
                                <td>{{v.nex}}</td>
                                <td class="con">
                                    <span :class="{'status':v.state == '已启用' ,'wan':v.state == '未完成'}" >{{v.state}}</span>
                                </td>
                                <td class="con extend">
                                    <a href="javascript:"><i class="wtf iconfont icon-shezhi"></i>配置</a>
                                    <a href="javascript:"><i class="iconfont icon-fuzhi"></i></a>
                                    <a href="javascript:"><i class="iconfont icon-bianji"></i></a>
                                    <!-- <a href="javascript:" @click="delet($index)"><i class="iconfont icon-huishouzhan"></i></a> -->
                                    <template>
                                        <el-button type="text" @click="open2(v.id)"><i class="iconfont icon-huishouzhan"></i></el-button>
                                    </template>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div style='width:100%;height:100%;position:relative;left:0;top:0' v-show='ishow'>
            <div class="mask" @click='show()'></div>
            <div style="position:relative;left:-240px;top:100px">
                <div class="set">
                    <div class="set-header">
                        <a href="javascript:;" class="set-close" @click="show()">X</a>
                        <h3 class="set-title">新建项目模板</h3>
                    </div>
                    <div class="set-body">
                        <div class="set-members" style="position:relative">
                            <div class="member-panel">
                                <div class="member-body">
                                    <div class="search">
                                        模板名称
                                        <input type="text" placeholder="模板名称" class="form-search" form-search v-model="sp">
                                    </div>
                                    <div class="search">
                                        备注:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input type="text" placeholder="备注" class="form-search" form-search v-model="content">
                                    </div>
                                    <div class="search">
                                        模板类型:
                                        <input type="text" placeholder="请选接模板类型" class="form-search" form-search v-model="nex">
                                    </div>
                                    <div class="search">
                                        模板状态:
                                        <input type="text" placeholder="请选接模板状态" class="form-search" form-search v-model="state">
                                    </div>
                                    <div class="search">
                                        图标
                                        <span style="margin-left:20px;font-size:18px">
                                            <i class="iconfont icon-huiyuanxiaohuojian"></i>
                                            <i class="iconfont icon-quexianguanli"></i>
                                            <i class="iconfont icon-dashboard"></i>
                                            <i class="iconfont icon-icon-"></i>
                                            <i class="iconfont icon-guanli"></i>
                                            <i class="iconfont icon-wenhao"></i>
                                            
                                        </span>
                                    </div>
                                    <div class="member-action">
                                        <button class="confirm" @click='addEl'>确定</button>
                                        <button class="cancel" @click='show()'>取消</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            ishow:false,
            sp:'',
<<<<<<< HEAD
            nex:'',
            state:'',
            content:'',
=======
            content:'',
            nex:'',
            state:'',
>>>>>>> e8d68d3e952b973460c947fd1130013095271377
            ind:["项目模板","备注","类型","状态","操作"],
            mu:[
                {
                    id:1,
                    sp:'项目处理',
                    content:'适用于最简单的事务管理事',
                    nex:'通用',
                    state:'已启用',
                    img:'iconfont icon-huiyuanxiaohuojian'
                },
                {
                    id:2,
                    sp:'缺陷管理',
                    content:'适用于缺陷管理',
                    nex:'通用',
                    state:'未完成',
                    img:'iconfont icon-quexianguanli'
                },
                {
                    id:3,
                    sp:'测试管理',
                    content:'适用于测试用例管理',
                    nex:'软件',
                    state:'未完成',
                    img:'iconfont icon-guanli'
                }
            ]
        }
    },
    methods:{
        open2:function(id) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    // 删除某一个
                    for (var i=0;i<this.mu.length;i++){
                        if (this.mu[i].id == id) {
                            this.mu.splice(i, 1);
                            break;
                        }
                    }
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                });
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        },
        show(){
            this.ishow = !this.ishow;
        },
        addEl(){
            this.mu.push({
                id:this.id,
                sp:this.sp,
                content:this.content,
                nex:this.nex,
                state:this.state,
                img:'iconfont icon-guanli'
            })
            this.ishow = false;
        }
    }
    
}
</script>

<style style="scss" scoped>
    .el-button--text{
        color:#888;
    }
    .icon-huiyuanxiaohuojian{
        color:#99d561
    }
    .icon-quexianguanli{
        color:#f85b59;
        font-size: 20px;
    }
    .icon-guanli{
        color:cyan;
    }
    .Muban{
        margin: 15px;
        width: calc(100% - 30px);
            height: calc(100% - 120px);
        background: #fff;
        position: relative;
    }
    .moudle{
        padding: 20px 20px 0;
    }
    .M_sour{
        position: relative;
    }
    .M_sour .icon{  
        position: absolute;
        top: 6px;
        left: 13px;
        font-size: 24px;
    }
    .M_sour input{
        border-radius: 5px;
        border:none;
        border:1px solid #eee;
        padding: 10px 84px 10px 34px;
        outline: 0;
    }
    .area{
        float: right;
        position: relative;
        font-size: 13px;
    }
    .area .ar_ico{
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
        margin-right:10px;
    }
    .area .ar_icon{
        color: #888;
        background-color: transparent;
        background-image: none;
        border:1px solid #ddd;
    }
    .area .ar_ico i{
        position: absolute;
        top:11px;
        left:14px;
    }
    .area .ar_icon i{
        position: absolute;
        top:11px;
        left:146px;
    }
    .area button{
        border-radius: 23px;
        outline:0;
        border:none;
        padding: 9px 33px;
        transition: all .8s;
    }
    .area button:nth-child(1):hover{
        box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
    }
    .area button:nth-child(2):hover{
        color:#22d7bb;
        border:1px solid #22d7bb;
    }
    .body{
        width: 100%;
        height: 100%;
    }
    .body .body-table{
        padding:20px;
    }
    /* .body .body-table div{
    } */
    table{
        width: 100%;
        color: #333;
        border: 1px solid #eee;
        border-collapse: collapse;
        border-spacing: 0;
    }
    table thead tr{
        background:#f3f3f3; 
    }
    table th{
        color: #666;
    }
    table th{
        padding: 12px 15px;
        font-weight: 400;
        border: 1px solid #eee;
        font-size: 14px;
    }
    table td{
        font-size: 14px;
        padding: 5px 12px;
    }
    .shi{
        position: relative;
        padding-left: 28px;
    }
    .shi i{
        width: 20px;
        height: 20px;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
    }
    .beizhu{
        color: #888;
    }
    .con{
        text-align: center;
    }
    .status{
        padding: 5px 10px;
        font-size: 12px;
        border-radius: 3px;
        color: #fff;
        background: #22d7bb;
    }
    .wan{
        padding: 5px 10px;
        font-size: 12px;
        border-radius: 3px;
        color: #fff;
        background: #ffc442; 
    }
    .extend a{
        color: #aaa;
        font-size: 12px;
        margin-right: 20px;
    }
    .extend a:nth-child(1){
        color: #22d7bb;
    }
    .extend .wtf{
        padding-right: 4px;
        vertical-align: middle;
    }
    .icon-icon-{
        color:#22d7bb;
        vertical-align: middle;
    }
    .mask{
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: .4;
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
    }
     .set{
        position: absolute;
        width: 500px;
        height: 500px;
        top: 50%;
        left: 50%;
        margin-top: -250px;
        transform: translate(-28%,-137%);
        box-shadow: 0 0 5px rgba(0,0,0,.5);
        background-color: #fff;
        border-radius: 3px;
        z-index: 99999;
    }
    .set .set-header{
        height: 50px;
        border-bottom: 1px solid #eee;
        line-height: 50px;
        padding: 0 25px;
        top: 60px;
    }
    .set .set-header .set-close{
        float: right;
        color: #ddd;
    }
    .set .set-header .set-title{
        font-weight: 500;
        font-size: 16px;
    }
    .set .set-body{
        position: relative;
        height: 100%;
    }
    .set .member-panel{
        height: 45px;
        color: #888;
    }
    .set .member-panel ul{
        line-height: 23px;
        padding-left: 100px;
    }
    .set .member-panel ul li{
        padding-bottom: 20px;
        cursor: pointer;
        float: left;
    }
    .set .member-body{
        height: 360px;
        border-radius: 5px;
        margin: 25px 0 0 10px;
        font-size: 14px;
    }
    .set .member-body .search{
        position: relative;
        margin-left: 20px;
        margin-top: 20px;
    }
    .set .member-body .form-search{
        width: 375px;
        text-indent: 10px;
        border-radius: 3px;
        height: 32px;
        line-height: 32px;
        margin-left: 20px;
        border: none;
        outline: none;
        border: 1px solid #eee;
    }
    .set .member-body .form-search:hover{
        border-color: #22d7bb;
    }
    .set .member-action{
        position: absolute;
       top: 300px;
        left: 50px;
    }
    .set .member-action .confirm{
        background-color: #22d7bb;
        color: #fff;
        border: none;
        border: 1px solid #22d7bb;
        width: 106px;
        height: 38px;
        font-size: 14px;
        outline: none;
        display: inline-block;
        border-radius: 20px;
        cursor: pointer;
    }
    .set .member-action .cancel{
        border: none;
        background-color: #fff;
        color: #aaa;
        cursor: pointer;
        margin-left: 20px;
        outline: none;
    }
    .kuan{
        margin-right: 10px;
    }
    .tianjia{
        display: block;
        width: 200px;
        height: 45px;
        position: absolute;
        top:-5px;
        right:-1150px;
        text-align: center;
        line-height: 45px;
        background-color:#22d7bb;
        color:#fff;
        font-size: 18px;
        border-radius: 12px;
    }
</style>
