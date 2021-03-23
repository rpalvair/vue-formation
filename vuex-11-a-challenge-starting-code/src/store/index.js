import { createStore } from 'vuex'



const store = createStore({
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            console.log("increment")
            state.counter++
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    getters: {
        getCounter(state) {
            return state.counter
        }
    }
})

export default store