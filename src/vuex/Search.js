import Axios from 'axios'

const GetArticles = async (params = {}) => {
    console.log(params)
    let config = {
        url: "https://dev-be.kompasdata.id/api/Search/articles",
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        data: JSON.stringify({
            "search": "",
            "authors": "",
            "publication": "",
            "publishedFrom": "",
            "publishedTo": "",
            "from": 0,
            "size": 10
        })
    }

    try {
        let dataArticles = await Axios(config).then(response => response.data).catch(err => err.message)
        return dataArticles
    } catch (error) {
        console.log(error)
        return []
    }
}

const Search = {
    state () {
        return {
            Search: null,
            SearchKey: null,
            TypeSearch: 0,
            ArticlesData: () => {
                return GetArticles()
            }
        }
    },

    mutations: {
        setSearchKey(state, value = {}) {
            state.SearchKey = value.searchKey ? value.searchKey : ''
            state.TypeSearch = value.typeSearch ? value.typeSearch : 0
        }
    }
}

export default Search