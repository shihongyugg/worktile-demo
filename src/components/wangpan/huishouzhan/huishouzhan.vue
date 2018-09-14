<template>
    <div class="dd"> 
        <div class="div1">
            <a href="javascript:;" class="ng-binding"><i class="iconfont icon-huishouzhan-copy"></i> 回收站 </a>    
        </div>  
        <div class="div2">
            <p class="empty-text ng-binding"> <i class="iconfont icon-wenjian i2"></i>没有文件</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='css' scoped>
*{
    margin: 0;  
    padding: 0; 
}
    .div1{
        width: 100%;
        height: 50px;
        background-color: white;        
    }
    .div1 a{
        margin: 0 60px;
        line-height: 47px;
        color: #aaa;
    }
    .dd{
        height: 100%;
    }
    .div2{
        width: 95%;
        margin: 20px auto;
        height: 100%;
        background-color: white;
    }
    p{
        color: #cacaca;
       text-align: center;
       position: relative;  
       top: 50px;
    }
    i{
          font-size: 24px;
            margin: 0 10px 4px 0;
            color: #22d7bb;
    }
    .i2{
        display: block;
        color:  #eee;
        font-size: 5rem;
    }
</style>
