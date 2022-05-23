<template>
    <section class="row wrapper-cart">
        <ListItemVue
            typeItem="konfirmasi"
            title="Peringatan 40 Hari Musibah KRI Nanggala-402"
            typeConfirmation="1"
            price="10"
            tanggal="17 Agustus 1945"
            description="test dong.."
        />

        <ListItemVue
            typeItem="bayar"
            title="Peringatan 40 Hari Musibah KRI Nanggala-402"
            typeConfirmation="2"
            price="10"
            tanggal="17 Agustus 1945"
            description="test dong.."
        />

        <ListItemVue
            typeItem="konfirmasi"
            title="Peringatan 40 Hari Musibah KRI Nanggala-402"
            typeConfirmation="2"
            price="10"
            tanggal="17 Agustus 1945"
            description="test dong.."
        />

        <ListItemVue
            typeItem="konfirmasi"
            title="Peringatan 40 Hari Musibah KRI Nanggala-402"
            price="10"
            tanggal="17 Agustus 1945"
            description="test dong.."
            typeConfirmation="0"
        />
    </section>
</template>

<script>
    import ListItemVue from './ListItem.vue'
    export default {
        name: 'AllTab',
        components: {
            ListItemVue
        }
    }
</script>

<style>

</style>