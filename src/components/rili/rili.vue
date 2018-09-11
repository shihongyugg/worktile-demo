<template>
    <div class="rili">
        <div class="rili-left">
            <div class="rl-tit">
                日历
            </div>
						<div class="calendar-panel">
								<v-calendar :pane-width="240" :theme-styles='themeStyles' class="cale" :attributes='attrs'></v-calendar>
						</div>
						<div class="navMenu">
							<el-col :span="24">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
			 <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">我的日程</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class=""></i>
          <span>团队日程</span>
        </template>
        <el-menu-item-group>
          
          <el-checkbox class="checkbox" v-model="checked4">会议安排</el-checkbox>
          <el-checkbox class="checkbox" v-model="checked1">备选项</el-checkbox>
          <el-checkbox class="checkbox" v-model="checked2">备选项</el-checkbox>
          <el-checkbox class="checkbox" v-model="checked3">备选项</el-checkbox>
        </el-menu-item-group>
       
      </el-submenu>

			<el-submenu index="2">
        <template slot="title">
          <i class=""></i>
          <span>成员日程</span>
        </template>
       
      </el-submenu>
    </el-menu>
  </el-col>
						</div>
        </div>

				<div class="rl-right">
					<div class="rl-right-nav">
						<i class="el-icon-tickets"></i>
						<span>团队日程</span>
					</div>
				</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      checked4: true,
      checked1: true,
      checked2: true,
      checked3: true,
      attrs: [
        {
          key: "today",
          highlight: {
            backgroundColor: "#22d7bb"
            // Other properties are available too, like `height` & `borderRadius`
          },
          dates: new Date()
        }
      ],
      // 样式
      themeStyles: {
        wrapper: {
          background: "rgba(253,253,253,.95)",
          color: "#666",
          border: "0",
          height: "260"
        }
      }
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.rili {
  width: calc(100% - 70px);
  height: 100%;
  margin-left: 70px;
  box-sizing: border-box;
  .rili-left {
    border-right: 1px solid #ddd;
    background: rgba(253, 253, 253, 0.95);
    height: 100%;
    float: left;
    width: 240px;
    box-sizing: border-box;
    color: #333;
    .rl-tit {
      margin-left: 20px;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
    }
    .calendar-panel {
      width: 100%;
      height: 260px;
      box-sizing: border-box;
      // padding: 10px;
      overflow: hidden;
      .cale {
        width: 100%;
      }
    }
    .navMenu {
      overflow: hidden;
      .checkbox {
        display: block;
        height: 40px;
        line-height: 40px;
        margin-left: 0px;
        padding-left: 30px;

        &:hover {
          box-shadow: 0 0 8px 2px #eee;
        }
        &:nth-child(1) {
          margin-left: 0px;
          padding-left: 30px;
        }
      }
    }
  }

  .rl-right {
    box-sizing: border-box;
    width: calc(100% - 240px);
    // margin-left: 240px;;
    background-color: #f33;
    height: 100%;
    float: left;
    .rl-right-nav {
      width: 100%;
      box-sizing: border-box;
      padding: 0 15px;
      height: 50px;
      background-color: #fff;
			line-height: 50px;
    }
  }
}
</style>
