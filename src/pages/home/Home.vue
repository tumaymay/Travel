<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>
</template>


<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
    name:'Home',
    data(){
        return{
            city:" "
        }
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json')
                .then(this.getHomeInfoSucc) //接收一个promiss对象
        },
        getHomeInfoSucc(res){
           res = res.data
           if(res.ret && res.data){
               this.city = res.data.city
           }
        }
    },
    mounted () {
        this.getHomeInfo()
    }
    
}
</script>

<style scoped>

</style>

