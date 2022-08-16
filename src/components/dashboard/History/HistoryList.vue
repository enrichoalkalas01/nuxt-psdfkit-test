<template>
    <section class="row wrapper-cart">
        <LoadingScreen />
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
                <ListHistory
                    v-for="(history, i) in ResultData" :key="i"
                    :title="getSliceData(history.detail,'<title>','</title>',7)"
                    :publication="getSliceData(history.detail,'<publication>','</publication>',13)"
                    :publicationDate="getSliceData(history.detail,'<date>','</date>',6)"
                    :price="history.value"
                    :type="history.product.name"
                    :tanggal="history.insertDate"
                />
            </div>
        </div>
    </section>
</template>

<script>
    import LoadingScreen from '../../addons/LoadingScreen.vue'
    import ListHistory from './ListHistory.vue'
    import Axios from 'axios'
    export default {
        name: 'History',
        components: { ListHistory, LoadingScreen },
        data() {
            return {
                DateFrom: this.$store.state.Tools.DateYesterday(),
                DateTo: this.$store.state.Tools.DateTomorrowString(),
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
            searchData() { this.getDataAll(this.DateFrom, this.DateTo) },
            async getDataAll(date1, date2) {
                this.$store.commit('setLoadingScreen', true)
                let config = {
                    url: `https://data-api-dev.kompas.id/api/Users/${ this.$store.state.Login.UserData.id }/Orders?productid=0&startperiode=${ date1 }&endperiode=${ date2 }&sort=false`,
                    headers: { Authorization: this.Token }
                }

                try {
                    let AllData = await Axios(config)
                    this.ResultData = AllData.data
                    this.$store.commit('setLoadingScreen', false)
                } catch (error) {
                    console.log(error)
                    this.$store.commit('setLoadingImage', 'failed');
                    this.$store.commit('setLoadingText', 'ups, terjadi kesalahan...');
                    this.$store.commit('setCloseStatus', true);
                    setTimeout(() => { 
                        this.$store.commit('setLoadingImage', 'loading');
                        this.$store.commit('setLoadingText', 'Loading...');
                        this.$store.commit('setCloseStatus', false);
                        this.$store.commit('setLoadingScreen', false)
                    }, 500)
                }
            },
            getSliceData(data, firstElement, lastElement, elementLength) {
                const value = data.slice(
                    data.indexOf(firstElement) + elementLength,
                    data.lastIndexOf(lastElement),
                )

                return value
            }
        }
    }
</script>

<style>

</style>