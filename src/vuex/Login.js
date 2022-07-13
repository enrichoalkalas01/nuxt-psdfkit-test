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

// const setCookie = (name, value, days) => {
//     var expires = "";
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + (days*24*60*60*1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "")  + expires + "; path=/;secure";
// }

const setCookieMinutes = (name, value, minutes) => {
    let expires, date
    if (minutes) {
        date = new Date();
        date.setTime(date.getTime()+(minutes*60*1000));
        expires = "; expires="+date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/;secure";
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
            LoginStatus: GetCookies("_km_dtl_s") !== null ? true : false,
            UserData: GetLoginStatusData() ? GetLoginStatusData() : false,
            // LoginStatus: true,
            // UserData: {
            //     "id": 9143,
            //     "firstName": "enricho",
            //     "lastName": "alkalas",
            //     "username": "enrichoalkalas.kompas@gmail.com",
            //     "memberType": 2,
            //     "trialExpiration": "2022-07-06T07:57:11",
            //     "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiZW5yaWNob2Fsa2FsYXMua29tcGFzQGdtYWlsLmNvbSIsImlkIjoiOGYzMDRjYTQtZTdmYS00OGI3LWJhYjAtYjVmZGM0NGQ0Nzk4IiwicnQiOjE2ODkwNTg4NDksInNjb3BlIjpbInJlYWQtYXJ0aWNsZSIsInJlYWQtcHJvZmlsZSJdfSwiZXhwIjoxNjU3NzAyNjU1LCJpYXQiOjE2NTc3MDE3NTUsImlzcyI6Imh0dHBzOi8vd3d3LmtvbXBhcy5pZCJ9.GwepHUbQHoEfUq6zpZZfCBmfAx7p3-V0iPLmznE-Z_xon-fX4jefKjJZl_f1K1HYV_SR1Jnv_cbAPNXuDKM5PvB-Vv34T0Bf8QZk9A6JiZPvBkr1L6XRQtToYk4xez1OgXgGqu1mHmDJLR0GgZ6dpq0N1XgNL_KoNmolQU1RrpM",
            //     "refreshToken": ""
            // },
            TokenData: GetCookies("kompas._token") ? GetCookies("kompas._token") : null,
            RefreshToken: null,
            MutationUsed: 0,
            LoginData: null,
        }
    },

    mutations: {
        setTokenAccess(state, value) {
            state.TokenData = value
        },

        setRefreshToken(state, value) {
            state.RefreshToken = value
        },

        setUserData(state, value) {
            state.UserData = value
        },

        setLoginStatus(state, value) {
            state.LoginStatus = value
        },

        setLoginCookies(state, value = { name: false, data: false, minutes: 0}) {
            setCookieMinutes(value.name, value.data, value.minutes)
        },

        LogOut(state) {
            deleteCookies('_km_dtl_s')
            deleteCookies('_km_dtl_d')
            deleteCookies('_km_dtl_ok')
            deleteCookies('kompas._token')
            deleteCookies('kompas._token_refresh')
            state.MutationUsed += 1
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