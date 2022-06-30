<template>
    <ul class="nav nav-tabs komp-tabs" id="myTabAll" role="tablist">
        <li class="nav-item" role="presentation">
            <a
                :class="this.$store.state.Search.TypeSearch === '0' ? 'nav-link active' : 'nav-link'"
                id="All-Tabs01" data-bs-toggle="tab" href="#AllTabs01" aria-controls="AllTabs01" aria-selected="true"
            ><i class="fas fa-search"></i> Semua</a>
        </li>
        <li v-if="this.$store.state.Search.TotalArtikel > 0" class="nav-item" role="presentation">
            <a 
                :class="this.$store.state.Search.TypeSearch === '1' ? 'nav-link active' : 'nav-link'"
                id="All-Tabs02" data-bs-toggle="tab" href="#AllTabs02" aria-controls="AllTabs02" aria-selected="false"
            >Artikel</a>
        </li>
        <li v-if="this.$store.state.Search.TotalFoto > 0" class="nav-item" role="presentation">
            <a 
                :class="this.$store.state.Search.TypeSearch === '2' ? 'nav-link active' : 'nav-link'"
                id="All-Tabs03" data-bs-toggle="tab" href="#AllTabs03" aria-controls="AllTabs03" aria-selected="false"
            >Foto</a>
        </li>
        <li v-if="this.$store.state.Search.TotalInfografik > 0" class="nav-item" role="presentation">
            <a
                :class="this.$store.state.Search.TypeSearch === '3' ? 'nav-link active' : 'nav-link'"
                id="All-Tabs04" data-bs-toggle="tab" href="#AllTabs04" aria-controls="AllTabs04" aria-selected="false"
            >Infografik</a>
        </li>
        <li v-if="this.$store.state.Search.TotalBuku > 0" class="nav-item" role="presentation">
            <a
                :class="this.$store.state.Search.TypeSearch === '4' ? 'nav-link active' : 'nav-link'"
                id="All-Tabs05" data-bs-toggle="tab" href="#AllTabs05" aria-controls="AllTabs05" aria-selected="false"
            >Buku</a>
        </li>
        <li v-if="this.$store.state.Search.TotalStatistik > 0" class="nav-item" role="presentation">
            <a
                :class="this.$store.state.Search.TypeSearch === '5' ? 'nav-link active' : 'nav-link'"
                id="All-Tabs06" data-bs-toggle="tab" href="#AllTabs06" aria-controls="AllTabs06" aria-selected="false"
            >Data</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'MiniMenu',
    }
</script>