export default {
    state: {
        products: [{"id":1,"title":"Armchair","description":"Light single chair","price": 145,"img": require('../assets/img/products/product1.png') },
        {"id":2,"title":"Kimmi","description":"Light single chair","price": 145,"img": require('../assets/img/products/product2.png')},
        {"id":3,"title":"Netty","description":"Light single chair","price": 145,"img": require('../assets/img/products/product3.png')},
        {"id":4,"title":"Sib","description":"Light single chair","price": 145,"img": require('../assets/img/products/product4.png')},
        {"id":5,"title":"Eveleen","description":"Light single chair","price": 145,"img": require('../assets/img/products/product1.png')},
        {"id":6,"title":"Mindy","description":"Light single chair","price": 145,"img": require('../assets/img/products/product2.png')},
        {"id":7,"title":"Vincenz","description":"Light single chair","price": 145,"img": require('../assets/img/products/product3.png')},
        {"id":8,"title":"Neilla","description":"Light single chair","price": 145,"img": require('../assets/img/products/product4.png')},
        {"id":9,"title":"Wolfy","description":"Light single chair","price": 145,"img": require('../assets/img/products/product1.png')},
        {"id":10,"title":"Lenette","description":"Light single chair","price": 145,"img": require('../assets/img/products/product2.png')}],
    },
    mutations: {
        SET_PRODUCTS (state, payload) {
            state.products = payload
        },
        
    },
    actions: {
        SET_PRODUCTS ({commit}, payload) {
            // обратимся к нашему комиту и візовем мутацию setNotify в кторую передадим payload
            commit('SET_EVENT', payload)
        },
    },
    getters: {
        PRODUCTS (state) {
            return state.products
        },
    },
    modules: {
    }
}