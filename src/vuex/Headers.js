const Headers = {
    state () {
        return {
            SideBarStatus: false,
            Headers: 'Headers here..',
            ReloadSaldo: false,
            BaseUrlApi: `https://dev-be.kompasdata.id/`,
        }
    },

    mutations: {
        setReloadSaldo(state, value) { state.ReloadSaldo = value },
        setStatusSideBar(state) { state.SideBarStatus = !state.SideBarStatus },
        setCloseSideBar(state) { state.SideBarStatus = false }
    }
}

export default Headers