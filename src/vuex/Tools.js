// const encrypData = (value = {}) => {
//     let results = Buffer.from(value).toString('base64')
//     return results
// }

// const decryptData = (value = '') => {
//     let results = Buffer.from(value, 'base64').toString('ascii')
//     return results
// }

const Tools = {
    state () {
        return {
            Tools: 'Tools here..',
            LoadingScreenStatus: false,
            LoadingImage: true,
            LoadingSuccess: false,
            LoadingFailed: false,
            LoadingSorry: false,
            LoadingWarning: false,
            CloseButtonStatus: false,
            LoadingScreenText: 'Loading....',
            GetUrlFiles: 'https://kgcontent-bucket01-public.s3.ap-southeast-1.amazonaws.com/',
            GetUrlFile: 'https://assets.kompasdata.id/buku/cover/',
            GetUrlFileAsset: 'https://assets.kompasdata.id/',
            truncateString: (str, long) => { return (str.length > long) ? str.substr(0, long-1) + '...' : str },
            GetQueryString: () => {
                const urlSearchParams = new URLSearchParams(window.location.search)
                const params = Object.fromEntries(urlSearchParams.entries())
                return params
            },
            ChangeDateString: (dateValue) => {
                var mydate = new Date(dateValue)
                var month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
                "Juli", "Agustus", "September", "Oktober", "November", "Desember"][mydate.getMonth()]
                var str = mydate.getDate() + ' ' + month + ' ' + mydate.getFullYear()
                return str
            },
            PriceFormat: (number, decimals, dec_point, thousands_sep) => {
                var n = !isFinite(+number) ? 0 : +number, 
                    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
                    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
                    toFixedFix = function (n, prec) {
                        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
                        var k = Math.pow(10, prec);
                        return Math.round(n * k) / k;
                    },
                    s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
                if (s[0].length > 3) {
                    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
                }
                if ((s[1] || '').length < prec) {
                    s[1] = s[1] || '';
                    s[1] += new Array(prec - s[1].length + 1).join('0');
                }
                return s.join(dec);
            },
            GetYear: (dateValue) => {
                var date = new Date(dateValue);
                var year = date.getFullYear();

                return year;
            },
            DateNowString: () => {
                return [
                    `${ new Date().getFullYear() }`,
                    `${ (new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1) }`,
                    `${ new Date().getDate() < 10 ?  '0' + new Date().getDate() : new Date().getDate() }`
                ].join("-")
            },
            DateYesterday: () => {
                return [
                    `${ new Date().getFullYear() }`,
                    `${ (new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1) }`,
                    `${ new Date().getDate() < 10 ?  '0' + (new Date().getDate() - 1) : (new Date().getDate() - 1) }`
                ].join("-")
            },
            DateTomorrowString: () => {
                let nextMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)
                return [
                    `${ new Date().getFullYear() }`,
                    `${ (nextMonth.getMonth() + 1) <= 9 ? '0' + (nextMonth.getMonth() + 1) : (nextMonth.getMonth() + 1) }`,
                    `${ '0' + nextMonth.getDate() }`
                ].join("-")
            },

            GetCookies: (name) => {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for(var i=0;i < ca.length;i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') c = c.substring(1,c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
                }
                return null;
            },

            createCookieMinute(name, value, minutes, domain = ".kompas.id") {
                let expires, date
                if (minutes) {
                    date = new Date();
                    date.setTime(date.getTime()+(minutes*60*1000));
                    expires = "; expires="+date.toGMTString();
                } else {
                    expires = "";
                }
                document.cookie = name+"="+value+expires+`; domain=${ domain }; path=/;secure`;
            },

            deleteCookies(name, domain = ".kompas.id") {
                document.cookie = name +`=; domain=${ domain }; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
            },

            scrollTo(el = {}) {
                for ( let i in el ) {
                    if ( i === 'element_scroll' ) {
                        var element = document.querySelector(`#${ el[i] }`)
                        var headerOffset = el?.offsett ? Number(el?.offsett) : 0;
                        var elementPosition = element.getBoundingClientRect().top;
                        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                }
            }
        }
    },

    mutations: {
        setLoadingScreen(state, value) { state.LoadingScreenStatus = value },
        setLoadingText(state, value) { state.LoadingScreenText = value },
        setCloseStatus(state, value) { state.CloseButtonStatus = value },
        setLoadingImage(state, value) {
            if ( value === 'loading' ) {
                state.LoadingImage = true;
                state.LoadingFailed = false;
                state.LoadingSuccess = false;
                state.LoadingWarning = false;
                state.LoadingSorry = false;
            }

            if ( value === 'failed' ) {
                state.LoadingImage = false;
                state.LoadingFailed = true;
                state.LoadingSuccess = false;
                state.LoadingWarning = false;
                state.LoadingSorry = false;
            }

            if ( value === 'success' ) {
                state.LoadingImage = false;
                state.LoadingFailed = false;
                state.LoadingSuccess = true;
                state.LoadingWarning = false;
                state.LoadingSorry = false;
            }

            if ( value === 'sorry' ) {
                state.LoadingImage = false;
                state.LoadingFailed = false;
                state.LoadingSuccess = false;
                state.LoadingWarning = false;
                state.LoadingSorry = true;
            }

            if ( value === 'warning' ) {
                state.LoadingImage = false;
                state.LoadingFailed = false;
                state.LoadingSuccess = false;
                state.LoadingWarning = true;
                state.LoadingSorry = false;
            }
        },        
    }
}

export default Tools