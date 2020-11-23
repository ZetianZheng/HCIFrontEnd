<template>
  <!--#93b5cf-->
    <div id="CFooter">
          <el-row :gutter="60" type="flex" justify="center">
            <el-col :span="2"><a href="https://vuejs.org/" target="_blank">关于</a></el-col>
            <el-col :span="2"><a href="https://fullcalendar.io/" target="_blank">博客</a></el-col>
            <el-col :span="2"><a href="https://github.com/ZetianZheng/HCIFrontEnd/" target="_blank">网站</a></el-col>
          </el-row>

          <el-row  type="flex" justify="center">
            <el-col :span="24">
              <el-image
                  style="width: 30px; height: 30px"
                  :src="require('../assets/Todo-List.svg')"
                  :fit="cover"></el-image>
            </el-col>
          </el-row>

          <el-row :gutter="100" type="flex" justify="center">
            <el-col :span="6"></el-col>
            <el-col :span="6"><label>@ Zetian Zheng G36558368</label></el-col>
            <el-col :span="6"><label>Yunsong Wang G36955252</label></el-col>
            <el-col :span="6"></el-col>
          </el-row>
    </div>
</template>


<script>
    export default {
      name: "appFooter",
          data() {
        return{

        }
      },

      methods: {
        About () {
          window.location.href = 'https://www.baidu.com'
          //window.open('https://fullcalendar.io')
          //this.$router.push('pages/login.vue')
        },
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