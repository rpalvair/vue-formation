export default {
    addProduct(context, payload) {
        console.log("payload", payload)
        const productId = payload.productId
        if (productId) {
            console.log(context.rootGetters)
            // const products = context.rootState['productModule'].products
            const products = context.rootGetters['products']
            console.log("products", products)
            const product = products.find(val => val.id === productId)
            context.commit('addProduct', { product })
        }

    },
    removeProduct(context, payload) {
        console.log("remove product", payload)
        context.commit('removeProduct', payload)
    }

}