export default {
    finalCounter(state) {
        return state.counter * 3
    },
    normalizeCounter(_, getters) {
        const finalCounter = getters.finalCounter
        if (finalCounter < 0) {
            return 0
        }
        if (finalCounter > 100) {
            return 100
        }
        return finalCounter
    },
    testAuth(state, getters, rootState, rootGetters) {
        console.log(state, getters, rootGetters)
        return rootState.isLoggedIn
    }
}