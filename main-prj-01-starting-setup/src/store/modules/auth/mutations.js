export default {
    setId(state, payload) {
        state.userId = payload.id
    },
    setUser(state, payload) {
        console.log("payload", payload)
        state.token = payload.token;
        state.userId = payload.userId
        state.tokenExpiration = payload.tokenExpiration
    }
}