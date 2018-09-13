<template>
    <div>
      <div class="unread_cont">
               <i class="iconfont .icon-dvt-message"></i>
               <p class="empty-text ">没有未读消息</p>
           </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
  
    .unread_cont{
      width:calc(100% - 340px);
    height: 80%;
    overflow: auto;
    position: absolute;
    /* margin-top: 20px; */
    /* left: 57px; */
    right: 16px;
    background-color: #fff;
    bottom: 20px;
}
.empty-text {
    color: #cacaca;
    font-size: .875rem;
    text-align: center;
    margin-top: 220px;
}

</style>
