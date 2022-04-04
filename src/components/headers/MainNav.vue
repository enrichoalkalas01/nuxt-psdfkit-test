<template>
    <div class="nav-below  d-none d-md-block">
        <div class="container">
            <div class="row">
                <div class="col-12 py-3">
                    <div class="nb-inner">
                        <a class="navbar-brand" href="/">
                            <img src="/assets/images/logo-kompasdata.png" alt="Pusat Informasi Kompas">
                        </a>
                        <div class="med-box d-none d-md-block">
                            <div class="search-box">
                                <div class="input-group">
                                    <select class="form-select" id="type-search" :value="typeSearch"> 
                                        <option value="0">Semua</option>
                                        <option value="1">Artikel</option>
                                        <option value="2">Foto</option>
                                        <option value="3">Infografik</option>
                                        <option value="4">Buku</option>
                                        <option value="5">Data</option>
                                    </select>
                                    <input
                                        v-on:keyup.enter="searchBar"
                                        id="input-search"
                                        type="text"
                                        class="form-control"
                                        placeholder="Masukkan teks"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                        :value="searchKey"
                                    >
                                    <a v-on:click="searchBar" class="btn btn-main px-3" id="btn-cari"><i class="fas fa-search"></i></a>
                                </div>
                            </div>

                        </div>
                        <div class="user-box">
                            <a href="#" class="cart d-none d-md-block">
                                <i class="fas fa-shopping-cart"></i>
                            </a>
                            <span class="divider mr-2  d-none d-md-block" id="line"></span>
                            <a href="/login" class="btn btn-line" id="login">LOGIN</a>
                            <a href="/daftar" class="btn btn-second" id="register">DAFTAR</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainNav',
        data() {
            return {
                typeSearch: this.$store.state.Search.TypeSearch,
                searchKey: this.$store.state.Search.SearchKey,
            }
        },

        watch: {
            '$store.state.Search.TypeSearch': function() {
                this.typeSearch !== this.$store.state.Search.TypeSearch ?
                this.typeSearch = this.$store.state.Search.TypeSearch : this.typeSearch
            },

            '$store.state.Search.SearchKey': function() {
                this.searchKey !== this.$store.state.Search.SearchKey ?
                this.searchKey = this.$store.state.Search.SearchKey : this.searchKey
            }
        },

        beforeMount() {
            this.setHookSearch()
        },

        mounted() {
            var line = document.getElementById("line")
            var login = document.getElementById("login")
            var register = document.getElementById("register")

            if (this.$store.state.Login.LoginStatus) {
                line.style.visibility = "hidden";
                login.style.display = "none";
                register.style.display = "none";
            } else{
                line.style.display = "block";
                login.style.display = "block";
                register.style.display = "block";
            }
        },

        

        methods: {
            searchBar: function() {
                let urlDetection = window.location.pathname
                let SearchInput = document.querySelector("#input-search").value
                let SelectSearch = document.querySelector("#type-search").value
                let searchPassing = {
                    searchKey: SearchInput,
                    typesearch: Number(SelectSearch)
                }
                
                let Author = this.$store.state.Search.AuthorKey ? this.$store.state.Search.AuthorKey : ''
                let Publication = this.$store.state.Search.PublicationKey ? this.$store.state.Search.PublicationKey : ''
                let DateFrom = this.$store.state.Search.DateFromKey ? this.$store.state.Search.DateFromKey : ''
                let DateTo = this.$store.state.Search.DateToKey ? this.$store.state.Search.DateToKey : ''
                let Size = this.$store.state.Search.SizeKey ? this.$store.state.Search.SizeKey : this.$store.state.Search.CurrentPageKey
                let CurrentPage = this.$store.state.Search.CurrentPageKey ? this.$store.state.Search.CurrentPageKey : this.$store.state.Search.CurrentPageKey
                
                this.$store.commit("setSearchKey", searchPassing)

                console.log('Searching...')
                console.log(`Search Key: ${ this.$store.state.Search.SearchKey }`)

                if ( urlDetection !== '/pencarian' ) {
                    window.location.href = `/pencarian?query=${ SearchInput }&datefrom=${ DateFrom }&dateto=${ DateTo }&author=${ Author }&publication=${ Publication }&typesearch=0&size=${ Size }&currentpage=${ CurrentPage }`
                } else {
                    window.location.href = `/pencarian?query=${ SearchInput }&datefrom=${ DateFrom }&dateto=${ DateTo }&author=${ Author }&publication=${ Publication }&typesearch=0&size=${ Size }&currentpage=${ CurrentPage }`
                }
            },

            urlDetector: function() {
                return window.location.pathname
            },

            queryStringDetector: function() {
                const urlSearchParams = new URLSearchParams(window.location.search)
                const params = Object.fromEntries(urlSearchParams.entries())
                return params
            },

            setHookSearch: function() {
                if ( this.urlDetector() === '/pencarian' ) {
                    this.$store.commit("setSearchKey", this.queryStringDetector())
                }
            },

            
        },
    }
</script>