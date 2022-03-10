<template>
    <section class="sec-artikel line-bot py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center mb-3">
                    <h2 class="tag">artikel</h2>
                    <h2 class="theadtile py-2"> Kumpulan berita dan artikel Kompas sejak tahun 1965</h2>
                </div>

                <div v-for="(artikel, index) in artikels" :key="artikel.id" :class="index === 0 ? 'col-md-8 my-2' : 'col-md-4 my-2'">
                    <div class="content">
                        <h3 class="title">{{ artikel.title }}</h3>
                        <p>
                            <span class="short-text four">
                                {{ artikel.desc }}
                            </span>
                            <a :href="'artikel-detail/' + artikel.id" class="more">Selengkapnya</a>
                        </p> <span class="date-time"> <i class="fas fa-clock"></i> {{ artikel.source }}</span>
                    </div>
                </div>

                <div class="col-12 mt-4 text-center text-md-end">
                    <a href="arsip#AllTabs02" class="more-link">
                        Artikel Lainnya <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Articles',
        props: [
            'dataArtikels',
        ],
        data() {
            return {
                artikels: this.dataArtikels,
            }
        }
    }
</script>