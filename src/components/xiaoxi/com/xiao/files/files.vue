<template>
    <div>
        <div class="unread_cont">
            <div class="header-filter-area">
                <button class="btn-sm">
                    <i ></i> 上传文件
                </button>
             </div>
                <table  class="table lc-table">
                    <thead>
                    <tr>
                        <th nowrap="nowrap" translate="drive.TH_NAME" class="ng-scope">文件名</th>
                        <th nowrap="nowrap" translate="drive.TH_SIZE" class="ng-scope">大小</th>
                        <th nowrap="nowrap" translate="drive.TH_UPLOAD_BY" class="ng-scope">上传者</th>
                        <th nowrap="nowrap" translate="drive.TH_UPLOAD_AT" class="ng-scope">上传时间</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                   
                    </tbody>
                </table>
        </div>
               
                <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
  
.unread_cont{
    position: absolute;
    left: 315px;
    top: 78px;
    width: 75%;
    height: 82%;
    overflow: auto;
    margin-left: 10px;
    margin-top: 20px;
    background-color: #fff;
}
.table {
    width: 100%;
    color: #333;
    margin-bottom: 1.25rem;
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;
   margin-top: 20px;
    margin-left: -63px;
}

  tr {
    height: 55px;
    font-size: 14px;
}


.table thead th {
    vertical-align: bottom;
    font-weight: 400;
    border-bottom: 1px solid #eee;
}
.lc-table tbody {
    color: #333;
}
.header-filter-area{
    float: right;
    margin-right: 20px;
}
.btn-sm {
    padding: .157rem 20px;
    border-radius: 1rem;
    margin-top: 10px;
}
 .btn-sm{
    color: #fff;
    background-color: #22d7bb;
    border-color: #22d7bb;
}
</style>
