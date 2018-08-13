<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
    name:'city',
    data(){
        return{
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    methods:{
        getCityInfo(){
            axios.get('/api/city.json')
                .then(this.getCityInfoSucc) //接收一个promiss对象
        },
        getCityInfoSucc(res){
           res = res.data
           if(res.ret && res.data){
               this.cities = res.data.cities
                this.hotCities = res.data.hotCities
               
           }
        },
        handleLetterChange(letter){
            this.letter = letter
        }
    },
    mounted () {
        this.getCityInfo()
    }
    
}
</script>

<style lang="stylus" scoped>

</style>
