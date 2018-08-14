<template>
<div>
    <div class="search">
       <input class="search-input" v-model="keyWord" type="text" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" v-show="keyWord" ref="search">
        <ul>
            <li class="search-item border-bottom"
            v-for="item of list"
             :key="item.id"
             @click="handleCityClick(item.name)">{{item.name}}</li>
            <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
        </ul>
    </div>
</div>
    
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CitySearch',
    props:{
        cities:Object,
    },
     methods:{
        handleCityClick (city)  {
            console.log(city)
            this.$store.commit('changeCity',city)
            this.$router.push('./')
           
        }
    },
    data(){
        return{
            keyWord:'',
            timer:null,
            list:[],
        }
    },
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.search)
    },
    watch:{
        keyWord(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyWord){
                this.list=[]
                return
            }

            this.timer = setTimeout(() => {
                const result=[]
                for(let i in this.cities){
                    this.cities[i].forEach((value) => {
                        if(value.spell.indexOf(this.keyWord)>-1 || 
                          value.name.indexOf(this.keyWord)>-1){
                              result.push(value)
                              
                          }
                    })
                }
                this.list = result
            }, 100);
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .search
        height 0.72rem
        background :$bgColor
        padding :0 .1rem
        .search-input
            height :.62rem
            line-height :.62rem
            width :100%
            border-radius :.06rem
            text-align :center
            padding:0 .1rem
            color :#666
            box-sizing :border-box
    .search-content
        z-index :1
        background :#eee
        overflow :hidden 
        position :absolute     
        top :1.58rem
        bottom :0
        left :0
        right :0  
        .search-item
            line-height :.54rem
            background :#fff
            padding-left .2rem
</style>
