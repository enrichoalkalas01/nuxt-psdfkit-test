<template>
    <form>
        <fieldset>
            <div class="form-group row my-3">
                <label class="col-md-3 form-label">Kata Kunci </label>
                <div class="col-md-9">
                    <input type="text" class="form-control" placeholder="">
                </div>
            </div>
            <div class="form-group row my-3">
                <label class="col-md-3 form-label">Penulis </label>
                <div class="col-md-9">
                    <input type="text" class="form-control" placeholder="">
                </div>
            </div>
            <div class="form-group row my-3">
                <label class="col-md-3 form-label">Media </label>
                <div class="col-md-9">
                    <input type="text" class="form-control" placeholder="">
                </div>
            </div>
            <div class="form-group row my-3">
                <label class="col-md-3 form-label">Halaman</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" placeholder="">
                </div>
            </div>
            <div class="form-group row my-3">
                <label class="col-md-3 form-label">Tanggal </label>
                <div class="col-md-9">
                    <input type="text" class="form-control" placeholder="">
                </div>
            </div>
            <div class="form-group my-3">
                <a href="#" class="btn btn-main float-end"><i class="fas fa-search"></i> Search</a>
            </div>
        </fieldset>
    </form>
</template>

<script>
export default {
    name: 'Form'
}
</script>