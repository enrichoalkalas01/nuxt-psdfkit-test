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
        <div id="hello" class="hello" ref="chartdiv" style="width: 100%; height: 500px;">
            
        </div>

        <button v-on:click="testRefreshToken">Cek API</button>
        <button v-on:click="testToken">Ceh Token</button>
    </div>
</template>

<script>
    import { Bar } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

    ChartJS.register(Title , Tooltip, Legend, BarElement, CategoryScale, LinearScale)
    import * as am5 from '@amcharts/amcharts5';
    import * as am5xy from '@amcharts/amcharts5/xy';
    import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

    import Axios from 'axios'

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
            this.chartData.datasets = [{ 
                label: 'Data One',
                data: newDataSets,
                backgroundColor: '#f87979',
                max: 50
            }]

            this.amChartHere()
        },

        methods: {
            async testRefreshToken() {
                let configRefresh = {
                    method: 'post',
                    url: `https://data-api-dev.kompas.id/api/Login/kompas-token-refresh`
                }
                
                try {
                    let refresh = await Axios(configRefresh)
                    console.log(refresh)
                } catch (err) {
                    console.log(err)
                }
            },

            async testToken() {
                // fetch('https://data-api-dev.kompas.id/api/Login/user-info', {
                //     // headers: { Authorization: `Bearer ${ GetCookies('kompas._token') }` }
                //     headers: { Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiZW5yaWNob2Fsa2FsYXMua29tcGFzQGdtYWlsLmNvbSIsImlkIjoiOGYzMDRjYTQtZTdmYS00OGI3LWJhYjAtYjVmZGM0NGQ0Nzk4IiwicnQiOjE2ODg1MzcwMDIsInNjb3BlIjpbInJlYWQtYXJ0aWNsZSIsInJlYWQtcHJvZmlsZSJdfSwiZXhwIjoxNjU3MDAzODkyLCJpYXQiOjE2NTcwMDI5OTIsImlzcyI6Imh0dHBzOi8vd3d3LmtvbXBhcy5pZCJ9.xOt7iaagb7O76-zxL0gyq_Jsh0Daakuq8TedqqEvn2EsTrMObIjNhUVLvmizvpuLGC6tBADrvkGXJv-M6qcek_AoEowMlkZohuQLpWmO144NuQeos2aH8TI1EWKbuXnx1wXzyuG85u4nPTX31W22yE3aIF0quoggohfaHB4-1gc` }
                // }).then(response => response.text())
                // .then(result => console.log(result))
                // .catch(err => console.log(err))
                let configToken = {
                    method: 'get', url: 'https://data-api-dev.kompas.id/api/Login/user-info',
                    headers: { Authorization: `Bearer ${ this.$store.state.Tools.GetCookies('kompas._token') }` }
                }
                try {
                    let token = await Axios(configToken)
                    console.log(token)
                } catch (err) {
                    console.log(err)
                }
            },

            amChartHere() {
                let root = am5.Root.new(this.$refs.chartdiv);
                root.setThemes([am5themes_Animated.new(root)]);
                let chart = root.container.children.push(
                    am5xy.XYChart.new(root, { panY: false, layout: root.verticalLayout })
                );
                let data = [{
                    category: "Research",
                    value1: 1000,
                    value2: 588
                },{
                    category: "Marketing",
                    value1: 1200,
                    value2: 1800
                },{
                    category: "Sales",
                    value1: 850,
                    value2: 1230
                }]

                let yAxis = chart.yAxes.push(
                    am5xy.ValueAxis.new(root, { renderer: am5xy.AxisRendererY.new(root, {}) })
                )

                let xAxis = chart.xAxes.push(
                    am5xy.CategoryAxis.new(root, { renderer: am5xy.AxisRendererX.new(root, {}), categoryField: "category" })
                )

                xAxis.data.setAll(data)
                let series1 = chart.series.push(
                    am5xy.ColumnSeries.new(root, {name: "Series", xAxis: xAxis, yAxis: yAxis, valueYField: "value1", categoryXField: "category" })
                )
                series1.data.setAll(data)
                let series2 = chart.series.push(
                    am5xy.ColumnSeries.new(root, { name: "Series", xAxis: xAxis, yAxis: yAxis, valueYField: "value2", categoryXField: "category" })
                )
                series2.data.setAll(data)

                let legend = chart.children.push(am5.Legend.new(root, {}));
                legend.data.setAll(chart.series.values)

                chart.set("cursor", am5xy.XYCursor.new(root, {}));
                this.root = root;
            }
        },
        beforeUnmount() { if (this.root) { this.root.dispose() } }
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