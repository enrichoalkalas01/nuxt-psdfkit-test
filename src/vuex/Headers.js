const Headers = {
    state () {
        return {
            SideBarStatus: false,
            Headers: 'Headers here..',
            ReloadSaldo: false,
            BaseUrlApi: `https://dev-be.kompasdata.id/`,
            Notification: false,
        }
    },

    mutations: {
        setReloadSaldo(state, value) { state.ReloadSaldo = value },
        setStatusSideBar(state) { state.SideBarStatus = !state.SideBarStatus },
        setCloseSideBar(state) { state.SideBarStatus = false },
        setNotification(state) {
            state.Notification = true
            setTimeout(() => state.Notification = false, 500)
        }
    }
}

export default Headers