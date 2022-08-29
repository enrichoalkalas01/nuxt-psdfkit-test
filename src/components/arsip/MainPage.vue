<template>
    <section class="sec-artikel pt-5">
        <div class="container">
            <div class="row d-flex justify-content-center pb-5">    
                <div class="col-12">
                    <!-- MiniMenu -->
                    <MiniMenu />

                    <div class="tab-content komp-tab-content">
                        <!-- Semua -->
                        <div class="tab-pane fade show active" id="AllTabs01" role="tabpanel" aria-labelledby="All-Tabs01">
                            <Semua />
                        </div>

                        <!-- Artikel -->
                        <div class="tab-pane fade" id="AllTabs02" role="tabpanel" aria-labelledby="All-Tabs02">
                            <Artikel />
                        </div>

                        <!-- Foto -->
                        <div class="tab-pane fade" id="AllTabs03" role="tabpanel" aria-labelledby="All-Tabs03">
                            <Foto />
                        </div>

                        <!-- Infografik -->
                        <div class="tab-pane fade" id="AllTabs04" role="tabpanel" aria-labelledby="All-Tabs04">
                            <Infografik />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import MiniMenu from './MiniMenu.vue'
    import Semua from '../pencarian/Semua.vue'
    import Artikel from './MainArtikel.vue'
    import Foto from './MainGallery.vue'

    export default {
        name: 'Arsip',
        components: {
            MiniMenu,
            Semua,
            Artikel,
            Foto,
        },

        data() {
            return {
                
            }
        }
    }
</script>