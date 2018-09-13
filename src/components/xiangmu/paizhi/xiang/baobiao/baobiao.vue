<template>
    <div class="Muban">
       
        <div class="moudle">
            <div class="M_sour">
                <i class="icon iconfont icon-search"></i>
                <input type="text" placeholder="搜索项目报表">
                <div class="area">
                    <button class="ar_ico">
                        <i class="iconfont icon-jiahao"></i>
                        <span>添加项目报表</span>
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
                                    <span>{{v.sp}}</span>
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
                                        <el-button type="text" @click="open2($index)"><i class="iconfont icon-huishouzhan"></i></el-button>
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
        return {
            ind:["项目报表","备注","支持平台","操作"],
            mu:[
                {
                    sp:'项目概要报表',
                    content:'展示项目中的基本统计，类型的分布等'
                },
                {
                    sp:'缺陷管理',
                    content:'适用于缺陷管理'
                },
                {
                    sp:'测试管理',
                    content:'适用于测试用例管理'
                }
            ]
        }
    },
    methods:{
        open2(index) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.mu.splice(index,1);
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
    .iconfont{
        font-size: 18px;
        color:#aaa;
    }
    .Muban{
        margin: 15px;
        width: calc(100% - 30px);
        height:calc(100% - 120px);
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
    table th,table td{
        padding: 12px 15px;
        font-weight: 400;
        border: 1px solid #eee;
        font-size: 14px;
    }
    table td{
        font-size: 14px;
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
