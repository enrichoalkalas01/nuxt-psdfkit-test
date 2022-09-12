<template>
    <section class="row wrapper-cart">
        <!-- <LoadingScreen /> -->
        <div class="col-12 top-box" id="cart-option">
            <div class="row">
                <div class="col box-tanggal">
                    <label for="date-start">Tanggal Mulai :</label>
                    <input v-on:change="dateFromChange" :value="DateFrom" name="date-start" class="form-control" type="date">
                </div>
                <div class="col box-tanggal">
                    <label for="date-start">Tanggal Selesai :</label>
                    <input v-on:change="dateToChange" :value="DateTo" name="date-start" class="form-control" type="date">
                </div>
                <div class="col box-button">
                    <button v-on:click="searchData" class="form-control btn-primary">Search</button>
                </div>
            </div>
        </div>
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
                            <p class="date">Size: {{ order.orderOptionValue1.caption }}</p>
                            <p class="date">Date: {{ `${ this.$store.state.Tools.ChangeDateString(order.insertDate.substring(0, 10)) } ${ order.insertDate.substring(11, 20) }` }}</p>
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
    // import LoadingScreen from '../../addons/LoadingScreen.vue'
    import Axios from 'axios'
    export default {
        name: 'PembayaranTab',
        // components: { LoadingScreen },
        data() {
            return {
                Selected: [],
                DateFrom: this.$store.state.Tools.DateNowString(),
                DateTo: this.$store.state.Tools.DateTomorrowString(),
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
                this.$store.commit('setLoadingScreen', true)
                let config = {
                    url: `${ this.$store.state.Headers.BaseUrlApi }/api/ShoppingCarts/${ e }/setDeleted`,
                    method: 'get', headers: { Authorization: this.Token }
                }
                
                try {
                    await Axios(config)
                    this.$store.commit('setLoadingImage', 'success')
                    this.$store.commit('setLoadingText', '<p>Sukses menghapus data</p>')
                    this.$store.commit('setCloseStatus', true)
                    setTimeout(() => {
                        this.$store.commit('setLoadingText', 'loading...')
                        this.$store.commit('setLoadingImage', 'loading')
                        this.$store.commit('setLoadingScreen', false)
                        this.getDataAll(this.DateFrom, this.DateTo)
                    }, 1000)
                } catch (error) {
                    console.log(error)
                    this.$store.commit('setLoadingImage', 'failed')
                    this.$store.commit('setLoadingText', `<p>${ error.response.data.message }</p>`)
                    this.$store.commit('setCloseStatus', true)
                    setTimeout(() => {
                        this.$store.commit('setLoadingText', 'loading...')
                        this.$store.commit('setLoadingImage', 'loading')
                        this.$store.commit('setLoadingScreen', false)
                    }, 1000)
                }
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
                    url: `${ this.$store.state.Headers.BaseUrlApi }/api/Users/${ this.$store.state.Login.UserData.id }/ShoppingCarts?startperiode=${ date1 }&endperiode=${ date2 }`,
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
                    url: `${ this.$store.state.Headers.BaseUrlApi }/api/ShoppingCarts/pay`,
                    method: 'POST', headers: { Authorization: this.Token }, data: this.Selected
                }
                
                if ( this.Selected.length === 0 ) {
                    // alert('Mohon pilih produk terlebih dahulu...')
                    this.setFailedLoadingScreen()
                } else {
                    try {
                        let payed = await Axios(configPaySaldo)
                        if ( payed.data.message !== 'sukses') {
                            setTimeout(() => { 
                                this.$store.commit('setLoadingScreen', true)
                                this.$store.commit('setLoadingImage', 'success');
                                this.$store.commit('setLoadingText', payed.data.message);
                                this.$store.commit('setCloseStatus', true);

                                setTimeout(() => window.location.href = '/dashboard/daftar-pesanan', 1500)
                            }, 500)
                        } else {
                            setTimeout(() => { 
                                this.$store.commit('setLoadingScreen', true)
                                this.$store.commit('setLoadingImage', 'success');
                                this.$store.commit('setLoadingText', payed.data.message);
                                this.$store.commit('setCloseStatus', true);
                                this.$store.commit('setReloadSaldo', true)
                                this.getDataAll()
                                setTimeout(() => window.location.href = '/dashboard/daftar-pesanan', 1500)
                            }, 500)
                        }
                    } catch (error) {
                        // alert('ups, terjadi kesalahan..')
                        console.log(error)
                        setTimeout(() => { 
                            this.$store.commit('setLoadingScreen', true)
                            this.$store.commit('setLoadingImage', 'failed');
                            this.$store.commit('setLoadingText', `<p>${ error.response.data.message }</p>`);
                            this.$store.commit('setCloseStatus', true);
                            setTimeout(() => this.setDefaultLoadingScreen(), 2000)
                        }, 500)
                    }
                }
            },

            async paymentOther() {
                let configPaySaldo = {
                    url: `${ this.$store.state.Headers.BaseUrlApi }/api/ShoppingCarts/checkout`,
                    method: 'POST', headers: { Authorization: this.Token }, data: this.Selected
                }

                if ( this.Selected.length === 0 ) this.setFailedLoadingScreen() // alert('Pilihlah terlebih dahulu produk nya...')
                else {
                    try {
                        let payed = await Axios(configPaySaldo)
                        window.open(payed.data.data.url)
                        window.location.href = '/'
                    } catch (error) {
                        console.log(error)
                        setTimeout(() => { 
                            this.$store.commit('setLoadingScreen', true)
                            this.$store.commit('setLoadingImage', 'failed');
                            this.$store.commit('setLoadingText', `<p>${ error.response.data.message }</p>`);
                            this.$store.commit('setCloseStatus', true);
                            setTimeout(() => this.setDefaultLoadingScreen(), 2000)
                        }, 500)
                    }
                }
            },

            async setFailedLoadingScreen() {
                setTimeout(() => { 
                    this.$store.commit('setLoadingScreen', true)
                    this.$store.commit('setLoadingImage', 'failed');
                    this.$store.commit('setLoadingText', 'Mohon pilih produk terlebih dahulu...');
                    this.$store.commit('setCloseStatus', true);

                    setTimeout(() => {
                        this.setDefaultLoadingScreen()
                    }, 2500)
                }, 500)
            },

            async setDefaultLoadingScreen() {
                this.$store.commit('setLoadingScreen', false)
                this.$store.commit('setLoadingImage', 'loading');
                this.$store.commit('setLoadingText', 'loading...');
                this.$store.commit('setCloseStatus', false);
            }
        }
    }
</script>

<style>

</style>