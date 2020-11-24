<template>
  <div class = "row">
    <div id="background" class = "col-lg-12 text-center">
      <div id="Register">
        <div class = "registerHeader">Register</div>
        <div class = "registerContent">
          <div class = "line row">
            <label class= "col-md-3" style ="vertical-align:middle"> User: </label>
            <input type="text" class= "col-md-7" placeholder="user
">
          </div>
          <div class = "line row">
            <label class= "col-md-3" > password: </label>
            <input type="password" class= "col-md-7" placeholder="password" v-model="password1">
          </div>
          <div class = "line row">
            <label class= "col-md-3" > confirm: </label>
            <input type="password" class= "col-md-7" placeholder="password" v-model="password2">
          </div>
          <el-row :gutter="60" type="flex" class="buttonLine" justify="center">
            <el-col :span="10"><el-button type="primary" v-on:click="register" plain>register</el-button></el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "register",
    data() {
      return{
        password1: '',
        password2: '',
      }
    },
    methods: {
      register: function () {
        //this.$router.push({ path:'~/src/pages/register.vue'})
        if(this.password1 != this.password2){
            alert("The two entered passwords do not match, make sure to re-enter")
        } else {
          this.$router.push({ name:'homeLink'})
        }
      },
    }
  }
</script>

<style lang="less" scoped>
  @lw: 380px;
  @h: 400px;

  /*.row {*/
  /*    height: 100%;*/
  /*}*/
  #background{
    padding: 50px 0;
    height: 1190px
  }
  #Register {
    height: @h + 100px;
    width: @lw + 20px;
    background: #eeeeee;
    opacity: 0.7;
    margin: 0 auto;
    padding: 20px 0;

    .registerHeader {
      margin: 10px auto 10px auto;
    }
  ;

    .registerContent {
      width: 100%;
      height: @h - 40px;
      position: relative;

      .line {
        height: 40px;
        width: @lw;
        margin: 50px 10px;
        /*text-align: justify;*/
        /*position: relative;*/

        label {
          margin: 0;
          text-align: center;
          line-height: 100%;
          padding: 15px;

        }
      }

      .buttonLine {
        width: 100%;
        margin: 50px auto 20px !important;
        padding: 15px;
        position: absolute;
        bottom: 0;

        .el-button {
          width: 100px;
        }
      }
    }
  }
</style>