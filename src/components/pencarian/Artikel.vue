<template>
    <div class="row line-bot full">
        <div class="col-12">
            <div
                v-for="artikel in artikels" :key="artikel.id"
                class="content borderless my-3"
            >
                <h2 class="title">
                    <a :href="'/artikel-detail/' + artikel.document_id" class="txt-main">
                        <span v-html="artikel.title"></span>
                    </a>
                </h2>
                <span class="date-time"> <i class="fas fa-clock"></i> {{ artikel.publication }} {{ artikel.published_date }}</span>
                <p class="short-text three">
                    <span v-html="artikel.summary"></span>
                </p>
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