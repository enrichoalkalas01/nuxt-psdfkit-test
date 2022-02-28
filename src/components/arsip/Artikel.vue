<template>
    <div class="row line-bot full">
        <div class="col-12">
            <div v-for="artikel in artikels" :key="artikel.id" class="content borderless my-3">
                <h2 class="title"><a :href="'/artikel-detail/' + artikel.id" class="txt-main">{{ artikel.title }}</a></h2>
                <span class="date-time"> <i class="fas fa-clock"></i> {{ artikel.source }}</span>
                <p class="short-text three">{{ artikel.desc }}</p>
            </div>
        </div>
        <div class="col-12 my-3 text-center">
            <ul class="pagination cst-pagin d-flex justify-content-center">
                <li class="page-item disabled"><a class="page-link" href="#">Sebelumnya</a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Selanjutnya</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Artikel',
        props: [
            'dataArtikels',
        ],
        data (){
            return{
                artikels: this.dataArtikels,
            }
        }
    }
</script>