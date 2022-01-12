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

console.log(GetCookies('_km_dtl_s'))

const Login = {
    state () {
        return {
            LoginStatus: GetCookies('_km_dtl_s') !== null ? true : false,
            UserData: GetCookies('_km_dtl_d') !== null ? GetCookies('_km_dtl_d') : false,
            MutationUsed: 0
        }
    },

    mutations: {
        setLoginStatus(state) {
            state.LoginStatus = true
        },

        setLoginCookies(state, value = { name: false, data: false, days: 0}) {
            setCookie(value.name, value.data, value.days)
        },

        LogOut(state) {
            state.MutationUsed += 1
            deleteCookies('_km_dtl_s')
            deleteCookies('_km_dtl_d')
            state.LoginStatus = false
        }
    }
}

export default Login