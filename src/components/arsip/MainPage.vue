<template>
    <section class="sec-artikel  pt-5">
        <div class="container">
            <div class="row d-flex justify-content-center pb-5">    
                <div class="col-12">
                    <ul class="nav nav-tabs komp-tabs" id="myTabAll" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="All-Tabs01" data-bs-toggle="tab" href="#AllTabs01" aria-controls="AllTabs01" aria-selected="true"><i class="fas fa-search"></i> Semua</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="All-Tabs02" data-bs-toggle="tab" href="#AllTabs02" aria-controls="AllTabs02" aria-selected="false">Artikel</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="All-Tabs03" data-bs-toggle="tab" href="#AllTabs03" aria-controls="AllTabs03" aria-selected="false">Foto</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="All-Tabs04" data-bs-toggle="tab" href="#AllTabs04" aria-controls="AllTabs04" aria-selected="false">Infografik</a>
                        </li>

                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="All-Tabs05" data-bs-toggle="tab" href="#AllTabs05" aria-controls="AllTabs05" aria-selected="false">Pencarian Lanjut</a>
                        </li>

                    </ul>
                    <div class="tab-content komp-tab-content">
                        <!-- Semua -->
                        <Semua />

                        <!-- Artikel -->
                        <Artikel />
                        
                        <!-- Foto -->
                        <Foto />

                        <!-- Infografik -->
                        <Infografik />

                        <!-- Pencarian -->
                        <Pencarian />

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Semua from './Semua.vue'
import Artikel from './Artikel.vue'
import Foto from './Foto.vue'
import Infografik from './Infografik.vue'
import Pencarian from './Pencarian.vue'

export default {
    name: 'Arsip',
    components: {
        Semua,
        Artikel,
        Foto,
        Infografik,
        Pencarian,
    }
}
</script>