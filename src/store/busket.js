export default {
    state: {
        busket: [],
    },
    mutations: {
        SET_BUSKET(state, payload) {
            state.busket = payload
        },
        
    },
    actions: {
        SET_BUSKET ({commit}, payload) {
            // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
            commit('SET_EVENT', payload)
        },
    },
    getters: {
        BUSKET (state) {
            return state.busket
        },
    },
    modules: {
    }
}