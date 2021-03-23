import { createStore } from 'vuex'
import counterModule from './counter/index'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const store = createStore({
    modules: {
        counterModule //namespace 
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations,
    getters,
    actions
})

export default store