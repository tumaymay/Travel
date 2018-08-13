<template>
    <ul class="list">
        <li class="item" 
            v-for="item of letters" 
            :key="item"
            :ref="item"
            @touchstart="handleTouchStart" 
            @touchmove="handleTouchMove" 
            @touchend="handleTouchEnd" 
            @click="handleLetterClick">
            {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
    data(){
        return{
            touchStatus:false,
            startY: 0,
            timer: null
            
        }
    },
    props:{
        cities:Object,
    },
    updated () {
    this.startY = this.$refs['A'][0].offsetTop
    },
    computed: {
        letters () {
        const letters = []
        for (let i in this.cities) {
            letters.push(i)
            
        }
        //alert(letters)
        return letters
        
        }
    },
    methods:{
        handleLetterClick(e){   
            this.$emit("change",e.target.innerText)
        },
        handleTouchStart(){     //js原生事件
            this.touchStatus = true
            
        },
        handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
        handleTouchEnd(){      //js原生事件
            this.touchStatus = false
        },
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
    display :flex
    flex-direction :column
    justify-content :center
    position :absolute
    top :1.58rem
    right :0
    bottom :0
    width :.4rem
    padding-top :1.5rem
    padding-bottom :1.5rem
    .item
        text-align :center
        line-height :.34rem
        color :$bgColor
        font-size :.05rem
</style>
