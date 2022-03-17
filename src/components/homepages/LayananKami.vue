<template>
    <section class="sec-artikel line-bot py-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12  mb-3 text-center">
                    <h2 class="tag">LAYANAN KAMI</h2>
                    <h2 class="headtitle py-2">{{ layanans.title_section }}</h2>
                </div>
                <div class="col-12">
                    <div class="row d-flex justify-content-center">
                        <div
                            v-for="(layanan, i) in layanans.data" :key="i"
                            class="col-12 col-md-12 col-lg-4 my-2"
                        >
                            <a :href="`/layanan${ layanan.hashtag_url }`" class="layanan-card">
                                <img :src="layanan.icon" class="icon" alt="">
                                <h3 class="subtitle">{{ layanan.title }}</h3>
                                <p>{{ layanan.text }}</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-4 text-center text-md-end">
                    <a href="layanan" class="more-link">Selengkapnya <i class="fas fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'LayananKami',
    props: [ 'dataSet' ],
    data() {
        return {
            layanans: null,
        }
    },
    beforeMount() {
        this.layanans = this.dataSet
    },
    mounted() {
        this.layanans = this.dataSet
    },
    updated() {
        this.layanans = this.dataSet
    },
}
</script>