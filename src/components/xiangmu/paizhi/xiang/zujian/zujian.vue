<template>
    <div class="Muban">
        <!-- <div class="X_wrap">
            <div class="X_center">
                <p>新功能正在开发中，敬请期待。</p>
            </div>
        </div> -->
        <div class="moudle">
            <div class="M_sour">
                <i class="icon iconfont icon-search"></i>
                <input type="text" placeholder="搜索项目组件">
                <div class="area">
                    <button class="ar_ico">
                        <i class="iconfont icon-jiahao"></i>
                        <span>添加项目组件</span>
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
                                        <i :class="v.pic" :style="{color:v.color}"></i>
                                        <span>{{v.sp}}</span>
                                    </div>
                                </td>
                                <td>
                                    <span class="beizhu">{{v.content}}</span>
                                </td>
                                <td class="con">
                                    <i class="iconfont icon-diannao"></i>
                                    <i class="iconfont icon-iconziti48"></i>
                                    <i class="iconfont icon-anzhuo"></i>
                                </td>
                                <td class="con extend">
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
    </div>
</template>

<script>
export default {
    data(){
        return{
            ind:["组件名称","备注","支持平台","操作"],
            mu:[
                {
                    id:1,
                    sp:'看板',
                    content:'用看板的方式分组展示任务',
                    color:"#18bfa4",
                    pic:'iconfont icon-dashboard'
                },
                {
                    id:2,
                    sp:'迭代',
                    content:'用于敏捷开发管理中的迭代管理，支持迭代统计、故事板及规划',
                    color:"#9473fd",
                    pic:'iconfont icon-diedaijianying'
                },
                {
                    id:3,
                    sp:'列表',
                    content:'用列表的方式直观的展示任务',
                    color:"#2cccda",
                    pic:'iconfont icon-xiangqing'
                },
                {
                    id:4,
                    sp:'时间',
                    content:'用甘特图的方式展示任务，支持任务视图与人员视图',
                    color:"#ffd234",
                    pic:'iconfont icon-shijian'
                },
                {
                    id:5,
                    sp:'表格',
                    content:'用表格的方式展示任务，支持表头自定义',
                    color:"#22d7bb",
                    pic:'iconfont icon-biaoge1'
                },
                {
                    id:6,
                    sp:'报表',
                    content:'提供基于任务的多维度统计，可以自定义统计报表',
                    color:"#4e8af9",
                    pic:'iconfont icon-baobiaox'
                }
            ]
        }
    },
    methods:{
        open2(id) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
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
        }
    }
}
</script>

<style style="scss" scoped>
    .el-button--text{
        color:#888;
    }
    .iconfont{
        font-size: 18px;
        color:#aaa;
    }
    .icon-dashboard{
        color:#18bfa4;
        font-size: 14px;
        margin: 3px;
        vertical-align: middle;
    }
    .icon-diedaijianying{
        color:#9473fd;
        font-size: 20px;
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
        font-size:24px;
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
    .area .ar_ico i{
        position: absolute;
        top:10px;
        left:14px; 
        color:#fff;
    }
    .area button{
        border-radius: 23px;
        outline:0;
        border:none;
        padding: 9px 33px;
        transition: all .8s;
    }
    .area button:hover{
        box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
    }
    .body{
        width: 100%;
        height: 100%;
    }
    .body .body-table{
        padding:20px;
    }
    /* .body .body-table div{
        background-color: red;
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
        padding: 5px 15px;
    }
    .shi{
        position: relative;
        padding-left: 28px;
    }
    .shi i{
        background-color: #fff;
        position: absolute;
        top: 0px;
        left: 5px;
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
    .extend a{
        color: #aaa;
        text-align: center;
    }
    .extend .wtf{
        padding-right: 4px;
        vertical-align: middle;
    }
</style>
