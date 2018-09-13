<template>
    <div class="Muban">
        <div class="moudle">
            <div class="M_sour">
                <i class="icon iconfont icon-search"></i>
                <input type="text" placeholder="搜索工作组件">
                <div class="area">
                    <button class="ar_ico">
                        <i class="iconfont icon-jiahao"></i>
                        <span>添加工作组件</span>
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
                            <tr>
                                <td>
                                    <div class="shi">
                                        <i class="iconfont icon-xiashurenwu-"></i>
                                        <span>下属任务</span>
                                    </div>
                                </td>
                                <td>
                                    <span class="beizhu">
                                        下属任务
                                    </span>
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

}
</script>

<style style="scss" scoped>
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
     .M_sour i{
        color: #aaa;
    }
    .con{
        color:#888;
    }
    .icon-xiashurenwu-{
        color:#22d7bb;
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
        color:#fff;
    }
    .area .ar_icon i{
        position: absolute;
        top:11px;
        left:165px;
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
    }
    .extend .wtf{
        padding-right: 4px;
        vertical-align: middle;
    }
</style>

