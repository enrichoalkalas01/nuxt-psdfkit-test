<template>
    <section>
        <div class="title-content">
            <p>Suggestion</p>
        </div>
        <CardSuggestion 
            v-for="suggestion in suggestions" :key="suggestion.id"
            v-bind:data="suggestion"
            v-bind:dataId="suggestion.id"
            v-bind:dataImage="suggestion.images"
            v-bind:dataTitle="suggestion.title"
            v-bind:dataDesc="suggestion.desc"
            v-bind:dataSource="suggestion.source"
        />
    </section>
</template>

<script>
    import CardSuggestion from './CardSuggestion.vue';

    export default {
        name: 'Main',
        components: {
            CardSuggestion,
        },
        props: [
            'dataSuggestions',
        ],
        data () {
            return {
                suggestions: this.dataSuggestions
            }
        }
    }
</script>