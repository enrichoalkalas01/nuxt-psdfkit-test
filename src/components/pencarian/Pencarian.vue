<template>
    <div class="row">
        <div class="col-12">
            <ul class="nav nav-tabs komp-tabs2" id="myTabCari" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="cari-Tabs01" data-bs-toggle="tab" href="#cariTabs01" aria-controls="cariTabs01" aria-selected="true">Polling</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="cari-Tabs02" data-bs-toggle="tab" href="#cariTabs02" aria-controls="cariTabs02" aria-selected="false">Survey</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="cari-Tabs03" data-bs-toggle="tab" href="#cariTabs03" aria-controls="cariTabs03" aria-selected="false">Statistik</a>
                </li>
            </ul>
            <div class="tab-content komp-tab-content">
                <div class="tab-pane fade show active p-3 p-md-4" id="cariTabs01" role="tabpanel" aria-labelledby="cari-Tabs01">
                    <Form />
                </div>
                <div class="tab-pane fade p-3 p-md-4" id="cariTabs02" role="tabpanel" aria-labelledby="cari-Tabs02">
                    <Form />
                </div>
                <div class="tab-pane fade p-3 p-md-4" id="cariTabs03" role="tabpanel" aria-labelledby="cari-Tabs03">
                    <Form />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Form from './Form.vue'
    export default {
        'name': 'Pencarian',
        components: {
            Form,
        }
    }
</script>