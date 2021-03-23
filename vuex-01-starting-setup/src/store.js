import { createStore } from 'vuex'
import counterModule from './counterModule'

const store = createStore({
    modules: {
        counterModule
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth
        }
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn
        }
    },
    actions: {
        login(context) {
            context.commit('setAuth', { isAuth: true })
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false })
        }
    }
})

export default store