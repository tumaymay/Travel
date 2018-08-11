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
    data(){
        return{
            recommendList:[{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/sight/p0/201307/18/f25ac054eec3804dc8d65eac.jpg_200x200_a008b6ca.jpg',
                title:'大连圣亚海洋世界',
                desc:'浪漫大连首站，浪漫的海洋主题乐园'
            },
            {
                id:'0002',
                imgUrl:'http://img1.qunarzz.com/sight/p0/201307/18/f25ac054eec3804dc8d65eac.jpg_200x200_a008b6ca.jpg',
                title:'大连圣亚海洋世界',
                desc:'浪漫大连首站，浪漫的海洋主题乐园'
            },
            {
                id:'0003',
                imgUrl:'http://img1.qunarzz.com/sight/p0/201307/18/f25ac054eec3804dc8d65eac.jpg_200x200_a008b6ca.jpg',
                title:'大连圣亚海洋世界',
                desc:'浪漫大连首站，浪漫的海洋主题乐园'
            },
            {
                id:'0004',
                imgUrl:'http://img1.qunarzz.com/sight/p0/201307/18/f25ac054eec3804dc8d65eac.jpg_200x200_a008b6ca.jpg',
                title:'大连圣亚海洋世界',
                desc:'浪漫大连首站，浪漫的海洋主题乐园'
            },
            {
                id:'0005',
                imgUrl:'http://img1.qunarzz.com/sight/p0/201307/18/f25ac054eec3804dc8d65eac.jpg_200x200_a008b6ca.jpg',
                title:'大连圣亚海洋世界',
                desc:'浪漫大连首站，浪漫的海洋主题乐园'
            },]
        }
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
