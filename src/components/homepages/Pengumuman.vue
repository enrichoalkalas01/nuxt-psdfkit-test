<template>
    <section class="sec-artikel line-bot py-5">
        <div class="container">
             <div class="row d-flex justify-content-center">
                <div class="col-12 text-center mb-3">
                    <h2 class="tag">Pengumuman</h2>
                    <h2 class="subtitle pengumuman py-2" v-html="`${ pengumuman }`"></h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Pengumuman',
        
        // Component Props
        props: [
            'dataSet',
        ],

        // Component State
        data() {
            return {
                pengumuman: null
            }
        },

        // Component Did Mount
        mounted() {
            this.pengumuman = this.dataSet
        },

        // Component Did Update
        updated() {
            this.pengumuman = this.dataSet
        },
    }
</script>

<style>
    .pengumuman{
        font-weight: normal;
    }
</style>