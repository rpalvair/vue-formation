export default {

    addRequest(state, payload) {
        console.log("addRequest", payload)
        state.requests.push(payload)
        console.log("state", state)
    }
}