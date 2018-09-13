<template>
    <div class="box">
        <div class="b_center">
            <table>
                <thead>
                    <tr>
                        <th v-for="item of cet">{{item}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(v,index) of mu">
                        <td>
                            <span>{{v.id}}</span>
                        </td>
                        <td>
                            <span class="beizhu">{{v.name}}</span>
                        </td>
                        <td><span class="beizhu"><i class="iconfont icon-yiwancheng"></i>{{v.txt}}</span></td>
                        <td class="con">
                            <span>{{v.tit}}</span>
                        </td>
                        <td class="extend">
                            {{v.names}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cet:["#","编号","状态","标题","负责人"],
            mu:[
                {
                    id:1,
                    name:11,
                    sp:'项目概要报表',
                    txt:'已完成',
                    tit:'123',
                    content:'展示项目中的基本统计，类型的分布等',
                    names:'M'
                },
                {
                    id:2,
                    name:55,
                    sp:'项目概要报表',
                    txt:'已完成',
                    tit:'123',
                    content:'展示项目中的基本统计，类型的分布等',
                    names:'M' 
                }
            ]
        }
    }
}
</script>

<style style="scss" scoped>
    .box{
        margin:15px;
        height: calc(100% - 120px);
        width:calc(100% - 30px) ;
        background-color: #fff;
        position: relative;
    }
    .b_center{
        width: 100%;
        height: 100%;
    }
    table{
        width: 100%;
        color: #aaa;
        border: 1px solid #eee;
        border-collapse: collapse;
        border-spacing: 0;
    }
    table thead{
        margin-bottom: 15px;
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
        padding: 5px 15px;
        font-size: 14px;
        text-align: center;
    }
    .beizhu{
        background-color: rgba(34,215,187,.1);
        color: #22d7bb;
    }
    .con span{
        text-decoration: line-through;
    }
</style>
