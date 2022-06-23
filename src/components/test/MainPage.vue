<template>
    <div class="box-chart">
        <Bar
            :chart-options="chartOptions"
            :chart-data="chartData"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
            :width="'500px'"
            :height="'100px'"
        />
    </div>
</template>

<script>
    import { Bar } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

    ChartJS.register(Title , Tooltip, Legend, BarElement, CategoryScale, LinearScale)

    export default {
        name: 'TestMain',
        components: { Bar },
        computed: {
            myStyles () {
                return {
                    height: `${ 100 }px`,
                    position: 'relative'
                }
            }
        },
        data() {
            return {
                chartData: {
                    labels: [ 'January', 'February', 'March', 'Mey', 'June' ],
                    datasets: [ { data: [40, 20, 12, 122, 123] } ]
                },
                chartOptions: {
                    // responsive: false,
                    height: `${ 200 }px !important`,
                    position: 'relative',
                    // width: '100%',
                    scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'probability'
                        }
                    }]
                } 
                }
            }
        },

        mounted() {
            let newDataSets = []
            for ( let i = 0; i < 25; i++ ) {
                var random = Math.abs(Math.round(Math.random() * (+1 - +10) + +1));
                newDataSets[i] = random > 0 ? random : 1
            }
            
            this.chartData.labels = newDataSets
            this.chartData.datasets = [ { 
                label: 'Data One',
                data: newDataSets,
                backgroundColor: '#f87979',
                max: 50
            } ]
        }
    }
</script>

<style>
    .box-chart {
        width: 100%;
        /* height: 400px; */
        position: relative;
        padding: 5%;
    }
</style>