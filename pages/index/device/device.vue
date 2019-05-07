<template>
	<view class="content">
		<view class="canvasView">
			<view class="canvas-bar">
				<view class="title">饼图示例</view>
				<button class="update-btn" type="primary" size="mini" @click="updatePie">修改饼状图数据</button>
			</view>
			<mpvue-echarts class="ec-canvas" @onInit="pieInit" canvasId="pie" ref="pieChart" />
		</view>
	</view>
</template>

<script>
	import * as echarts from '@/components/echarts/echarts.simple.min.js';
	import mpvueEcharts from '@/components/mpvue-echarts/src/echarts.vue';
	const cityList = [{
		value: 55,
		name: '北京'
	}, {
		value: 38,
		name: '上海'
	}, {
		value: 20,
		name: '广州'
	}];
	let pieOption = {
		animation: false,
		backgroundColor: '#F8F8F8',
		color: ['#37A2DA', '#32C5E9', '#67E0E3', '#91F2DE', '#FFDB5C', '#FF9F7F'],
		series: [{
			label: {
				normal: {
					fontSize: 14
				}
			},
			type: 'pie',
			center: ['50%', '50%'],
			radius: [0, '60%'],
			data: [],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 2, 2, 0.3)'
				}
			}
		}]
	};
	export default {
		components: {
			mpvueEcharts,
			uLink
		},
		data() {
			return {
				
			}
		},
		onLoad() {
			pieOption.series[0].data = cityList.slice(0);
		},
		methods: {
			updatePie() {
				// 参考 mpvue-charts 的懒加载示例
				// https://github.com/F-loat/mpvue-echarts/blob/master/examples/lazyLoad.vue
			
				if (this.updateStatus) {
					return;
				}
				pieOption.series[0].data.push({
					value: 20,
					name: '武汉'
				});
				pieOption.series[0].data.push({
					value: 10,
					name: '杭州'
				});
				this.$refs.pieChart.init();
				this.updateStatus = true;
			},
			pieInit(e) {
				let { width, height} = e ;
				let canvas = this.$refs.pieChart.canvas 
				echarts.setCanvasCreator(() => canvas);
				let pieChart = echarts.init(canvas, null, {
					width: width,
					height: height
				})
				canvas.setChart(pieChart)
			
				pieChart.setOption(pieOption)
				this.$refs.pieChart.setChart(pieChart)
			},
		}
	}
</script>

<style>
uni-page-body {
		width: 100%;
		background: url(../../../static/control.jpg) no-repeat;
		background-size: 100% 100%;
		
	}
</style>
