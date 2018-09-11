<template>
    <div>
        <h1>国产视频页面</h1>
        <ul class="video">
            <li v-for="item of vList" :class="{cur:$route.name==item.title}" @click="sendParams">
                <router-link :to='item.url'>
                        {{item.title}}
                </router-link>
                <!-- <div @click="sendParams">
                    {{item.title}}
                </div> -->
            </li>
        </ul>
        <div class="rv">
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
             msg: 'test message',
            vList:[
                {
                    title:'视频1',
                    url:'/video/guochan/shipin1'
                },
                {
                    title:'视频2',
                    url:'/video/guochan/shipin2'
                },
            ]
        }
    },
    methods: {
      sendParams () {
        this.$router.push({
            path: '/news', 
            name: '新闻',
            params: { 
                name: 'name', 
                dataObj: this.msg
            }
            
        })
      }
    },

}
</script>

<style lang='scss' scoped>
    div{
        width: 100%;
         height: 400px;
        background: #0ff;
       
    }
    .video{
        list-style: none;
            float: left;
    }
    .video li{
       
        width: 300px;
        box-sizing: border-box;
        border-right: 1px solid #333;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: green;
        color: cyan;
    }
    .video li.cur{
        background-color: #00f;
        color: #fff;
    }
     a{
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: #fff;
    }
    .router-link-active{
      color: rgb(241, 9, 9);
    }
    .rv{
        float: left;
        border: 1px solid red;
        width: 500px;
        height: 120px;
    }
</style>
