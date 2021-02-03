<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<image src="https://7463-tcb-woczjct8zn4cbck0cbea0-5176fc-1304935721.tcb.qcloud.la/images/CgAKR1_gVSOAZdx_AAF-BC5BhKg277.jpg"
		 mode=""></image>
		<image src="https://7463-tcb-woczjct8zn4cbck0cbea0-5176fc-1304935721.tcb.qcloud.la/tu.png" mode=""></image>

		<u-button>默认按钮{{$store.state.name}}</u-button>
		<u-button type="primary" @click="open">主要按钮</u-button>
		<u-button type="success">成功按钮</u-button>
		<u-button type="info">信息按钮</u-button>
		<u-button type="warning">警告按钮</u-button>
		<u-button type="error">危险按钮</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			open() {
				uniCloud.callFunction({
					name: 'login',
					data: {
						name: 'weichen',
						age: '18'
					},
					success(res) {
						debugger
						console.log('res222', res)
					},
					fail(err) {
						debugger
						console.log('err', err)
					}
				})

			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
