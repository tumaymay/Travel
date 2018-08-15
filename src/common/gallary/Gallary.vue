<template>
    <div class="container" @click="gallaryClick">
        <div class="gallary-wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) of imgs" :key="index">
                    <img class="swiper-img" :src="item" />
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>

export default {
    name:'CommonGallary',
    props:{
        imgs:Array
    },
    data(){
        return{
           swiperOption:{
            pagination:'.swiper-pagination',
            paginationType:'fraction',  //以数字作为分页形式
            observeParents:true,  //解决滑动图片不流畅的问题
            observer:true   //解决滑动图片不流畅的问题
            },    
        }
    },
    props:{
        imgs:Array,           
    },
    methods:{
        gallaryClick(){
            console.log('1')
            this.$emit('close')
        }
    }
    
}
</script>

<style lang="stylus" scoped>
.container >>>.swiper-container
    overflow :inherit
.container
    z-index :99
    position :fixed
    display :flex
    flex-direction :column
    justify-content :center
    left :0
    right :0
    bottom :0
    top :0
    background :#000
    .gallary-wrapper
        width :100%
        height :0
        padding-bottom :100%
        .swiper-img
            width:100%
        .swiper-pagination
            color :#fff
            bottom :-1rem
</style>
