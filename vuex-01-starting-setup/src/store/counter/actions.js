export default {
    increment(context) {
        console.log("increment action", context)
        setTimeout(() => {
            context.commit('increment')
        }, 2000)
    },
    increase(context, paylod) {
        console.log("increase action", context)
        context.commit('increase', paylod)
    },

}