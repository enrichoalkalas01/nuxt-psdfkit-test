import { createStore } from 'vuex'

const Store = createStore({
    state () {
        // State Here
        return {
            LoginStatus: false
        }
    }
})

export default Store