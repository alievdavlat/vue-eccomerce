import { stringify } from 'postcss'
import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      totolPrice: 0,
      bagCount:0
    }
  },
  mutations: {
    incrementBag (state) {
     const count =  state.bagCount++ 
     localStorage.setItem('count', JSON.stringify(count))
    },
    decrementBag(state){
      const count = JSON.parse(localStorage.getItem('count'))
      const newCount = count--
      localStorage.setItem('count', JSON.stringify(newCount))
    },
    priceReducer(state, payload){
    const reduce =   state.totolPrice += parseInt(payload)
    localStorage.setItem('bag', JSON.stringify(reduce))
  }
    
  }
})
