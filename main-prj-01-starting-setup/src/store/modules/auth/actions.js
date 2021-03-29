export default {
    setId(context, payload) {
        console.log("setId", payload)
        context.commit('setId', payload)
    }
}