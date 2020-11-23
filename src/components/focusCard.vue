<template>
    <div id = "focusCard" class = "rounded">
        <div class="card-title">
            <p>{{event.title}}</p>
        </div>
        <div class="card-content">
            <p>{{event.content}}</p>
        </div>
        <div class="time-line">
            <p>start time: {{event.start_time}}</p>
            <p>end time: {{event.end_time}}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'focusCard',
        data(){
            return{
        }
        },
        props:['event']

    }
</script>

<style lang = "less">
    .basic(@height:auto) {
        height: @height;
        width: 100%;
        line-height:@height;
    }

    #focusCard {
        width: 300px;
        height: 500px;
        margin: 0 auto;
        background: white;
        font-size: 20px;
        border-radius: 10px;
        color: black;
        border: 1px solid #ccc3c3;
        font-family: "Bodoni 72 Oldstyle";
    }
    .card-title {
        padding-top: 20px;
        .basic;
        text-align: center;
        font-size: 26px;
        font-weight: bold;
    }
    .card-content {
        .basic(300px);
        text-align: center;
        padding: 0 20px;
    }
    .time-line {
        .basic;
        margin: 35px 0;
    }
</style>