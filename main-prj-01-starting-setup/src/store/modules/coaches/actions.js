export default {

    saveCoach(context, payload) {
        console.log("saveCoach", context)
        console.log("payload", payload)
        const coaches = context.getters['coaches']
        console.log("length", coaches.length)
        context.commit('saveCoach', { ...payload, id: "c" + (coaches.length + 1) })
    }
}