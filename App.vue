<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './comment/css/reset.css';
	@import './comment/css/uni.css';
	page {
		background-color: #fff;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}
</style>
