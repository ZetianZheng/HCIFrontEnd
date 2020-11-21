<template>
  <!--#93b5cf-->
    <div id="CFooter">
          <el-row :gutter="60" type="flex" justify="center">
            <el-col :span="2"><a href="/index.html" target="_blank">关于</a></el-col>
            <el-col :span="2"><a href="/index.html" target="_blank">博客</a></el-col>
            <el-col :span="2"><a href="/index.html" target="_blank">网站</a></el-col>
          </el-row>

          <el-row  type="flex" justify="center">
            <el-col :span="24">
              <el-button type="primary" icon="el-icon-video-camera-solid" align="center"></el-button>
            </el-col>
          </el-row>

          <el-row :gutter="100" type="flex" justify="center">
            <el-col :span="24"><label>d @ 2015     最美应用     ALL RIGHTS RESERVED     北京市朝阳区望京 SOHO 塔2 C座230311室 </label></el-col>
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
      background: linear-gradient(#ccccd6, #93b5cf);
      padding: 50px 0;
      height: auto;
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