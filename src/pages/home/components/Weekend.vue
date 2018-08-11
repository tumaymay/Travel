<template>
    <div>
        <div class="title">周末去哪</div>
        <ul>
            <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
                <div class="img-wrapper">
                    <img :src="item.imgUrl" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
        
    </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    props:{
        weekendList:Array,
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
.img-wrapper
    height :0
    padding-bottom :37.09%
    overflow :hidden
    .item-img
       width :100%
.item-info
    padding :.1rem
    .item-title
        line-height :.54rem
        font-size :.32rem
        ellipsis()
    .item-desc
        color :#ccc
        line-height :.4rem
        ellipsis()



</style>
