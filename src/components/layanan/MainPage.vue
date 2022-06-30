<template>
    <section class="sec-artikel my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="title line-bot full">Jasa & Layanan</h2>
                </div>

                <!-- Riset -->
                <Riset />

                <!-- Informasi -->
                <Informasi />

                <!-- Penerbit -->
                <Penerbit />
            </div>
        </div>
    </section>
</template>

<script>
import Riset from './Riset.vue'
import Informasi from './Informasi.vue'
import Penerbit from './Penerbit.vue'

export default {
    name: 'MainPage',
    components: {
        Riset,
        Informasi,
        Penerbit,
    }
}
</script>