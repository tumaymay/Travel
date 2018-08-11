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
    data(){
        return{
            weekendList:[{
                id:'0001',
                imgUrl:'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
                title:'大连圣亚海洋世界',
                desc:'浪漫大连首站，浪漫的海洋主题乐园'
            },
            {
                id:'0002',
                imgUrl:'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg',
                title:'大连圣亚海洋世界',
                desc:'浪漫大连首站，浪漫的海洋主题乐园'
            },
            {
                id:'0003',
                imgUrl:'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
                title:'大连圣亚海洋世界',
                desc:'浪漫大连首站，浪漫的海洋主题乐园'
            },
            {
                id:'0004',
                imgUrl:'http://img1.qunarzz.com/sight/source/1505/eb/e4b181a6957c36.jpg_r_640x214_4abbdbc0.jpg',
                title:'大连圣亚海洋世界',
                desc:'浪漫大连首站，浪漫的海洋主题乐园'
            },
            {
                id:'0005',
                imgUrl:'http://img1.qunarzz.com/sight/source/1505/69/e899202f7abddf.jpg_r_640x214_81b6b528.jpg',
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
.img-wrapper
    height :0
    padding-bottom :33.4%
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
