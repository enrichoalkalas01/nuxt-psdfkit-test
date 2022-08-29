<template>
    <section class="row wrapper-cart">
        <div class="col-12">

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

            <div class="row" v-if="ResultData != null">
                <ListItemVue
                    v-for="(order, i) in ResultData" :key="i"
                    typeItem="konfirmasi"
                    :title="order.title"
                    :typeConfirmation="order.status"
                    :price="order.value"
                    :qty="order.quantity"
                    :orderId="order.id"
                    :sizeText="order.orderOptionValue1.caption"
                    :tanggal="`${ this.$store.state.Tools.ChangeDateString(order.insertDate.substring(0, 10)) } ${ order.insertDate.substring(11, 20) }`"
                    :imageSource="`https://kgcontent-bucket01-public.s3.ap-southeast-1.amazonaws.com/${ order.thumbnail }`"
                    @deleteClick="deleteItem"
                />
            </div>

        </div>
    </section>
</template>

<script>
    import Axios from 'axios'
    import ListItemVue from './ListItem.vue'
    export default {
        name: 'KonfirmasiTab',
        components: {
            ListItemVue
        },  
        data() {
            return {
                DateFrom: this.$store.state.Tools.DateNowString(),
                DateTo: this.$store.state.Tools.DateNowString(),
                Token: `Bearer ${ this.$store.state.Login.UserData.token }`,
                ResultData: null,
            }
        },

        mounted() {
            console.log(this.DateFrom, this.DateTo)
            this.getDataAll(this.DateFrom, this.DateTo)
        },

        methods: {
            dateFromChange(e) { this.DateFrom = e.target.value },
            dateToChange(e) { this.DateTo = e.target.value },
            searchData() { this.getDataAll(this.DateFrom, this.DateTo) },
            async deleteItem(e) {
                this.$store.commit('setLoadingScreen', true)
                let config = {
                    url: `https://data-api-dev.kompas.id/api/ShoppingCarts/${ e }/setDeleted`,
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

            async getDataAll(date1, date2) {
                this.$store.commit('setLoadingScreen', true)
                let config = {
                    url: `https://data-api-dev.kompas.id/api/Users/${ this.$store.state.Login.UserData.id }/ShoppingCarts?startperiod=${ date1 }&endperiod=${ date2 }`,
                    headers: { Authorization: this.Token }
                }
                try {
                    let AllData = await Axios(config)
                    // console.log(AllData)
                    this.ResultData = AllData.data.data.filter(x => x.status === 0)
                    this.$store.commit('setLoadingScreen', false)
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
            }
        }
    }
</script>

<style>

</style>