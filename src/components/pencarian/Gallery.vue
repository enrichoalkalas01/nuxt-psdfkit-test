<template>
    <div class="row pt-3 line-bot full">
        <div class="wrapper-gallery col-12">
            <div class="row box-gallery">
                <div 
                    v-for="(foto, i) in fotos ? fotos.documents : null" :key="i"
                    class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 text-center"
                >
                    <a :href="`/foto-detail/${ foto ? foto.document_id : null }`">
                        <img :src="foto ? `${ this.$store.state.Tools.GetUrlFiles + foto.preview }` : null" class="img-square32 rounding" alt="">
                    </a>
                </div>
            </div>
        </div>
        <p class="f14 mt-4">
            Total Search : <span class="f14">{{ this.$store.state.Search.TotalFoto }} data</span>
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
                    authors: "",
                    publication: "",
                    publishedFrom: "",
                    publishedTo: "",
                    from: 0,
                    size: 10
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
                    console.log(DataPhotos)
                    // Set Data From API
                    this.fotos = DataPhotos.data
                    
                    // Set Total Data
                    this.$store.commit('setTotalSearchDetail', { type: 'foto', total: this.fotos.total })
                    
                } catch (error) {
                    console.log(error.message)
                }
            }
        },
    }
</script>