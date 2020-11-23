<script>
    import FocusCard from '../components/focusCard.vue';
    import {TEST_EVENT_DATA} from "../JS/event-utils";
    import {mapState} from 'vuex';
    // import store from '@/store';

    export default {
        name:'focus',
        components: {
            FocusCard,
        },

        data() {
            return {
                events: TEST_EVENT_DATA,
                swiperOption: {
                    slidesPerView: 'auto',
                    watchSlidesProgress: true,
                    // 设定slide与左边框的预设偏移量（单位px）
                    slidesOffsetBefore: 37,
                    // 设置slide之间的距离（单位px）
                    spaceBetween: 17,
                    centeredSlides: true,
                    init: false,
                    longSwipesRatio: 0.1,
                    touchReleaseOnEdges: true,
                    observer: true, // 修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true, // 修改swiper的父元素时，自动初始化swiper
                    // on: {
                    //     progress: function() {
                    //         for (let i = 0; i < this.slides.length; i++) {
                    //             const slide = this.slides.eq(i)
                    //             const slideProgress = this.slides[i].progress
                    //
                    //             const scale = 1 - Math.abs(slideProgress) / 5 // 缩放权重值，随着progress由中向两边依次递减，可自行调整
                    //             slide.transform(`scale3d(${scale}, ${scale}, 1)`)
                    //         }
                    //     },
                        // slideChange: function() {
                        //     store.commit('SET_ACTIVE_INDEX', this.activeIndex)
                        // }
                    // }
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            },
            ...mapState({
                activeItemIndex: state => state.activeIndex
            })
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
        <div id = "f-header">
            <svg @click = "goback" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
            </svg>
        </div>
        <div class = "swiper-content" >
            <swiper ref="mySwiper" :option = "swiperOption" class = "show-swiper">
                <template v-for="event in events">
                    <swiper-slide :key="event.id">
                        <focusCard
                                v-bind:event = "event"
                                class = "swiper-item"
                        ></focusCard>
                    </swiper-slide>
                </template>
            </swiper>
        </div>
    </div>
</template>

<style lang = "less">
    @import "~@/styles/focus";
</style>