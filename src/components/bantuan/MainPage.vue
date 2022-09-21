<template>
    <section class="sec-artikel my-3">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="title line-bot full">Pusat Bantuan</h2>
                </div>
                <div class="col-12">
                    <!-- Tentang -->
                    <Tentang />

                    <!-- Langganan -->
                    <Langganan />
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import Tentang from './Tentang.vue'
import Langganan from './Langganan.vue'

export default {
    name: 'MainPage',
    components: {
        Tentang,
        Langganan,
    }
}
</script>