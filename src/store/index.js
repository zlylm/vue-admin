import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function defaultCollapseVal () {
  let coll = sessionStorage.getItem('collapseVal')
  if (!coll || coll == undefined) {
    sessionStorage.setItem('collapseVal',false)
    return false
  }
  return sessionStorage.getItem('collapseVal')
}

export default new Vuex.Store({
  state: {
    collapseVal: defaultCollapseVal()
  },
  mutations: {
    setCollapseVal(state,newVal){
      state.collapseVal = newVal
    }
  },
  actions: {
  },
  modules: {
  }
})
