<template >
	<view class="content" :style='allheight'>
		<!-- <uni-nav-bar left-icon="back" left-text="返回" title="添加设备" @click-left='back' ></uni-nav-bar> -->
		<!-- 添加设备 -->
		<view class="uni-padding-wrap ">
			<uni-steps :data="[
			     {title: '事件一'}, 
			     {title: '事件二'}, 
			     {title: '事件三'}, 
			     {title: '事件四'}]"
			 :active="1">
			</uni-steps>
			<form @submit="formSubmit" @reset="formReset">

				<!--  <view class="uni-form-item uni-column">
                    <view class="title">场景</view>
                    <radio-group name="radio">
                        <label>
                            <radio value="radio1" />客厅
                        </label>
                        <label>
                            <radio value="radio2" />卧室一
                        </label>
						 <label>
						    <radio value="radio3" />卧室二
						</label>
                    </radio-group>
                </view> -->


				<view class="uni-form-item uni-column">
					<view class="title">设备</view>
					<input class="uni-input" name="input" placeholder="请输入设备ID" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">wify名称</view>
					<input class="uni-input" name="input" placeholder="请输入wify名称" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">wify密码</view>
					<input class="uni-input" name="input" placeholder="请输入wify密码" />
				</view>
				<view class="uni-btn-v">
					<uni-notice-bar style='background: transparent;' text="配置过程可能需要一分钟，请耐心等待...">
					</uni-notice-bar>

					<button formType="submit" type="primary" class="set">开始配置</button>
					
				</view>
				
				<uni-popup :show="middle" type="middle" mode="fixed"  >
					<uni-load-more status="loading" ></uni-load-more>
				</uni-popup>
			</form>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniSteps from "@/components/uni-steps/uni-steps.vue"
	import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar.vue"
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"

	export default {
		components: {
			uniNavBar,
			uniSteps,
			uniNoticeBar,
			uniLoadMore,
			uniPopup
		},
		data() {
			return {
				middle:false,
				show:true,
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
			back() {
				uni.reLaunch({
					url: '../index'
				});
			},
			formSubmit() {
				var _this=this;
				this.middle=true;
				setTimeout(function(){
					_this.middle=false;
				},1000)
			},
			hidePopup(){
				this.middle=false;
			}
		}
	}
</script>

<style>
	.content {
		width: 100%;
		background: url(../../../static/bg.jpg) no-repeat;
		background-size: 100% 100%;
	}

	.set {
		font-size: 30upx;
	}
	
</style>
