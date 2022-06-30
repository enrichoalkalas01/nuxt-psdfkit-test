<template>
    <div class="carousel">
        <slot></slot>
        <div class="button-slider">
            <div @click="prev" class="btn-slider left"></div>
            <div @click="next" class="btn-slider right"></div>
        </div> 
    </div>
</template>

<script>
    export default {
        name: 'Carousel',
        methods: {
            next() {
                this.$emit('next')
            },
            prev() {
                this.$emit('prev')
            }
        }
    }
</script>

<style>
    .button-slider .btn-slider {
        width: 35px;
        height: 35px;
        background-color: rgba(255, 255, 255, 0.75);
        position: absolute;
        top: 50%;
        z-index: 99;
        border-radius: 50%;
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    }

    .button-slider .btn-slider.left {
        left: 7.5%;
        background-image: url('/assets/images/chevron-left.svg')
    }

    .button-slider .btn-slider.right {
        right: 7.5%;
        background-image: url('/assets/images/chevron-right.svg')
    }
</style>