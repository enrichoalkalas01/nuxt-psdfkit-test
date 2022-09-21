<template>
    <section id="sec-artikel" class="sec-artikel line-bot py-5">
        <div id="artikel-mp" class="container">
            <div class="row">
                <div class="col-12 text-center mb-3">
                    <h2 class="tag">artikel</h2>
                    <h2 class="headtitle py-2">{{ artikels.title_section }}</h2>
                </div>

                <div
                    v-for="(artikel, i) in artikels.data" :key="i"
                    :class="i === 0 ? 'box-artikel box-artikel-1 col-12 col-md-12 col-lg-8 my-2' :
                    'box-artikel box-artikel-2 col-12 col-md-12 col-lg-4 my-2'"
                >
                    <div class="row content">
                        <div
                            :class="(i === 0 && artikel.image_source !== '') ?
                                'col-12 col-sm-12 col-md-12 col-lg-4 wrapper-images' :
                                'col-12 col-sm-12 col-md-12 col-lg-4 wrapper-images none'
                            "
                        >
                            <div
                                class="image"
                                :style="
                                    artikel.image_source !== '' ? `background-image: url('${ artikel.image_source }')` : ''
                                "
                                :alt="artikel.title"
                            ></div>
                        </div>
                        <div :class="
                                (i === 0 && artikel.image_source !== '') ?
                                'col-12 col-sm-12 col-md-12 col-lg-8 wrapper-text' :
                                'col-12 col-sm-12 col-md-12 col-lg-12 wrapper-text'
                            "
                        >
                            <h3 class="title">{{ artikel.title }}</h3>
                            <p>
                                <span class="short-text four">
                                    {{ artikel.excerpt }}
                                </span>
                                <a :href="'artikel-detail/' + artikel.document_id" class="more">Selengkapnya</a>
                            </p>
                            <span class="date-time">
                                <i class="fas fa-clock"></i>
                                {{ artikel.created_source }}, {{ this.$store.state.Tools.ChangeDateString(artikel.created_date.substring(0, 10)) }}
                                &nbsp;

                                <i class="fa-solid fa-images"></i>
                                {{ artikel.photo_count }}
                                &nbsp;

                                <i class="fa-solid fa-chart-line"></i>
                                {{ artikel.infographic_count }}
                                &nbsp;
                                
                                <i class="fa-solid fa-money-bill-1-wave"></i>
                                {{ artikel.price ? artikel.price : '0' }} 
                                &nbsp;
                            </span>
                        </div>
                    </div>
                </div>

                <div class="col-12 mt-4 text-center text-md-end">
                    <a href="/pencarian?query=&subject=&datefrom=&dateto=&author=&publication=&typesearch=1&size=10&collection=&page=&currentpage=1&orderdirection=desc" class="more-link">
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

<style>
    .box-artikel {
        /* height: 100%; */
        height: auto;
    }

    .box-artikel .content {
        height: 100%;
        margin: auto;
        display: flex !important;
    }

    .box-artikel .content .wrapper-images {
        /* height: 150px; */
        height: auto;
        margin-bottom: 15px;
    }

    .box-artikel .content .wrapper-images.none {
        display: none;
    }

    .box-artikel .content .wrapper-images .image {
        width: 100%;
        height: 100%;
        background-color: #dedede;
        border-radius: 2.5px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    @media screen and ( max-width: 992px ) {
        .box-artikel .content .wrapper-images {
            height: 150px;
        }
    }

    @media screen and ( min-width: 1366px ) {
        .box-artikel-2 .content .wrapper-images .image {
            height: 50%;
        }
    }

    @media screen and ( min-width: 992px ) {
        .box-artikel-2 .content .wrapper-images .image {
            height: 35%;
        }
    }
</style>