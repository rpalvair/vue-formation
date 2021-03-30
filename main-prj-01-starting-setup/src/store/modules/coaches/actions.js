import config from '../../../config'
export default {

    async saveCoach(context, payload) {
        console.log("saveCoach", context)
        console.log("payload", payload)
        const coaches = context.getters['coaches']
        console.log("length", coaches.length)
        const userId = context.rootGetters.id
        console.log("userId", userId)
        const token = context.rootGetters.token
        const result = await fetch(`${config.firebaseUrl}/coaches/${userId}.json?auth=${token}`, {
            method: 'PUT',
            body: JSON.stringify({ ...payload, id: userId })
        })

        const data = await result.json()
        console.log("data", data)
        if (result.ok) {
            context.commit('saveCoach', { ...payload, id: userId })
            context.dispatch('setId', { id: userId }, { root: true })
        } else {
            //
        }


    },

    async loadCoaches(context, payload) {
        console.log("loadCoaches")
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return
        }
        const response = await fetch(`${config.firebaseUrl}/coaches.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log("response", response)
        const data = await response.json()
        console.log("data", data)
        if (!response.ok) {
            const error = new Error(data.message || 'Failed to fetch!')
            throw error
        }
        const coaches = []
        for (const key in data) {
            const coach = {
                id: data[key].id,
                firstName: data[key].firstname,
                lastName: data[key].lastname,
                hourlyRate: data[key].rate,
                areas: data[key].areas,
                description: data[key].description
            }
            coaches.push(coach)
        }
        context.commit('setCoaches', coaches)
        context.commit('setFetchTimestamp')
    }
}