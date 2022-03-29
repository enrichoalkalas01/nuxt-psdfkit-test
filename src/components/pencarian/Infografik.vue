<template>
    <div class="row mt-3">
        <div class="col-12">
            <div v-for="(infografik, i) in infografiks" :key="i" class="content borderless">
                <div class="row">
                    <div class="col-sm-4 my-3">
                        <a :href="'/infografik-detail/' + infografik.document_id">
                            <img :src="`${ this.$store.state.Tools.GetUrlFiles + infografik.thumbnail }`" alt="" class="infografik-image w-100">
                        </a>
                    </div>
                    <div class="col-sm-8 my-3">
                        <div class="desc">
                            <h3 class="subtitle"><a :href="'/infografik-detail/' + infografik.document_id">{{ infografik.title }}</a></h3>
                            <!-- <p class="short-text three">{{ infografik.desc }}</p> -->
                            <span class="date-time">
                                <i class="fas fa-clock"></i> {{ infografik.publication }} {{ infografik.published_date }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
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
            'dataInfografiks'
        ],
        data (){
            return{
                infografiks: this.dataInfografiks,
            }
        },
        
        async mounted() {
            this.infografiks = this.dataInfografiks
        },

        async updated() {
            this.infografiks = this.dataInfografiks
        },
    }
</script>