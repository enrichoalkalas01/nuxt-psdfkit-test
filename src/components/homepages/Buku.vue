<template>
    <section class="sec-artikel line-bot py-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 text-center mb-3">
                    <h2 class="tag">Buku</h2>
                    <h2 class="headtitle py-2">Referensi perpustakaan dan publikasi terbitan Kompas</h2>
                </div>
                <div class="col-12">
                    <ul class="nav nav-tabs komp-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="buku-Tabs01" data-bs-toggle="tab" href="#bukuTabs01" aria-controls="bukuTabs01" aria-selected="true">Topik Hangat</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="buku-Tabs02" data-bs-toggle="tab" href="#bukuTabs02" aria-controls="bukuTabs02" aria-selected="false">Penerbit Buku Kompas</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="buku-Tabs03" data-bs-toggle="tab" href="#bukuTabs03" aria-controls="bukuTabs03" aria-selected="false">Perpustakaan</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="buku-Tabs04" data-bs-toggle="tab" href="#bukuTabs04" aria-controls="bukuTabs04" aria-selected="false">Buku Elektronik</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="buku-Tabs05" data-bs-toggle="tab" href="#bukuTabs05" aria-controls="bukuTabs05" aria-selected="false">Laporan</a>
                        </li>
                    </ul>
                    <div class="tab-content komp-tab-content">
                        <div class="tab-pane fade show active" id="bukuTabs01" role="tabpanel" aria-labelledby="buku-Tabs01">
                            <div class="buku-card">
                                <BukuCard 
                                    v-for="buku in bukus" :key="buku.id"
                                    v-bind:data="buku"
                                    v-bind:dataId="buku.id"
                                    v-bind:dataImage="buku.images"
                                    v-bind:dataTitle="buku.title"
                                    v-bind:dataDesc="buku.desc"
                                />
                            </div>
                        </div>
                        <div class="tab-pane fade" id="bukuTabs02" role="tabpanel" aria-labelledby="buku-Tabs02">
                            <div class="buku-card">
                                <BukuCard 
                                    v-for="buku in bukus" :key="buku.id"
                                    v-bind:data="buku"
                                    v-bind:dataId="buku.id"
                                    v-bind:dataImage="buku.images"
                                    v-bind:dataTitle="buku.title"
                                    v-bind:dataDesc="buku.desc"
                                />
                            </div>
                        </div>
                        <div class="tab-pane fade" id="bukuTabs03" role="tabpanel" aria-labelledby="buku-Tabs03">
                            <div class="buku-card">
                                <BukuCard 
                                    v-for="buku in bukus" :key="buku.id"
                                    v-bind:data="buku"
                                    v-bind:dataId="buku.id"
                                    v-bind:dataImage="buku.images"
                                    v-bind:dataTitle="buku.title"
                                    v-bind:dataDesc="buku.desc"
                                />
                            </div>
                        </div>
                        <div class="tab-pane fade" id="bukuTabs04" role="tabpanel" aria-labelledby="buku-Tabs04">
                            <div class="buku-card">
                                <BukuCard 
                                    v-for="buku in bukus" :key="buku.id"
                                    v-bind:data="buku"
                                    v-bind:dataId="buku.id"
                                    v-bind:dataImage="buku.images"
                                    v-bind:dataTitle="buku.title"
                                    v-bind:dataDesc="buku.desc"
                                />
                            </div>
                        </div>
                        <div class="tab-pane fade" id="bukuTabs05" role="tabpanel" aria-labelledby="buku-Tabs05">
                            <div class="buku-card">
                                <BukuCard 
                                    v-for="buku in bukus" :key="buku.id"
                                    v-bind:data="buku"
                                    v-bind:dataId="buku.id"
                                    v-bind:dataImage="buku.images"
                                    v-bind:dataTitle="buku.title"
                                    v-bind:dataDesc="buku.desc"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 mt-4 text-center text-md-end">
                    <a href="buku" class="more-link">Buku Lainnya <i class="fas fa-chevron-right"></i></a>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    import BukuCard from './BukuCard.vue'

    export default {
        name: 'Buku',
        components: {
            BukuCard
        },
        props: [
            'dataBukus',
        ],
        data () {
            return {
                bukus: this.dataBukus
            }
        }
    }
</script>