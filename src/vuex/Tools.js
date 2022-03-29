const Tools = {
    state () {
        return {
            Tools: 'Tools here..',
            GetUrlFiles: 'https://kgcontent-bucket01-public.s3.ap-southeast-1.amazonaws.com/',
            truncateString: (str, long) => {
                return (str.length > long) ? str.substr(0, long-1) + '...' : str;
            },
            GetQueryString: () => {
                const urlSearchParams = new URLSearchParams(window.location.search);
                const params = Object.fromEntries(urlSearchParams.entries());
                return params
            }
        }
    },
}

export default Tools