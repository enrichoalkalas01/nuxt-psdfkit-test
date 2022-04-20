<template>
    <div class="row line-bot full">
        <div class="col-12">
            <div
                v-for="artikel in artikels" :key="artikel.id"
                class="row artikels content borderless my-3"
            >
                <div v-if="artikel.featured_image !== ''" class="col-12 col-sm-12 col-md-3 col-lg-3 images-wrapper">
                    <div class="images-box">
                        <div class="image" :style="`background-image: url('${ this.$store.state.Tools.GetUrlFiles + artikel.featured_image }')`"></div>
                    </div>
                </div>
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
                            <i class="fas fa-clock"></i> {{ artikel.publication }} {{ artikel.published_date ? artikel.published_date.substring(0, 10) : artikel.published_date.substring(0, 10) }} &nbsp;
                            <i class="fa-solid fa-images"></i> {{ artikel.photo_count }} &nbsp;
                            <i class="fa-solid fa-chart-line"></i> {{ artikel.infographic_count }} &nbsp;
                            <i class="fa-solid fa-money-bill-1-wave"></i> {{ artikel.price ? artikel.price : 'Gratis' }} &nbsp;
                        </span>
                    </span>
                    <p class="short-text three">
                        <span v-html="artikel.summary"></span>
                    </p>
                </div>
            </div>
            <p class="f14 mt-4">
                Total Search : <span class="f14">{{ total_search }} data</span>
            </p>
        </div>
        <!-- <div class="col-12 my-3 text-center">
            <ul class="pagination cst-pagin d-flex justify-content-center">
                <li class="page-item disabled"><a class="page-link" href="#">Sebelumnya</a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Selanjutnya</a></li>
            </ul>
        </div> -->
    </div>
</template>

<script>
    export default {
        name: 'Artikel',
        props: [
            'dataArtikels', 'totalSearch'
        ],
        data (){
            return{
                artikels: this.dataArtikels,
                total_search: 0,
            }
        },

        async mounted() {
            this.artikels = this.dataArtikels
            this.total_search = this.totalSearch
        },

        async updated() {
            this.artikels = this.dataArtikels
            this.total_search = this.totalSearch
        },
    }
</script>

<style>
    .artikels.content {
        display: flex !important;
    }

    .images-wrapper .images-box {
        width: 100%;
        height: 150px;
        position: relative;
        background-color: #f8f8f8;
        border-radius: 5px;
    }

    .images-wrapper .images-box .image {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 100%;
        background-color: #dedede;
    }
</style>