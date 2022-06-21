<template>
    <section id="dashboard-account">
        <div class="container-fluid card">
            <div class="row form-profile">
                <div class="col-12 images-wrapper card">
                    <div class="image-box">
                        <div class="images-circle"></div>
                    </div>
                    <div class="text-box">
                        <h2>{{ UserData.username }}</h2>
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
                            <span>Kompas ID</span>
                        </div>
                        <div class="col-8">
                            <span>{{ UserData.id }}</span>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Jenis Pelanggan</span>
                        </div>
                        <div class="col-8">
                            <span>trial</span>
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
                            <input class="form-control" type="text" value="">
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Nama Belakang</span>
                        </div>
                        <div class="col-8">
                            <input class="form-control" type="text" value="">
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Jenis Kelamin</span>
                        </div>
                        <div class="col-8">
                            <input class="form-control" type="text" value="">
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Pekerjaan</span>
                        </div>
                        <div class="col-8">
                            <select name="" id="" class="form-control">
                                <option value=""></option>
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
                            <input class="form-control" type="text" value="">
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Alamat</span>
                        </div>
                        <div class="col-8">
                            <textarea class="form-control" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <div class="row wrapper">
                        <div class="col-4">
                            <span>Negara</span>
                        </div>
                        <div class="col-8">
                            <select name="" id="" class="form-control">
                                <option value=""></option>
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
                            <select name="" id="" class="form-control">
                                <option value=""></option>
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
                            <select name="" id="" class="form-control">
                                <option value=""></option>
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
                            <select name="" id="" class="form-control">
                                <option value=""></option>
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
                            <input class="form-control" type="text" value="">
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-3">
                    <button class="form-control">Simpan</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Account',
        data() {
            return {
                UserData: this.$store.state.Login.LoginStatus ? this.$store.state.Login.UserData : null
            }
        },

        mounted() {
            console.log(this.UserData)
        }
    }
</script>