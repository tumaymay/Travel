<template>
    <div>
        <div class="header">
            城市选择
            <router-link to="/">
                 <div class="iconfont back-icon">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'CityHeader',
    data(){
        return{

        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    position :relative
    height :$headerHeight
    background :$bgColor
    text-align :center
    color :#fff
    font-size :.32rem
    line-height :$headerHeight
    overflow :hidden
    .back-icon
        top :0
        left :0
        width :.64rem
        text-align :center
        font-size :.4rem
        position :absolute
        color :#fff
</style>
