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
        
    },
    
    enricho: {
        old: {
            "id": 9143, // rizkana id
            "firstName": "enricho",
            "lastName": "alkalas",
            "username": "enrichoalkalas.kompas@gmail.com",
            "memberType": 2,
            "trialExpiration": "2022-07-06T07:57:11",
            "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiZW5yaWNob2Fsa2FsYXMua29tcGFzQGdtYWlsLmNvbSIsImlkIjoiOGYzMDRjYTQtZTdmYS00OGI3LWJhYjAtYjVmZGM0NGQ0Nzk4IiwicnQiOjE2OTM0NjU4MTUsInNjb3BlIjpbInJlYWQtYXJ0aWNsZSIsInJlYWQtcHJvZmlsZSJdfSwiZXhwIjoxNjYyMDE2MDQyLCJpYXQiOjE2NjIwMTUxNDIsImlzcyI6Imh0dHBzOi8vd3d3LmtvbXBhcy5pZCJ9.uQMA5IlMR58ea8zjm15vI7844hSQNwNS5-nHBRi9EfcRlBbm3qVxf68Cxfn6eERfGyrrI9MNaTthBzwU8wsknaArsj52mv_MmuJYKNTL9Un3j6GQUipL-xsUG8KkhVNHQmumWTBJQ38_TY9O44hhzk9vDrg7a41ExkXigWzJZ7U",
            "refreshToken": ""
        },

        oldNew: {
            "id": 9860,
            "firstName": "enricho",
            "lastName": "kompas",
            "username": "enrichoalkalas.kompas@gmail.com",
            "memberType": 0,
            "trialExpiration": "2022-09-01T16:24:07",
            "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiZW5yaWNob2Fsa2FsYXMua29tcGFzQGdtYWlsLmNvbSIsImlkIjoiOGYzMDRjYTQtZTdmYS00OGI3LWJhYjAtYjVmZGM0NGQ0Nzk4IiwicnQiOjE2OTM0NjU4MTUsInNjb3BlIjpbInJlYWQtYXJ0aWNsZSIsInJlYWQtcHJvZmlsZSJdfSwiZXhwIjoxNjYyNDUwNjM3LCJpYXQiOjE2NjI0NDk3MzcsImlzcyI6Imh0dHBzOi8vd3d3LmtvbXBhcy5pZCJ9.IfLbi_2omTpwDyt6NtcAB-BqcDQWUXMPZe6Q8LomHiIWqasfOVjoO3JFkAPQsJqcMD_fh7TfBDs36axMgJl3f8SFPs8LD4yWx8-fptBW-0pB_laxtcTP3nN74CzolVnX-Bc-WFA9vEREEtJe5QaqT-bLtWn1Pnd-Wa40zIPs9LQ",
            "refreshToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVucmljaG9hbGthbGFzLmtvbXBhc0BnbWFpbC5jb20iLCJleHAiOjE2OTM0NjU4MTUsImlkIjoiOGYzMDRjYTQtZTdmYS00OGI3LWJhYjAtYjVmZGM0NGQ0Nzk4Iiwic3ViIjoxfQ.zurCJxq3xrplRzuOJ1n2o_vOIhyC3GtWXlf3jq1yUizBhdJQplkPWOROG8O5Il1g61weHzJhsnlAXmgUwozxujL3BUziP1vZ3h18Uw_4m-VV22q_64sLZFqI2ocO123r1ylniybwu_lrr0JR9fYc1w9lokxzkfsMO4NGo0uu6so"
        },

        new: {
            "id": 9204,
            "firstName": "",
            "lastName": "",
            "username": "febriantif1@gmail.com",
            "memberType": 0,
            "trialExpiration": "2022-08-09T06:33:25",
            "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiZW5yaWNob2Fsa2FsYXMua29tcGFzQGdtYWlsLmNvbSIsImlkIjoiOGYzMDRjYTQtZTdmYS00OGI3LWJhYjAtYjVmZGM0NGQ0Nzk4IiwicnQiOjE2OTM0NjU4MTUsInNjb3BlIjpbInJlYWQtYXJ0aWNsZSIsInJlYWQtcHJvZmlsZSJdfSwiZXhwIjoxNjYyNDUyNDQ4LCJpYXQiOjE2NjI0NTE1NDgsImlzcyI6Imh0dHBzOi8vd3d3LmtvbXBhcy5pZCJ9.jTyLCSnYmZrrSAEHYNxHR31tzopno2LOVIN25QxWUiILKjlOMSLyoqTEwt3sBnDBnIB2NHDZ50wRCVxl46oOLjGcWt2ymND7zhgRhgee3OmK6R4YTN6ETmtMaqWkeIWITNfB8NhBdDpUf1rxQUhUCm0AsbJ2CoCZixn7efjltSo",
            "refreshToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVucmljaG9hbGthbGFzLmtvbXBhc0BnbWFpbC5jb20iLCJleHAiOjE2OTM0NjU4MTUsImlkIjoiOGYzMDRjYTQtZTdmYS00OGI3LWJhYjAtYjVmZGM0NGQ0Nzk4Iiwic3ViIjoxfQ.zurCJxq3xrplRzuOJ1n2o_vOIhyC3GtWXlf3jq1yUizBhdJQplkPWOROG8O5Il1g61weHzJhsnlAXmgUwozxujL3BUziP1vZ3h18Uw_4m-VV22q_64sLZFqI2ocO123r1ylniybwu_lrr0JR9fYc1w9lokxzkfsMO4NGo0uu6so"
        }
    },
}

const Login = {
    state () {
        return {
            LoginStatus: GetCookies("_km_dtl_s") !== null ? true : false,
            UserData: GetLoginStatusData() ? GetLoginStatusData() : false,
            // LoginStatus: true,
            // UserData: AuthData.enricho.oldNew,
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