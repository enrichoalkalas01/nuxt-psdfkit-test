<template>
    <div class="tab-pane fade" id="AllTabs05" role="tabpanel" aria-labelledby="All-Tabs05">
        <div class="row">
            <div class="col-12 col-md-9 mt-4">
                <ul class="nav nav-tabs komp-tabs2" id="myTabCari" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="cari-Tabs01" data-bs-toggle="tab" href="#cariTabs01" aria-controls="cariTabs01" aria-selected="true">Artikel</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="cari-Tabs02" data-bs-toggle="tab" href="#cariTabs02" aria-controls="cariTabs02" aria-selected="false">Infografik</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="cari-Tabs03" data-bs-toggle="tab" href="#cariTabs03" aria-controls="cariTabs03" aria-selected="false">Foto</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="cari-Tabs04" data-bs-toggle="tab" href="#cariTabs04" aria-controls="cariTabs04" aria-selected="false">Buku</a>
                    </li>
                </ul>
                <div class="tab-content komp-tab-content">
                    <div class="tab-pane fade show active p-3 p-md-4" id="cariTabs01" role="tabpanel" aria-labelledby="cari-Tabs01">
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
                                <div class="form-group my-3 row">
                                    <label class="form-label col-md-3">Tanggal </label>
                                    <div class="col-md-9">
                                        <div class="row">
                                            <div class="col-sm-4  mb-2">
                                                <input type="text" class="form-control date" id="formDateStart1" placeholder="Tanggal Mulai">
                                            </div>
                                            <div class="col-sm-4 text-start text-md-center mb-2">
                                                Hingga
                                            </div>
                                            <div class="col-sm-4  mb-2">
                                                <input type="text" class="form-control date" id="formDateEnd1" placeholder="Tanggal Akhir">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group my-3">
                                    <a href="#" class="btn btn-main float-end"><i class="fas fa-search"></i> Search</a>
                                </div>
                            </fieldset>
                        </form>

                    </div>
                    <div class="tab-pane fade p-3 p-md-4" id="cariTabs02" role="tabpanel" aria-labelledby="cari-Tabs02">
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

                                <div class="form-group my-3 row">
                                    <label class="form-label col-md-3">Tanggal</label>
                                    <div class="col-md-9">
                                        <div class="row">
                                            <div class="col-sm-4  mb-2">
                                                <input type="text" class="form-control date" id="formDateStart2" placeholder="Tanggal Mulai">
                                            </div>
                                            <div class="col-sm-4 text-start text-md-center mb-2">
                                                Hingga
                                            </div>
                                            <div class="col-sm-4  mb-2">
                                                <input type="text" class="form-control date" id="formDateEnd2" placeholder="Tanggal Akhir">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group my-3">
                                    <a href="#" class="btn btn-main float-end"><i class="fas fa-search"></i> Search</a>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div class="tab-pane fade p-3 p-md-4" id="cariTabs03" role="tabpanel" aria-labelledby="cari-Tabs03">
                        <form>
                            <fieldset>

                                <div class="form-group row my-3">
                                    <label class="col-md-3 form-label">Kata Kunci </label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" placeholder="">
                                    </div>
                                </div>
                                <div class="form-group row my-3">
                                    <label class="col-md-3 form-label">Fotografer </label>
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

                                <div class="form-group my-3 row">
                                    <label class="form-label col-md-3">Tanggal </label>
                                    <div class="col-md-9">
                                        <div class="row">
                                            <div class="col-sm-4  mb-2">
                                                <input type="text" class="form-control date" id="formDateStart3" placeholder="Tanggal Mulai">
                                            </div>
                                            <div class="col-sm-4 text-start text-md-center mb-2">
                                                Hingga
                                            </div>
                                            <div class="col-sm-4  mb-2">
                                                <input type="text" class="form-control date" id="formDateEnd3" placeholder="Tanggal Akhir">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group my-3">
                                    <a href="#" class="btn btn-main float-end"><i class="fas fa-search"></i> Search</a>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div class="tab-pane fade p-3 p-md-4" id="cariTabs04" role="tabpanel" aria-labelledby="cari-Tabs04">
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
                                <div class="form-group my-3 row">
                                    <label class="form-label col-md-3">Tanggal</label>
                                    <div class="col-md-9">
                                        <div class="row">
                                            <div class="col-sm-4  mb-2">
                                                <input type="text" class="form-control date" id="formDateStart4" placeholder="Tanggal Mulai">
                                            </div>
                                            <div class="col-sm-4 text-start text-md-center mb-2">
                                                Hingga
                                            </div>
                                            <div class="col-sm-4  mb-2">
                                                <input type="text" class="form-control date" id="formDateEnd4" placeholder="Tanggal Akhir">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group my-3">
                                    <a href="#" class="btn btn-main float-end"><i class="fas fa-search"></i> Search</a>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3 my-3">
                <div class="banner my-3">
                    <img src="/assets/images/ads2.png" class="w-100 rounding" alt="">
                </div>
                <div class="banner my-3">
                    <img src="/assets/images/ads2.png" class="w-100 rounding" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pencarian'
    }
</script>