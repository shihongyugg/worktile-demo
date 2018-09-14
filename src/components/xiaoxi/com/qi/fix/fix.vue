<template>
    <div>
        <div class="unread_cont">
           <div class="panel-heading">
                <span class="panel-title" >固定消息</span>
            </div>
        </div>
               
                <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
  
.unread_cont{
    position: absolute;
    left: 315px;
    top: 78px;
    width:calc(100% - 340px);
    height: 87%;
    overflow: auto;
    margin-left: 10px;
    margin-top: 20px;
    background-color: #fff;
}
.panel-heading {
    padding: 10px 20px 0;
    line-height: 30px;
    font-size: 14px;
    border-bottom: none;
}
 .panel-heading .panel-title {
    display: inline-block;
    padding-left: 8px;
    line-height: 1;
    color: #333;
    font-size: 14px;
    border-left: solid 3px #22d7bb;
}
</style>
