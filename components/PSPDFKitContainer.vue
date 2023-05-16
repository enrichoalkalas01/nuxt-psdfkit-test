<template>
    <div>
        <div class="pdf-container"></div>
    </div>
</template>

<script>
    export default {
        name: 'PSPDFKitContainer',
        props: {
            pdfFile: { type: String, required: true, },
        },
        PSPDFKit: null,

        mounted() {
            this.loadPSPDFKit().then((instance) => {
                this.$emit("loaded", instance)
            })
        },

        watch: {
            pdfFile(val) {
                if (val) {
                    this.loadPSPDFKit()
                }
            },
        },

        methods: {
            async loadPSPDFKit() {
                import("pspdfkit").then(PSPDFKit => {
                    this.PSPDFKit = PSPDFKit
                    console.log(this.PSPDFKit)
                    this.PSPDFKit.unload(".pdf-container")
                    this.PSPDFKit.load({
                        document: this.pdfFile,
                        container: ".pdf-container",
                        baseUrl: "http://localhost:3000/"
                    })
                })
                // import("pspdfkit").then((PSPDFKit) => {
                //     this.PSPDFKit = PSPDFKit
                //     PSPDFKit.unload(".pdf-container")
                //         return PSPDFKit.load({
                //             document: this.pdfFile,
                //             container: ".pdf-container",
                //             baseUrl: "http://localhost:7788/",
                //         })
                //     })
                // .catch((error) => {
                //     console.error(error)
                // })
            },
        }
    }
</script>

<style scoped>
    .pdf-container {
        height: 100vh
    }
</style>