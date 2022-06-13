const Headers = {
    state () {
        return {
            Headers: 'Headers here..',
            ReloadSaldo: false,
        }
    },

    mutations: {
        setReloadSaldo(state, value) { state.ReloadSaldo = value },
    }
}

export default Headers