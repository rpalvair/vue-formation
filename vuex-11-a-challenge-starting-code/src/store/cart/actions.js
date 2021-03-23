export default {
    addProduct(context, payload) {
        console.log("payload", payload)
        context.commit('addProduct', payload)
    },
    removeProduct(context, payload) {
        console.log("remove product", payload)
        context.commit('removeProduct', payload)
    }

}