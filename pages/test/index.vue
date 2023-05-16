<template>
    <div id="app">
        <label for="file-upload" class="custom-file-upload"> Open PDF </label>
        <input id="file-upload" type="file" @change="openDocument" class="btn" />
        <PSPDFKitContainer :pdfFile="pdfFile" @loaded="handleLoaded" />
    </div>
</template>

<script>
    import PSPDFKitContainer from '~/components/PSPDFKitContainer.vue'
    export default {
        name: 'test',
        components: {
            PSPDFKitContainer
        },

        data() {
            return {
                // pdfFile: "/poss-upi-press-python-dasar.pdf",
                pdfFile: "https://apps.kmn.kompas.com/ep/KMN_PustakaMVC/Master/Download?jenisFolder=collections&fileID=45063&oriFileName=45063.pdf&fileLenght=12234202&fileContentType=application%2Fpdf&usract=DownloadEbook",
            }
        },

        mounted() {
            console.log(this.pdfFile)
        },

        methods: {
            handleLoaded(instance) {
                console.log("PSPDFKit has loaded: ", instance)
                // Do something.
            },

            openDocument(event) {
                if (this.pdfFile && this.pdfFile.startsWith("blob:")) {
                    window.URL.revokeObjectURL(this.pdfFile)
                }
                this.pdfFile = window.URL.createObjectURL(event.target.files[0])
            },
        },
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-align: center;
        color: #2c3e50;
    }

    body {
        margin: 0;
    }

    input[type="file"] {
        display: none;
    }

    .custom-file-upload {
        border: 1px solid #ccc;
        border-radius: 4px;
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
        background: #4a8fed;
        padding: 10px;
        color: #fff;
        font: inherit;
        font-size: 16px;
        font-weight: bold;
    }
</style>