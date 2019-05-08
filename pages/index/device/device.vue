<template>
	<view class="content">
		  <view class="uni-padding-wrap ">
          
       <!-- <view class="content">
            <view v-show="current === 0">
                选项卡1的内容
            </view>
            <view v-show="current === 1">
                选项卡2的内容
            </view>
            <view v-show="current === 2">
                选项卡3的内容
            </view>
        </view> -->
            <view class="uni-flex uni-row ">
				
                <view class="flex-item top cool" >
					<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#b7e8fe"></uni-segmented-control>
					<!-- <image src="../../../static/xuehua.png" mode="" style="width:60upx;height:60upx;float: left;vertical-align: middle;"></image> -->
					<!-- <view style="float: left;vertical-align: middle;margin-top:4upx">制冷</view> -->
				</view>   
						
            </view>
			<!-- 设置温度 -->
			 <view class="uni-flex uni-column" >
                <view class="flex-item flex-item-V " style='color: #fff;'>设置温度</view>
                <view class="flex-item flex-item-V " style="text-align: center;position: relative;">
					<img src="../../../static/yuan.png" alt="" style='width:450upx;height: 400upx;'>
					<text class="num">27.5℃</text>
					<uni-icon type="plus" size="30" color='#fff' class='add'></uni-icon>
					<uni-icon type="minus" size="30" color='#fff' class='reduce'></uni-icon>
					<img src="../../../static/images/yun_02.png" alt="" class='yunImg'>
				</view>
				
                <view class="flex-item flex-item-V" >
					<uni-badge text="当前温度27.0℃" type="warning" @click="bindClick"></uni-badge>
				</view>
            </view>
			
         
        </view>
		 <!-- 开关功能 -->
		<view class="uni-flex uni-row keys">
					  <view class="flex-item">
						 
						 <img src="../../../static/on.png" alt="" style='width:80upx;height: 80upx;'>
						 <text>开关</text>
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
				 items: ['制冷','制热'],
            current: 0
			}
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
	.uni-padding-wrap  {
		width: 100%;
		background: url(../../../static/control.png) no-repeat;
		background-size: 100% 100%;
	}

	.set {
		font-size: 30upx;
	}
	.top{
		width:550upx;
		height: 70upx;
		line-height: 70upx;
		background:transparent;
		margin:50upx auto;
		border-radius: 25upx;
		padding:0 20upx;
		color:#88cfed;
		text-align: left;
	}
	.cool{
		/* margin-top:60upx; */
	}
	.wen{
		font-size:96upx;
		color:#79c4e3
		
	}
	.num{
		position: absolute;
		top:180upx;
		left:295upx;
		color: #fff;
		font-size:60upx;
	}
	.add{
		position: absolute;
		top:200upx;
		right:50upx;
	}
	.reduce{
		position: absolute;
		top:200upx;
		left:50upx;
	}
	.yunImg{
		
		position: absolute;
		top:830upx;
		left:-32upx;
	}
	.keys{
		padding:40upx 20upx;
	}
</style>
