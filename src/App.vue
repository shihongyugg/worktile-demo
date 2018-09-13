<template>
  <div class="app">
    <div class="left-nav">
      <div class="logo">
        <img src="https://s3.cn-north-1.amazonaws.com.cn/lclogo/team_logo_default.png" alt="">
      </div>
      <ul>
        <li>
          <router-link  v-for="(item,index) of tabNav" :to="item.url">
            <span class="it_icon">
              <i :class="{'iconfont icon-xiaoxi':item.title == '消息','iconfont icon-xiangmu':item.title == '项目','iconfont icon-rili':item.title == '日历','iconfont icon-wenjian':item.title == '网盘','iconfont icon-contacts-gray':item.title == '通讯录'}"></i>
            </span>
            <span>{{item.title}}</span>
          </router-link>
        </li>
      </ul>
      
    </div>
    <router-view></router-view>
    
    <!-- 用于展示路由连接的组件 -->
    <!-- <my-home></my-home> -->
  </div>
</template>

<script>
// import myHome from "./components/home/home";
export default {
  data() {
    return {
      tabNav: [
        {
          title: "消息",
          url: "/xiaoxi"
        },
        {
          title: "项目",
          url: "/xiangmu/"
        },
        {
          title: "日历",
          url: "/rili"
        },
        {
          title: "网盘",
          url: "/wangpan"
        },
        {
          title: "通讯录",
          url: "/tongxunlu/"
        }
      ]
    };
  },
  components: {
    // myHome
  }
};
</script>

<style lang="scss">
.router-link-active{
  background: #18bfa4;
}
html,
body,
.app {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
.logo{
    margin: 18px 0;
    text-align: center;
    display: block;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.left-nav {
  float: left;
  position: relative;
  width: 70px;
  height: 100%;
  background: #22d7bb;
  // overflow-y: hidden;
  box-sizing: border-box;
  // display: flex
  li {
    a {
      // height: 70px;
      text-align: center;
      display: block;
      color: #fff;
      &:hover{
           background: #18bfa4;
      }
      span{
        display: block;
        font-size:14px;
      }
    }
  }
}
.it_icon{
    padding-top: 15px;
    color: rgb(3, 1, 1);
    opacity: .8;
    position: relative;
}
.it_icon .iconfont{
  font-size:18px;
  color: #fff;
}
.icon-shixinxiaoxi{
  color: #fff;
  display: none;
  transition: all 1s;
  
}

</style>
