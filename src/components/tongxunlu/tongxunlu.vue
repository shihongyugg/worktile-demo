<template>
    <div class="txl">
       <div class="main-body-side">
           <div class="title-box">
               <span class="title ">通讯录</span>
               <i class="adduser el-icon-plus"></i>
           </div>
        
        <i class='iconfont  icon-chengyuan-tianjia wtf'></i>
        <div class='body-list'>
            <div class='search-area'>
                <input type="text" placeholder="搜索">    
            </div>
            <ul class="lc-tabs-group">
                <li class='el-icon-message'></li>
                <li class="line"></li>
                <li class='iconfont  icon-xiashurenwu-'></li>
            </ul>
            <div class='ng-scope'>
                <!-- 群组列表 -->
                <div class='section-header'>
                    <div class="title2"  @click='show2()'>
                        <i class='iconfont icon-right tran'></i>
                        <a href="#" >群组</a>
                        <i @click="modal=true" class="more el-icon-more"></i>
                    </div>
                     <transition name="el-zoom-in-top">
                    <ul v-show="select2" id="modal-ul">
                     
                        <router-link tag="li" :to="{name:'qz123',params:{name1:item.title}}"  v-for='item of getAll'>
                            <span :style="{background:color[item.color]}" class='channel-icon'>
                                <i class='iconfont icon-yonghuming'></i>
                            </span>                   
                            <span class='name'>{{item.title}}</span>
                        </router-link>
                      
                    </ul>
                    </transition>
                </div>
                <!-- 机器人列表 -->
                <div class='robot'>
                    <div class="title2" @click='show()'>
                        <i class='iconfont icon-right tran' :class='{"caret-down":select}'></i>
                        <a href="#" >机器人</a>
                    </div>
                    <ul :style="{height:robotH}">
                        <li v-for='(item,index) of tabNav' :class="{cur:$route.name==item.title}">
                            <span :style="{background:color[index]}" class="yuan"><i class="iconfont icon-yonghuming"></i></span>
                            
                            <!-- <span class="name">12</span> -->
                            <router-link :to='item.url' class='name'>{{item.title}}</router-link>
                        </li>
                    </ul>
                </div>
                <!-- 联系人列表 -->
                <div class="man">
                    <div class="title2">
                        <a href="#">M</a>
                    </div>
                    <ul>
                        <li  :class="{cur:$route.name=='m'}">
                            <span class='channel-icon'>
                                M
                            </span>                   
                            <span class="name" @click="routerGo('/tongxunlu/M')" >M</span>
                        </li>
                    </ul>
                </div>
            </div>                     
        </div> 
        </div> 
        <div v-show="modal" class="modal-f"></div>
        <div v-show="modal" class="modal">
            <div class="modal-head">
                <span>创建群组</span>
                <i @click="modal=false" class="clo el-icon-close"></i>
            </div>
            <div class="modal-main">
                <el-input
                    placeholder="请输入内容"
                    v-model="input10"
                    clearable>
                </el-input>
                <ul class="color-box">
                    <li @click="color1(index)" v-for="(v,index) in color"><span :style="{background:v}"><i v-show="index == clidx" class="el-icon-check"></i></span></li>
                </ul>
                <el-form label-width="110px">
                    <el-form-item label="群组主题">
                        <el-input placeholder="说明群组主要讨论的内容" value="" :rows="3" type="textarea" v-model="textarea"></el-input>
                    </el-form-item>
                    <el-form-item label="可见范围">
                         <el-select class="input" v-model="textarea11" placeholder="私有：只有加入的成员才能看见此群组">
                          <el-option label="公开：企业所有成员都可以看见此群组" value="gongkai"></el-option>
                          <el-option label="私有：只有加入的成员才能看见此群组" value="siyou"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="群组成员">
                         <a class="cyr" href="####">M</a>
                          <i class="plus el-icon-plus"></i>
                    </el-form-item>
                </el-form>
                 <el-button @click="addUser()" style="margin-left:110px" type="primary" round>确定</el-button>
                <el-button @click="modal=false" round>取消</el-button>
 
            </div>
        </div>
        <router-view></router-view>
    </div>
    
</template>

<script>
import '../../assets/iconfont/iconfont.css'
export default {
  data() {
    return {
      textarea11: "",
      textarea: "",
      clidx: 0,
      color: [
        "#22d7bb",
        "#18bfa4",
        "#2cccda",
        "#2dbcff",
        "#4e8af9",
        "#7076fa",
        "#9473fd",
        "#c472ee",
        "#ef7ede",
        "#f969aa",
        "#fc587b",
        "#fa5a55",
        "#ff7747",
        "#ffa415",
        "#ffd234",
        "#99d75a",
        "#66c060",
        "#39ba5d"
      ],
      input10: "",
      header: ["群组"],
      qzNav: [
        {
          title: 123,
          url: "/tongxunlu/channels/123"
        },
        {
          title: "四组",
          url: "/tongxunlu/channels/forth"
        }
      ],
      tabNav: [
        {
          title: "日程助手",
          url: "/tongxunlu/rc"
          //   image: "/dist/calendar_160x160.png"
        },
        {
          title: "网盘助手",
          url: "/tongxunlu/wp"
          //   image: "/dist/drive_160x160.png?da029d718fc8bb82fd3b7c60ad9b2b69"
        },
        {
          title: "项目助手",
          url: "/tongxunlu/xm"
          //   image: "/dist/mission_160x160.png?eedd13600ae7e21deec50f47de4531bb"
        },
        {
          title: "小特机器人",
          url: "/tongxunlu/xt"
          //   image:
          // "/dist/381df779-62e6-49de-8792-620b94a5582d_160x160.png?daebac22e7d7fab74ca6eb300d60f05a"
        }
      ],
      isShow: false,
      robotH: 0,
      select: false,
      select2: false,

      modal: false
    };
  },
  computed: {
    getAll() {
      return this.$store.getters.quanbu;
    }
  },
  created() {
    this.$store.dispatch("GETALL1");
  },
  methods: {
    addUser() {
      var id = "";
      var str = "741852qwertyuio9876543201plkjhgfdszxcvbnm0963";
      for (var i = 0; i < 8; i++) {
        //~~ 相当于parseInt
        id += str[~~(Math.random() * str.length)];
      }
      // console.log(id);
      var obj = {
        title: this.input10,
        color: this.clidx,
        id: id
      };
      // console.log(obj);
      this.$store.dispatch("ADD1", obj);
      this.input10 = "";
      this.modal = false;
    },
    color1(id) {
      console.log(id);
      this.clidx = id;
      console.log(this.getAll);
    },

    routerGo(url) {
      //路由跳转
      this.$router.push({ path: url });
    },
    show() {
      this.select = !this.select;
      if (this.robotH == 0) {
        this.robotH = this.tabNav.length * 50 + "px";
      } else {
        this.robotH = 0;
      }
    },
    show2() {
      this.select2 = !this.select2;
      // if(this.robotH==0){
      //     this.robotH=this.tabNav.length*50+'px'
      // }else{
      //     this.robotH=0;
      // }
    }
  }
};
</script>

<style scoped>
.yuan {
  width: 24px;
  height: 24px;
  background-color: rgb(239, 126, 222);
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  font-size: 12px;
  color: #fff;
  line-height: 23px;
}
.select2:hover {
  box-shadow: 0 0 8px 2px #eee;
  box-sizing: border-box;
}
#modal-ul {
  overflow: unset;
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
.plus {
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
.input {
  width: 490px;
}
.color-box {
  margin-top: 15px;
  width: 100%;
  height: 30px;
  display: flex;
}
.color-box li {
  cursor: pointer;
  margin-bottom: 8px;
  flex: 1;
  text-align: center;
}
.color-box li span {
  display: inline-block;
  width: 24px;
  height: 24px;
  text-align: center;
  border-radius: 50%;
  /* background: #22d7bb; */
  box-sizing: border-box;
}
.color-box li span i {
  color: #fff;
}
.clo {
  float: right;
  line-height: 50px;
  color: #ddd;
  font-size: 16px;
  font-weight: 600;
}
.clo:hover {
  color: #22d7bb;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 660px;
  /* height: 442px; */
  margin-top: -390px;
  margin-left: -330px;
  background-color: #fff;
  z-index: 500;
}
.modal-main {
  width: 100%;
  height: calc(100% - 50px);
  padding: 20px 30px 30px;
  box-sizing: border-box;
}

.modal-f {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.3;
  z-index: 300;
}
.more {
  float: right;
  line-height: 20px;
  display: none;
}
.modal-head {
  width: 100%;
  height: 50px;
  padding: 0 30px;
  box-sizing: border-box;
  line-height: 50px;
  border-bottom: 1px solid #eee;
}
.title2:hover .more {
  display: block;
}
.more:hover {
  color: #22d7bb;
}
.router-link-active {
  /* background-color: #fff; */
  /* border-right: 3px solid #22d7bb; */
  background: #e7f9f6;
}
.adduser {
  font-size: 18px;
  text-align: right;
  float: right;
  line-height: 50px;
}
.adduser:hover {
  color: #22d7bb;
}
.title-box {
  width: 100%;
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  line-height: 50px;
}
.txl {
  width: 100%;
  /* margin-left: 70px; */
  height: 100%;
  box-sizing: border-box;
}
.main-body-side {
  position: relative;
  width: 240px;
  background: rgba(253, 253, 253, 0.95);
  border-right: 1px solid #ddd;
  height: 100%;
  float: left;
}
a {
  text-decoration: none;
  color: rgb(51, 51, 51);
}
.nav .title {
  float: left;
  margin: 0 20px;
  color: #333;
  line-height: 50px;
  font-size: 16px;
}
.wtf {
  float: right;
  margin: 17px 20px;
  color: #ccc;
}
.wtf:hover {
  color: #22d7bb !important;
}
.search-area {
  /* padding: 0 0 10px; */
  padding: 0 20px;
  width: 100px;
  /* margin-left: 20px; */
  position: relative;
  box-sizing: border-box;
}
.search-area input {
  background: #f3f3f3;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #8f8f8f;
  height: 36px;
  font-size: 14px;
  padding-left: 28px;
  border-radius: 20px;
  border: 1px solid transparent;
  outline: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  opacity: 0.5;
}
.search-area input:hover {
  background: #fdfdfd;
  border: 1px solid #ddd;
}
.search-area input:focus {
  background: #fdfdfd;
  border: 1px solid #22d7bb;
}
.lc-tabs-group {
  padding: 0 20px;
  line-height: 18px;
  border-bottom: solid 1px #f3f3f3;
  overflow: hidden;
}
.lc-tabs-group li {
  width: calc(99% / 2);
  text-align: center;
  padding-bottom: 10px;
  color: #ddd;
  border: none;
  cursor: pointer;
  list-style: none;
  float: left;
}
.lc-tabs-group li.line {
  -webkit-box-flex: 0;
  -ms-flex: 0;
  flex: 0;
  width: 0;
  height: 6px;
  overflow: hidden;
  border-right: solid 1px #eee;
}
.section-header,
.robot,
.man {
  margin-bottom: 2px;
  position: relative;
  cursor: pointer;
}
.section-header .title2,
.robot .title2,
.man .title2 {
  width: 100%;
  padding: 8px 20px;
  font-size: 14px;
  box-sizing: border-box;
}
.man .title2 a {
  width: 100%;
  display: block;
  color: #888;
  padding-bottom: 5px;
  border-bottom: solid 1px #eee;
}
.section-header ul,
.robot ul,
.man ul {
  list-style: none;
  overflow: hidden;
  transition: 0.4s;
}
.section-header ul li,
.robot ul li,
.man ul li {
  margin-bottom: 2px;
  border-right: 3px solid transparent;
  padding: 2px 0 0 30px;
  box-sizing: border-box;
}
.section-header ul li.cur,
.robot ul li.cur,
.man ul li.cur {
  border-right: 3px solid #22d7bb;
  background: #e7f9f6;
}
.section-header ul li:hover,
.robot ul li:hover,
.man ul li:hover {
  box-shadow: rgb(238, 238, 238) 0px 0px 8px 2px;
  background: 0px 0px;
}
.section-header ul li .name,
.robot ul li .name,
.man ul li .name {
  line-height: 48px;
  color: rgb(102, 102, 102);
  font-size: 14px;
  width: 85%;
  display: inline-block;
  vertical-align: middle;
}
.channel-icon {
  width: 24px;
  height: 24px;
  background-color: rgb(239, 126, 222);
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  font-size: 12px;
  color: #fff;
  line-height: 23px;
}
i.tran {
  color: rgb(170, 170, 170);
  font-size: 12px;
  margin-right: 10px;
  transition: all 0.2s cubic-bezier(0.4, 0.1, 0.5, 1) 0.1s;
  display: inline-block;
}
.caret-down {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>