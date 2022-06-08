const Tools = {
    state () {
        return {
            Tools: 'Tools here..',
            LoadingScreenStatus: false,
            LoadingScreenText: 'Loading....',
            GetUrlFiles: 'https://kgcontent-bucket01-public.s3.ap-southeast-1.amazonaws.com/',
            GetUrlFile: 'https://assets.kompasdata.id/buku/cover/',
            truncateString: (str, long) => {
                return (str.length > long) ? str.substr(0, long-1) + '...' : str
            },
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
            }
        }
    },

    mutations: {
        setLoadingScreen(state, value) {
            state.LoadingScreenStatus = value
        },

        setLoadingText(state, value) {
            state.LoadingScreenText = value
        }
    }
}

export default Tools