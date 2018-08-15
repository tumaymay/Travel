<template>
<div>
    <router-link tag="div" class="header-abs" to="/" v-show="showAbs">
        <div class="iconfont header-abs-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            景点详情
            <router-link to="/">
                 <div class="iconfont abs-back-icon">&#xe624;</div>
            </router-link>
        </div>
</div> 
</template>

<script>

export default {
    name:'DetailHeader',
    data(){
        return{
           showAbs:true,
           opacityStyle:{
               opacity :0
           }
        }
    },
    activated(){
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
        window.removeEventListener('scroll',this.handleScroll)//解绑
    },
    methods:{
        handleScroll(){
            const top = document.documentElement.scrollTop
            if(top > 60){
                let opacity = top/140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle={opacity}
                this.showAbs = false
            }
            else{
                this.showAbs = true
            }
        }
    }
   
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
    position :absolute
    left :.2rem
    top :.2rem
    height :.8rem
    line-height :.8rem
    text-align :center
    width :.8rem
    border-radius :.6rem
    background :rgba(0,0,0,.5)  /**有透明度的背景色 */
    .header-abs-icon
        color :#fff
.header-fixed
    z-index :2
    position :fixed
    top :0
    left :0
    right :0
    height :$headerHeight
    background :$bgColor
    text-align :center
    color :#fff
    font-size :.32rems
    line-height :$headerHeight
    overflow :hidden
    .abs-back-icon
        top :0
        left :0
        width :.64rem
        text-align :center
        font-size :.4rem
        position :absolute
        color :#fff
    
</style>
