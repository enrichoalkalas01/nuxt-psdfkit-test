<template>
    <section class="row wrapper-cart" id="cart-all">
        <LoadingScreen />
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
        <div>
            <ListItemVue
                v-for="(order, i) in ResultData" :key="i"
                typeItem="konfirmasi"
                :typeList="'semua'"
                :title="order.title"
                :typeConfirmation="order.status"
                :price="order.value"
                :qty="order.quantity"
                :orderId="order.id"
                :sizeText="order.orderOptionValue1.caption"
                :tanggal="`${ this.$store.state.Tools.ChangeDateString(order.insertDate.substring(0, 10)) } ${ order.insertDate.substring(11, 20) }`"
                :imageSource="`https://kgcontent-bucket01-public.s3.ap-southeast-1.amazonaws.com/${ order.thumbnail }`"
                @deleteClick="deleteItem"
                @downloadClick="downloadItem"
            />

            <!-- <ListItemVue
                typeItem="konfirmasi"
                title="Peringatan 40 Hari Musibah KRI Nanggala-402"
                price="10"
                tanggal="17 Agustus 1945"
                description="test dong.."
                typeConfirmation="0"
            /> -->
        </div>
    </section>
</template>

<script>
    import LoadingScreen from '../../addons/LoadingScreen.vue'
    import ListItemVue from './ListItem.vue'
    import FileSaver from 'file-saver'
    import Axios from 'axios'
    export default {
        name: 'AllTab',
        components: { ListItemVue, LoadingScreen, },
        data() {
            return {
                DateFrom: this.$store.state.Tools.DateNowString(),
                DateTo: this.$store.state.Tools.DateTomorrowString(),
                Token: `Bearer ${ this.$store.state.Login.UserData.token }`,
                ResultData: [],
            }
        },
        
        mounted() {
            console.log(this.$store.state.Tools.DateTomorrowString())
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
                    this.$store.commit('setLoadingText', `<p>${ error.response.data }</p>`)
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
                    url: `${ this.$store.state.Headers.BaseUrlApi }/api/Users/${ this.$store.state.Login.UserData.id }/ShoppingCarts?startperiod=${ date1 }&endperiod=${ date2 }`,
                    headers: { Authorization: this.Token }
                }
                try {
                    let AllData = await Axios(config)
                    this.ResultData = AllData.data.data
                    setTimeout(() => { this.$store.commit('setLoadingScreen', false) }, 500)
                } catch (error) {
                    console.log(error)
                    this.$store.commit('setLoadingScreen', false)
                }
            },

            async downloadItem(e) {
                this.$store.commit('setLoadingScreen', true)
                let config = {
                    url: `${ this.$store.state.Headers.BaseUrlApi }/api/Downloads/photo/${ e.id }`,
                    headers: { Authorization: this.Token }, responseType: 'blob'
                }

                let configMessage = {
                    url: `${ this.$store.state.Headers.BaseUrlApi }/api/Downloads/photo/${ e.id }`,
                    headers: { Authorization: this.Token }
                }
                
                try {
                    let download = await Axios(config)
                    FileSaver.saveAs(download.data, `${ e.title }.png`)
                    this.$store.commit('setLoadingScreen', false)
                } catch (error) {
                    console.log(error)
                    Axios(configMessage).catch(err => {
                        this.$store.commit('setLoadingImage', 'failed')
                        this.$store.commit('setLoadingText', `<p>${ err.response.data.message }</p>`)
                        this.$store.commit('setCloseStatus', true)
                        setTimeout(() => {
                            this.$store.commit('setLoadingText', 'loading...')
                            this.$store.commit('setLoadingImage', 'loading')
                            this.$store.commit('setLoadingScreen', false)
                        }, 2500)
                    })
                }
            }
        }
    }
</script>

<style>
    
</style>