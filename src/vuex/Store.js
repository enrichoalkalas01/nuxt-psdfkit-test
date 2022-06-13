import { createStore } from 'vuex'
import Login from './Login'
import Search from './Search'
import Tools from './Tools'
import Headers from './Headers'

const Store = createStore({
    modules: {
        Login: Login,
        Search: Search,
        Tools: Tools,
        Headers: Headers,
    }
})

export default Store