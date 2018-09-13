<template>
    <div class="rili">
        <div class="rili-left">
            <div class="rl-tit">
              <i class="iconfont icon-rili"></i>
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
          
          <el-checkbox class="checkbox cur41" v-model="checked4">会议安排</el-checkbox>
          <el-checkbox class="checkbox cur11" v-model="checked1">备选项1</el-checkbox>
          <el-checkbox class="checkbox cur21" v-model="checked2">备选项2</el-checkbox>
          <el-checkbox class="checkbox cur31" v-model="checked3">备选项3</el-checkbox>
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

            <div class="conter">
              <a href="####" @click="jianjian()"><</a>
              <h5>
                {{year}}
                年
                {{month}}
                月
              </h5>
              <a href="####" @click="jiajia()">></a>
            </div>
            <div class="nav-right">
              <button @click="modal" class="mod">
                <!-- <span class="jj">+</span> -->
                <i class="jj">+</i>
                <span>新建日程</span>
              </button>

              <div class="nav-right-btn">
                <a href="####" class="cur">月</a>
                <a href="####">周</a>
                <a href="####">日</a>
              </div>
              
            </div>

             

					</div>

          <div class="rl-right-box">
            <div class="rl-right-main">
                <!-- ------------------------------------------------------- -->
                <div class="rili-box">
                  
    <div class="calender">
            
          
            <table>
                
                <thead class="week">
                    <th>周日</th>
                    <th>周一</th>
                    <th>周二</th>
                    <th>周三</th>
                    <th>周四</th>
                    <th>周五</th>
                    <th>周六</th>
                </thead>
                <tbody>
                    <!-- index从0来时 i从一开始 -->
                    <tr v-for="(item,index) of calender.length/7">
                        <td @dblclick="modal" v-for="i of 7" :class="{cur:calender[index * 7 + (i -1)].cur}">
                          {{calender[index * 7 + (i-1)].fullDay}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="schedule">
            <div class="box" v-for="item of schedule">
                <table>
                    <tr v-for="child of item">
                        <td @mouseover="hover2(txt.fullDayAll)" @mouseout="hover2(0)"  v-for="txt of child" :style="{width:100 / 7 +'%'}" :class="{cur1:txt.sta=='b1',cur2:txt.sta=='b2',cur3:txt.sta=='b3',cur4:txt.sta=='b4'}" :colspan="txt.colspan">{{txt.title}}

                         <transition name="el-zoom-in-top">
                           <div v-if="txt.sta" v-show="txt.fullDayAll == hover3" class="hover1">
                             <h5>{{txt.title}}</h5>

                            <h4>你确定要删除该日程吗?</h4>
                            <el-button class="clobtn" type="danger" @click="clo(txt.id)" round>删除</el-button>
                            <el-button class="callbtn" round>取消</el-button>
                            
                          </div>
                        </transition>
                          
                        </td>
                    </tr>
                </table>
            </div>
        </div>
                </div>
                <!-- ------------------------------------------------------- -->
                
                 


            </div>
          </div>

				</div>
         <div v-show="block" class="bg"></div>
         <transition name="el-zoom-in-center">
            <div v-show="block" class="block">
              <i class="cl el-icon-close" @click="block=false"></i>
              <div class="block-head">
                <span class="demonstration">新建日程</span>
              </div>
              <div class="block-main">
                <div>
                    <input class="input1" placeholder="请输入内容" v-model="input10" clearable></input>
                    <el-form label-width="105px">
                        <el-form-item label="日历">
                      <el-select class="xuankuang inputall" v-model="region" placeholder="会议安排">
                        <el-option label="会议安排" value="b4"></el-option>
                        <el-option label="备选项1" value="b1"></el-option>
                        <el-option label="备选项2" value="b2"></el-option>
                        <el-option label="备选项3" value="b3"></el-option>
                      </el-select>
                      </el-form-item>
                    </el-form>
                <label class="el-form-item__label" style="width: 93px;">日期</label>
                <el-date-picker class="picker" v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期"
                    end-placeholder="结束日期" format="yyyy-MM-dd" value-format="yyyyMMdd">
                </el-date-picker>
                <el-checkbox class="che">全天</el-checkbox>
                <el-form label-position="right" label-width="105px">
                     <el-form-item label="参与人">
                      <a class="cyr" href="####">M</a>
                      <i class="el-icon-plus"></i>
                    </el-form-item>
                    </el-form>
                <el-checkbox class="che" >参与人反馈</el-checkbox>
                <a href="####" class="text">添加更多选项</a>
                <el-button @click="addArr" class="sub" type="primary" round>确定</el-button>
                <el-button @click="block=false" type="" round>取消</el-button>
                </div>
              </div>
                
            </div>
        </transition>
    </div>
</template>

<script>
// import '../../assets/iconfont/iconfont.css'
export default {
  
  data() {
    return {
      region: "",
      radio3: "查看全部",
      radio4: "月",
      radio: "1",
      value6: "",
      input10: "",
      block: false,
      year: 2018,
      month: 9,
      hover: false,
      hover3: 0,
      checked4: true,
      checked1: true,
      checked2: true,
      checked3: true,
      selectedDate: {
        start: new Date(2018, 0, 9),
        end: new Date(2018, 0, 18)
      },
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
    jiajia(){
      this.month++;
      if(this.month>12){
        this.month=1;
        this.year++;
      }
    },
    jianjian(){
      this.month--;
      if(this.month<1){
        this.month=12;
        this.year--;
      }
    },
    hover2(id) {
      // console.log(id);
      this.hover3 = id;
    },

    modal() {
      this.block = true;
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    clo(id) {
      console.log(id);
      //发送del 参数 id
      this.$store.dispatch("DEL", { id: id });

      this.$message({
        message: "删除成功",
        type: "success"
      });
    },
    addArr() {
      var id = "";
      var str = "741852qwertyuio9876543201plkjhgfdszxcvbnm0963";
      for (var i = 0; i < 8; i++) {
        //~~ 相当于parseInt
        id += str[~~(Math.random() * str.length)];
      }
      // console.log(id);
      var obj = {
        title: this.input10,
        start: this.value6[0],
        end: this.value6[1],
        sta: this.region,
        id: id
      };
      // console.log(obj);
      this.$store.dispatch("ADD", obj);
      this.value6 = [];
      this.input10 = "";
      this.block = false;
    }
  },
  mounted() {},
  created() {
    this.$store.dispatch("GETALL");
  },
  computed: {
    getThings() {
  
      // console.log("getThings");
      var arr = [];
      arr = [];
      if (this.checked4) {
        let arrB4 = this.$store.getters.b4;
        for (let i = 0; i < arrB4.length; i++) {
          arr.push(arrB4[i]);
        }
      }
      if (this.checked1) {
        let arrB1 = this.$store.getters.b1;
        for (let i = 0; i < arrB1.length; i++) {
          arr.push(arrB1[i]);
        }
      }
      if (this.checked2) {
        let arrB2 = this.$store.getters.b2;
        for (let i = 0; i < arrB2.length; i++) {
          arr.push(arrB2[i]);
        }
      }
      if (this.checked3) {
        let arrB3 = this.$store.getters.b3;
        for (let i = 0; i < arrB3.length; i++) {
          arr.push(arrB3[i]);
        }
      }
      return arr;
    },
    calender() {
      var arr = [];
      // new data有三个参数：参数1是年 参数2是月 参数3默认是1
      var nowMonthLength = new Date(this.year, this.month, 0).getDate();
      var nowMonthFirstWeek = new Date(this.year, this.month - 1).getDay();
      var LastMonthLength = new Date(this.year, this.month - 1, 0).getDate();
      // console.log('本月有'+nowMonthLength);
      // console.log('本月第一周'+nowMonthFirstWeek);
      // console.log('上个月长度'+LastMonthLength);

      this.month = parseInt(this.month);
      // 每个月上一个月是哪一年的那一个月的第几天
      var pmonth = this.month == 1 ? 12 : this.month - 1;
      var pyear = this.month == 1 ? this.year - 1 : this.year;
      var nmonth = this.month == 12 ? 1 : this.month + 1;
      var nyear = this.month == 12 ? this.year + 1 : this.year;
      // 补零函数
      //9月5日  0905
      function buling(n) {
        return n.toString().length > 1 ? n.toString() : "0" + n.toString();
      }

      // 补充上个月的最后几天
      while (nowMonthFirstWeek--) {
        arr.unshift({
          day: LastMonthLength,
          cur: true,
          fullDay: `${LastMonthLength}`,
          nian: pyear,
          yue: buling(pmonth),
          fullDayAll: `${pyear}${buling(pmonth)}${buling(LastMonthLength)}`
        });
        day: LastMonthLength--;
      }
      // 本月天数
      var _a = 1;
      while (nowMonthLength--) {
        arr.push({
          day: _a,
          cur: false,
          fullDay: `${_a}`,
          nian: this.year,
          yue: buling(this.month),
          fullDayAll: `${this.year}${buling(this.month)}${buling(_a)}`
        });
        _a++;
      }

      // 下个月补全
      var nextLength = arr.length > 35 ? 42 - arr.length : 35 - arr.length;
      _a = 1;
      while (nextLength--) {
        arr.push({
          day: _a,
          cur: true,
          fullDay: `${_a}`,
          nian: nyear,
          yue: nmonth,
          fullDayAll: `${nyear}${buling(nmonth)}${buling(_a)}`
        });
        _a++;
      }
      console.log(arr);
      return arr;
    },
    schedule() {
      var arr = []; // 里边放的box
      // 待办事物
      for (let i = 0; i < this.calender.length / 7; i++) {
        arr.push([]); //里边放tr
        for (let j = 0; j < 3; j++) {
          arr[i].push([]); //里边放td
          for (let k = 0; k < 7; k++) {
            //写td
            arr[i][j].push({
              colspan: 1,
              fullDayAll: this.calender[i * 7 + k].fullDayAll,
              week: k
            });
          }
        }
      }

      //处理事务
      var _things = this.getThings;
      console.log(_things, "_things");
      // &&  things
      _things.forEach(item => {
        //开始日期时间戳
        var start = new Date(
          item.start.toString().substr(0, 4),
          item.start.toString().substr(4, 2) - 1,
          item.start.toString().substr(6, 2)
        );
        // console.log(start);

        var end = new Date(
          item.end.toString().substr(0, 4),
          item.end.toString().substr(4, 2) - 1,
          item.end.toString().substr(6, 2)
        );

        // 结束时间  - 开始时间 计算经历了几天
        var during = (end - start) / 86400000 + 1;
        // console.log(during);

        //一个信号量
        var flag = true;

        arr.forEach((week, weekidx) => {
          // console.log(weekidx);
          //先遍历 tr
          for (let i = 0; i < 3; i++) {
            //遍历 td
            for (let j = 0; j < 7; j++) {
              if (week[i][j]) {
                //如果这个对象被删除了就不需要遍历了
                if (
                  week[i][j].fullDayAll == item.start &&
                  flag &&
                  !week[i][j].title
                ) {
                  //第一周持续的时间
                  let nowWeekDuring =
                    during + week[i][j].week <= 7
                      ? during
                      : 7 - week[i][j].week;
                  //设置title

                  week[i][j].title = item.title;
                  week[i][j].id = item.id;
                  //设置持续时间
                  week[i][j].colspan = nowWeekDuring;
                  week[i][j].sta = item.sta;
                  week[i].splice(j + 1, nowWeekDuring - 1);
                  flag = false;
                  var rest = during - nowWeekDuring;
                  let count = 0;

                  while (rest > 0) {
                    count++;

                    let nextWeekDuring = rest >= 7 ? 7 : rest;
                    for (let n = 0; n < 3; n++) {
                      //判断 如果当前行有内容 就去下一行
                      if (arr[weekidx + count][n][0].title) {
                        continue;
                      }
                      //weekidx 是起始周
                      //count 跨了几周
                      arr[weekidx + count][n][0].title = item.title;
                      arr[weekidx + count][n][0].id = item.id;
                      arr[weekidx + count][n][0].colspan = nextWeekDuring;
                      arr[weekidx + count][n][0].sta = item.sta;
                      //删除后边的
                      arr[weekidx + count][n].splice(1, nextWeekDuring - 1);
                      break;
                    }

                    rest -= 7;
                  }
                }
              }
            }
          }
        });
      });

      console.log(arr);

      return arr;
    }
  }
};
</script>

<style lang="scss" scoped>
.fl {
  width: 100px;
  position: absolute;
  top: 62px;
  left: -100px;
}
.fr {
  width: 500px;
  position: absolute;
  top: 62px;
  right: -500px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.calender table {
  width: 100%;
  height: 100%;
  z-index: 50;
  td {
    // background-color: #fff;
    border: 1px solid #f3f3f3;
    border-collapse: collapse;
    // width: 100%;
  }
}

table,
tr,
th,
td {
  border-collapse: collapse;
}
.rili-box {
  width: 100%;
  height: 100%;
  position: relative;
}
.calender {
  z-index: 300;
}

.calender td {
  color: #666;
  height: 100px;
  vertical-align: top;
  text-align: left;
  padding: 5px 5px 0 0;
  font-size: 13px;
}
.week th {
  border: 0;
  font-size: 14px;
  color: #333;
  font-weight: 500;
  height: 40px;
}

.schedule {
  // z-index: 0;
  width: 100%;
  height: calc(100% - 40px);
  position: absolute;
  top: 85px;
  left: 0;
}

.schedule .box {
  height: 138px;
  width: 100%;
  margin: 0 auto;
}

.schedule .box table {
  z-index: 500;
  position: relative;
  top: -6px;
  width: 100%;
}

.schedule .box table tr {
  height: 21px;
  line-height: 21px;
  td {
    position: relative;
    // border: 1px solid #000;
    // border: 0;
    z-index: 300;
  }
}

.cur1 {
  background: rgba(44, 204, 218, 0.3);
  border-left: 1px solid #2cccda;
  color: #333;
  font-size: 12px;
  &:hover {
    background: #2cccda;
  }
}
.cur2 {
  background: rgba(196, 114, 238, 0.3);
  border-left: 1px solid #c472ee;
  color: #333;
  font-size: 12px;
  &:hover {
    background: #c472ee;
  }
}
.cur3 {
  background: rgba(153, 215, 90, 0.3);
  border-left: 1px solid #99d75a;
  color: #333;
  font-size: 12px;
  &:hover {
    background: #99d75a;
  }
}
.cur4 {
  background: rgba(250, 90, 85, 0.3);
  border-left: 1px solid #fa5a55;
  color: #333;
  font-size: 12px;
  &:hover {
    background: #fa5a55;
  }
}
.cur11 {
  color: #2cccda;
}
.cur21 {
  color: #c472ee;
}
.cur31 {
  color: #99d75a;
}
.cur41 {
  color: #fa5a55;
}
.hover1 {
  width: 210px;
  height: 100px;
  padding: 15px;
  position: absolute;
  top: 22px;
  left: 0;
  background-color: #fff;
  z-index: 600;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.18);
  h4 {
    font-size: 16px;
    color: #666;
    font-weight: 400;
  }
  .clobtn {
    width: 80px;
    height: 28px;
    line-height: 0px;
  }
  .callbtn {
    width: 80px;
    height: 28px;
    line-height: 0px;
  }
}

.inputall {
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    border-color: #22d7bb;
  }
  &:focus {
    border-color: #22d7bb;
    border-color: #22d7bb;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}
.input1 {
  display: block;
  width: 100%;
  line-height: 1.5;
  color: #333;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #eee;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 10px 15px;
  margin: 0 0 15px 0;
  &:hover {
    border-color: #22d7bb;
  }
  &:focus {
    border-color: #22d7bb;
    border-color: #22d7bb;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}
.calender {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.3;
  z-index: 300;
}
.block {
  width: 660px;
  height: 483px;
  background-color: #fff;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -390px;
  margin-left: -330px;
  border-radius: 10px;
  z-index: 600;

  .block-head {
    width: 100%;
    height: 50px;
    padding: 0 30px;
    border-bottom: 1px solid #eee;
    span {
      line-height: 50px;
      color: #333;
    }
  }
  .block-main {
    width: 100%;
    height: 433px;
    padding: 20px 30px 30px;
    box-sizing: border-box;
    .sub {
      margin-left: 110px;
    }
    .text {
      color: #22d7bb;
      display: block;
      font-size: 15px;
      margin-left: 110px;
      margin-bottom: 15px;
    }
    .xuankuang {
      width: 495px;
      height: 38px;
      margin: 0 0 15px 0;
    }
    // .pick{
    //   margin-left: px;
    // }
    .picker {
      width: 495px;
      display: block;
      margin-left: 105px;
    }
    .che {
      margin-left: 110px;
      display: block;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .cyr {
      display: inline-block;
      background-color: rgb(45, 188, 255);
      width: 30px;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      border-radius: 30px;
      text-align: center !important;
      overflow: hidden;
      zoom: 1;
      vertical-align: middle;
      color: #fff !important;
      text-shadow: transparent 0 0 0;
      padding: 0 !important;
      float: left;
      margin: 5px 10px;
    }
    i {
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      border-radius: 30px;
      text-align: center;
      overflow: hidden;
      float: left;
      font-size: 14px;
      border: 1px dashed #aaa;
      border-radius: 50%;
      margin: 5px 0px;
    }
  }
  .cl {
    font-size: 20px;
    font-weight: 600;
    color: #ddd;
    position: absolute;
    top: 15px;
    right: 30px;
    &:hover {
      color: #22d7bb;
    }
  }
}
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
    // overflow: hidden;
    .rl-right-nav {
      width: 100%;
      box-sizing: border-box;
      padding: 0 15px;
      height: 50px;
      background-color: #fff;
      line-height: 50px;
      position: relative;
      .conter {
        width: 400px;
        // margin: 0 auto;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        a {
          display: inline;
          font-family: "宋体";
          color: #aaa;
          font-weight: 700;
          margin: 0 10px;
          &:hover {
            color: #22d7bb;
          }
        }
        h5 {
          display: inline;
          font-size: 16px;
          color: #333;
          font-weight: 500;
        }
      }
      .nav-right {
        float: right;
        width: 338px;
        height: 50px;
        line-height: 50px;
        position: relative;
        .nav-right-btn {
          width: 208px;
          height: 28px;
          position: absolute;
          right: 10px;
          top: 13px;
          display: flex;
          box-sizing: border-box;
          // border: 1px solid #ddd;
          .cur {
            color: #22d7bb;
            border-color: #22d7bb;
          }
          a {
            box-sizing: border-box;
            border: 1px solid #ddd;
            flex: 1;
            line-height: 28px;
            text-align: center;
            color: #888;
          }
        }

        button {
          position: relative;
          font-size: 14px;
          // cursor: pointer;
          height: 30px;
          line-height: 30px;
          margin-right: 10px;
          color: #fff;
          background-color: #22d7bb;
          border-color: #22d7bb;

          display: inline-block;
          white-space: nowrap;
          vertical-align: middle;
          user-select: none;
          border: 1px solid transparent;

          // font-size: 0.875rem;

          min-width: 116px;
          border-radius: 1.25rem;
          // transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
          span {
            padding-left: 10px;
            line-height: 30px;
          }
          .jj {
            position: absolute;
            top: 0;
            left: 15px;
            line-height: 30px;
            font-weight: 700;
            font-size: 20px;
          }
          &:hover {
            box-shadow: 0 2px 5px 1px rgba(34, 215, 187, 0.6);
          }
        }
      }
    }
    .rl-right-box {
      background-color: #ffd;
      width: 100%;
      height: calc(100% - 50px);
      box-sizing: border-box;
      .rl-right-main {
        padding: 15px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: relative;
        .rili-box {
          background: rgba(253, 253, 253, 0.95);
          overflow: hidden;
        }

        .big {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
