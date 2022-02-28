<template>
    <div class="content borderless">
        <div class="row">
            <div class="col-sm-4 my-3">
                <a :href="idInfografik">
                    <img :src="dataImage" alt="" class="infografik-image w-100">
                </a>
            </div>
            <div class="col-sm-8 my-3">
                <div class="desc">
                    <h3 class="subtitle"><a :href="idInfografik">{{ title }}</a></h3>
                    <p class="short-text three">{{ desc }}</p>
                    <span class="date-time">
                        <i class="fas fa-clock"></i> {{ source }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardInfografik',
        props: [
            'data',
            'dataId',
            'dataImage',
            'dataTitle',
            'dataDesc',
            'dataSource'
        ],
        data () {
            return {
                idInfografik: '/infografik-detail/' + this.dataId,
                image: this.dataImage,
                title: this.dataTitle,
                desc: this.dataDesc,
                source: this.dataSource,
            }
        }
    }
</script>

<style>
    .infografik-image{
        object-fit: cover;
        max-height: 150px;
    }
</style>