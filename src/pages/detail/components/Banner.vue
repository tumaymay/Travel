<template>
    <div>
        <div class="banner" @click="showGallaryTo">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1802/39/39ec37884650dd97a3.img.png_600x330_3dacf737.png" alt=""> 
            <div class="banner-info">
                <div class="banner-title">
                深圳平安金融中心云际观光层
                </div>
                <div class="banner-number">
                <span class="iconfont banner-icon" >&#xe600;</span>2
                </div>
            </div>
        </div>
        <common-gallary v-show="showGallary"
         :imgs="imgs"
          @close="gallaryClose"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from '../../../common/gallary/Gallary'
export default {
    name:'DetailBanner',
    components:{
        CommonGallary,
    },
    data(){
        return{
           showGallary:false,
           imgs:['http://img1.qunarzz.com/sight/p0/201408/11/368f3c43c47287938c1c4cd361482ba8.jpg_350x240_9b2802ea.jpg',
           'http://img1.qunarzz.com/sight/p0/1412/32/4d2d35a764e445ca59d29f79bd0a5083.water.jpg_350x240_859a5ba2.jpg']
        }
    },
    methods:{
        showGallaryTo(){
            this.showGallary = true
        },
        gallaryClose(){
            this.showGallary = false
        }
    }
    
}
</script>

<style lang="stylus" scoped>
.banner
    position :relative
    overflow :hidden
    height :0
    padding-bottom :55%
    .banner-img
        width :100%
    .banner-info
        display :flex
        width:100%
        left :0
        right :0
        bottom :0
        position :absolute
        line-height :.6rem
        color :#fff
        background-image :linear-gradient(top,rgba(0,0,0,0,),
        rgba(0,0,0,0.8,))
        .banner-title  
            flex :1
            padding-left :.2rem
            font-size :.32rem
        .banner-number
            height :.32rem
            font-size:.25rem
            margin-right :.2rem
            .banner-icon
                font-size:.25rem
                margin-right :.1rem

        


</style>
