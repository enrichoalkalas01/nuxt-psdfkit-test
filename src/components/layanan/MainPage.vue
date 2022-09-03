<template>
    <section class="sec-artikel my-5">
        <div class="container pt-4">
            <div class="row">
                <div class="col-12">
                    <h2 class="title line-bot full">Jasa & Layanan</h2>
                </div>

                <!-- Riset -->
                <Riset />

                <!-- Informasi -->
                <Konten />

                <!-- Penerbit -->
                <Penerbit />
            </div>
        </div>
    </section>
</template>

<script>
import Riset from './Riset.vue'
import Konten from './Konten.vue'
import Penerbit from './Penerbit.vue'

export default {
    name: 'MainPage',
    components: {
        Riset,
        Konten,
        Penerbit,
    }
}
</script>