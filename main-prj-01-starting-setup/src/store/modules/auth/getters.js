export default {
    id(state) {
        return state.userId
    },
    token(state) {
        return state.token
    },
    isAuthenticated(state) {
        return !!state.token
    }
}