<template>
	<view class="content">
		<view class="uni-padding-wrap ">
			<view class="uni-flex uni-row ">
			</view>
			<!-- 设置温度 -->
			<view class="uni-flex uni-column">
				<view class="flex-item flex-item-V " style='color: #fff;margin-left:300upx;margin-top:65upx;'>设置温度</view>
				<view class="flex-item flex-item-V " style="position: relative;z-index: 10;">
					<img src="../../../static/yuan.png" alt="" style='width:450upx;height: 400upx;margin-left:125upx;margin-top:30upx;'>
					<text class="num">27.5℃</text>
					<uni-icon type="plus" size="30" color='#fff' class='add'></uni-icon>
					<uni-icon type="minus" size="30" color='#fff' class='reduce'></uni-icon>
					<!-- <img src="../../../static/images/yun_02.png" alt="" class='yunImg'> -->
				</view>
			</view>
		</view>
		<view class="uni-flex uni-row info">
			<view class="flex-item ">PM2.5 <br> <text>89</text> <br> <text>ug/m3</text></view>
			<view class="flex-item ">VOC <br> <text>20</text> <br> <text>PPM</text></view>
			<view class="flex-item" style="border-right:none">CO2 <br> <text>80</text> <br> <text>PPM</text></view>
		</view>
		<view class="addbg"></view>
		<!-- 开关功能 -->
		<view class="uni-flex uni-row keys">
			<view class="flex-item uni-center">

				<img src="../../../static/on.png" alt="" style='width:80upx;height: 80upx;'><br>
				<text>开关</text>
			</view>
			<view class="flex-item uni-center">
			
				<img src="../../../static/xuehua2.png" alt="" style='width:80upx;height: 80upx;'><br>
				<text>制冷</text>
			</view>
			<view class="flex-item uni-center">
			
				<img src="../../../static/hot.png" alt="" style='width:80upx;height: 80upx;'><br>
				<text>制热</text>
			</view>
			<view class="flex-item uni-center">
			
				<img src="../../../static/tongfen.png" alt="" style='width:80upx;height: 80upx;'><br>
				<text>通风</text>
			</view>
			<view class="flex-item uni-center">
			
				<img src="../../../static/shi.png" alt="" style='width:80upx;height: 80upx;'><br>
				<text>除湿</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	export default {
		components: {
			uniSegmentedControl,
			uniIcon,
			uniBadge
		},
		data() {
			return {
				items: ['制冷', '制热'],
				current: 0
			}
		},
		onLoad(){
			
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			}
		}
	}
</script>

<style>
	.content {
		position: relative;
	}

	.uni-padding-wrap {
		width: 100%;
		background: url(../../../static/control.png) no-repeat;
		background-size: 100% 100%;
		height: 1000upx;
	}

	.set {
		font-size: 30upx;
	}

	.top {
		width: 550upx;
		height: 70upx;
		line-height: 70upx;
		background: transparent;
		margin: 50upx auto;
		border-radius: 25upx;
		padding: 0 20upx;
		color: #88cfed;
		text-align: left;
	}

	.cool {
		/* margin-top:60upx; */
	}

	.wen {
		font-size: 96upx;
		color: #79c4e3
	}

	.num {
		position: absolute;
		top: 210upx;
		left: 270upx;
		color: #fff;
		font-size: 60upx;
	}

	.add {
		position: absolute;
		top: 200upx;
		right: 90upx;
	}

	.reduce {
		position: absolute;
		top: 200upx;
		left: 43upx;
	}

	.yunImg {

		position: absolute;
		top: 830upx;
		left: -32upx;
	}

	.keys {
		padding:0 40upx;
		/* background: url(../../../static/images/yun_02.png) no-repeat;
		background-size: 100% 100%; */
	}

	.addbg {
		height: 160upx;
		width: 100%;
		background: url(../../../static/images/yun_02.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top: 695upx;

	}

	.info {
		position: absolute;
		top: 650upx;
		left:38upx;
		z-index: 20;
		
	}
	.info view{
		font-size:40upx;
		color:#888;
		width:230upx;
		height:200upx;
		border-right:1upx solid #ccc;
		border-bottom: 1upx solid #ccc;
		text-align: center;
		line-height: 1.2;
	}
	.info text{
		font-size:30upx;
	}
	.keys text{
		color:#888;
	}
	.keys view{
		line-height: 1.2;
		width:140upx;
	}
</style>
