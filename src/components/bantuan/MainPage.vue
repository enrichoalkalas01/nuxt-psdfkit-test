<template>
    <section>
        <!-- Tentang -->
        <Tentang />

        <!-- Langganan -->
        <Langganan />

        <!-- Harga -->
        <Harga />
    </section>
</template>

<script>
import Tentang from './Tentang.vue'
import Langganan from './Langganan.vue'
import Harga from './Harga.vue'

export default {
    name: 'MainPage',
    components: {
        Tentang,
        Langganan,
        Harga,
    }
}
</script>