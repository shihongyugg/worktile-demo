<template>
    <div class="Muban">
        <div class="moudle">
            <div class="M_sour">
                <i class="icon iconfont icon-search"></i>
                <input type="text" placeholder="搜索权限模式">
                <div class="area">
                    <button class="ar_ico">
                        <i class="iconfont icon-jiahao"></i>
                        <span>新建权限模式</span>
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
                                <th>权限模式</th>
                                <th>备注</th>
                                <th>角色模式</th>
                                <th>默认</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span>通用权限模式</span>
                                </td>
                                <td>
                                    <span class="beizhu">通用权限管理</span>
                                </td>
                                <td>
                                    通用角色模式
                                </td>
                                <td class="con">
                                    <el-switch v-model="value3">
                                    </el-switch>
                                </td>
                                <td class="con extend">
                                    <a href="javascript:">
                                        <i class="wtf iconfont icon-shezhi"></i>配置</a>
                                    <a href="javascript:"><i class="iconfont icon-fuzhi"></i></a>
                                    <a href="javascript:"><i class="iconfont icon-bianji"></i></a>
                                    <a href="javascript:"><i class="iconfont icon-huishouzhan"></i></a>
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
            value3:true
        }
    }
}
</script>

<style style="scss" scoped>
    .Muban{
        margin: 15px;
        width: calc(100% - 30px);
        height: 523px;
        background: #fff;
        position: relative;
    }
    .moudle{
        padding: 20px 20px 0;
    }
    .M_sour{
        position: relative;
    }
     .M_sour i{
        color: #aaa;
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
    }
    .area .ar_ico{
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
        margin-right:10px;
    }
    .area .ar_ico i{
        position: absolute;
        top:11px;
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
    table th,table td{
        padding: 12px 15px;
        font-weight: 400;
        border: 1px solid #eee;
        font-size: 14px;
    }
    table td{
        font-size: 14px;
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
    .extend a{
        color: #aaa;
        margin-right: 20px;
    }
    .extend a:nth-child(1){
        color: #22d7bb;
    }
    .extend .wtf{
        padding-right: 4px;
        vertical-align: middle;
    }
</style>
