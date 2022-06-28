<template>
    <section id="dashboard-account">
        <div class="container-fluid card">
            <div class="row form-profile">
                <div class="col-12 images-wrapper card">
                    <div class="image-box">
                        <div class="images-circle"></div>
                    </div>
                    <div class="text-box">
                        <h2>{{ dataUser.firstName ? dataUser.firstName : '' }} {{ dataUser.lastName ? dataUser.lastName : '' }}</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    
                </div>
            </div>
            <div class="row form-akun">
                <div class="col-12">
                    <h5>Manajemen Akun</h5>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Username</span>
                        </div>
                        <div class="col-8">
                            <span>{{ dataUser.username ? dataUser.username : '' }}</span>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Jenis Pelanggan</span>
                        </div>
                        <div class="col-8">
                            <span>{{ dataUser.memberTypeName ? dataUser.memberTypeName.title : '' }}</span>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Kata Sandi</span>
                        </div>
                        <div class="col-8">
                            <a href="#">Ubah Kata Sandi</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row form-informasi">
                <div class="col-12 mb-3">
                    <h5>Informasi Pengguna</h5>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Nama Depan</span>
                        </div>
                        <div class="col-8">
                            <input id="firstName" class="form-control" type="text" :value="dataUser.firstName">
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Nama Belakang</span>
                        </div>
                        <div class="col-8">
                            <input id="lastName" class="form-control" type="text" :value="dataUser.lastName">
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Jenis Kelamin</span>
                        </div>
                        <div class="col-8">
                            <select name="gender" id="gender" class="form-control" v-model="dataUser.gender">
                                <option v-for="gender in genders" :value="gender.value" :key="gender">
                                    {{ gender.text ? gender.text : '' }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Pekerjaan</span>
                        </div>
                        <div class="col-8">
                            <select name="job" id="job" class="form-control" v-model="userJobId">
                                <option v-for="job in dataJobs" :value="job.id" :key="job">
                                    {{ job.title ? job.title : '' }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Telepon</span>
                        </div>
                        <div class="col-8">
                            <input id="phoneNumber" class="form-control" type="number" :value="dataUser.phoneNumber">
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Alamat</span>
                        </div>
                        <div class="col-8">
                            <textarea id="address" name="address" class="form-control" cols="30" rows="10" :value="dataUser.address"></textarea>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Negara</span>
                        </div>
                        <div class="col-8">
                            <select name="country" id="country" class="form-control" v-model="userCountryId" @change="getProvinces(userCountryId); getCities(0); getVillages(0);">
                                <option v-for="country in dataCountries" :value="country.id" :key="country">
                                    {{ country.name ? country.name : '' }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Provinsi</span>
                        </div>
                        <div class="col-8">
                            <select name="province" id="province" class="form-control" v-model="userProvinceId" @change="getCities(userProvinceId); getVillages(0);">
                                <option v-for="province in dataProvinces" :value="province.id" :key="province">
                                    {{ province.name ? province.name : '' }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Kabupaten/Kota</span>
                        </div>
                        <div class="col-8">
                            <select name="city" id="city" class="form-control" v-model="userCityId" @change="getVillages(userCityId)">
                                <option v-for="city in dataCities" :value="city.id" :key="city">
                                    {{ city.name ? city.name : '' }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Kecamatan</span>
                        </div>
                        <div class="col-8">
                            <select name="village" id="village" class="form-control" v-model="userVillageId">
                                <option v-for="village in dataVillages" :value="village.id" :key="village">
                                    {{ village.name ? village.name : '' }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Kode Pos</span>
                        </div>
                        <div class="col-8">
                            <input id="postCode" class="form-control" type="text" :value="dataUser.postCode">
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <button v-on:click="updateData()" class="form-control btn-primary">Simpan</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Axios from 'axios'

    export default {
        name: 'Account',
        data() {
            return {
                UserData: this.$store.state.Login.LoginStatus ? this.$store.state.Login.UserData : null,
                dataUser: [],
                dataJobs: [],
                userJobId: 0,
                dataCountries : [],
                userCountryId: 0,
                dataProvinces: [],
                userProvinceId: 0,
                dataCities: [],
                userCityId: 0,
                dataVillages: [],
                userVillageId: 0,
                genders: [
                    { value: 'm', text: 'Laki-laki' },
                    { value: 'f', text: 'Perempuan' }
                ],
            }
        },

        async beforeMount() {
            try {
                this.getDataUser();
                this.getJobs();
            } catch (error) {
                console.log(error.message);
            }
        },

        methods: {
            async getDataUser(){
                try {
                    let data = await Axios({
                        headers: { Authorization: `Bearer ` + this.$store.state.Login.UserData.token, },
                        url: `https://dev-be.kompasdata.id/api/Users/${ this.UserData.id }`,
                    })
                    this.dataUser = data.data
                    console.log(this.dataUser);

                    // Set User Job Id
                    this.userJobId = this.dataUser.job.id;

                    // get User Country
                    this.getCountries();

                    // get User Province & set user country id
                    this.userCountryId = this.dataUser.country.id;
                    this.getProvinces(this.userCountryId);

                    // get User City & set user province id
                    this.userProvinceId = this.dataUser.province.id;
                    this.getCities(this.userProvinceId);

                    // get User Village & set user city id
                    this.userCityId = this.dataUser.city.id;
                    this.getVillages(this.userCityId);

                    // set user village id
                    this.userVillageId = this.dataUser.village.id;
                } catch (error) {
                    console.log(error.message);
                }
            },
            async getJobs(){
                try {
                    let jobs = await Axios({
                        headers: { Authorization: `Bearer ` + this.$store.state.Login.UserData.token, },
                        url: 'https://dev-be.kompasdata.id/api/Jobs',
                    })
    
                    this.dataJobs = jobs.data;
                } catch (error) {
                    console.log(error.message);
                }
            },
            async getCountries(){
                try {
                    let countries = await Axios({
                        headers: { Authorization: `Bearer ` + this.$store.state.Login.UserData.token, },
                        url: 'https://dev-be.kompasdata.id/api/Countries',
                    })

                    this.dataCountries = countries.data;
                } catch (error) {
                    console.log(error.message);
                }
            },
            async getProvinces(countryId){
                try {
                    let provinces = await Axios({
                        headers: { Authorization: `Bearer ` + this.$store.state.Login.UserData.token, },
                        url: `https://dev-be.kompasdata.id/api/Provinces?countryid=${ countryId }`,
                    })

                    this.dataProvinces = provinces.data;
                } catch (error) {
                    console.log(error.message);
                }
            },
            async getCities(provinceId){
                try {
                    let cities = await Axios({
                        headers: { Authorization: `Bearer ` + this.$store.state.Login.UserData.token, },
                        url: `https://dev-be.kompasdata.id/api/Cities?countryid=-1&provinceid=${ provinceId }`,
                    })

                    this.dataCities = cities.data;
                } catch (error) {
                    console.log(error.message);
                }
            },
            async getVillages(cityId){
                try {
                    if (cityId != 0) {
                        let villages = await Axios({
                            headers: { Authorization: `Bearer ` + this.$store.state.Login.UserData.token, },
                            url: `https://dev-be.kompasdata.id/api/Cities/${ cityId }`,
                        })
    
                        this.dataVillages = villages.data.villages;
                    } else {
                        this.dataVillages = [];
                    }
                } catch (error) {
                    console.log(error.message);
                }
            },
            async updateData(){
                let configAccount = {
                    url: `https://dev-be.kompasdata.id/api/Users/${ this.dataUser.id }/update?modifiedby=${ this.dataUser.id }`,
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }`,
                        'Content-Type': 'application/json',
                    },
                    data: JSON.stringify({
                        "firstName": document.querySelector("#firstName").value,
                        "lastName": document.querySelector("#lastName").value,
                        "email": this.dataUser.email,
                        "billingEmail": "",
                        "gender": document.getElementById("gender").options[document.getElementById("gender").selectedIndex].value,
                        "jobId": document.getElementById("job").options[document.getElementById("job").selectedIndex].value,
                        "phoneNumber": document.querySelector("#phoneNumber").value,
                        "address": document.querySelector("#address").value,
                        "countryId": document.getElementById("country").options[document.getElementById("country").selectedIndex].value,
                        "provinceId": document.getElementById("province").options[document.getElementById("province").selectedIndex].value,
                        "cityId": document.getElementById("city").options[document.getElementById("city").selectedIndex].value,
                        "villageId": document.getElementById("village").options[document.getElementById("village").selectedIndex].value,
                        "postCode": document.querySelector("#postCode").value,
                        "institutionName": "",
                        "institutionAddress": "",
                        "institutionBillingAddress": "",
                        "institutionProvinceId": 0,
                        "institutionCityId": 0,
                        "institutionVillageId": 0,
                        "institutionPhoneNumber": "",
                        "institutionPosition": "",
                        "taxPayerName": "",
                        "taxPayerAddress": "",
                        "taxNumber": "",
                        "isTaxableEmployers": 0,
                        "idType": 0,
                        "idNumber": "",
                        "idAttachmentURL": "",
                        "profileAttachmentURL": "",
                        "isPrintBilling": 0,
                    })
                }

                await Axios(configAccount).then(response => {
                    console.log(response);
                    window.location.href = '/dashboard/akun'
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }
</script>