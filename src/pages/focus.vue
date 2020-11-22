<script>
    export default {
        name:'focus',
        data() {
            return{

            }

        },
        methods: {
            goback: function () {
                this.$router.back()
            },
            // startFocus: function(){
            //     this.$emit('updateFocus')
            // }
        },
    }
</script>

<template>
    <div id="focus">
        <div class = "back">
            <svg @click = "goback" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
            </svg>
            <el-button>Start Focus</el-button>
        </div>
    </div>
</template>

<style lang = "less">
    @icon: 30px;
    #focus {
        height: 200px;
        .back {

            width: 100%;
            height: @icon+10px;
            svg {
                width: @icon;
                height: @icon;
                float: left;
            }
        }
    }
</style>