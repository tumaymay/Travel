<template>
    <div>
        <div class="title">热门推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img :src="item.imgUrl" class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </li>
        </ul>
        
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        recommendList:Array,
    }
    
    
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
    background :#eee
    line-height :.8rem
    margin-top :.2rem
    text-indent .2rem
.item
    overflow :hidden
    height :1.9rem
    display :flex
    .item-img
        height :1.7rem
        width :1.7rem
        padding :.1rem
    .item-info
        flex :1
        padding :.1rem
        min-width :0
        .item-title
            line-height :.54rem
            font-size :.32rem
            ellipsis()
        .item-desc
            color :#ccc
            line-height :.4rem
            ellipsis()
        .item-btn
            line-height :.44rem
            margin-top :.16rem
            background :#ff9300
            padding :0 .2rem
            border-radius :.06rem



</style>
