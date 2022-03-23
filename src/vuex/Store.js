import { createStore } from 'vuex'
import Login from './Login'
import Search from './Search'
import Tools from './Tools'

const Store = createStore({
    modules: {
        Login: Login,
        Search: Search,
        Tools: Tools,
    }
})

export default Store