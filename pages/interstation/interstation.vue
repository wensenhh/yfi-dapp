<template>
	<view class="container">
		<view class="initHeader">
			<view class="initHeader-box">
				<view class="initHeader-box-left" @click="$tools.back(1)">
					<image src="../../static/return.png" mode=""></image>
				</view>
				<view class="initHeader-box-center">
					卡牌互轉
				</view>
				<view class="initHeader-box-right" @click="$tools.jump('/pages/interstation/detail')">兑换記錄
				</view>
			</view>
		</view>
		<view class="flex-col flex-auto group_3">
			<view class="iptbox">
				<input placeholder="请输入对方的钱包地址（必须为平台内账户）" />
			</view>
			<view class="flex-row group_4 space-x-10">
				<text class="font_1 text_5">转账卡牌</text>
				<text class="font_1 text_6">Transfer card</text>
			</view>
			<view class="flex-col group_5">
				<view class="iptbox">
					<input type="number" placeholder="请输入转账数量" />
				</view>
				<text class="self-start text_7">可转账数量(张)：100</text>
			</view>
			<view class="flex-col justify-start items-center button"><text class="font_1 text_8">转账</text></view>
		</view>
	</view>
</template>

<script>
	import {
		getAiordernumber,
	} from '@/api/api.js';
	export default {
		data() {
			return {

			};
		},
		onLoad() {
			this.gettrannum()
		},
		methods: {
			gettrannum(){
				getAiordernumber().then(res => {
					
				})
			},
		}
	}
</script>

<style lang="scss">
	.container {
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
			padding: 23.08rpx 30.77rpx 888.46rpx;
			overflow-y: auto;
			.iptbox{
				@include flexLeft;
				width: 100%;
				height: 96rpx;
				padding: 24rpx;
				border-radius: 8rpx;
				background: #F8F8F8;
				input{
					@include flexLeft;
					width: 100%;
				}
			}
			.group_4 {
				margin-top: 53.85rpx;

				.font_1 {
					font-size: 32.69rpx;
					font-family: MiSans;
					line-height: 30.77rpx;
				}

				.text_5 {
					color: #006ae3;
				}

				.text_6 {
					color: #00000080;
					line-height: 26.92rpx;
					text-transform: uppercase;
				}
			}

			.space-x-10 {

				&>view:not(:first-child),
				&>text:not(:first-child),
				&>image:not(:first-child) {
					margin-left: 19.23rpx;
				}
			}

			.group_5 {
				margin-top: 69.23rpx;

				.text_7 {
					margin-top: 19.23rpx;
					color: #808080;
					font-size: 25rpx;
					font-family: MiSans;
					line-height: 23.08rpx;
				}
			}

			.button {
			  margin-top: 57.69rpx;
			  padding: 30.77rpx 0;
			  background-image: linear-gradient(90deg, #0031e3 0%, #d000e3 100%);
			  border-radius: 7.69rpx;
			  .font_1 {
			    font-size: 32.69rpx;
			    font-family: MiSans;
			    line-height: 30.77rpx;
			  }
			  .text_8 {
			    color: #ffffff;
			  }
			}
		}
	}
</style>