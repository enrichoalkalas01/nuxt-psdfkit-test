<template>
    <div>
        <p>tester</p>
    </div>
</template>

<script>
    export default {
        
        data() {
            return {
                tester: 'asd'
            }
        },

        asyncData() {
            
        },

        mounted() {
            import('pspdfkit').then(response => {
                console.log(response)
            })
        }, 
    }
</script>