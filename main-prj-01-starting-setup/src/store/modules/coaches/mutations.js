export default {

    saveCoach(state, payload) {
        console.log("saveCoach", payload)
        state.coaches.push({
            id: payload.id,
            firstName: payload.firstname,
            lastName: payload.lastname,
            hourlyRate: payload.rate,
            areas: payload.areas,
            description: payload.description
        })
    }
}