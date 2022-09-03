<template>
    <nav id="nav-box" class="navbar navbar-expand-md navbar-dark komp-navbar mobile-view">
        <div class="container">
            <div class="box-top-nav">
                <a class="navbar-brand d-block d-md-none" href="/">
                    <img src="/assets/images/logo-kompasdata.png" alt="Pusat Informasi Kompas Test">
                </a>
                <div class="box-menu-nav">
                    <a href="/dashboard" class="icon-cart mx-3 d-block d-md-none" style="margin-right: 0 !important;">
                        <i class="fa-solid fa-user"></i>
                    </a>
                    <a href="/dashboard/daftar-pesanan" class="icon-cart mx-3 d-block d-md-none">
                        <i class="fas fa-shopping-cart"></i>
                    </a>
                    <button class="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>

            <div class="collapse navbar-collapse" id="navbarMain">
                <div class="search-box d-block d-md-none py-2">
                    <div class="input-group">
                        <select class="form-select" id="type-search" :value="typeSearch"> 
                            <option value="0">Semua</option>
                            <option value="1">Artikel</option>
                            <option value="2">Foto</option>
                            <option value="3">Infografik</option>
                            <option value="4">Perpustakaan</option>
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
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="ArsipDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Arsip
                    </a>
                        <ul class="dropdown-menu" aria-labelledby="ArsipDropdown">
                            <li><a class="dropdown-item" href="/pencarian?query=&subject=&datefrom=&dateto=&author=&publication=&typesearch=1&size=10&collection=&page=&currentpage=1&orderdirection=">Artikel</a></li>
                            <li><a class="dropdown-item" href="/pencarian?query=&subject=&datefrom=&dateto=&author=&publication=&typesearch=2&size=10&collection=&page=&currentpage=1&orderdirection=">Foto</a></li>
                            <li><a class="dropdown-item" href="/pencarian?query=&subject=&datefrom=&dateto=&author=&publication=&typesearch=3&size=10&collection=&page=&currentpage=1&orderdirection=">Infografik</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="bukuDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Buku
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="bukuDropdown">
                            <li><a class="dropdown-item" href="/?element_scroll=buku-mp&offsett=175&tabs=02">Penerbit Buku Kompas</a></li>
                            <li><a class="dropdown-item" href="/?element_scroll=buku-mp&offsett=175&tabs=03">Perpustakaan</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dataDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Data
                    </a>
                        <ul class="dropdown-menu" aria-labelledby="dataDropdown">
                            <li><a class="dropdown-item" href="/pencarian?query=&subject=&datefrom=&dateto=&author=&publication=&typesearch=5&size=10&collection=kompas_polling&page=&currentpage=1&orderdirection=desc">Survei Kompas</a></li>
                            <li><a class="dropdown-item" href="/pencarian?query=&subject=&datefrom=&dateto=&author=&publication=&typesearch=5&size=10&collection=kompas_statistic&page=&currentpage=1&orderdirection=desc">Statistik</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="layananDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Layanan
                    </a>
                        <ul class="dropdown-menu" aria-labelledby="layananDropdown">
                            <li><a class="dropdown-item" href="/layanan#riset">Jasa Riset</a></li>
                            <li><a class="dropdown-item" href="/layanan#konten">Konten Kreatif</a></li>
                            <li><a class="dropdown-item" href="/layanan#penerbit">Penerbitan Buku</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown ms-auto">
                        <a class="nav-link dropdown-toggle" href="#" id="bantuanDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Bantuan
                    </a>
                        <ul class="dropdown-menu" aria-labelledby="bantuanDropdown">
                            <li><a class="dropdown-item" href="/bantuan#tentang">Tentang</a></li>
                            <li><a class="dropdown-item" href="/bantuan#langganan">Cara Berlangganan</a></li>
                            <li><a class="dropdown-item" href="/FAQ">FAQ</a></li>
                            <li><a class="dropdown-item" href="/peta-situs">Peta Situs</a></li>
                        </ul>
                    </li>

                </ul>
                <div class="d-block d-md-none p-3" v-if="!this.$store.state.Login.LoginStatus">
                    <a :href="`https://account.kompas.id/login?next=${ this.$store.state.Headers.BaseUrl }`" class="btn btn-second" id="login">MASUK/DAFTAR</a>
                </div>
            </div>
        </div>

        <div id="box-mobile-bar" class="container active-mobile" v-on:click="sideBarActive">
            <div class="row bmb-burger-box">
                <div class="col-12 bmb-burger">
                    <div class="wrapper-burger">
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            </div>
        </div>

    </nav>
</template>

<script>
    import Axios from 'axios'
    export default {
        name: 'TopNav',
        data() {
            return {
                typeSearch: this.$store.state.Search.TypeSearch,
                searchKey: this.$store.state.Search.SearchKey,
            }
        },
        mounted() {
            if ( window.innerWidth > 650 ) document.querySelector("#box-mobile-bar").classList.remove("active-mobile")
            else {
                if ( window.location.pathname.includes('dashboard')) document.querySelector("#box-mobile-bar").classList.add("active-mobile")
                else document.querySelector("#box-mobile-bar").classList.remove("active-mobile")
            }
        },

        methods: {
            sideBarActive() { this.$store.commit('setStatusSideBar') },
            searchBar: function() {
                let urlDetection = window.location.pathname
                let SearchInput = document.querySelector("#input-search").value
                let SelectSearch = document.querySelector("#type-search").value
                let searchPassing = {
                    searchKey: SearchInput,
                    typesearch: Number(SelectSearch)
                }
                
                let Subject = this.$store.state.Search.SubjectKey ? this.$store.state.Search.SubjectKey : ''
                let DateFrom = this.$store.state.Search.DateFromKey ? this.$store.state.Search.DateFromKey : ''
                let DateTo = this.$store.state.Search.DateToKey ? this.$store.state.Search.DateToKey : ''
                let Author = this.$store.state.Search.AuthorKey ? this.$store.state.Search.AuthorKey : ''
                let Publication = this.$store.state.Search.PublicationKey ? this.$store.state.Search.PublicationKey : ''
                let Size = this.$store.state.Search.SizeKey ? this.$store.state.Search.SizeKey : this.$store.state.Search.CurrentPageKey
                let Collection = this.$store.state.Search.CollectionKey ? this.$store.state.Search.CollectionKey : ''
                let Page = this.$store.state.Search.PageKey ? this.$store.state.Search.PageKey : ''
                let CurrentPage = this.$store.state.Search.CurrentPageKey ? this.$store.state.Search.CurrentPageKey : this.$store.state.Search.CurrentPageKey
                let OrderDirection = this.$store.state.Search.OrderDirectionKey ? this.$store.state.Search.OrderDirectionKey : this.$store.state.Search.OrderDirectionKey
                
                this.$store.commit("setSearchKey", searchPassing)

                console.log('Searching...')
                console.log(`Search Key: ${ this.$store.state.Search.SearchKey }`)

                if ( urlDetection !== '/pencarian' ) {
                    window.location.href = `/pencarian?query=${ SearchInput }&subject=${ Subject }&datefrom=${ DateFrom }&dateto=${ DateTo }&author=${ Author }&publication=${ Publication }&typesearch=${ SelectSearch }&size=${ Size }&collection=${ Collection }&page=${ Page }&currentpage=${ CurrentPage }&orderdirection=${ OrderDirection }`
                } else {
                    window.location.href = `/pencarian?query=${ SearchInput }&subject=${ Subject }&datefrom=${ DateFrom }&dateto=${ DateTo }&author=${ Author }&publication=${ Publication }&typesearch=${ SelectSearch }&size=${ Size }&collection=${ Collection }&page=${ Page }&currentpage=${ CurrentPage }&orderdirection=${ OrderDirection }`
                }
            },

            profileBoxEvent: function() {
                this.ProfileBox = !this.ProfileBox
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

            async getSaldo() {
                let config = {
                    url: `${ this.$store.state.Headers.BaseUrlApi }/api/Users/${ this.$store.state.Login.UserData.id }/balance`, method: 'get',
                    headers: { 'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }` },
                }
                
                try {
                    let saldo = await Axios(config)
                    this.saldoUser = saldo.data.credit.credit_balance
                    this.kuotaArtikel = saldo.data.packages[1].package_balance
                    this.kuotaPdf = saldo.data.packages[0].package_balance
                } catch (error) {
                    console.log(error)
                }
            },

            async getNotificationCart() {
                let config = {
                    url: `${ this.$store.state.Headers.BaseUrlApi }/api/Users/${ this.$store.state.Login.UserData.id }/ShoppingCartsCount`,
                    headers: { 'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }` },
                }

                try {
                    let notificationCart = await Axios(config)
                    this.notificationCart = notificationCart.data
                } catch (error) {
                    console.log(error)
                }
            }
        },
    }
</script>

<style>
    @media screen and (max-width: 768px) {
        #nav-box.mobile-view .container {
            margin: 0;
            width: 100% !important;
            max-width: 100%;
            padding-left: 25px !important;
            padding-right: 25px !important;
        }

        #nav-box.mobile-view .search-box .form-select {
            max-width: 100px;
        }

        #nav-box.mobile-view .container .box-top-nav {
            max-width: 100%;
            width: 100%;
            display: flex;
        }

        #nav-box.mobile-view .container .box-top-nav .navbar-brand {
            width: 80%;
        }

        #nav-box.mobile-view .container .box-top-nav .box-menu-nav {
            display: flex;
            align-items: center;
        }

        #nav-box.mobile-view #navbarMain {

        }

        #nav-box.mobile-view #navbarMain ul {
            /* display: grid; */
        }

        #nav-box.mobile-view #navbarMain ul li {
            width: 100%;
        }

        .search-box .input-group {
            width: 100% !important;
        }
    }
</style>
