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
    }
})

export default store