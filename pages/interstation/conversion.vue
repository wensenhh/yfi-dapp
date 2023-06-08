<template>
	<view class="container">
		<view class="initHeader">
			<view class="initHeader-box">
				<view class="initHeader-box-left" @click="$tools.back(1)">
					<image src="../../static/return.png" mode=""></image>
				</view>
				<view class="initHeader-box-center">
					卡牌兑换
				</view>
				<view class="initHeader-box-right" @click="$tools.jump('/pages/interstation/converdetail')">兑换記錄
				</view>
			</view>
		</view>
		<view class="flex-col flex-auto group_3">
			<view class="flex-row justify-between items-center section_2">
			  <text class="font_1 text_4">共 400份</text>
			  <text class="font_4 text_5">剩余 {{trannumobj.totalLess}}份</text>
			</view>
			<view class="flex-col" style="margin-top: 36rpx;">
				<text class="self-start text_4">可兑换卡牌数量(张)：{{trannumobj.total}}</text>
				<view class="iptbox">
					<input type="number" placeholder="请输入兑换数量" v-model="convernum" />
				</view>
			</view>
			<image class="self-center image_5"
				src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641bf7ba5a7e3f031045ebb8/64255cc099e5b100119d3490/16818962825448629283.png" />
			<image class="self-center image_6"
				src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641bf7ba5a7e3f031045ebb8/64255cc099e5b100119d3490/16814678320278604788.png" />
			<view class="flex-col justify-start items-center button" @click="conversionfun"><text class="font_1 text_6">兑换</text></view>
		</view>
	</view>
</template>

<script>
	import {
		getAiordernumber,
		conversionnft
	} from '@/api/api.js';
	export default {
		data() {
			return {
				trannumobj: {},
				convernum: null
			};
		},
		onLoad() {
			this.gettrannum()
		},
		methods: {
			conversionfun(){
				if(!this.convernum || this.convernum == 0){
					return this.$tools.toast('请输入正确的兑换数量')
				}
				if(this.convernum > 1){
					return this.$tools.toast('每次仅能兑换一张卡牌')
				}
				if(this.trannumobj.total < 10){
					return this.$tools.toast('可兑换卡牌数量不足')
				}
				uni.showLoading({
					title: '兑换中~',
					mask: true
				})
				conversionnft({
					number: this.convernum
				}).then(res => {
					uni.hideLoading()
					this.$tools.toast('兑换成功~')
					this.convernum = null
					this.gettrannum()
				})
			},
			gettrannum(){
				getAiordernumber().then(res => {
					this.trannumobj = res.data
				})
			},
		}
	}
</script>

<style lang="scss">
	.initHeader {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ffffff;

		.initHeader-box {
			width: 100%;
			@include flexBetween;
			padding: 20rpx 20upx;

			.initHeader-box-left {
				width: 40upx;
				height: 37upx;
				@include flexCenter;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.initHeader-box-center {
				font-size: 40upx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #282828;
			}

			.initHeader-box-right {
				color: #006AE3;
				font-size: 26rpx;
			}
		}
	}

	.group_3 {
		padding: 34.62rpx 30.77rpx 471.15rpx;
		overflow-y: auto;

		.iptbox {
			@include flexLeft;
			width: 100%;
			height: 96rpx;
			padding: 24rpx;
			border-radius: 8rpx;
			background: #F8F8F8;
			margin-top: 36rpx;
			input {
				@include flexLeft;
				width: 100%;
			}
		}
		.section_2 {
		  padding: 26.92rpx 15.38rpx 34.62rpx 23.08rpx;
		  background-image: linear-gradient(90deg, #006ae3 0%, #6c39ff 100%);
		  border-radius: 15.38rpx;
		  .text_4 {
		    color: #ffffff;
		    line-height: 29.81rpx;
		  }
		  .text_5 {
		    color: #ffffff;
		    line-height: 26.92rpx;
		  }
		}
		.text_4 {
			color: #808080;
			font-size: 25rpx;
			font-family: MiSans;
			line-height: 23.08rpx;
		}

		.search {
			margin-top: 19.23rpx;
		}

		.image_5 {
			margin-top: 92.31rpx;
			width: 92.31rpx;
			height: 92.31rpx;
		}

		.image_6 {
			margin-top: 69.23rpx;
			border-radius: 15.38rpx;
			width: 332.69rpx;
			height: 384.62rpx;
		}

		.button {
			margin-top: 69.23rpx;
			padding: 30.77rpx 0;
			background-image: linear-gradient(90deg, #0031e3 0%, #d000e3 100%);
			border-radius: 7.69rpx;

			.font_1 {
				font-size: 32.69rpx;
				font-family: MiSans;
				line-height: 30.77rpx;
			}

			.text_6 {
				color: #ffffff;
			}
		}
	}
</style>