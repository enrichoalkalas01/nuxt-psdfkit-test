<template>
    <section class="row wrapper-cart">
        <div class="col-12 col-sm-12 card list-item" v-for="(item, i) in ListItem" :key="i">
            <div class="images-wrapper">
                <div class="images"></div>
            </div>
            <div class="item-wrapper">
                <div class="wc-item">
                    <h4 class="title">Name File Here..</h4>
                    <p class="desc">bla bla bla bla</p>
                    <p class="date">Date : 17 Agustus 1945</p>
                </div>
                <div class="wc-price">
                    <span>Rp. 10.000.000</span>
                </div>
                <div class="wc-confirmation">
                    <span class="waiting">Menunggu Dikonfirmasi</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'KonfirmasiTab',
        data() {
            return {
                ListItem: [0,0,0,0,0,0]
            }
        },
    }
</script>

<style>

</style>