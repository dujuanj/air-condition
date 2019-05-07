<template>
	<view class="content" :style='allheight'>
		<view class="uni-padding-wrap">

			<view class="uni-flex uni-row " style='color:#fff'>
				<view class="flex-item ">
					<text class='uni-text'>32</text>℃</view>
				<view class="flex-item" style='line-height: 5;margin-left:40upx;'>
					<text class='city'>朝阳区｜晴</text>
				</view>
				<view class="flex-item" style='line-height: 5;margin-left:40upx;'>
					<text class='city'>空气温度: 12%</text>
				</view>
				<view class="flex-item" style='line-height: 5;margin-left:40upx;'>
					<text class='city'>周二</text>
				</view>
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
	.content {
		width: 100%;
		background: url(../../static/bg.jpg) no-repeat;
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
		height: 1000upx;
		text-align: center;
		border-radius: 14upx;
		-moz-box-shadow: 5px 1px 14px #333333;
		-webkit-box-shadow: 5px 1px 14px #333333;
		box-shadow: 2px 1px 10px #333333;
		box-shadow: 2px 1px 10px #333333;
		-webkit-box-shadow: 2px 1px 14px #333333;
		box-shadow: 2px 1px 10px #333333;
		opacity: 0.6;

	}

	.middle view:first-child {
		margin-top: 200upx;
	}
</style>
