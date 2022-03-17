<template>
    <section class="sec-artikel line-bot py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center mb-3">
                    <h2 class="tag">artikel</h2>
                    <h2 class="theadtile py-2">{{ artikels.title_section }}</h2>
                </div>

                <div
                    v-for="(artikel, i) in artikels.data" :key="i"
                    :class="i === 0 ? 'col-12 col-md-8 my-2' : 'col-12 col-md-4 my-2'"
                >
                    <div class="content">
                        <h3 class="title">{{ artikel.title }}</h3>
                        <p>
                            <span class="short-text four">
                                {{ artikel.excerpt }}
                            </span>
                            <a :href="'artikel-detail/' + artikel.id" class="more">Selengkapnya</a>
                        </p>
                        <span class="date-time">
                            <i class="fas fa-clock"></i>
                            {{ artikel.created_source }}, {{ artikel.created_date }}
                        </span>
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
            'dataSet',
        ],
        data() {
            return {
                artikels: null,
            }
        },
        beforeMount() {
            this.artikels = this.dataSet
        },
        mounted() {
            this.artikels = this.dataSet
        },
        updated() {
            this.artikels = this.dataSet
        },
    }
</script>