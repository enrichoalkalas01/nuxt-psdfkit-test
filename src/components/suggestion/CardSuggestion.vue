<template>
    <section>
        <div class="content borderless mb-4">
            <img :src="image" class="rounding w-100" alt="">
            <h3 class="subtitle my-2">
                <a href="#">
                    {{ title }}
                </a>
            </h3>
            <p>
                {{ desc }}
            </p>
            <span class="date-time"> <i class="fas fa-clock"></i> {{ source }} </span>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'CardSuggestion',
        props: [
            'data',
            'dataId',
            'dataImage',
            'dataTitle',
            'dataDesc',
            'dataSource',
        ],
        data () {
            return {
                idData: this.dataId,
                image: this.dataImage,
                title: this.dataTitle,
                desc: this.dataDesc,
                source: this.dataSource
            }
        }
    }
</script>