<template>
    <section id="dashboard-home">
        <div id="sec-payment" class="container main-content">
            <div class="row box-content">
                <div class="col-12 content">
                    <div class="box-images">
                        <div class="images" style="background-image: url('https://www.kompasdata.id/Content/img/icons/man.png')"></div>
                    </div>
                    <div class="box-text">
                        <h4>Hi {{ this.$store.state.Login.UserData.firstName }}, selamat datang di KompasData</h4>
                        <p>Kami merekomendasikan beberapa pilihan tautan yang dapat membantu anda dalam menjelajahi KompasData</p>
                        <a href="/" class="btn btn-primary">Memulai</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Profile',
        data() {
            return {
                
            }
        }
    }
</script>