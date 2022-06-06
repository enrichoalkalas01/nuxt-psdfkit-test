<template>
    <div>
        TESTER
        <div v-html="HTML"></div>
    </div>
</template>

<script>
    // import Axios from 'axios'
    export default {
        name: 'TestMain',
        data() {
            return {
                HTML: null
            }
        },
        async mounted() {
            // Axios.get('https://gerai.kompas.id/produk-kategori/buku/penerbit-buku-kompas/feed/').then(response => {
            //     console.log(response.data)
            //     let item = response.data.querySelector('item')
            //     // let html = ``
            //     console.log(item)
            // }).catch(err => {
            //     console.log(err)
            // })

            // fetch('https://gerai.kompas.id/produk-kategori/buku/penerbit-buku-kompas/feed/')
            // .then(response => response.text())
            // .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            // .then(data => {
            //     console.log(data);
            //     const items = data.querySelectorAll("item");
            //     let html = ``;
            //     items.forEach(el => {
            //         html += `
            //             <article>
            //                 <h2>
            //                     <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
            //                         ${el.querySelector("title").innerHTML}
            //                     </a>
            //                 </h2>
            //             </article>
            //         `;
            //     });
            //     // document.body.insertAdjacentHTML("beforeend", html);
            //     this.HTML = html
            // });
        }
    }
</script>
