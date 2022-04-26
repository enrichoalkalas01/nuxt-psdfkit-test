const Tools = {
    state () {
        return {
            Tools: 'Tools here..',
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
        }
    },
}

export default Tools