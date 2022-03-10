<template>
    <section class="sec-artikel line-bot py-5">
        <div class="container">
             <div class="row d-flex justify-content-center">
                <div class="col-12 text-center mb-3">
                    <h2 class="tag">Pengumuman</h2>
                    <h2 class="subtitle py-2">
                        {{ pengumuman }}
                    </h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Pengumuman',
        props: [
            'dataPengumuman',
        ],
        data() {
            return {
                pengumuman: this.dataPengumuman
            }
        }
    }
</script>