<template>
    <div>
        <div class="row line-bot full">
            <div class="col-12">
                <div
                    v-for="artikel in artikels" :key="artikel.id"
                    class="row artikels content borderless my-3"
                >
                    <div
                        :class="artikel.featured_image !== '' ? 'col-12 col-sm-12 col-md-9 col-lg-9 text-wrapper' : 'col-12 col-sm-12 col-md-12 col-lg-12 text-wrapper'"
                    >
                        <h2 class="title">
                            <a :href="'/artikel-detail/' + artikel.document_id" class="txt-main">
                                <span v-html="artikel.title"></span>
                            </a>
                        </h2>
                        <span class="date-time mb-3">
                            <span class="date-time">
                                <i class="fas fa-clock"></i> {{ artikel.publication }}, {{ artikel.published_date ? this.$store.state.Tools.ChangeDateString(artikel.published_date.substring(0, 10)) : this.$store.state.Tools.ChangeDateString(artikel.published_date.substring(0, 10)) }} &nbsp;
                                <i class="fa-solid fa-images"></i> {{ artikel.photo_count }} &nbsp;
                                <i class="fa-solid fa-chart-line"></i> {{ artikel.infographic_count }} &nbsp;
                                <i class="fa-solid fa-money-bill-1-wave"></i> {{ artikel.price ? artikel.price : '0' }} &nbsp;
                            </span>
                        </span>
                        <p class="short-text three">
                            <span v-html="artikel.summary"></span>
                        </p>
                    </div>
                    <div v-if="artikel.featured_image !== ''" class="col-12 col-sm-12 col-md-3 col-lg-3 images-wrapper">
                        <div class="images-box">
                            <div class="image" :style="`background-image: url('${ this.$store.state.Tools.GetUrlFiles + artikel.thumbnail }')`"></div>
                        </div>
                    </div>
                </div>
                <p class="f14 mt-4">
                    Total Search : <span class="f14">{{ total_search }} data</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios'

    export default {
        name: 'MainArtikel',
        components: {
        },
        data() {
            return {
                artikels: null,
                total_search: 0,
                config: {
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }` },
                    url: 'https://data-api-dev.kompas.id/api/iasearch',
                }
            }
        },
        async mounted() {
            this.getData()
        },
        async updated() {
            
        },
        methods: {
            async getData() {
                try {
                    // Get Data From API
                    let DataArticles = await Axios(this.config)

                    // Set Data From API
                    this.artikels = DataArticles.data.documents
                    this.total_search = DataArticles.data.total

                    // Set Total Data
                    this.$store.commit('setTotalSearchDetail', { type: 'artikel', total: this.artikels.total })
                    
                } catch (error) {
                    console.log(error.message)
                }
            }
        },
    }
</script>