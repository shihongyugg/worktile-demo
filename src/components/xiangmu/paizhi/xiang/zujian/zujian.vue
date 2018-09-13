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
                                <th>组件名称</th>
                                <th>备注</th>
                                <th>支持平台</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(v,index) of mu">
                                <td>
                                    <div class="shi">
                                        <i :class="{'iconfont icon-dashboard':v.sp == '看板','iconfont icon-diedaijianying':v.sp == '迭代'}"></i>
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
                                    <a href="javascript:">
                                        <i class="wtf iconfont icon-huishouzhan"></i>
                                    </a>
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
                    sp:'看板',
                    content:'用看板的方式分组展示任务'
                },
                {
                    sp:'迭代',
                    content:'用于敏捷开发管理中的迭代管理，支持迭代统计、故事板及规划'
                }
            ]
        }
    }
}
</script>

<style style="scss" scoped>
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
