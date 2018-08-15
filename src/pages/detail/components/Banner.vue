<template>
    <div>
        <div class="banner" @click="showGallaryTo">
            <img class="banner-img" :src="bannerImg"> 
            <div class="banner-info">
                <div class="banner-title">
                {{sightName}}
                </div>
                <div class="banner-number">
                <span class="iconfont banner-icon" >&#xe600;</span>{{gallaryImgs.length}}
                </div>
            </div>
        </div>
        <common-fade>
            <common-gallary v-show="showGallary"
         :imgs="gallaryImgs"
          @close="gallaryClose"></common-gallary>
        </common-fade>
        
    </div>
</template>

<script>
import CommonGallary from '../../../common/gallary/Gallary'
import CommonFade from '../../../common/Fade/FadeAnimation'
export default {
    name:'DetailBanner',
    props:{
        sightName:String,
        bannerImg:String,
        gallaryImgs:Array,
        list:Array,
    },
    components:{
        CommonGallary,
        CommonFade
    },
    data(){
        return{
           showGallary:false,
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
