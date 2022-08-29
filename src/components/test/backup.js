async checkingCookies() {
    if ( !this.$store.state.Tools.GetCookies('_km_dtl_d') ) {
        console.log('cookies data is not detected !')
        console.log(this.$store.state.Tools.GetCookies('_km_dtl_s'))
        console.log(this.$store.state.Tools.GetCookies('_km_dtl_d'))

        this.checkTokenKompas()
    } else {
        console.log('success to get cookies data !')
        console.log(this.$store.state.Tools.GetCookies('_km_dtl_s'))
        console.log(this.$store.state.Tools.GetCookies('_km_dtl_d'))

        this.checkTokenKompas()
    }
},

async checkTokenKompas() {
    try {
        let getRefreshTokenFromCookie = await Axios('https://data-api-dev.kompas.id/api/Login/kompas-token-refresh', { withCredentials: true })
        if ( getRefreshTokenFromCookie.status !== 200 ) {
            console.log('refresh token not detected!')
            this.$store.commit('LogOut')
        } else {
            console.log('refresh token is detected!')
            if ( !this.$store.state.Tools.GetCookies('kompas._token') ) {
                console.log('token kompas is not found..', 'trying to get token again...')
                this.$store.commit('LogOut')
                this.getTokenKompas(getRefreshTokenFromCookie.data)
            } else {
                console.log('success to get token kompas')
                this.getUserData()
            }
        }
    } catch(err) {
        console.log(err)
        console.log('refresh token not detected!')
        this.$store.commit('LogOut')
    }
},

async getUserData() {
    try {
        // Get data user profile after get token
        let getDataUser = await Axios(this.configToken)
        let configData = getDataUser.data
        
        // set encryption for data
        configData.token = this.$store.state.Tools.GetCookies('kompas._token')
        console.log({ NewToken: configData })
        this.setCookiesLoginUser(configData)
    } catch(err) {
        console.log(err)
    }  
},

async setCookiesLoginUser(newUserData) {
    this.$store.commit('setEncrypt', JSON.stringify(newUserData))
    const data = this.$store.state.Login.LoginData
    this.$store.commit('setLoginCookies', { 'name' : '_km_dtl_d', 'data': data, 'minutes' : 5 })
    this.$store.commit('setLoginCookies', { 'name' : '_km_dtl_s', 'data': true, 'minutes' : 5 })
    this.checkCookiesData()
},

async getTokenKompas(refreshTokenValue) {
    try {
        let getAccessToken = await Axios({
            method: 'post', url: 'https://api.kompas.id/account/api/v1/tokens/refresh',
            data: JSON.stringify({ refreshToken: refreshTokenValue })
        })

        this.configToken.headers.Authorization = getAccessToken.data.data.accessToken
        let getDataUser = await Axios(this.configToken)

        let configData = getDataUser.data
        configData.token = getAccessToken.data.data.accessToken
        
        this.$store.state.Tools.createCookieMinute('kompas._token', getAccessToken.data.data.accessToken, 10)

        console.log(refreshTokenValue)
        console.log(getAccessToken)
        console.log(getDataUser)

        
    } catch(err) {
        console.log(err)
    }

    // fetch('https://data-api-dev.kompas.id/api/Login/kompas-token-refresh', { credentials: 'include'})
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(err => console.log(err))
},

async checkCookiesData() {
    if ( this.$store.state.Tools.GetQueryString().status === "sukses_login" ) window.location.href = '/'
    if ( !this.$store.state.Tools.GetCookies('_km_dtl_s') || !this.$store.state.Tools.GetCookies('_km_dtl_d') ) window.location.href = '/'
    if ( !this.$store.state.Tools.GetCookies('kompas._token') ) window.location.href = '/'
}