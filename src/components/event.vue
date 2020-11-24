<template>
    <el-dialog title="eventManager" :visible.sync="dialogFormVisible">
        <div class="missionContainer">
            <el-row  type="flex" class="mission" justify="center">
                <el-col :span="5"><p style="line-height: 40px">mission title:</p></el-col>
                <el-col :span="20"><el-input v-model="mission_title" placeholder="title"></el-input></el-col>
            </el-row>
            <el-row  type="flex" class="mission" justify="center">
                <el-col :span="5"><p>notes: </p></el-col>
                <el-col :span="20"><el-input
                        type="textarea"
                        :rows="4"
                        placeholder="content"
                        v-model="mission_note">
                </el-input></el-col>
            </el-row>
        </div>
        <div class="timeContainer">
            <el-date-picker
                    v-model="value1"
                    type="datetimerange"
                    range-separator="to"
                    start-placeholder="Start date"
                    end-placeholder="End date">
            </el-date-picker>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button @click="closeDialog">delete</el-button>
            <el-button type="primary" @click="closeDialog">confirm</el-button>
        </div>
    </el-dialog>
</template>
<style lang="less" scoped>

    .mission{
        @texth: auto;
        height: @texth;
        margin-bottom: 20px;
        p{
            line-height: 100%;
            text-align: center;
        }
        el-input{
            width: 100%;
        }
    }
    .timeContainer{
        .el-date-editor {
            width: 100%;
        }
    }

</style>
<script>
    export default {
        name: "eventDialog",
        data() {
            return{
                mission_title:"",
                mission_note:"",
                value1: [new Date(2000, 11, 10, 10, 10), new Date(2000, 11, 11, 10, 10)],
            }
        },
        props: {
            dialogFormVisible: Boolean
        },
        methods: {
            closeDialog() {
                this.$emit('closeDialog')
            }
        }
    }
</script>