export default {
    increment(state) {
        console.log("increment")
        state.counter++
    },
    increase(state, payload) {
        console.log("state", state)
        console.log("increase with payload", payload)
        state.counter += payload.value
    },
}