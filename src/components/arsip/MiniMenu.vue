<template>
    <ul class="nav nav-tabs komp-tabs" id="myTabAll" role="tablist">
        <li class="nav-item" role="presentation">
            <a class="nav-link active" id="All-Tabs01" data-bs-toggle="tab" href="#AllTabs01" aria-controls="AllTabs01" aria-selected="true"><i class="fas fa-search"></i> Semua</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="All-Tabs02" data-bs-toggle="tab" href="#AllTabs02" aria-controls="AllTabs02" aria-selected="false">Artikel</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="All-Tabs03" data-bs-toggle="tab" href="#AllTabs03" aria-controls="AllTabs03" aria-selected="false">Foto</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="All-Tabs04" data-bs-toggle="tab" href="#AllTabs04" aria-controls="AllTabs04" aria-selected="false">Infografik</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'MiniMenu'
    }
</script>