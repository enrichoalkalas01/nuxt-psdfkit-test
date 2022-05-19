<template>
    <div class="row pt-3 line-bot full">
        <div class="wrapper-gallery col-12">
            <div class="row box-gallery">
                <div 
                    v-for="(foto, i) in fotos ? fotos.documents : null" :key="i"
                    class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 text-center"
                >
                    <a :href="`/foto-detail/${ foto ? foto.document_id : null }`" class="content borderless info-ctn">
                        <img :src="foto ? `${ this.$store.state.Tools.GetUrlFiles + foto.preview }` : null" class="img-square32 rounding mb-1" alt="">
                        <h2 class="subtitle mb-1">
                            <div class="truncate" v-html="`${ foto.title }`"></div>
                        </h2>
                        <span class="date-time">
                            {{ foto.credit }}, {{ this.$store.state.Tools.ChangeDateString(foto.published_date.substring(0, 10)) }}
                        </span>
                        <!-- <h2 class="title truncate" v-html="`${ foto.title }`"></h2>
                        <p class="subtitle">{{ foto.credit }}, {{ this.$store.state.Tools.ChangeDateString(foto.published_date.substring(0, 10)) }} </p> -->
                    </a>
                </div>
            </div>
        </div>
        <p class="f14 mt-4">
            Total Search : <span class="f14">{{ total_search }} data</span>
        </p>
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        name: 'Gallery',
        components: {
        },
        props: [],
        data() {
            return {
                fotos: null,
                total_search: 0,
                configPhotosData: {
                    search: this.$store.state.Search.SearchKey,
                    authors: this.$store.state.Search.AuthorKey,
                    publication: this.$store.state.Search.PublicationKey,
                    publishedFrom: `${ this.$store.state.Search.DateFromKey }`,
                    publishedTo: `${ this.$store.state.Search.DateToKey }`,
                    from: this.$store.state.Search.CurrentPageKey < 2 ? this.$store.state.Search.CurrentPageKey :
                    (Number(this.$store.state.Search.CurrentPageKey) - 1 ) * this.$store.state.Search.SizeKey + 1,
                    size: 15,
                    orderdirection: this.$store.state.Search.OrderDirectionKey
                },
            }
        },

        async mounted() {
            this.$store.commit('configSearchPhotos', {
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }` },
                data: this.configPhotosData
            })

            this.getData()
        },

        async updated() {
            // this.fotos !== null ? this.getData() : false
        },

        methods: {
            async getData() {
                try {
                    // Get Data From API
                    let DataPhotos = await Axios(this.$store.state.Search.SearchConfigPhotos)
                    // Set Data From API
                    this.fotos = DataPhotos.data
                    this.total_search = this.fotos.total

                    console.log(this.fotos);
                    
                    // Set Total Data
                    this.$store.commit('setTotalSearchDetail', { type: 'foto', total: this.fotos.total })
                    
                } catch (error) {
                    console.log(error.message)
                }
            }
        },
    }
</script>