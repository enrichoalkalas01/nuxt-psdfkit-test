<template>
    <section class="sec-artikel  pt-5">
        <div class="container">
            <div class="row d-flex justify-content-center pb-5">
                <div class="col-12">
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
                                    <!-- Articles -->
                                    <div id="artikel">
                                        <fieldset>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Kata Kunci </label>
                                                <div class="col-md-9">
                                                    <input id="query" type="text" class="form-control" placeholder="search query...">
                                                </div>
                                            </div>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Penulis </label>
                                                <div class="col-md-9">
                                                    <input id="author" type="text" class="form-control" placeholder="author...">
                                                </div>
                                            </div>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Media </label>
                                                <div class="col-md-9">
                                                    <!-- <input type="text" class="form-control" placeholder=""> -->
                                                    <select name="publication" id="publication" class="form-control">
                                                        <option value="">Seluruh Media</option>
                                                        <option value="KOMPAS">Kompas</option>
                                                        <!-- <option value="kompascetak">Kompas</option>
                                                        <option value="kompassiang">Kompas Siang</option> -->
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Halaman</label>
                                                <div class="col-md-9">
                                                    <input id="page" type="number" class="form-control" placeholder="pages from...">
                                                </div>
                                            </div>
                                            <div class="form-group my-3 row">
                                                <label class="form-label col-md-3">Tanggal </label>
                                                <div class="col-md-9">
                                                    <div class="row">
                                                        <div class="col-sm-4  mb-2">
                                                            <input type="date" class="form-control date" id="date-from" placeholder="Tanggal Mulai">
                                                        </div>
                                                        <div class="col-sm-4 text-start text-md-center mb-2">
                                                            Hingga
                                                        </div>
                                                        <div class="col-sm-4  mb-2">    
                                                            <input type="date" class="form-control date" id="date-to" placeholder="Tanggal Akhir">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group my-3">
                                                <a href="#" class="btn btn-main float-end"><i class="fas fa-search"></i> Search</a>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <!-- End Of Articles -->
                                </div>
                                <div class="tab-pane fade p-3 p-md-4" id="cariTabs02" role="tabpanel" aria-labelledby="cari-Tabs02">
                                    <!-- Infografik -->
                                    <div id="infografik">
                                        <fieldset>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Kata Kunci </label>
                                                <div class="col-md-9">
                                                    <input id="query" type="text" class="form-control" placeholder="search query ...">
                                                </div>
                                            </div>

                                            <div class="form-group my-3 row">
                                                <label class="form-label col-md-3">Tanggal </label>
                                                <div class="col-md-9">
                                                    <div class="row">
                                                        <div class="col-sm-4  mb-2">
                                                            <input type="date" class="form-control date" id="date-from" placeholder="Tanggal Mulai">
                                                        </div>
                                                        <div class="col-sm-4 text-start text-md-center mb-2">
                                                            Hingga
                                                        </div>
                                                        <div class="col-sm-4  mb-2">    
                                                            <input type="date" class="form-control date" id="date-to" placeholder="Tanggal Akhir">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group my-3">
                                                <a href="#" class="btn btn-main float-end"><i class="fas fa-search"></i> Search</a>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <!-- End Of Infografik -->
                                </div>
                                <div class="tab-pane fade p-3 p-md-4" id="cariTabs03" role="tabpanel" aria-labelledby="cari-Tabs03">
                                    <!-- Foto -->
                                    <div id="foto">
                                        <fieldset>

                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Kata Kunci </label>
                                                <div class="col-md-9">
                                                    <input id="query" type="text" class="form-control" placeholder="search query...">
                                                </div>
                                            </div>

                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Album </label>
                                                <div class="col-md-9">
                                                    <!-- <input type="text" class="form-control" placeholder=""> -->
                                                    <select name="publication" id="publication" class="form-control">
                                                        <option value="">Seluruh Media</option>
                                                        <option value="KOMPAS">Kompas</option>
                                                        <!-- <option value="kompascetak">Kompas</option>
                                                        <option value="kompassiang">Kompas Siang</option> -->
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="form-group my-3 row">
                                                <label class="form-label col-md-3">Tanggal </label>
                                                <div class="col-md-9">
                                                    <div class="row">
                                                        <div class="col-sm-4  mb-2">
                                                            <input type="date" class="form-control date" id="date-from" placeholder="Tanggal Mulai">
                                                        </div>
                                                        <div class="col-sm-4 text-start text-md-center mb-2">
                                                            Hingga
                                                        </div>
                                                        <div class="col-sm-4  mb-2">    
                                                            <input type="date" class="form-control date" id="date-to" placeholder="Tanggal Akhir">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group my-3">
                                                <a href="#" class="btn btn-main float-end"><i class="fas fa-search"></i> Search</a>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <!-- End Of Foto -->
                                </div>
                                <div class="tab-pane fade p-3 p-md-4" id="cariTabs04" role="tabpanel" aria-labelledby="cari-Tabs04">
                                    <!-- Buku -->
                                    <div>
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
                                    </div>
                                    <!-- End Of Buku -->
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-3 my-3">
                            <div class="banner my-3">
                                <img src="resources/images/ads2.png" class="w-100 rounding" alt="">
                            </div>
                            <div class="banner my-3">
                                <img src="resources/images/ads2.png" class="w-100 rounding" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'MainDetail'
    }
</script>