/*
    
    From API :
    1. adslink = ?
    2. costumers = ?
    3. images = ?
    4. info = pengumuman homepages
    5. librarycollections = buku homepages
    6. photos = foto homepages
    7. stories = ?

    Section Homepages :
    1. Banner Images
    2. Pengumuman
    3. Sekilas Info ( Agenda, Ulang Tahun, Tanggal Penting )
    4. Artikel
    5. Infografik
    6. Foto
    7. Buku
    8. Data
    9. Berita Terkini
    
    {
        // Homagepages
        mainpage: [
            {
                banner_data: [
                    { 
                        id: 'integer',
                        image_source: 'string,
                        title: 'string', date: 'date',
                        type_banner: 'string arsip artikel'
                    }
                ]
            },
            {
                pengumuman_data: 'string',
            },
            {
                sekilas_info: {
                    title_section: 'string',    
                    agenda: [
                        {
                            id: 'integer',
                            images: 'string',
                            title: 'string',
                            excerpt: 'string',
                            date: 'place & date'
                            image_source: 'string,
                        }
                    ],
                    ulang_tahun: [
                        {
                            id: 'integer',
                            images: 'string',
                            title: 'string',
                            excerpt: 'string',
                            date: 'place & date'
                            image_source: 'string,
                        }
                    ],
                    tanggal_penting: [
                        {
                            month: 'string',
                            data_tanggal: [
                                {
                                    id: 'integer',
                                    title: 'string',
                                    detail: 'string',
                                    date: 'date'
                                }
                            ]
                        }
                    ]
                }
            },
            {
                artikel_data: {
                    title_section: 'string',
                    data: [
                        {
                            id: 'integer',
                            title: 'string',
                            excerpt: 'string',
                            created_date: 'date',
                            source_created: 'string', 'kompas',
                            image_source: 'string,
                        }
                    ]
                }
            },
            {
                info_grafik_data: {
                    title_section: 'string',
                    data: [
                        {
                            id: 'integer',
                            title: 'string',
                            created_date: 'date',
                            source_created: 'string', 'kompas',
                            image_source: 'string,
                        }
                    ]
                }
            },
            {
                foto_data: {
                    title_section: 'string',
                    data: [
                        {
                            id: 'string',
                            title: 'string',
                            excerpt: 'string',
                            image_source: 'string,
                            created_date: 'date',
                            source_created: 'string',
                        }
                    ]
                }
            },
            {
                buku_data: {
                    title_section: 'string',
                    data: [
                        {
                            type_book: 'string', 'topik hangat'
                            data: [
                                {
                                    id: 'integer',
                                    title: 'string',
                                    excerpt: 'string',
                                    date: 'date',
                                    image_source: 'string',
                                }
                            ]
                        }
                    ]
                }
            },
            {
                survey_data: {
                    title_section: 'string;,
                    data: [
                        {
                            type_survey: 'string', 'survey_kompas'
                            data: [
                                {
                                    id: 'integer',
                                    title: 'string',
                                    image_source: 'string',
                                    source_created: 'string',
                                    date: 'date',
                                }
                            ]
                        }
                    ]
                }
            },
            {
                layanan_data: {
                    title_section: 'string',
                    data: [
                        {
                            id: 'integer',
                            title: 'string',
                            icon: 'string', 'must from font_awesome or html icon',
                            text: 'string',
                        }
                    ]
                }
            },
            {
                berita_terkini_data: [
                    {
                        id: 'integer',
                        title: 'string',
                        text_update: 'string',
                        excerpt: 'string',
                        image_source: 'string',
                        date: 'date',
                    }
                ]
            }
        ]
    }

    */  