const Tools = {
    state () {
        return {
            Tools: 'Tools here..',
            truncateString: (str, long) => {
                return (str.length > long) ? str.substr(0, long-1) + '...' : str;
            }
        }
    },
}

export default Tools