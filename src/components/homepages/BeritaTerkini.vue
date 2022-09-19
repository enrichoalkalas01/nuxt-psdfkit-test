<template>
    <section id="berita-terkini-mp" class="sec-artikel line-bot py-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 text-center  mb-3">
                    <h2 class="tag">Berita Terkini</h2>
                </div>
                <div class="col-12">
                    <div v-html="HTMLItems ? HTMLItems : ''" class="row"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'BeritaTerkini',
        props: [
            'dataSet',
        ],
        data () {
            return {
                beritas: null,
                HTMLItems: null,
            }
        },
        beforeMount() {
            this.beritas = this.dataSet
        },
        mounted() {
            this.beritas = this.dataSet
            this.getData()
        },
        updated() {
            this.beritas = this.dataSet
        },

        methods: {
            getData() {
                fetch('https://cds.kompas.id/rss/v1/article/list/category/bebas-akses')
                .then(response => response.text())
                .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
                .then(data => {
                    const items = data.querySelectorAll("item");
                    let html = ``;

                    
                    items.forEach((el, i) => {
                        if ( i < 4 ) {
                            html += `
                                <div class="col-12 col-md-6 my-3">
                                    <div class="content">
                                        <div class="row">

                                            <div class="col-sm-6">
                                                <a target="__blank"  href="${ el.querySelector("link").innerHTML }">
                                                    <img src="${ el.querySelector("enclosure").getAttribute('url') }" alt="${ el.querySelector("title").innerHTML }" class="w-100">
                                                </a>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="desc pt-3">
                                                    <h3 class="subtitle"><a target="__blank" href="${ el.querySelector("link").innerHTML }">${ el.querySelector("title").innerHTML }</a></h3>
                                                    <p>${ this.$store.state.Tools.ChangeDateString(new Date(el.querySelector("pubDate").innerHTML)) }</p>
                                                    <a target="__blank" href="${ el.querySelector("link").innerHTML }" class="more-btn">Baca Sekarang</a>
                                                </div>
                                            </div>
                                            
                                            <div class="col-12 mt-3">
                                                <p class="short-text three">${ el.querySelector("description").innerHTML }</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            `
                        }
                    })
                    this.HTMLItems = html
                });
            }
        }
    }
</script>