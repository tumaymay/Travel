<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题</div>
        <div class="header-right">城市
            <span class="iconfont city-icon">&#xe64a;</span>
        </div>
    </div>
    
</template>

<script>

export default {
    name:'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header
        display:flex
        background :$bgColor
        color :#fff
        line-height :.86rem
    .header-left
        width :.64rem
        float :left
    .back-icon
        text-align :center
        font-size :.4rem
    .header-input
        padding-left :.2rem
        flex :1
        background :#fff
        margin-top:.12rem
        height :.64rem
        border-radius :.1rem
        margin-left:.2rem
        color :#ccc
        line-height :.64rem
    .header-right
        width:1.24rem
        float:right
        text-align :center
    .city-icon
        margin-left :-.05rem
        font-size :.1rem
</style>

