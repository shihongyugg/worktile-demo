<template>
    <div class="FZ">
        <div class="Fz_tit">
            <a href="javascript:" class="a_link">活动任务</a>
            <a href="javascript:">完成任务</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style style="scss" scoped>
    .Fz_tit{
        line-height: 38px;
        font-size: 14px;
        padding: 1px;
    }
    .Fz_tit .a_link{
        position: relative;
        padding-left: 20px;
        margin-right: 40px;
        color:#22d7bb;
    }
    .Fz_tit a{
        color:#888;
    }
    .Fz_tit a:hover{
        color:#22d7bb;
    }
    .Fz_tit .a_link:after{
        width: 0;
        content: "";
        border-right: 1px solid #eee;
        top: calc(50% - 15px / 2);
        height: 15px;
        display: block;
        position: absolute;
        right: -20px;
    }
</style>
