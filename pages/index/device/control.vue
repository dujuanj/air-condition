<template>
	<view>
		<uni-nav-bar left-icon="back" left-text="返回" title="添加设备" @click-left='back'></uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default{
		components: {
			uniNavBar,
			
		},
		data() {
			return {
				
			}
		},
	}
</script>

<style>
</style>
