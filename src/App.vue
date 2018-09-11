<template>
  <div class="app">
    <div class="left-nav">
      <ul>
        <li>
          <router-link  v-for="(item,index) of tabNav" :to="item.url">{{item.title}}</router-link>
        </li>
      </ul>
      
    </div>
    <router-view></router-view>
    
    <!-- 用于展示路由连接的组件 -->
    <!-- <my-home></my-home> -->
  </div>
</template>

<script>
import myHome from "./components/home/home";
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
          url: "/xiangmu"
        },
        {
          title: "日历",
          url: "rili"
        },
        {
          title: "网盘",
          url: "/wangpan"
        },
        {
          title: "通讯录",
          url: "/tongxunlu"
        }
      ]
    };
  },
  components: {
    myHome
  }
};
</script>

<style lang="scss">
// .router-link-active{
//   // background: #18bfa4;
// }
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
      height: 70px;
      line-height: 70px;
      text-align: center;
      display: block;
      color: #fff;
      &:hover{
           background: #18bfa4;
      }
    }
  }
}
</style>
