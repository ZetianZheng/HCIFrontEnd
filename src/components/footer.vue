<template>
  <!--#93b5cf-->
    <div id="CFooter">
          <el-row :gutter="60" type="flex" justify="center">
            <el-col :span="3"><el-button type="text" plain>关于</el-button></el-col>
            <el-col :span="3"><el-button type="text" plain>博客</el-button></el-col>
            <el-col :span="3"><el-button type="text" plain>网站</el-button></el-col>
          </el-row>

          <el-row  type="flex" justify="center">
            <el-col :span="4" :offset="10"><icon></icon></el-col>
          </el-row>

          <el-row :gutter="100" type="flex" justify="center">
            <el-col :span="50"><el-lable> @ 2015 最美应用 ALL RIGHTS RESERVED 北京市朝阳区望京 SOHO 塔2 C座230311室 </el-lable></el-col>
          </el-row>
    </div>
</template>


<script>
    export default {
        name: "appFooter",
        data() {
            return{

            }
        }
    }
</script>

<style lang="less" scoped>

    a:link {text-decoration:none;}    /* 未被访问的链接 */

    #CFooter{
      padding: 50px 0;
      height: 100px;
      position: absolute;
      bottom:0;
      .el-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-col {
        border-radius: 4px;
      }
    }



</style>