<template>
    <section class="sec-artikel line-bot py-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 text-center  mb-3">
                    <h2 class="tag">BERITA TERKINI</h2>
                </div>
                <div class="col-12">
                    <div class="row">
                        <BeritaTerkiniCard 
                            v-for="berita in beritas" :key="berita.id"
                            v-bind:data="berita"
                            v-bind:dataId="berita.id"
                            v-bind:dataImage="berita.images"
                            v-bind:dataTitle="berita.title"
                            v-bind:dataDesc="berita.desc"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BeritaTerkiniCard from './BeritaTerkiniCard.vue'

    export default {
        name: 'BeritaTerkini',
        components: {
            BeritaTerkiniCard
        },
        props: [
            'dataBeritas',
        ],
        data () {
            return {
                beritas: this.dataBeritas
            }
        }
    }
</script>