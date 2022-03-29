// import Axios from 'axios'
// import { GetLoginStatusData } from './Login'

const Search = {
    state () {
        return {
            Search: null,
            SearchKey: null,
            TypeSearch: 0,
            TotalSearch: 0,
            SearchConfigPhotos: {
                url: "https://dev-be.kompasdata.id/api/Search/photos",
                headers: { "Content-Type": "application/json", },
                method: "POST",
                data: JSON.stringify({
                    "search": "", "authors": "", "publication": "",
                    "publishedFrom": "", "publishedTo": "", "from": 0, "size": 5
                })
            },
            SearchConfigArticles: {
                url: "https://dev-be.kompasdata.id/api/Search/articles",
                headers: { "Content-Type": "application/json", },
                method: "POST",
                data: JSON.stringify({
                    "search": "", "authors": "", "publication": "",
                    "publishedFrom": "", "publishedTo": "", "from": 0, "size": 5
                })
            },
            SearchConfigInfografiks: {
                url: "https://dev-be.kompasdata.id/api/Search/infographics",
                headers: { "Content-Type": "application/json", },
                method: "POST",
                data: JSON.stringify({
                    "search": "", "authors": "", "publication": "",
                    "publishedFrom": "", "publishedTo": "", "from": 0, "size": 5
                })
            },
        }
    },

    computed: {

    },

    mutations: {
        setSearchKey(state, value = {}) {
            for ( let i in value ) {
                if ( i === 'query' ) state.SearchKey = value[i]
                // if ( i === 'type-search' ) state.value[i] = value.value[i] ? value.value[i] : 0
            }
        },

        setTotalSearch(state, value) {
            state.TotalSearch = value
        },

        configSearchPhotos(state, value = {}) {
            for ( let config in value ) {
                if ( config === 'headers' ) state.SearchConfigPhotos.headers = value[config]
                if ( config === 'data' ) state.SearchConfigPhotos.data = JSON.stringify(value[config])
                if ( config === 'method' ) state.SearchConfigPhotos.method = value[config]
                if ( config === 'url' ) state.SearchConfigPhotos.url = value[config]
            }
        },

        configSearchArticles(state, value = {}) {
            for ( let config in value ) {
                if ( config === 'headers' ) state.SearchConfigArticles.headers = value[config]
                if ( config === 'data' ) state.SearchConfigArticles.data = JSON.stringify(value[config])
                if ( config === 'method' ) state.SearchConfigArticles.method = value[config]
                if ( config === 'url' ) state.SearchConfigArticles.url = value[config]
            }
        },

        SearchConfigInfografiks(state, value = {}) {
            for ( let config in value ) {
                if ( config === 'headers' ) state.SearchConfigInfografiks.headers = value[config]
                if ( config === 'data' ) state.SearchConfigInfografiks.data = JSON.stringify(value[config])
                if ( config === 'method' ) state.SearchConfigInfografiks.method = value[config]
                if ( config === 'url' ) state.SearchConfigInfografiks.url = value[config]
            }
        }
    }
}

export default Search