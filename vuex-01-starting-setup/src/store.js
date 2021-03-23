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
        },
        increase(state, payload) {
            console.log("increase with payload", payload)
            state.counter += payload.value
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 3
        },
        normalizeCounter(state) {
            const finalCounter = state.counter * 3
            if (finalCounter < 0) {
                return 0
            }
            if (finalCounter > 100) {
                return 100
            }
            return finalCounter
        }
    }
})

export default store