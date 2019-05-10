<template>
	<view class="content" :style='allheight'>
		<view class="uni-padding-wrap" style='backgroun:#0ba9fc'>

			<view class="uni-flex uni-column " style='color:#fff;position: relative;'>
				<view class="flex-item " style='margin-top:40upx;margin-left:30upx;'>
					<text class='uni-text'>30</text>℃</view> 
				<view class="flex-item" style='margin-left:40upx'>
					<text class='city'>朝阳区｜晴v</text>
				</view>
				<view class="flex-item" style='margin-left:40upx'>
					<text class='city'>空气温度: 12%</text>
				</view>
				<img src="../../static/person.png" alt="" class='person'>
				<img src="../../static/qipao.png" alt="" class='qipao'>
				<text class="qipaotext" style="font-size:28upx">际高 </text>
				<text class="qipaotext2">为你实时播报气</text> 
				<text class="qipaotext3">象环境</text>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item">

				</view>
				<view class="uni-flex uni-column middle">
					<view class="flex-item flex-item-V ">
						<button type="primary" size='mini' @click="add">添加设备</button>
					</view>
					<view class="flex-item flex-item-V test" style='color:#000;'>
						<button type="default" size='mini' @click="controls">虚拟体验 >></button></view>

				</view>
			</view>

		</view>




	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				allheight: {
					height: ''
				}
			}
		},
		onLoad() {
			var _this = this;
			uni.getSystemInfo({
				success: function(res) {
					console.log(res.model);
					_this.allheight.height = res.windowHeight + "px";
					console.log(_this.allheight.height);
					console.log(res.windowWidth);
					console.log(res.windowHeight);

				}
			});
		},
		methods: {
			add() {

				uni.reLaunch({
					url: './device/add'
				});
			},
			controls(){
				uni.reLaunch({
					url: './device/device'
					
				});
			}
		}
	}
</script>

<style>
	.person,.qipao{
		width:200upx;
		height: 200upx;
		position: absolute;
		top:110upx;
		right:-19upx;
	}
	.qipao{
		width:350upx;
		height: 300upx;
		top:20upx;
		right: 80upx;
	}
	.qipaotext,.qipaotext2,.qipaotext3{
		position: absolute;
		top:90upx;
		right:260upx;
		font-size:24upx;
	}
	.qipaotext2{
		top:130upx;
		right:180upx
	}
	.qipaotext3{
		top:170upx;
		right: 220upx;
	}
	.content {
		width: 100%;
		background: url(../../static/control.png) no-repeat;
		background-size: 100% 100%;
		
	}

	.uni-text {
		font-size: 64upx;
	}

	.flex-item {
		margin-top: 15upx;
	}

	.city {
		margin-top: 50upx;
	}

	.middle {
		width: 700upx;
		/* background:url(../../static/air.jpg) no-repeat; */
		background: #fff;
		background-size: cover;
		height: 800upx;
		text-align: center;
		border-radius: 14upx;
		-moz-box-shadow: 5px 1px 14px #333333;
		-webkit-box-shadow: 5px 1px 14px #333333;
		box-shadow: 2px 1px 10px #333333;
		box-shadow: 2px 1px 10px #333333;
		-webkit-box-shadow: 2px 1px 14px #333333;
		box-shadow: 2px 1px 10px #333333;
		opacity: 0.9;
		margin-top:60upx;
	}

	.middle view:first-child {
		margin-top: 200upx;
	}
</style>
