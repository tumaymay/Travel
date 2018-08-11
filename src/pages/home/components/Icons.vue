<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeIcons',
    data(){
        return{
            iconList:[{
                id:'001',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc:'景点门票景点门票'
            },
            {
                id:'002',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                desc:'水上乐园'
            },
            {
                id:'003',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                desc:'游乐场'
            },
            {
                id:'004',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                desc:'海洋馆'
            },
            {
                id:'005',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                desc:'动植物园'
            },
            {
                id:'006',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
                desc:'玩转长隆'
            },
            {
                id:'007',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
                desc:'城市观光'
            },
            {
                id:'008',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png',
                desc:'海滨沙滩'
            }],   
        }
    },
    computed: {
                pages () {
                    const pages = []
                    this.iconList.forEach((item,index) => {
                        const page = Math.floor(index / 8)
                        if(!pages[page]){
                          pages[page] = []  
                        }
                        pages[page].push(item)
                    })
                    return pages;
                }
                
            }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
    height :0
    padding-bottom :50%
.icons
    
    .icon 
        width :25%
        padding-bottom :25%
        float :left
        overflow :hidden
        position :relative
        height :0
        .icon-img
            position :absolute
            top :0
            left :0
            right :0
            bottom :.44rem
            box-sizing :border-box
            padding :.1rem
            .icon-img-content
                height  :100%
                margin :auto 
                display :block
        .icon-desc
            position :absolute
            bottom :0
            left :0
            right :0
            height :.44rem
            line-height :.44rem
            color :$darkTextColor
            text-align :center
            ellipsis()
</style>
