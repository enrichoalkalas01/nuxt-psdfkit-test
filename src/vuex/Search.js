// import Axios from 'axios'
// import { GetLoginStatusData } from './Login'

const Search = {
    state () {
        return {
            Search: null,
            SearchKey: null,

            AuthorKey: null,            
            CurrentPageKey: 1,
            PublicationKey: null,
            DateFromKey: null,
            DataToKey: null,
            SizeKey: 10,
            OrderDirectionKey: 'desc',

            TypeSearch: 0,
            TotalSearch: 0,
            TotalArtikel: 0,
            TotalFoto: 0,
            TotalInfografik: 0,
            TotalBuku: 1,
            TotalData: 0,
            ChangeStatus: 0,
            SearchConfigPhotosPost: {
                url: "https://dev-be.kompasdata.id/api/Search/photos",
                headers: { "Content-Type": "application/json", },
                method: "POST",
                data: JSON.stringify({
                    "search": "", "authors": "", "publication": "",
                    "publishedFrom": "", "publishedTo": "", "from": 0, "size": 5
                })
            },
            SearchConfigArticlesPost: {
                url: "https://dev-be.kompasdata.id/api/Search/articles",
                headers: { "Content-Type": "application/json", },
                method: "POST",
                data: JSON.stringify({
                    "search": "", "authors": "", "publication": "",
                    "publishedFrom": "", "publishedTo": "", "from": 0, "size": 5
                })
            },
            SearchConfigInfografiksPost: {
                url: "https://dev-be.kompasdata.id/api/Search/infographics",
                headers: { "Content-Type": "application/json", },
                method: "POST",
                data: JSON.stringify({
                    "search": "", "authors": "", "publication": "",
                    "publishedFrom": "", "publishedTo": "", "from": 0, "size": 5
                })
            },

            SearchConfigPhotos: {
                url: "https://dev-be.kompasdata.id/api/iasearch?",
                headers: { "Content-Type": "application/json", },
                method: "GET",
            },

            SearchConfigArticles: {
                url: "https://dev-be.kompasdata.id/api/search?",
                headers: { "Content-Type": "application/json", },
                method: "GET",
            },
            
            SearchConfigInfografiks: {
                url: "https://dev-be.kompasdata.id/api/graphicsearch?",
                headers: { "Content-Type": "application/json", },
                method: "GET",
            },

            SearchConfigBooks: {
                url: "https://dev-be.kompasdata.id/api/booksearch?",
                headers: { "Content-Type": "application/json", },
                method: "GET",
            },
        }
    },

    computed: {

    },

    mutations: {
        setSearchKey(state, value = {}) {
            for ( let i in value ) {
                if ( i === 'query' ) state.SearchKey = value[i]
                if ( i === 'typesearch' ) state.TypeSearch = value[i]
                if ( i === 'datefrom' ) state.DateFromKey = value[i]
                if ( i === 'dateto' ) state.DateToKey = value[i]
                if ( i === 'publication' ) state.PublicationKey = value[i]
                if ( i === 'author' ) state.AuthorKey = value[i]
                if ( i === 'size' ) state.SizeKey = value[i] ? value[i] : 5
                if ( i === 'currentpage' ) state.CurrentPageKey = value[i] // state.CurrentPageKey = ( value[i] * value.size )
            }
        },
        
        setTotalSearchDetail(state, value = {}) {
            for ( let i in value ) {
                if ( value.type === 'artikel' ) state.TotalArtikel = value[i]
                if ( value.type === 'foto' ) state.TotalFoto = value[i]
                if ( value.type === 'infografik' ) state.TotalInfografik = value[i]
                if ( value.type === 'buku' ) state.TotalBuku = value[i]
                if ( value.type === 'data' ) state.TotalData = value[i]
            }
        },

        setTotalSearch(state, value) {
            state.TotalSearch = value
        },

        setSearchStatus(state) {
            state.ChangeStatus += state.ChangeStatus
        },

        configSearchPhotosPost(state, value = {}) {
            for ( let config in value ) {
                if ( config === 'headers' ) state.SearchConfigPhotosPost.headers = value[config]
                if ( config === 'data' ) state.SearchConfigPhotosPost.data = JSON.stringify(value[config])
                if ( config === 'method' ) state.SearchConfigPhotosPost.method = value[config]
                if ( config === 'url' ) state.SearchConfigPhotosPost.url = value[config]
            }
        },

        configSearchArticlesPost(state, value = {}) {
            for ( let config in value ) {
                if ( config === 'headers' ) state.SearchConfigArticlesPost.headers = value[config]
                if ( config === 'data' ) state.SearchConfigArticlesPost.data = JSON.stringify(value[config])
                if ( config === 'method' ) state.SearchConfigArticlesPost.method = value[config]
                if ( config === 'url' ) state.SearchConfigArticlesPost.url = value[config]
            }
        },

        configSearchInfografiksPost(state, value = {}) {
            for ( let config in value ) {
                if ( config === 'headers' ) state.SearchConfigInfografiksPost.headers = value[config]
                if ( config === 'data' ) state.SearchConfigInfografiksPost.data = JSON.stringify(value[config])
                if ( config === 'method' ) state.SearchConfigInfografiksPost.method = value[config]
                if ( config === 'url' ) state.SearchConfigInfografiksPost.url = value[config]
            }
        },

        configSearchArticles(state, value = {}) {
            var i = 0, stringUrl = '', urlData = state.SearchConfigArticles.url
            for ( let config in value ) {
                if ( config === 'headers' ) state.SearchConfigArticles.headers = value[config]
                if ( config === 'method' ) state.SearchConfigArticles.method = value[config]
                if ( config === 'url' ) state.SearchConfigArticles.url = value[config]
                if ( config === 'data' ) {
                    
                    for ( let queryData in value[config] ) {
                        stringUrl = stringUrl + `${ queryData }=${ value[config][queryData] }&`
                        i = i + 1
                    }
                    
                    state.SearchConfigArticles.url = urlData + stringUrl.substring(0, stringUrl.length - 1)
                    console.log(state.SearchConfigArticles)
                }
            }
        },
        
        configSearchPhotos(state, value = {}) {
            var i = 0, stringUrl = '', urlData = state.SearchConfigPhotos.url
            for ( let config in value ) {
                if ( config === 'headers' ) state.SearchConfigPhotos.headers = value[config]
                if ( config === 'method' ) state.SearchConfigPhotos.method = value[config]
                if ( config === 'url' ) state.SearchConfigPhotos.url = value[config]
                if ( config === 'data' ) {
                    
                    for ( let queryData in value[config] ) {
                        stringUrl = stringUrl + `${ queryData }=${ value[config][queryData] }&`
                        i = i + 1
                    }
                    
                    state.SearchConfigPhotos.url = urlData + stringUrl.substring(0, stringUrl.length - 1)
                }
            }
        },

        configSearchInfografiks(state, value = {}) {
            var i = 0, stringUrl = '', urlData = state.SearchConfigInfografiks.url
            for ( let config in value ) {
                if ( config === 'headers' ) state.SearchConfigInfografiks.headers = value[config]
                if ( config === 'method' ) state.SearchConfigInfografiks.method = value[config]
                if ( config === 'url' ) state.SearchConfigInfografiks.url = value[config]
                if ( config === 'data' ) {
                    
                    for ( let queryData in value[config] ) {
                        stringUrl = stringUrl + `${ queryData }=${ value[config][queryData] }&`
                        i = i + 1
                    }
                    
                    state.SearchConfigInfografiks.url = urlData + stringUrl.substring(0, stringUrl.length - 1)
                }
            }
        },

        configSearchBooks(state, value = {}) {
            var i = 0, stringUrl = '', urlData = state.SearchConfigBooks.url
            for ( let config in value ) {
                if ( config === 'headers' ) state.SearchConfigBooks.headers = value[config]
                if ( config === 'method' ) state.SearchConfigBooks.method = value[config]
                if ( config === 'url' ) state.SearchConfigBooks.url = value[config]
                if ( config === 'data' ) {
                    
                    for ( let queryData in value[config] ) {
                        stringUrl = stringUrl + `${ queryData }=${ value[config][queryData] }&`
                        i = i + 1
                    }
                    
                    state.SearchConfigBooks.url = urlData + stringUrl.substring(0, stringUrl.length - 1)
                }
            }
        }
    }
}

export default Search