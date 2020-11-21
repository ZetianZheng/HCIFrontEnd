<template>
    <div id="background" class = "col-lg-12 text-center">
      <div id="login">
        <el-row :gutter="60" type="flex" justify="center">
          <el-col :span="1">
            <el-checkbox size="medium" v-model="checked" class="checkboxsize"></el-checkbox>
          </el-col>
          <el-col :span="10" align="left">
            <lable>Read first three chapters</lable>
          </el-col>
          <el-col :span="1">
            <el-button size="mini" type="primary" icon="el-icon-s-fold"></el-button>
          </el-col>
        </el-row>

        <el-row :gutter="60" type="flex" justify="center">
          <el-col :span="1">
            <el-checkbox size="large" v-model="checked" class="checkboxsize"></el-checkbox>
          </el-col>
          <el-col :span="10" align="left">
            <lable>The first chapter of HCI homework</lable>
          </el-col>
          <el-col :span="1">
            <el-button size="mini" type="primary" icon="el-icon-s-fold"></el-button>
          </el-col>
        </el-row>

        <el-row :gutter="60" type="flex" justify="center">
          <el-col :span="1">
            <el-checkbox v-model="checked" class="checkboxsize"></el-checkbox>
          </el-col>
          <el-col :span="10" align="left">
            <lable>The introduction of the short essay</lable>
          </el-col>
          <el-col :span="1">
            <el-button size="mini" type="primary" icon="el-icon-s-fold"></el-button>
          </el-col>
        </el-row>

        <el-row :gutter="60" type="flex" justify="center">
          <el-col :span="1" class="buttonsize">
            <el-button size="medium" type="primary" icon="el-icon-plus" align="center"></el-button>
          </el-col>
          <el-col :span="10" class="buttonsize">
            <el-input v-model="input" placeholder="Task to be added"></el-input>
          </el-col>
          <el-col :span="1">
          </el-col>
        </el-row>
    </div>
  </div>
</template>

<style>
  .checkboxsize {
    zoom:120%;
    position: relative;
  }

  .buttonsize {
    zoom:80%;
    position: relative;
  }
</style>