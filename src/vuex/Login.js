const GetCookies = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

const deleteCookies = (name = null) => {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

const setCookie = (name, value, days) => {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

const encrypData = (value = {}) => {
    let results = Buffer.from(value).toString('base64')
    return results
}

const decryptData = (value = '') => {
    let results = Buffer.from(value, 'base64').toString('ascii')
    return results
}

const GetLoginStatusData = () => {
    let DataUser = ( GetCookies('_km_dtl_d') !== undefined || GetCookies('_km_dtl_d') !== null ) ? GetCookies('_km_dtl_d') : null
    if ( !DataUser ) return false
    else return JSON.parse(decryptData(DataUser))
}

const Login = {
    state () {
        return {
            LoginStatus: GetCookies('_km_dtl_s') !== null ? true : false,
            UserData: GetLoginStatusData() ? GetLoginStatusData() : false,
            MutationUsed: 0,
            LoginData: null,
        }
    },

    mutations: {
        setLoginStatus(state, value) {
            state.LoginStatus = value
        },

        setLoginCookies(state, value = { name: false, data: false, days: 0}) {
            setCookie(value.name, value.data, value.days)
        },

        LogOut(state) {
            state.MutationUsed += 1
            deleteCookies('_km_dtl_s')
            deleteCookies('_km_dtl_d')
            state.LoginStatus = false
        },

        setEncrypt(state, value) {
            state.LoginData = encrypData(value)
        },

        getEncrypt(value) {
            let results = decryptData(value)
            return results
        }
    }
}

export { GetCookies, decryptData, GetLoginStatusData }
export default Login