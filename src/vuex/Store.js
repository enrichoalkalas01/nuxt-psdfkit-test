import { createStore } from 'vuex'
import Login from './Login'

const Store = createStore({
    modules: {
        Login: Login,
    }
})

export default Store