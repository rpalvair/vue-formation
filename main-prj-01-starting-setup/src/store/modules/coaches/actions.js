import config from '../../../config'
export default {

    async saveCoach(context, payload) {
        console.log("saveCoach", context)
        console.log("payload", payload)
        const coaches = context.getters['coaches']
        console.log("length", coaches.length)
        const id = "c" + (coaches.length + 1)
        const result = await fetch(`${config.firebaseUrl}/coaches/${id}.json`, {
            method: 'PUT',
            body: JSON.stringify({ ...payload, id })
        })

        const data = await result.json()
        console.log("data", data)
        if (result.ok) {
            context.commit('saveCoach', { ...payload, id })
            context.dispatch('setId', { id }, { root: true })
        } else {
            //
        }


    }
}