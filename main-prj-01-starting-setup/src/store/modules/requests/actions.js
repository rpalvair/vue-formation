export default {
    contactCoach(context, payload) {
        console.log("contactCoach", payload)
        context.commit('addRequest', {
            id: new Date().toISOString(),
            coachId: payload.id,
            userEmail: payload.email,
            message: payload.message
        })
    }
}