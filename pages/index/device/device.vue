<template>
	<view class="content">
		<view class="uni-padding-wrap " :style="{backgroundImage: 'url(' + (coverImgUrl) + ')'}">
			<view class="uni-flex uni-row ">
			</view>
			<!-- 设置温度 -->
			<view class="uni-flex uni-column">
				<view class="flex-item flex-item-V " style='color: #fff;margin-left:300upx;margin-top:65upx;'>设置温度</view>
				<view class="flex-item flex-item-V " style="position: relative;z-index: 10;" v-if='closebtn'>
					<img src="../../../static/yuan.png" alt="" style='width:450upx;height: 400upx;margin-left:125upx;margin-top:30upx;'>
					<text class="num"  >{{(num).toFixed(1)}}℃</text>
					<uni-icon type="plus" size="30" color='#fff' class='add' @tap='add'></uni-icon>
					<uni-icon type="minus" size="30" color='#fff' class='reduce' @tap='reduce'></uni-icon>
					<!-- <img src="../../../static/images/yun_02.png" alt="" class='yunImg'> -->
				</view>
				<view class="closebtn" v-else @tap='showclosebtn'>
					<img src="../../../static/close.png" alt="" style='width:450upx;height: 400upx;margin-left:125upx;margin-top:30upx;'>
				</view>
			</view>
			<!-- 设置温度 -->
		</view>
		<view class="uni-flex uni-column info">
			<view class="flex-item " style="margin-bottom: 10upx;">PM2.5<text style='margin-left:40upx;'>89</text><text style='margin-left:40upx;'>ug/m3</text></view>
			<view class="flex-item " style="margin-bottom: 10upx;">VOC<text style='margin-left:40upx;'>20</text>  <text style='margin-left:40upx;'>PPM</text></view>
			<view class="flex-item" style="border-right:none">CO2  <text style='margin-left:40upx;'>80</text> <text style='margin-left:40upx;'>PPM</text></view>
		</view>
		<view class="addbg" v-if='addbg'></view>
		<!-- 开关功能 -->
		<view class="uni-flex uni-row keys">
			<view class="flex-item uni-center">

				<img src="../../../static/on.png" alt="" style='width:80upx;height: 80upx;' @tap='showclosebtn'><br>
				<text>开关</text>
			</view>
			<view class="flex-item uni-center">
			
				<img src="../../../static/xuehua2.png" alt="" style='width:80upx;height: 80upx;' @tap='cool'><br>
				<text>制冷</text>
			</view>
			<view class="flex-item uni-center">
			
				<img src="../../../static/hot.png" alt="" style='width:80upx;height: 80upx;' @tap='hot'><br>
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
				current: 0,
				num:16.0,
				closebtn:false,
				coverImgUrl:'../../../static/control.png',
				addbg:true
				
			}
		},
		onLoad(){
			this.num+=0.5;
			if(this.num=27.5) return;
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			add(){
				this.num=this.num+0.5
			},
			reduce(){
				this.num=this.num-0.5
			},
			showclosebtn(){
				this.closebtn=!this.closebtn
			},
			hot(){
				this.coverImgUrl='../../../static/red.jpg';
				this.closebtn=true;
				this.addbg=false
			},
			cool(){
				this.coverImgUrl='../../../static/control.png';
				this.closebtn=true;
				this.addbg=true
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
		/* background: url(../../../static/control.png) no-repeat; */
		background-repeat: no-repeat;
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
		left: 240upx;
		color: #fff;
		font-size: 78upx;
		
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
		top: 600upx;
		left:200upx;
		z-index: 20;
		
	}
	.info view{
		font-size:40upx;
		color:#888;
		/* width:50%; */
		/* height:200upx;		 */
		text-align: center;
		line-height: 40upx;
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
	.closebtn img{
		
	}
</style>
