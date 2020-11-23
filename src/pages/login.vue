<template>
    <div class = "row">
        <div id="background" class = "col-lg-12 text-center">
            <div id="login">
                <div class = "loginHeader">Login</div>
                <div class = "loginContent">
                    <div class = "line row">
                        <label class= "col-md-3" style ="vertical-align:middle"> User: </label>
                        <input type="text" class= "col-md-7" placeholder="email">
                    </div>
                    <div class = "line row">
                        <label class= "col-md-3" > password: </label>
                        <input type="text" class= "col-md-7" placeholder="password">
                    </div>
                    <el-row :gutter="60" type="flex" class="buttonLine" justify="center">
                        <el-col :span="10"><el-button type="primary" plain>Login</el-button></el-col>
                        <el-col :span="10"><el-button type="primary" onclick="register" plain>register</el-button></el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return{

            }
        },
        methods: {
          register: function () {
            this.$router.push({ path:'~/src/pages/register.vue'})
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
    #login {
        height: @h + 100px;
        width: @lw + 20px;
        background: #eeeeee;
        opacity: 0.7;
        margin: 0 auto;
        padding: 20px 0;
        .loginHeader {
            margin: 10px auto 10px auto;
        };
        .loginContent{
            width: 100%;
            height:@h - 40px;
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
            .buttonLine{
                width: 100%;
                margin: 50px auto 20px!important;
                padding: 15px;
                position: absolute;
                bottom:0;
                .el-button {
                    width: 100px;
                }
            }
        }

    }


</style>