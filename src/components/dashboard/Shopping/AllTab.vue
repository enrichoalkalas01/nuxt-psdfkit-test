<template>
    <section class="row wrapper-cart" id="cart-all">
        <div class="col-12 top-box">
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
                :title="order.product.name"
                :typeConfirmation="order.status"
                :price="order.value"
                :qty="order.quantity"
                :tanggal="`${ this.$store.state.Tools.ChangeDateString(order.insertDate.substring(0, 10)) } ${ order.insertDate.substring(11, 20) }`"
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
    import ListItemVue from './ListItem.vue'
    import Axios from 'axios'
    export default {
        name: 'AllTab',
        components: {
            ListItemVue
        },

        data() {
            return {
                DateFrom: new Date(),
                DateTo: new Date(),
                Token: `Bearer ${ this.$store.state.Login.UserData.token }`,
                ResultData: [],
            }
        },

        beforeMount() {
            let dateNow = [
                `${ new Date().getFullYear() }`,
                `${ (new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1) }`,
                `${ new Date().getDate() < 10 ?  '0' + new Date().getDate() : new Date().getDate() }`
            ].join("-")
            this.DateFrom = dateNow
            this.DateTo = dateNow
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
            async getDataAll(date1, date2) {
                let config = {
                    url: `https://dev-be.kompasdata.id/api/ShoppingCarts?startperiode=${ date1 }&endperiode=${ date2 }`,
                    headers: { Authorization: this.Token }
                }
                let AllData = await Axios(config)
                console.log(AllData)
                if ( AllData ) this.ResultData = AllData.data
                else console.log(AllData)
            }
        }
    }
</script>

<style>
    #cart-all .top-box {
        margin-bottom: 20px;
    }

    #cart-all .box-button {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        padding-bottom: 2.5px;
    }

    #cart-all .box-button button {
        /* width: 100%; */
    }
</style>