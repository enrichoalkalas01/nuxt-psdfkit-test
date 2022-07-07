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
            //     "id": 9155,
            //     "firstName": "",
            //     "lastName": "",
            //     "username": "febriantif1@gmail.com",
            //     "memberType": 0,
            //     "trialExpiration": "2022-07-07T20:06:54",
            //     "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiZmVicmlhbnRpZjFAZ21haWwuY29tIiwiaWQiOiI2ZTY2ZTc3NC0wNTk2LTQxZjMtOWJlMC03NzgwMjBkYzZmZDgiLCJydCI6MTY4ODY3Mzk3OSwic2NvcGUiOlsicmVhZC1hcnRpY2xlIiwicmVhZC1wcm9maWxlIl19LCJleHAiOjE2NTcxMzg5MDYsImlhdCI6MTY1NzEzODAwNiwiaXNzIjoiaHR0cHM6Ly93d3cua29tcGFzLmlkIn0.UHZ2Hd7HJbROVcEShVA7W2xw1dIhufZ-wLRxZVoFqgf_nvjrSXcgKRPeR_kvXqO3nQvFsfx1eS5Hbyp0QwKnKoIF4jZSjVpg8VDJ4NbaoiumlV4DyxWk4spW7g3mjdtqlG9uTHZhmWm9S6SNJJ6ir6zCEXzUeIZAH1zCvFUIdrs",
            //     "refreshToken": ""
            // },
            MutationUsed: 0,
            LoginData: null,
        }
    },

    mutations: {
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