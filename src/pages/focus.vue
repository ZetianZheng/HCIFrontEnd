<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/swiper-bundle.css';
    import FocusCard from '../components/focusCard.vue';

    export default {
        name:'focus',
        components: {
            Swiper,
            SwiperSlide,
            FocusCard,
        },

        data() {
            return {
                swiperOption: {
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows : true
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        },
        computed: {

        },
        methods: {
            goback: function() {
                this.$router.back()
            },
            // startFocus: function(){
            //     this.$emit('updateFocus')
            // }
        },
        mounted() {

        }
    }
</script>

<template>
    <div id="focus">
        <div class = "f-header">
            <svg @click = "goback" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
            </svg>
            <el-button>Start Focus</el-button>
        </div>
        <div class = "swipe-cards">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide><focusCard></focusCard></swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide>
                <swiper-slide>Slide 7</swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<style lang = "less">
    @icon: 30px;
    #focus {
        height: 200px;
        .f-header {
            width: 100%;
            height: @icon+10px;
            svg {
                width: @icon;
                height: @icon;
                float: left;
            }
        }
    }
    .swipe-cards {
        width: 100%;
        height: 400px;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .swiper {
        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 300px;
            text-align: center;
            font-weight: bold;
            font-size: 16px * 2;
            background-color: #2C8DFB;
            background-position: center;
            background-size: cover;
            color: white;
        }

        .swiper-pagination {
            /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
                background-color: white;
            }
        }
    }
</style>