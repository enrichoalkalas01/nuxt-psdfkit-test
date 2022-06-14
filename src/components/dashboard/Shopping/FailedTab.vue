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
                    :tanggal="`${ this.$store.state.Tools.ChangeDateString(order.insertDate.substring(0, 10)) } ${ order.insertDate.substring(11, 20) }`"
                    :imageSource="`https://kgcontent-bucket01-public.s3.ap-southeast-1.amazonaws.com/${ order.thumbnail }`"
                />
            </div>

        </div>
    </section>
</template>

<script>
    import Axios from 'axios'
    import ListItemVue from './ListItem.vue'
    export default {
        name: 'FailedTab',
        components: {
            ListItemVue
        },
        data() {
            return {
                DateFrom: this.$store.state.Tools.DateNowString(),
                DateTo: this.$store.state.Tools.DateNowString(),
                Token: `Bearer ${ this.$store.state.Login.UserData.token }`,
                ResultData: [],
            }
        },

        async mounted() {
            this.getDataAll(this.DateFrom, this.DateTo)
        },

        methods: {
            dateFromChange(e) { this.DateFrom = e.target.value },
            dateToChange(e) { this.DateTo = e.target.value },
            searchData() {
                this.getDataAll(this.DateFrom, this.DateTo)
            },
            async getDataAll(date1, date2) {
                let config = {
                    url: `https://dev-be.kompasdata.id/api/Users/${ this.$store.state.Login.UserData.id }/ShoppingCarts?startperiod=${ date1 }&endperiod=${ date2 }`,
                    headers: { Authorization: this.Token }
                }
                let AllData = await Axios(config)
                if ( AllData ) this.ResultData = AllData.data.data.filter(x => x.status === 2)
                else console.log(AllData)
            }
        }
    }
</script>

<style>

</style>