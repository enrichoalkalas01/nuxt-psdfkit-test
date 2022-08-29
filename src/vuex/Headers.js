const Headers = {
    state () {
        return {
            SideBarStatus: false,
            Headers: 'Headers here..',
            ReloadSaldo: false,
            // BaseUrlApi: `https://data-api-dev.kompas.id`,
            BaseUrlApi: `https://data-api.kompas.id`,
            // BaseDevApi: `https://data-api-dev.kompas.id`,
            Notification: false,
            NotificationCart: false,
        }
    },

    mutations: {
        setReloadSaldo(state, value) { state.ReloadSaldo = value },
        setStatusSideBar(state) { state.SideBarStatus = !state.SideBarStatus },
        setCloseSideBar(state) { state.SideBarStatus = false },
        setNotification(state) {
            state.Notification = true
            setTimeout(() => state.Notification = false, 500)
        },
        setNotificationCart(state) {
            state.NotificationCart = true
            setTimeout(() => state.NotificationCart = false, 500)
        },
    }
}

export default Headers