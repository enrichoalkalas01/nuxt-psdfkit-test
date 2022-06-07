<template>
    <div class="row mt-3">
        <div class="col-12 line-bot">
            <div v-for="(infografik, i) in infografiks" :key="i" class="content borderless">
                <div class="row">
                    <div class="col-sm-4 my-3">
                        <a :href="'/infografik-detail/' + infografik.document_id">
                            <div class="images-div" :style="`background-image: url('${ this.$store.state.Tools.GetUrlFiles + infografik.thumbnail }')`"></div>
                            <!-- <img :src="`${ this.$store.state.Tools.GetUrlFiles + infografik.thumbnail }`" alt="" class="infografik-image w-100"> -->
                        </a>
                    </div>
                    <div class="col-sm-8 my-3">
                        <div class="desc">
                            <h3 class="subtitle">
                                <a :href="'/infografik-detail/' + infografik.document_id">
                                    <div v-html="infografik.title"></div>
                                </a>
                            </h3>
                            <!-- <p class="short-text three">{{ infografik.desc }}</p> -->
                            <span class="date-time">
                                <i class="fas fa-clock"></i> {{ infografik.publication }}, {{ infografik.published_date ? this.$store.state.Tools.ChangeDateString(infografik.published_date.substring(0, 10)) : this.$store.state.Tools.ChangeDateString(infografik.published_date.substring(0, 10)) }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <p class="f14 mt-4">
                Total Search : <span class="f14">{{ total_search }} data</span>
            </p>
        </div>
        <!-- <div class="col-12 mt-3 text-center">
            <a href="#AllTabs04" class="btn btn-line">Lihat Lainnya</a>
        </div> -->
    </div>
</template>

<script>
    export default {
        name: 'Infografik',
        props: [
            'dataInfografiks', 'totalSearch'
        ],
        data (){
            return{
                infografiks: this.dataInfografiks,
                total_search: 0,
            }
        },
        
        async mounted() {
            this.infografiks = this.dataInfografiks
            this.total_search = this.totalSearch
        },

        async updated() {
            this.infografiks = this.dataInfografiks
            this.total_search = this.totalSearch
        },
    }
</script>

<style>
    .images-div {
        width: 100%;
        height: 175px;
        background-color: #dedede;
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 100%;
        border-radius: 5px;
    }
</style>