<template>
    <section class="sec-artikel my-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12">
                    <MiniMenu />
                    <div class="tab-content komp-tab-content">
                        <div class="tab-pane fade show active" id="bukuTabs01" role="tabpanel" aria-labelledby="buku-Tabs01">
                            <BukuOne v-bind:dataProducts="products" />
                        </div>
                        <div class="tab-pane fade" id="bukuTabs02" role="tabpanel" aria-labelledby="buku-Tabs02">
                            <BukuOne v-bind:dataProducts="products" />
                        </div>
                        <div class="tab-pane fade" id="bukuTabs03" role="tabpanel" aria-labelledby="buku-Tabs03">
                            <BukuOne v-bind:dataProducts="products" />
                        </div>
                        <div class="tab-pane fade" id="bukuTabs04" role="tabpanel" aria-labelledby="buku-Tabs04">
                            <BukuOne v-bind:dataProducts="products" />
                        </div>
                        <div class="tab-pane fade" id="bukuTabs05" role="tabpanel" aria-labelledby="buku-Tabs05">
                            <BukuOne v-bind:dataProducts="products" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import MiniMenu from './MiniMenu.vue'
    import BukuOne from './BukuOne.vue'

    let dataProducts = [
        { id: 1, images: '/assets/images/buku/image 22.png', title: 'Kajian kebijakan alutsista pertahanan dan keamanan Republik Indonesia' },
        { id: 2, images: '/assets/images/buku/image 22 (1).png', title: 'Kajian kebijakan alutsista pertahanan dan keamanan Republik Indonesia' },
        { id: 3, images: '/assets/images/buku/image 22 (2).png', title: 'Kajian kebijakan alutsista pertahanan dan keamanan Republik Indonesia' },
        { id: 4, images: '/assets/images/buku/image 22 (3).png', title: 'Kajian kebijakan alutsista pertahanan dan keamanan Republik Indonesia' },
        { id: 5, images: '/assets/images/buku/image 24.png', title: 'Kajian kebijakan alutsista pertahanan dan keamanan Republik Indonesia' },
        { id: 6, images: '/assets/images/buku/image 24 (1).png', title: 'Kajian kebijakan alutsista pertahanan dan keamanan Republik Indonesia' },
        { id: 7, images: '/assets/images/buku/image 24 (2).png', title: 'Kajian kebijakan alutsista pertahanan dan keamanan Republik Indonesia' },
        { id: 8, images: '/assets/images/buku/image 24 (3).png', title: 'Kajian kebijakan alutsista pertahanan dan keamanan Republik Indonesia' },
        { id: 9, images: '/assets/images/buku/image 26.png', title: 'Kajian kebijakan alutsista pertahanan dan keamanan Republik Indonesia' },
        { id: 10, images: '/assets/images/buku/image 26 (1).png', title: 'Kajian kebijakan alutsista pertahanan dan keamanan Republik Indonesia' },
        { id: 11, images: '/assets/images/buku/image 26 (2).png', title: 'Kajian kebijakan alutsista pertahanan dan keamanan Republik Indonesia' },
        { id: 12, images: '/assets/images/buku/image 26 (3).png', title: 'Kajian kebijakan alutsista pertahanan dan keamanan Republik Indonesia' },
    ]

    export default {
        name: 'Buku',
        components: { MiniMenu, BukuOne },
        data () {
            return {
                products: dataProducts
            }
        },
    }
</script>
