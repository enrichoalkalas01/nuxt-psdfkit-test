<template>
    <section class="row wrapper-cart">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 order-cart card mb-3">
            <div class="row wrapper-order p-2">
                <div class="col-12 title">
                    <h4>Order Summary</h4>
                </div>
                <div class="col-12 item">
                    <span>Total Item Dipilih : {{ Selected.length }}</span>
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
                            <h4 class="title">{{ order.product.name }}</h4>
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
    import Axios from 'axios'
    export default {
        name: 'PembayaranTab',
        data() {
            return {
                Selected: [],
                DateFrom: this.$store.state.Tools.DateNowString(),
                DateTo: this.$store.state.Tools.DateNowString(),
                Token: `Bearer ${ this.$store.state.Login.UserData.token }`,
                ResultData: [],
                totalPrice: 0,
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
                let dataId = e.target.getAttribute("id"), dataStatus = e.target.getAttribute("dataChecked"),
                orderId = e.target.getAttribute("orderId"), orderPrice = e.target.getAttribute("orderPrice")

                if ( dataStatus !== 'false' ) {
                    document.querySelector(`#${ dataId }`).setAttribute("dataChecked", "false")
                    this.totalPrice = this.totalPrice - this.Selected.filter(x => x.idElement === dataId )[0].price
                    this.Selected.pop(this.Selected.filter(x => x.idElement === dataId )[0])
                } else {
                    document.querySelector(`#${ dataId }`).setAttribute("dataChecked", "true")
                    this.totalPrice = this.totalPrice + Number(orderPrice)
                    this.Selected.push({ idElement: dataId, price: Number(orderPrice), orderId: Number(orderId) })
                }
            },

            async getDataAll(date1, date2) {
                console.log(date1, date2)
                let config = {
                    url: `https://dev-be.kompasdata.id/api/Users/${ this.$store.state.Login.UserData.id }/ShoppingCarts?startperiod=${ date1 }&endperiod=${ '2020-08-28' }`,
                    headers: { Authorization: this.Token }
                }
                let AllData = await Axios(config)
                if ( AllData ) {
                    this.ResultData = AllData.data.data.filter(x => x.status === 1)
                    // this.Selected = AllData.data.data.filter(x => x.status === 1)
                } else {
                    console.log(AllData)
                }
            },

            async paymentSaldo() {
                let readyData = []
                this.Selected.map((data, i) => readyData[i] = data.orderId)
                let configPaySaldo = {
                    url: `https://dev-be.kompasdata.id/api/ShoppingCarts/pay`,
                    method: 'POST', headers: { Authorization: this.Token }, data: readyData
                }
                
                if ( this.Selected.length === 0 ) alert('Pilihlah terlebih dahulu produk nya...')
                else {
                    try {
                        let payed = await Axios(configPaySaldo)
                        if ( payed.data.message !== 'sukses') alert(payed.data.message)
                        else {
                            alert(payed.data.message)
                            this.getDataAll()
                            this.$store.commit('setReloadSaldo', true)
                        }
                    } catch (error) {
                        alert('ups, terjadi kesalahan..')
                        console.log(error)
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