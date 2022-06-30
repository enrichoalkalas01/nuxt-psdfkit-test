<template>
    <div class="row pt-3">
        <div class="col-12">
            <SearchSemua />
        </div>
    </div>
</template>

<script>
    import SearchSemua from '../pencarian/Semua.vue'

    export default {
        name: 'MainPage',
        components: {
            SearchSemua
        },
        props: [
        ],
        data () {
            return {
            }
        }
    }
</script>