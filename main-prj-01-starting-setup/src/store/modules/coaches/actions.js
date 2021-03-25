export default {

    saveCoach(context, payload) {
        console.log("saveCoach", context)
        console.log("payload", payload)
        const coaches = context.getters['coaches']
        console.log("length", coaches.length)
        const id = "c" + (coaches.length + 1)
        context.commit('saveCoach', { ...payload, id })
        context.dispatch('setId', { id }, { root: true })
    }
}