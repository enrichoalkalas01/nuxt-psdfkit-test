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
                :title="order.title"
                :typeConfirmation="order.status"
                :price="order.value"
                :qty="order.quantity"
                :orderId="order.id"
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
        components: {
            ListItemVue,
            LoadingScreen,
        },

        data() {
            return {
                DateFrom: this.$store.state.Tools.DateNowString(),
                DateTo: this.$store.state.Tools.DateNowString(),
                Token: `Bearer ${ this.$store.state.Login.UserData.token }`,
                ResultData: [],
            }
        },
        mounted() {
            this.getDataAll(this.DateFrom, this.DateTo)            
        },

        methods: {
            dateFromChange(e) { this.DateFrom = e.target.value },
            dateToChange(e) { this.DateTo = e.target.value },
            searchData() {
                this.getDataAll(this.DateFrom, this.DateTo)
            },

            async deleteItem(e) {
                let config = {
                    url: `https://dev-be.kompasdata.id/api/ShoppingCarts/${ e }/setDeleted`,
                    method: 'get', headers: { Authorization: this.Token }
                }

                let statusDelete = await Axios(config)
                if ( statusDelete ) location.reload()
                else console.log(statusDelete)
            },

            async getDataAll(date1, date2) {
                let config = {
                    url: `https://dev-be.kompasdata.id/api/Users/${ this.$store.state.Login.UserData.id }/ShoppingCarts?startperiod=${ date1 }&endperiod=${ date2 }`,
                    headers: { Authorization: this.Token }
                }
                let AllData = await Axios(config)
                if ( AllData ) this.ResultData = AllData.data.data
                else console.log(AllData)
            },

            async downloadItem(e) {
                // this.$store.commit('setLoadingScreen', true)

                let config = {
                    url: `https://dev-be.kompasdata.id/api/Downloads/photo/${ e.id }`,
                    headers: { Authorization: this.Token }, responseType: 'blob'
                }
                
                try {
                    let download = await Axios(config)
                    FileSaver.saveAs(download.data, `${ e.title }.png`)
                    this.$store.commit('setLoadingScreen', false)
                } catch (error) {
                    console.log(error)
                    alert('ups, terjadi kesalahan...')
                    // setTimeout(() => { 
                    //     this.$store.commit('setLoadingImage', 'failed');
                    //     this.$store.commit('setLoadingText', 'ups, terjadi kesalahan...');
                    //     this.$store.commit('setCloseStatus', true);
                    // }, 500)
                }
            }
        }
    }
</script>

<style>
    
</style>