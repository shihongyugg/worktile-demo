<template>
  <div>
    <!-- 用于展示路由连接的组件 -->
    <my-home></my-home>
  </div>
</template>

<script>
import myHome from "./components/home/home"
export default {
  data() {
    return {}
  },
  components:{
    myHome
  }
};
</script>

<style lang="scss">
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
</style>
