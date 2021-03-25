import { createStore } from 'vuex'
import coachesModules from './modules/coaches/index'

const store = createStore({
    modules: {
        coaches: coachesModules
    },
    state() {
        return {
            userId: 'c3'
        }
    },
    getters: {
        id(state) {
            return state.userId
        }
    },
    actions: {
        setId(context, payload) {
            console.log("setId", payload)
            context.commit('setId', payload)
        }
    },
    mutations: {
        setId(state, payload) {
            state.userId = payload.id
        }
    }
})

export default store