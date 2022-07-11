<template>
    <section class="row wrapper-cart">
        <LoadingScreen />

        <div class="col-12 col-sm-12 col-md-12 col-lg-12 order-cart card mb-3">
            <div class="row wrapper-order p-2">
                <div class="col-12 title">
                    <h4>Order Summary</h4>
                </div>
                <div class="col-12 item">
                    <span>Total Item Dipilih : {{ totalSelected }}</span>
                </div>
                <div class="col-12 cost">
                    <span>Total Harga : Rp. {{ this.$store.state.Tools.PriceFormat(totalPrice, 2, ',', '.') }}</span>
                </div>
                <div class="col-12 buy">
                    <button class="btn-primary mr-2" v-on:click="paymentSaldo">Bayar Dengan Saldo</button>
                    <button class="btn-primary" v-on:click="paymentOther">Bayar Dengan Metode Lain</button>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="row" v-if="ResultData != null">
                <div class="col-12 col-sm-12 card list-item" v-for="(order, i) in ResultData" :key="i">
                    <div class="select-wrapper">
                        <input
                            v-on:change="checkedData"
                            dataChecked="false"
                            class="form-check-input"
                            :id="`flexRadioDefault${ i }`"
                            :orderId="order.id"
                            :orderPrice="order.value"
                            type="checkbox"
                            :name="`flexRadioDefault${ i }`"
                        >
                    </div>
                    <div class="images-wrapper">
                        <div class="images" :style="`background-image: url('https://kgcontent-bucket01-public.s3.ap-southeast-1.amazonaws.com/${ order.thumbnail }')`"></div>
                    </div>
                    <div class="item-wrapper">
                        <div class="wc-item">
                            <h4 class="title">{{ order.title }}</h4>
                            <!-- <p class="desc">bla bla bla bla</p> -->
                            <p class="date">Date : {{ `${ this.$store.state.Tools.ChangeDateString(order.insertDate.substring(0, 10)) } ${ order.insertDate.substring(11, 20) }` }}</p>
                            <p class="delete" v-if="order.status === 1" v-on:click="deleteItem(order.id)">Hapus</p>
                        </div>
                        <div class="wc-qty-done">
                            <span>{{ order.quantity }} Qty</span>
                        </div>
                        <div class="wc-price">
                            <span>{{ 'Rp.' + this.$store.state.Tools.PriceFormat(order.value, 2, ',', '.') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import LoadingScreen from '../../addons/LoadingScreen.vue'
    import Axios from 'axios'
    export default {
        name: 'PembayaranTab',
        components: { LoadingScreen },
        data() {
            return {
                Selected: [],
                DateFrom: this.$store.state.Tools.DateNowString(),
                DateTo: this.$store.state.Tools.DateNowString(),
                Token: `Bearer ${ this.$store.state.Login.UserData.token }`,
                ResultData: [],
                totalPrice: 0,
                totalSelected: 0,
            }
        },
        
        mounted() {
            this.getDataAll(this.DateFrom, this.DateTo)
        },

        methods: {
            dateFromChange(e) { this.DateFrom = e.target.value },
            dateToChange(e) { this.DateTo = e.target.value },
            searchData() { this.getDataAll(this.DateFrom, this.DateTo) },
            async deleteItem(e) {
                let config = {
                    url: `https://dev-be.kompasdata.id/api/ShoppingCarts/${ e }/setDeleted`,
                    method: 'get', headers: { Authorization: this.Token }
                }

                let statusDelete = await Axios(config)
                if ( statusDelete ) location.reload()
                else console.log(statusDelete)
            },

            checkedData(e) {
                let orderPrice = e.target.getAttribute("orderPrice"), dataChecked = e.target.getAttribute("datachecked"), orderId = e.target.getAttribute("orderId")
                console.log(orderPrice, dataChecked, orderId)

                if ( dataChecked === 'false' ) {
                    this.Selected.push(orderId)
                    this.totalSelected += 1; this.totalPrice += Number(e.target.getAttribute("orderPrice"))
                    e.target.setAttribute('datachecked', 'true')
                } else {
                    this.Selected.pop(orderId)
                    this.totalSelected -= 1; this.totalPrice -= Number(e.target.getAttribute("orderPrice"))
                    e.target.setAttribute('datachecked', 'false')
                }
            },

            async getDataAll(date1, date2) {
                console.log(date1, date2)
                let config = {
                    url: `https://dev-be.kompasdata.id/api/Users/${ this.$store.state.Login.UserData.id }/ShoppingCarts?startperiode=${ '2020-06-01' }&endperiode=${ '2020-08-28' }`,
                    headers: { Authorization: this.Token }
                }
                let AllData = await Axios(config)
                if ( AllData ) {
                    this.ResultData = AllData.data.data.filter(x => x.status === 1)
                    console.log(this.ResultData)
                } else {
                    console.log(AllData)
                }
            },

            async paymentSaldo() {
                let configPaySaldo = {
                    url: `https://dev-be.kompasdata.id/api/ShoppingCarts/pay`,
                    method: 'POST', headers: { Authorization: this.Token }, data: this.Selected
                }
                
                if ( this.Selected.length === 0 ) {
                    alert('Pilihlah terlebih dahulu produk nya...')
                    // setTimeout(() => { 
                    //     this.$store.commit('setLoadingImage', 'failed');
                    //     this.$store.commit('setLoadingText', 'Pilihlah terlebih dahulu produk nya...');
                    //     this.$store.commit('setCloseStatus', true);
                    // }, 500)
                } else {
                    try {
                        let payed = await Axios(configPaySaldo)
                        if ( payed.data.message !== 'sukses') {
                            alert(payed.data.message)
                            // setTimeout(() => { 
                            //     this.$store.commit('setLoadingImage', 'success');
                            //     this.$store.commit('setLoadingText', payed.data.message);
                            //     this.$store.commit('setCloseStatus', true);
                            // }, 500)
                        } else {
                            alert(payed.data.message)
                            // setTimeout(() => { 
                            //     this.$store.commit('setLoadingImage', 'success');
                            //     this.$store.commit('setLoadingText', payed.data.message);
                            //     this.$store.commit('setCloseStatus', true);
                            // }, 500)
                            this.getDataAll()
                            this.$store.commit('setReloadSaldo', true)
                        }
                    } catch (error) {
                        alert('ups, terjadi kesalahan..')
                        console.log(error)
                        // setTimeout(() => { 
                        //     this.$store.commit('setLoadingImage', 'success');
                        //     this.$store.commit('setLoadingText', 'ups, terjadi kesalahan..');
                        //     this.$store.commit('setCloseStatus', true);
                        // }, 500)
                    }
                }
            },

            async paymentOther() {
                let readyData = []
                this.Selected.map((data, i) => readyData[i] = data.orderId)
                let configPaySaldo = {
                    url: `https://dev-be.kompasdata.id/api/ShoppingCarts/checkout`,
                    method: 'POST', headers: { Authorization: this.Token }, data: readyData
                }

                if ( this.Selected.length === 0 ) alert('Pilihlah terlebih dahulu produk nya...')
                else {
                    try {
                        let payed = await Axios(configPaySaldo)
                        window.open(payed.data.data.url)
                    } catch (error) {
                        alert('ups, terjadi kesalahan..')
                        console.log(error)
                    }
                }
            },
        }
    }
</script>

<style>

</style>