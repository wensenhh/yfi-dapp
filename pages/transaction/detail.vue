<template>
	<view class="container">
		<view class="initHeader">
			<view class="initHeader-box">
				<view class="initHeader-box-left" @click="$tools.back(1)">
					<image src="../../static/return.png" mode=""></image>
				</view>
				<view class="initHeader-box-center">
					購買記錄
				</view>
				<view class="initHeader-box-right" @click="$tools.noOpen()">一鍵領取
					<!-- <view class="" style="width: 40upx;"></view> -->
				</view>
			</view>
		</view>
		<view class="flex-col justify-start flex-auto group_3">
			<view class="grid">
				<view class="flex-col grid-item space-y-12" v-for="item in mybuyList">
					<video class="shrink-0 image_5" :autoplay="true" :loop="true"
								:controls="false"
								:enable-progress-gesture="true"
						:src="'../../static/nft' + item.goodsid + '.mp4'"></video>
					<view class="flex-row justify-between items-center group_4">
						<text class="font_1 text_4">X{{item.number}}</text>
						<view class="flex-col justify-start items-center text-wrapper" @click="$tools.noOpen()"><text class="font_2">領取</text>
						</view>
					</view>
				</view>
			</view>
			<view class="nomore" v-if="mybuyList.length === 0">
				暫無數據~
			</view>
		</view>
	</view>
</template>

<script>
	import {
		nftbuyList
	} from '@/api/api.js';
	const Web3 = require("@/common/getWeb3");
	import web3utils from '@/common/web3Utils.js';
	export default {
		data() {
			return {
				mybuyList: []
			};
		},
		onLoad() {
			this.getbugnftList()
		},
		methods: {
			getbugnftList() {
				nftbuyList().then(res => {
					this.mybuyList = res.data.list
				})
			},
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #F8F8F8;
		min-height: 100vh;
		.nomore{
			@include flexCenter;
			margin-top: 160rpx;
		}
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
	}

	.group_3 {
		padding: 23.08rpx 0 309.62rpx;
		overflow-y: auto;

		.grid {
			margin: 0 30.77rpx;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			row-gap: 25rpx;
			column-gap: 25rpx;

			.grid-item {
				padding-bottom: 23.08rpx;
				background-color: #ffffff;
				border-radius: 15.38rpx;

				.image_5 {
					width: 332.69rpx;
					height: 246.15rpx;
				}

				.group_4 {
					padding: 0 15.38rpx;

					.font_1 {
						font-size: 28.85rpx;
						font-family: MiSans;
						line-height: 23.08rpx;
						color: #000000;
					}

					.text_4 {
						text-transform: uppercase;
					}

					.text-wrapper {
						padding: 15.38rpx 0;
						background-color: #006ae3;
						border-radius: 7.69rpx;
						width: 123.08rpx;
						height: 61.54rpx;

						.font_2 {
							font-size: 28.85rpx;
							font-family: MiSans;
							line-height: 26.92rpx;
							color: #ffffff;
						}
					}
				}
			}

			.space-y-12 {

				&>view:not(:first-child),
				&>text:not(:first-child),
				&>image:not(:first-child) {
					margin-top: 23.08rpx;
				}
			}
		}
	}
</style>