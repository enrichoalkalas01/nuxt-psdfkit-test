<template>
    <section class="sec-artikel  pt-5">
        <div class="container">
            <div class="row d-flex justify-content-center pb-5">    
                <div class="col-12">
                    <!-- MiniMenu -->
                    <MiniMenu />

                    <div class="tab-content komp-tab-content">
                        <!-- Semua -->
                        <Semua />

                        <!-- Artikel -->
                        <Artikel />

                        <!-- Foto -->
                        <Foto />

                        <!-- Infografik -->
                        <Infografik />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import MiniMenu from './MiniMenu.vue'
    import Semua from './Semua.vue'
    import Artikel from './Artikel.vue'
    import Foto from './Foto.vue'
    import Infografik from './Infografik.vue'

    export default {
        name: 'Arsip',
        components: {
            MiniMenu,
            Semua,
            Artikel,
            Foto,
            Infografik,
        }
    }
</script>