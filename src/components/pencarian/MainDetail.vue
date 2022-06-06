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
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="cari-Tabs05" data-bs-toggle="tab" href="#cariTabs05" aria-controls="cariTabs05" aria-selected="false">Survey &amp; Data</a>
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
                                                    <input id="query-artikel" type="text" class="form-control" placeholder="search query...">
                                                </div>
                                            </div>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Penulis </label>
                                                <div class="col-md-9">
                                                    <input id="author-artikel" type="text" class="form-control" placeholder="author...">
                                                </div>
                                            </div>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Media </label>
                                                <div class="col-md-9">
                                                    <!-- <input type="text" class="form-control" placeholder=""> -->
                                                    <select name="publication" id="publication-artikel" class="form-control">
                                                        <option value="">Seluruh Media</option>
                                                        <option value="KOMPAS">Kompas</option>
                                                        <option value="kompascetak">Kompas</option>
                                                        <option value="kompassiang">Kompas Siang</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Urutkan </label>
                                                <div class="col-md-9">
                                                    <!-- <input type="text" class="form-control" placeholder=""> -->
                                                    <select name="sort" id="sort-artikel" class="form-control">
                                                        <option value="asc">Terlama</option>
                                                        <option value="desc">Terbaru</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Halaman</label>
                                                <div class="col-md-9">
                                                    <input id="page-artikel" type="number" class="form-control" placeholder="pages from...">
                                                </div>
                                            </div>
                                            <div class="form-group my-3 row">
                                                <label class="form-label col-md-3">Tanggal </label>
                                                <div class="col-md-9">
                                                    <div class="row">
                                                        <div class="col-sm-4  mb-2">
                                                            <input type="date" class="form-control date" id="date-from-artikel" placeholder="Tanggal Mulai">
                                                        </div>
                                                        <div class="col-sm-4 text-start text-md-center mb-2">
                                                            Hingga
                                                        </div>
                                                        <div class="col-sm-4  mb-2">    
                                                            <input type="date" class="form-control date" id="date-to-artikel" placeholder="Tanggal Akhir">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group my-3">
                                                <a v-on:click="searchLanjutArtikel" href="#" class="btn btn-main float-end"><i class="fas fa-search"></i> Search</a>
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
                                                    <input id="query-infografik" type="text" class="form-control" placeholder="search query ...">
                                                </div>
                                            </div>

                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Urutkan </label>
                                                <div class="col-md-9">
                                                    <!-- <input type="text" class="form-control" placeholder=""> -->
                                                    <select name="sort" id="sort-infografik" class="form-control">
                                                        <option value="desc">Terbaru</option>
                                                        <option value="asc">Terlama</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="form-group my-3 row">
                                                <label class="form-label col-md-3">Tanggal </label>
                                                <div class="col-md-9">
                                                    <div class="row">
                                                        <div class="col-sm-4  mb-2">
                                                            <input type="date" class="form-control date" id="date-from-infografik" placeholder="Tanggal Mulai">
                                                        </div>
                                                        <div class="col-sm-4 text-start text-md-center mb-2">
                                                            Hingga
                                                        </div>
                                                        <div class="col-sm-4  mb-2">    
                                                            <input type="date" class="form-control date" id="date-to-infografik" placeholder="Tanggal Akhir">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group my-3">
                                                <a v-on:click="searchLanjutInfografik" href="#" class="btn btn-main float-end"><i class="fas fa-search"></i> Search</a>
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
                                                    <input id="query-foto" type="text" class="form-control" placeholder="search query...">
                                                </div>
                                            </div>

                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Fotografer</label>
                                                <div class="col-md-9">
                                                    <input id="author-foto" type="text" class="form-control" placeholder="author...">
                                                </div>
                                            </div>

                                            <!-- <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Album </label>
                                                <div class="col-md-9"> -->
                                                    <!-- <input type="text" class="form-control" placeholder=""> -->
                                                    <!-- <select name="publication" id="publication-foto" class="form-control">
                                                        <option value="">Seluruh Album</option>
                                                        <option value="kompasdigital">Kompas Digital</option>
                                                        <option value="kompasdakode">Kompas Dakode</option>
                                                        <option value="kompasweb">Kompas Web</option>
                                                        <option value="kompasdigital">Kompas Digital</option>
                                                        <option value="kompassiang">Kompas Siang</option>
                                                        <option value="kompasipad">Kompas Ipad</option> -->
                                                        <!-- <option value="KOMPAS">Kompas</option> -->
                                                        <!-- <option value="kompascetak">Kompas</option>
                                                        <option value="kompassiang">Kompas Siang</option> -->
                                                    <!-- </select>
                                                </div>
                                            </div> -->

                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Urutkan </label>
                                                <div class="col-md-9">
                                                    <!-- <input type="text" class="form-control" placeholder=""> -->
                                                    <select name="sort" id="sort-foto" class="form-control">
                                                        <option value="desc">Terbaru</option>
                                                        <option value="asc">Terlama</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="form-group my-3 row">
                                                <label class="form-label col-md-3">Tanggal </label>
                                                <div class="col-md-9">
                                                    <div class="row">
                                                        <div class="col-sm-4  mb-2">
                                                            <input type="date" class="form-control date" id="date-from-foto" placeholder="Tanggal Mulai">
                                                        </div>
                                                        <div class="col-sm-4 text-start text-md-center mb-2">
                                                            Hingga
                                                        </div>
                                                        <div class="col-sm-4  mb-2">    
                                                            <input type="date" class="form-control date" id="date-to-foto" placeholder="Tanggal Akhir">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group my-3">
                                                <a v-on:click="searchLanjutFoto" href="#" class="btn btn-main float-end"><i class="fas fa-search"></i> Search</a>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <!-- End Of Foto -->
                                </div>
                                <div class="tab-pane fade p-3 p-md-4" id="cariTabs04" role="tabpanel" aria-labelledby="cari-Tabs04">
                                    <!-- Buku -->
                                    <div id="buku">
                                        <fieldset>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Subjek</label>
                                                <div class="col-md-9">
                                                    <input name="subjek-buku" id="subjek-buku" type="text" class="form-control" placeholder="subjek...">
                                                </div>
                                            </div>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Judul</label>
                                                <div class="col-md-9">
                                                    <input name="query-buku" id="query-buku" type="text" class="form-control" placeholder="search query...">
                                                </div>
                                            </div>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Penulis</label>
                                                <div class="col-md-9">
                                                    <input name="author-buku" id="author-buku" type="text" class="form-control" placeholder="author...">
                                                </div>
                                            </div>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Serial</label>
                                                <div class="col-md-9">
                                                    <input name="serial-buku" id="serial-buku" type="text" class="form-control" placeholder="serial...">
                                                </div>
                                            </div>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Penerbit</label>
                                                <div class="col-md-9">
                                                    <input name="penerbit-buku" id="penerbit-buku" type="text" class="form-control" placeholder="penerbit...">
                                                </div>
                                            </div>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Urutkan </label>
                                                <div class="col-md-9">
                                                    <!-- <input type="text" class="form-control" placeholder=""> -->
                                                    <select name="sort" id="sort-buku" class="form-control">
                                                        <option value="desc">Terbaru</option>
                                                        <option value="asc">Terlama</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group my-3 row">
                                                <label class="form-label col-md-3">Tanggal</label>
                                                <div class="col-md-9">
                                                    <div class="row">
                                                        <div class="col-sm-4  mb-2">
                                                            <input type="date" class="form-control date" id="date-from-buku" placeholder="Tanggal Mulai">
                                                        </div>
                                                        <div class="col-sm-4 text-start text-md-center mb-2">
                                                            Hingga
                                                        </div>
                                                        <div class="col-sm-4  mb-2">
                                                            <input type="date" class="form-control date" id="date-to-buku" placeholder="Tanggal Akhir">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group my-3">
                                                <a v-on:click="searchLanjutBuku" href="#" class="btn btn-main float-end"><i class="fas fa-search"></i> Search</a>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <!-- End Of Buku -->
                                </div>
                                <div class="tab-pane fade p-3 p-md-4" id="cariTabs05" role="tabpanel" aria-labelledby="cari-Tabs05">
                                    <!-- Survey Data -->
                                    <div id="surveydata">
                                        <fieldset>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Kata Kunci</label>
                                                <div class="col-md-9">
                                                    <input name="subjek-data" id="subjek-data" type="text" class="form-control" placeholder="subjek...">
                                                </div>
                                            </div>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Judul</label>
                                                <div class="col-md-9">
                                                    <input name="query-data" id="query-data" type="text" class="form-control" placeholder="search query...">
                                                </div>
                                            </div>
                                            <div class="form-group row my-3">
                                                <label class="col-md-3 form-label">Urutkan </label>
                                                <div class="col-md-9">
                                                    <!-- <input type="text" class="form-control" placeholder=""> -->
                                                    <select name="sort" id="sort-data" class="form-control">
                                                        <option value="desc">Terbaru</option>
                                                        <option value="asc">Terlama</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group my-3 row">
                                                <label class="form-label col-md-3">Tanggal</label>
                                                <div class="col-md-9">
                                                    <div class="row">
                                                        <div class="col-sm-4  mb-2">
                                                            <input type="date" class="form-control date" id="date-from-data" placeholder="Tanggal Mulai">
                                                        </div>
                                                        <div class="col-sm-4 text-start text-md-center mb-2">
                                                            Hingga
                                                        </div>
                                                        <div class="col-sm-4  mb-2">
                                                            <input type="date" class="form-control date" id="date-to-data" placeholder="Tanggal Akhir">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group my-3">
                                                <a v-on:click="searchLanjutData" href="#" class="btn btn-main float-end"><i class="fas fa-search"></i> Search</a>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <!-- End Of Survey Data -->
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
        name: 'MainDetail',
        methods: {
            searchLanjutArtikel: () => {
                console.log('search lanjut here..')

                let query = document.querySelector("#query-artikel").value
                let dateFrom = document.querySelector("#date-from-artikel").value
                let dateTo = document.querySelector("#date-to-artikel").value
                let publication = document.querySelector("#publication-artikel").value
                let page = document.querySelector("#page-artikel").value
                let author = document.querySelector("#author-artikel").value
                let size = 10
                let currentpage = 1
                let orderDirection = document.querySelector("#sort-artikel").value
                

                window.location.href = `/pencarian?query=${ query }&orderdirection=${ orderDirection }&datefrom=${ dateFrom }&dateto=${ dateTo }&author=${ author }&publication=${ publication }&typesearch=1&size=${ size }&currentpage=${ currentpage }&page=${ page }`
            },

            searchLanjutInfografik: () => {
                console.log('search lanjut here..')

                let query = document.querySelector("#query-infografik").value
                let dateFrom = document.querySelector("#date-from-infografik").value
                let dateTo = document.querySelector("#date-to-infografik").value
                // let publication = document.querySelector("#publication-infografik").value
                // let page = document.querySelector("#page-infografik").value
                // let author = document.querySelector("#author-infografik").value
                let size = 10
                let currentpage = 1
                let orderDirection = document.querySelector("#sort-infografik").value

                window.location.href = `/pencarian?query=${ query }&orderdirection=${ orderDirection }&datefrom=${ dateFrom }&dateto=${ dateTo }&author=${ '' }&publication=${ '' }&typesearch=3&size=${ size }&currentpage=${ currentpage }`
            },

            searchLanjutFoto: () => {
                let query = document.querySelector("#query-foto").value
                let dateFrom = document.querySelector("#date-from-foto").value
                let dateTo = document.querySelector("#date-to-foto").value
                // let publication = document.querySelector("#publication-foto").value
                // let page = document.querySelector("#page-foto").value
                let author = document.querySelector("#author-foto").value
                let size = 10
                let currentpage = 1
                let orderDirection = document.querySelector("#sort-foto").value

                window.location.href = `/pencarian?query=${ query }&orderdirection=${ orderDirection }&datefrom=${ dateFrom }&dateto=${ dateTo }&author=${ author }&publication=${ '' }&typesearch=2&size=${ size }&currentpage=${ currentpage }`
            },

            searchLanjutBuku: () => {
                // let subjek = document.querySelector("#subjek-buku").value
                // let serial = document.querySelector("#serial-buku").value
                let query = document.querySelector("#query-buku").value
                let dateFrom = document.querySelector("#date-from-buku").value
                let dateTo = document.querySelector("#date-to-buku").value
                let publication = document.querySelector("#penerbit-buku").value
                // let page = document.querySelector("#page-buku").value
                let author = document.querySelector("#author-buku").value
                let size = 10
                let currentpage = 1
                let orderDirection = document.querySelector("#sort-buku").value

                window.location.href = `/pencarian?query=${ query }&orderdirection=${ orderDirection }&datefrom=${ dateFrom }&dateto=${ dateTo }&author=${ author }&publication=${ publication }&typesearch=4&size=${ size }&currentpage=${ currentpage }`
            },

            searchLanjutData: () => {
                // let subjek = document.querySelector("#subjek-data").value
                // let serial = document.querySelector("#serial-data").value
                let query = document.querySelector("#query-data").value
                let dateFrom = document.querySelector("#date-from-data").value
                let dateTo = document.querySelector("#date-to-data").value
                let publication = document.querySelector("#penerbit-data").value
                // let page = document.querySelector("#page-data").value
                let author = document.querySelector("#author-data").value
                let size = 10
                let currentpage = 1
                let orderDirection = document.querySelector("#sort-data").value

                window.location.href = `/pencarian?query=${ query }&orderdirection=${ orderDirection }&datefrom=${ dateFrom }&dateto=${ dateTo }&author=${ author }&publication=${ publication }&typesearch=5&size=${ size }&currentpage=${ currentpage }`
            }
        },
    }
</script>