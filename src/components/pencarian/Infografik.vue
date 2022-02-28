<template>
    <div class="row mt-3">
        <div class="col-12">
            <div v-for="infografik in infografiks" :key="infografik.id" class="content borderless">
                <div class="row">
                    <div class="col-sm-4 my-3">
                        <a :href="'/infografik-detail/' + infografik.id">
                            <img :src="infografik.images" alt="" class="infografik-image w-100">
                        </a>
                    </div>
                    <div class="col-sm-8 my-3">
                        <div class="desc">
                            <h3 class="subtitle"><a :href="'/infografik-detail/' + infografik.id">{{ infografik.title }}</a></h3>
                            <p class="short-text three">{{ infografik.desc }}</p>
                            <span class="date-time">
                                <i class="fas fa-clock"></i> {{ infografik.source }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 mt-3 text-center">
            <a href="#AllTabs04" class="btn btn-line">Lihat Lainnya</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Infografik',
        props: [
            'dataInfografiks'
        ],
        data (){
            return{
                infografiks: this.dataInfografiks,
            }
        }
    }
</script>