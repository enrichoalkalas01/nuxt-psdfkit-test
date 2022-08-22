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

const AuthData = {
    adit: {
        "id": 9143,
        "firstName": "enricho",
        "lastName": "alkalas",
        "username": "enrichoalkalas.kompas@gmail.com",
        "memberType": 2,
        "trialExpiration": "2022-07-06T07:57:11",
        "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiZW5yaWNob2Fsa2FsYXMua29tcGFzQGdtYWlsLmNvbSIsImlkIjoiOGYzMDRjYTQtZTdmYS00OGI3LWJhYjAtYjVmZGM0NGQ0Nzk4IiwicnQiOjE2OTIxNzM1ODAsInNjb3BlIjpbInJlYWQtYXJ0aWNsZSIsInJlYWQtcHJvZmlsZSJdfSwiZXhwIjoxNjYwODA5Nzg2LCJpYXQiOjE2NjA4MDg4ODYsImlzcyI6Imh0dHBzOi8vd3d3LmtvbXBhcy5pZCJ9.kjt-gZ5jPEDfytr9RSJeP7osl9VgsunfGfq68SJHsOXdJHAa01MfqQuTIwRHxk1l95Edyb0HeC_yyhN8kNYJRq0onJ9S0_Rd3V1Nr8DWY8_VD1smurIwHosXHFd2IUe8FELn_gjsOCtl37ZowXhJAYwhmxIjCP6bcUpIO14Bnps",
        "refreshToken": ""
    },

    amanda: {
        "id": 9143,
        "firstName": "enricho",
        "lastName": "alkalas",
        "username": "enrichoalkalas.kompas@gmail.com",
        "memberType": 2,
        "trialExpiration": "2022-07-06T07:57:11",
        "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiZW5yaWNob2Fsa2FsYXMua29tcGFzQGdtYWlsLmNvbSIsImlkIjoiOGYzMDRjYTQtZTdmYS00OGI3LWJhYjAtYjVmZGM0NGQ0Nzk4IiwicnQiOjE2OTIxNzM1ODAsInNjb3BlIjpbInJlYWQtYXJ0aWNsZSIsInJlYWQtcHJvZmlsZSJdfSwiZXhwIjoxNjYwODA5Nzg2LCJpYXQiOjE2NjA4MDg4ODYsImlzcyI6Imh0dHBzOi8vd3d3LmtvbXBhcy5pZCJ9.kjt-gZ5jPEDfytr9RSJeP7osl9VgsunfGfq68SJHsOXdJHAa01MfqQuTIwRHxk1l95Edyb0HeC_yyhN8kNYJRq0onJ9S0_Rd3V1Nr8DWY8_VD1smurIwHosXHFd2IUe8FELn_gjsOCtl37ZowXhJAYwhmxIjCP6bcUpIO14Bnps",
        "refreshToken": ""
    },
    
    enricho: {
        old: {
            "id": 9143,
            "firstName": "enricho",
            "lastName": "alkalas",
            "username": "enrichoalkalas.kompas@gmail.com",
            "memberType": 2,
            "trialExpiration": "2022-07-06T07:57:11",
            "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiZW5yaWNob2Fsa2FsYXMua29tcGFzQGdtYWlsLmNvbSIsImlkIjoiOGYzMDRjYTQtZTdmYS00OGI3LWJhYjAtYjVmZGM0NGQ0Nzk4IiwicnQiOjE2OTIzNDYxMjcsInNjb3BlIjpbInJlYWQtYXJ0aWNsZSIsInJlYWQtcHJvZmlsZSJdfSwiZXhwIjoxNjYwODExMDcwLCJpYXQiOjE2NjA4MTAxNzAsImlzcyI6Imh0dHBzOi8vd3d3LmtvbXBhcy5pZCJ9.EwndkYE45GE0wFZYimKWY2mTzPCI-KJpptWjEDnBiByWoO2mjukUCXxiOnW7FjxFRk7bmNjJ9YTpIK--Ytd1Wr0x1cjb-8Ebvzae-t5GS08oPcVPDB8e3HSc3x9KLMb6NmvNCzezIK0BgxUfTyFGiWS-u-7aX5ATgUMl9okG3Zk",
            "refreshToken": ""
        },

        new: {
            "id": 9204,
            "firstName": "",
            "lastName": "",
            "username": "febriantif1@gmail.com",
            "memberType": 0,
            "trialExpiration": "2022-08-09T06:33:25",
            "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiZmVicmlhbnRpZjFAZ21haWwuY29tIiwiaWQiOiI2ZTY2ZTc3NC0wNTk2LTQxZjMtOWJlMC03NzgwMjBkYzZmZDgiLCJydCI6MTY5MjM0NTg5NCwic2NvcGUiOlsicmVhZC1hcnRpY2xlIiwicmVhZC1wcm9maWxlIl19LCJleHAiOjE2NjA4MTA4MTUsImlhdCI6MTY2MDgwOTkxNSwiaXNzIjoiaHR0cHM6Ly93d3cua29tcGFzLmlkIn0.k6gxB_oXZMetYwRJ5J2k8Hu_yzobgWOLp6Supdd3T5iczDaCE2WpBSElec--llaWyjjfAQe1gTVmyDefIagq11YvOGoBAI143b8810grVgZRa4l1KjgiSq-t4s6VhNslPY5D_GP63nfGvo0WQnEFPp9vGOHm8eK0HxowbVvSr8k",
            "refreshToken": ""
        }
    },
}

const Login = {
    state () {
        return {
            LoginStatus: GetCookies("_km_dtl_s") !== null ? true : false,
            UserData: GetLoginStatusData() ? GetLoginStatusData() : false,
            // LoginStatus: true,
            // UserData: AuthData.enricho.old,
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