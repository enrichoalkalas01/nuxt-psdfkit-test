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
            SizeKey: 3,

            TypeSearch: 0,
            TotalSearch: 0,
            TotalArtikel: 0,
            TotalFoto: 0,
            TotalInfografik: 0,
            TotalBuku: 0,
            TotalData: 0,
            ChangeStatus: 0,
            SearchConfigPhotos: {
                url: "https://dev-be.kompasdata.id/api/iasearch",
                headers: { "Content-Type": "application/json", },
                method: "GET",
                data: JSON.stringify({
                    "search": "", "authors": "", "publication": "",
                    "publishedFrom": "", "publishedTo": "", "from": 0, "size": 5
                })
            },
            SearchConfigArticles: {
                url: "https://dev-be.kompasdata.id/api/search",
                headers: { "Content-Type": "application/json", },
                method: "GET",
                data: JSON.stringify({
                    "search": "", "authors": "", "publication": "",
                    "publishedFrom": "", "publishedTo": "", "from": 0, "size": 5
                })
            },
            SearchConfigInfografiks: {
                url: "https://dev-be.kompasdata.id/api/graphicsearch",
                headers: { "Content-Type": "application/json", },
                method: "GET",
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
            console.log(value)
            for ( let i in value ) {
                if ( i === 'query' ) state.SearchKey = value[i]
                if ( i === 'typesearch' ) state.TypeSearch = value[i]
                if ( i === 'datefrom' ) state.DateFromKey = value[i]
                if ( i === 'dateto' ) state.DateToKey = value[i]
                if ( i === 'publication' ) state.PublicationKey = value[i]
                if ( i === 'author' ) state.AuthorKey = value[i]
                if ( i === 'size' ) state.SizeKey = value[i] ? value[i] : 5
                if ( i === 'currentpage' ) state.CurrentPageKey = ( value[i] * value.size )
            }
        },

        // setMoreSearchKey(state, value = {}) {
            
        // },  
        
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