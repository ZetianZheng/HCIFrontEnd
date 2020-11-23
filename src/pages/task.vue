<template>
  <div id="background" class = "col-lg-12 text-center">
    <div id="full">
      <div class = "FullContent">
        <el-row :gutter="30" type="flex" justify="center">
          <!--el-col :span="1">
            <el-checkbox size="large" v-model="checked" class="checkboxsize"></el-checkbox>
          </el-col-->
          <el-col :span="10" class="inputsize">
            <el-tree
                :data="data"
                show-checkbox
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
                :render-content="renderContent">
            </el-tree>
            <!--el-input v-model="input" placeholder="Main Task"></el-input-->
          </el-col>
          <el-col :span="5"></el-col>
        </el-row>
        <el-row :gutter="30" type="flex" justify="center">
          <el-col :span="2" class="buttonsize">
            <el-button size="medium" type="primary" icon="el-icon-plus" align="center"></el-button>
          </el-col>
          <el-col :span="10" class="inputsize">
            <el-input v-model="input" placeholder="Sub task to be added"></el-input>
          </el-col>
          <el-col :span="3"></el-col>
        </el-row>

        <el-row :gutter="30" type="flex" justify="center">
          <el-col :span="1">
            <el-button class="buttonsize" size="medium" type="primary" icon="el-icon-time" align="center"></el-button>
          </el-col>

          <el-col :span="6">
            <label>Start date</label>
          </el-col>

          <el-col :span="8">
            <el-date-picker
                v-model="value1"
                type="date"
                placeholder="Start date">
            </el-date-picker>
          </el-col>
        </el-row>

        <el-row :gutter="30" type="flex" justify="center">
          <el-col :span="1">
            <el-button class="buttonsize" size="medium" type="primary" icon="el-icon-time" align="center"></el-button>
          </el-col>

          <el-col :span="6">
            <label>Start time</label>
          </el-col>

          <el-col :span="8" align="left">
            <el-time-picker
                v-model="value1"
                :picker-options="{
      selectableRange: '00:00:00 - 24:00:00'
    }"
                placeholder="Start time">
            </el-time-picker>
          </el-col>

        </el-row>

        <el-row :gutter="30" type="flex" justify="center">
          <el-col :span="1">
            <el-button class="buttonsize" size="medium" type="primary" icon="el-icon-time" align="center"></el-button>
          </el-col>

          <el-col :span="6">
            <label>End date</label>
          </el-col>

          <el-col :span="8">
            <el-date-picker
                v-model="value1"
                type="date"
                placeholder="End date">
            </el-date-picker>
          </el-col>
        </el-row>

        <el-row :gutter="30" type="flex" justify="center">
          <el-col :span="1">
            <el-button class="buttonsize" size="medium" type="primary" icon="el-icon-time" align="center"></el-button>
          </el-col>

          <el-col :span="6">
            <label>End time</label>
          </el-col>

          <el-col :span="8">
            <el-time-picker
                v-model=value1
                :picker-options="{
    selectableRange: '00:00:00 - 24:00:00'
  }"
                placeholder="End time">
            </el-time-picker>
          </el-col>
        </el-row>

        <el-row :gutter="60" type="flex" justify="center">
          <el-col :span="10"><el-button type="primary" plain>Delete</el-button></el-col>
          <el-col :span="10">
              <el-button @click="confirm" type="primary" plain >Confirm Change</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
let id = 1000;
export default {
  name: 'App',
  data() {
    const data = [{
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1'
        }, {
          id: 10,
          label: '三级 1-1-2'
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      children: [{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 6,
        label: '二级 2-2'
      }]
    }, {
      id: 3,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1'
      }, {
        id: 8,
        label: '二级 3-2'
      }]
    }];
    return {
      data: JSON.parse(JSON.stringify(data)),
    }
  },

  methods: {
    confirm: function () {
      alert("hello")
    },

    append(data) {
      const newChild = { id: id++, label: 'testtest', children: [] };
      if (!data.children) {
        this.$set(data, 'children', []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },

    renderContent(h, { node, data}) {
      return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
            </span>
          </span>);
    }
  }
};
</script>

<style lang="less" scoped>
@lw: 380px;
@h: 400px;

/*.row {*/
/*    height: 100%;*/
/*}*/
  #background{
    background-color: unset;
    padding: 50px 0;
    height: 1190px
  }
  #full {
    background-color: cyan;
    position: fixed;
    height: @h + 100px;
    width: @lw + 80px;
    //background: #eeeeee;
    opacity: 0.7;
    margin: 0 auto;
    padding: 20px 0;
    .loginHeader {
      margin: 10px auto 10px auto;
    };
    .FullContent{
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

  .inputsize {
    zoom:80%;
    position: relative;
  }

  .buttonsize{
    zoom: 50%;
    position:relative;
  }

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>