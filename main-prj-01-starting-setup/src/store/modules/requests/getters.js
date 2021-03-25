export default {
    requests(state, _, _2, rootGetters) {
        return state.requests.filter(req => req.coachId === rootGetters.id)
    },
    hasRequests(_, getters) {
        return getters.requests && getters.requests.length > 0
    }
}