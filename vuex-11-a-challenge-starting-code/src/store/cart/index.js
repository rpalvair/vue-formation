import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const cartModule = {
    state() {
        return {
            cart: { items: [], total: 0, qty: 0 }
        }
    },
    mutations,
    actions,
    getters
}

export default cartModule