import config from '../../../config'

export default {
    async contactCoach(context, payload) {
        console.log("contactCoach", payload)
        const request = {
            coachId: payload.id,
            userEmail: payload.email,
            message: payload.message
        }
        const response = await fetch(`${config.firebaseUrl}/requests/${payload.id}.json`, {
            method: 'POST',
            body: JSON.stringify(request)
        })

        const data = await response.json()
        console.log("data", data)
        if (!response.ok) {
            const error = new Error(data.message || 'Failed to send request')
            throw error
        }
        request.id = data.name
        context.commit('addRequest', request)
    },

    async fetchRequests(context) {
        const userId = context.rootGetters.id
        console.log("userId", userId)
        const response = await fetch(`${config.firebaseUrl}/requests/${userId}.json`)
        const data = await response.json()
        if (!response.ok) {
            const error = new Error(data.message || 'Failed to send request')
            throw error
        }
        console.log("data", data)
        const requests = []
        for (const key in data) {
            console.log("key", key)
            const request = {
                id: key,
                coachId: data[key].coachId,
                message: data[key].message,
                userEmail: data[key].userEmail
            }
            requests.push(request)
        }
        console.log("requests", requests)
        context.commit('addRequests', requests)
    }
}