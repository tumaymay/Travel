<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{this.$store.state.city}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom" >热门城市</div>
            
            <div class="button-list">
                <div class="button-wrapper" 
                v-for="item of hotCities" 
                :key="item.id"
                @click="handleCityClick(item.name)">
                   
                    <div class="button" >{{item.name}}</div>
                    
                </div>
                
            </div>
        </div>
        <div class="area" v-for="(item,key) of cities" 
            :key="key" 
              :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list" v-for="innerItem of item"
             :key="innerItem.id"
             @click="handleCityClick(innerItem.name)">
                <div class="item border-bottom">{{innerItem.name}}</div>
            </div> 
        </div>
        </div>
        
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CityList',
    props:{
        cities:Object,
        hotCities:Array,
        letter:String
    },
    data(){
        return{

        }
    },   
    methods:{
        handleCityClick (city)  {
            console.log(city)
            this.$store.commit('changeCity',city)
            this.$router.push('./')
           
        },
        test(b){
            alert(1)
        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper)
         //
    },
    watch:{
        letter(){
            if(this.letter){
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
               
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.border-topbottom
    &:before
        border-color :#ccc
    &:after
        border-color :#ccc
.border-bottom
    &:before
        border-color :#ccc
.list
    overflow :hidden
    position :absolute
    top :1.58rem
    left :0
    right :0
    bottom :0
    .title
        line-height :.44rem
        background :#eee
        padding-left :.2rem
        color :#666
        font-size :.26rem
    .button-list
        overflow :hidden
        padding :.1rem .6rem .1rem .1rem
        .button-wrapper
            width :33.3%
            float :left
            .button
                border :.02rem solid #ccc
                text-align :center
                margin :.1rem
                padding :.1rem 0
                border-radius :.06rem
    .item-list
        .item
            
            padding-left :.2rem
            line-height :.76rem
</style>
