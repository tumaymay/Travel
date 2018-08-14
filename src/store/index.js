import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        city:'上海'  //存储公共的需要频繁改变的数据
    },
    mutations:{
        changeCity (state,city){
            state.city = city
        }
    }
})