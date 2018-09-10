<template>
    <div>
        <!-- <nav>
             <router-link  v-for="(item,index) of tabNav" :to="{path:item.url,name:'quanju',params:{id:index}}">{{item.title}}</router-link>
        </nav>
        <router-view></router-view> -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      tabNav: [
        {
          title: "项目",
          url: "/xiangmu"
        },
        {
          title: "任务",
          url: "/renwu"
        },
        {
          title: "安全",
          url: "anquan"
        },
        {
          title: "高级",
          url: "/gaoji"
        },
        {
          title: "全局",
          url: "/quanju"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
nav {
    .router-link-active{
        color: #22d7bb;
    border-bottom: 2px solid #22d7bb;
    }
  width: 100%;
  /* height: 50px; */
  border-bottom: 1px solid #eee;
//   display: flex;
  text-align: center;
  background: rgba(253, 253, 253, 0.97);
  padding: 0 15px;
  height: 50px;
  line-height: 50px;
  a {
    //   flex: 0 1 0;
    // box-sizing: border-box;
    display: inline-block;
    margin-right: 20px;
    color: #333;
    padding: 0 24px 0;
    &:hover{
        color: #22d7bb;
    border-bottom: 2px solid #22d7bb;
    }
    &.cur{
        color: #22d7bb;
    border-bottom: 2px solid #22d7bb;
    }
  }
}
</style>
