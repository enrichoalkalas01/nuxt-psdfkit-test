const Headers = {
    state () {
        return {
            Headers: 'Headers here..',
            ReloadSaldo: false,
            BaseUrlApi: `https://dev-be.kompasdata.id/`,
        }
    },

    mutations: {
        setReloadSaldo(state, value) { state.ReloadSaldo = value },
    }
}

export default Headers