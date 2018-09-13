<template>
    <div>
        <div class="unread_cont">
                <div class="channel-meta ">
                    <span class="ng-scope">这里是你和机器人</span>
                    <a href="javascript:;">小特机器人</a>
                    <span class="ng-scope">的私聊，在当前对话中发送的消息只有你自己可以访问，其他成员无法看到。</span>
                </div>
                <div class="channel_cont">
                    <div class="day-divider" >
                            <hr>
                            <div><span class="ng-binding">9月4日 星期二</span></div>
                           
                    </div>
                            <div class="day_one">
                                <div class="day_pic">
                                    <img src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png" alt="">
                                </div>
                                <a href="javascript:;" class="day_one_A">小特机器人</a>
                               <span class="ng-binding">08:46</span>
                                <div  class="ng-isolate-scope">
                                   为了让团队成员更好的认识您，请尽快完善<a href="javascript:;">个人资料</a>以及上传头像。
                                </div> 
                            </div>

                            <div class="day_one">
                                <div class="day_pic">
                                    <img src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png" alt="">
                                </div>
                                <a href="javascript:;" class="day_one_A">小特机器人</a>
                               <span class="ng-binding">08:46</span>
                                <div  class="ng-isolate-scope">
                                   您已成功创建了企业：，当前版本为免费版，如果您想使用更多功能如审批、考勤、CRM、工作简报等，可以申请14天试用或者购买任一商业付费版本。
                                </div> 
                            </div>
                        <div class="channel_inner">

                        </div>
                        <div class="channel_bottom">
                            <div class="channel_btn">
                                <ul>
                                    <li>    
                                        <a href="javascript:;">
                                            <i class="iconfont channel_i">&#xe6e9;</i>
                                        </a>
                                    </li>
                                    <li>    
                                        <a href="javascript:;">
                                            <i class="iconfont channel_i">&#xe601;</i>
                                        </a>
                                    </li>
                                    <li>    
                                        <a href="javascript:;">
                                            <i class="iconfont channel_i">&#xe81a;</i>
                                        </a>
                                    </li>
                                    <li>    
                                        <a href="javascript:;">
                                            <i class="iconfont channel_i">&#xe606;</i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                              <textarea name="" id="" cols="30" rows="10"></textarea>
                          
                            <div class="channel_b_cont"></div>
                        </div>
                </div>
        </div>
               
                <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
  .lcfont {
    font-family: lcfont!important;
}
.lcfont {
    font-family: lcfont!important;
}
@font-face {
  font-family: 'iconfont';  /* project id 442030 */
  src: url('//at.alicdn.com/t/font_442030_ethtxpuhbar.eot');
  src: url('//at.alicdn.com/t/font_442030_ethtxpuhbar.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_442030_ethtxpuhbar.woff') format('woff'),
  url('//at.alicdn.com/t/font_442030_ethtxpuhbar.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_442030_ethtxpuhbar.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  color: #aaa;
  font-size: 26px;
}
    .channel-meta {
    padding: 20px 25px;
    color: #b9b9b9;
    font-size: 15px;
}


.channel-meta a {
    color: #6f8092;
}
.unread_cont{
    position: absolute;
    left: 320px;
    top: 78px;
    width: 75%;
    height: 82%;
    overflow: auto;
  
    margin-top: 20px;
    background-color: #fff;
}
.channel_cont{
    width: 1000px;
    height: 50px;
     position: absolute;
     margin: 10px auto;
}
.day-divider {
    position: relative;
    height: 20px;
    margin: 20px 0;
}
.day-divider{
    position: absolute;
    width: 100%;
    top: 10px;
    border: none;
    height: 1px;
    margin: 0;
    background-image: -webkit-gradient(linear,left top,right top,from(#fff),color-stop(50%,#eee),to(#fff));
    background-image: linear-gradient(to right,#fff,#eee 50%,#fff);
    background-repeat: no-repeat;
}
 .day-divider div {
    text-align: center;
    line-height: 20px;
    position: absolute;
    width: 100%;
    top: -10px;
}
.day-divider div span {
    margin: auto;
    padding: 0 20px;
    display: inline-block;
    background-color: #fdfdfd;
    font-size: 16px;
    color: #aaa;
}
.day_one{
    width: 915px;
    height: 53px;
    margin-left: 20px;
    margin-top: 10px;
}
.day_pic{
     width: 38px;
    height: 38px;
  
}
.day_pic img{
    width: 38px;
    height: 38px;
    line-height: 38px;
    font-size: 12px;
    border-radius: 38px;
      margin-top: 40px;
}
.day_one_A{
    color: #333;
    font-size: 12px;
    float: left;
    margin-left: 55px;
}
.day_one>span {
    margin-left: 10px;
    color: #aaa;
    font-size: 12px;
    float: left;
}
.ng-isolate-scope{
    margin-top: 20px;
    font-size: 14px;
    margin-left: 55px;
    color: #aaa
}
.ng-isolate-scope a{
        color: #22d7bb;
}
.channel_inner{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 170px;
    background-color: pink;
}
.channel_bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 170px;
}
textarea{
      overflow: hidden;
      width: 100%;
    word-wrap: break-word;
    resize: none;
    height: 63px;
    border: 1px solid #ddd;
    // border: 0;
}
.channel_btn{
    margin-left: 6px;
}
.channel_btn ul li{
    float: left;
}
.channel_btn ul li a{
        color: #aaa;
    padding: 8px 12px 8px 13px;
}
</style>
