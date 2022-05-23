<template>
    <section id="shopping-cart" class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 order-cart card mb-3">
            <div class="row wrapper-order p-2">
                <div class="col-12 title">
                    <h4>Order Summary</h4>
                </div>
                <div class="col-12 item">
                    <span>Total Item Dipilih : {{ ListItem.length }}</span>
                </div>
                <div class="col-12 cost">
                    <span>Total Harga : Rp. 1.000.000</span>
                </div>
                <div class="col-12 buy">
                    <button class="btn-primary">Bayar Sekarang</button>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 list-cart card">
            <div class="row wrapper-cart">
                <div class="col-12 col-sm-12 card list-item" v-for="(item, i) in ListItem" :key="i">
                    <div class="select-wrapper">
                        <input class="form-check-input" type="checkbox" :name="`flexRadioDefault${ i }`">
                    </div>
                    <div class="images-wrapper">
                        <div class="images"></div>
                    </div>
                    <div class="item-wrapper">
                        <div class="wc-item">
                            <h4 class="title">Name File Here..</h4>
                            <p class="desc">bla bla bla bla</p>
                            <p class="date">Date : 17 Agustus 1945</p>
                        </div>
                        <div class="wc-qty">
                            <i class="fa-solid fa-chevron-left"></i>
                            <input type="number" class="form-control" id="" min="0">
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div class="wc-price">
                            <span>Rp. 10.000.000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ShoppingCart',
        data() {
            return {
                ListItem: [0,0,0,0,0,0]
            }
        }
    }
</script>

<style>

</style>