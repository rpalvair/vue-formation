import { createStore } from 'vuex'
import productModule from './products/index'
import cartModule from './cart/index'


const store = createStore({
    modules: {
        productModule,
        cartModule
    },
    state() {
        return {
            isLoggedIn: false,
        }
    },
    mutations: {
        setAuth(state, payload) {
            console.log("setAuth", payload)
            state.isLoggedIn = payload.isAuth
        },

    },
    actions: {
        login(context) {
            context.commit('setAuth', { isAuth: true })
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false })
        },

    },
    getters: {
        isAuthenticated(state) {
            return state.isLoggedIn
        },
    }
})

export default store