<template>
    <div>
        <div class="unread_cont">
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
            <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
          
            <div class="header-filter-area">
                 <el-button size="small" type="primary" class="btn-sm">点击上传</el-button>
             </div>
               
            </el-upload>
           
        </div>
               
                <router-view></router-view>
    </div>
</template>

<script>
 export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
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
    position: absolute;
    top: 10px;
    right: 0;
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
