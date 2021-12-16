<template>
    <div class="col-12">
        <ul class="nav nav-tabs komp-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="data-Tabs01" data-bs-toggle="tab" href="#dataTabs01" aria-controls="dataTabs01" aria-selected="true"><i class="fas fa-search"></i> Semua</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="data-Tabs02" data-bs-toggle="tab" href="#dataTabs02" aria-controls="dataTabs02" aria-selected="false">Polling</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="data-Tabs03" data-bs-toggle="tab" href="#dataTabs03" aria-controls="dataTabs03" aria-selected="false">Survey</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="data-Tabs04" data-bs-toggle="tab" href="#dataTabs04" aria-controls="dataTabs04" aria-selected="false">Statistik</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="data-Tabs05" data-bs-toggle="tab" href="#dataTabs05" aria-controls="dataTabs05" aria-selected="false">Pencarian Lanjut</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MiniMenu'
}
</script>