<template>
	<view class="container">
		<view class="flex-col flex-auto group_3">
			<view class="topbar">
				<view :class="navbarindex === 2 ? 'active' : ''" @click="changetab(2)">转账记录</view>
				<view :class="navbarindex === 3 ? 'active' : ''" @click="changetab(3)">接收记录</view>
			</view>
			<view class="flex-col section_3 space-y-8">
				<view class="flex-col items-start space-y-4">
					<view class="flex-row items-center group_4 space-x-14">
						<text class="shrink-0 font_1">发送方</text>
						<text class="flex-auto font_2">Tywquash****ysau327U</text>
					</view>
					<view class="flex-row items-center group_4 space-x-14">
						<text class="shrink-0 font_1">接收方</text>
						<text class="flex-auto font_2">Tywquash****ysau327U</text>
					</view>
				</view>
				<view class="flex-row space-x-6">
					<text class="font_3">转账数量</text>
					<text class="font_3">1张</text>
				</view>
			</view>
			<view class="flex-col section_3 space-y-8">
				<view class="flex-col items-start space-y-4">
					<view class="flex-row items-center group_4 space-x-14">
						<text class="shrink-0 font_1">发送方</text>
						<text class="flex-auto font_2">Tywquash****ysau327U</text>
					</view>
					<view class="flex-row items-center group_4 space-x-14">
						<text class="shrink-0 font_1">接收方</text>
						<text class="flex-auto font_2">Tywquash****ysau327U</text>
					</view>
				</view>
				<view class="flex-row space-x-6">
					<text class="font_3">转账数量</text>
					<text class="font_3">1张</text>
				</view>
			</view>
			<view class="flex-col section_3 space-y-8">
				<view class="flex-col items-start space-y-4">
					<view class="flex-row items-center group_4 space-x-14">
						<text class="shrink-0 font_1">发送方</text>
						<text class="flex-auto font_2">Tywquash****ysau327U</text>
					</view>
					<view class="flex-row items-center group_4 space-x-14">
						<text class="shrink-0 font_1">接收方</text>
						<text class="flex-auto font_2">Tywquash****ysau327U</text>
					</view>
				</view>
				<view class="flex-row space-x-6">
					<text class="font_3">转账数量</text>
					<text class="font_3">1张</text>
				</view>
			</view>
			<view class="flex-col section_3 space-y-8">
				<view class="flex-col items-start space-y-4">
					<view class="flex-row items-center group_4 space-x-14">
						<text class="shrink-0 font_1">发送方</text>
						<text class="flex-auto font_2">Tywquash****ysau327U</text>
					</view>
					<view class="flex-row items-center group_4 space-x-14">
						<text class="shrink-0 font_1">接收方</text>
						<text class="flex-auto font_2">Tywquash****ysau327U</text>
					</view>
				</view>
				<view class="flex-row space-x-6">
					<text class="font_3">转账数量</text>
					<text class="font_3">1张</text>
				</view>
			</view>
			<view class="flex-col section_3 space-y-8">
				<view class="flex-col items-start space-y-4">
					<view class="flex-row items-center group_4 space-x-14">
						<text class="shrink-0 font_1">发送方</text>
						<text class="flex-auto font_2">Tywquash****ysau327U</text>
					</view>
					<view class="flex-row items-center group_4 space-x-14">
						<text class="shrink-0 font_1">接收方</text>
						<text class="flex-auto font_2">Tywquash****ysau327U</text>
					</view>
				</view>
				<view class="flex-row space-x-6">
					<text class="font_3">转账数量</text>
					<text class="font_3">1张</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		nftList,
		getUserBalance,
		createnftId
	} from '@/api/api.js';
	export default {
		data() {
			return {
				navbarindex: 2,
				logList: []
			};
		},
		onLoad() {
			this.getlogList()
		},
		methods: {
			getlogList() {
				nftList().then(res => {
					let data = res.data
					data.forEach(item => {
						item.allprice = item.income_ratio
					})
					this.logList = data
				})
			},
			changetab(i) {
				this.navbarindex = i
				// 1. 重置关键数据
				this.queryObj.pagenum = 1
				this.total = 0
				this.isloading = false
				// this.pledgeList = []
				// this.getPledgeList()
			},
		}
	}
</script>

<style lang="scss">
	.topbar {
		padding: 24rpx 20rpx;
		background-color: #ffffff;
		display: flex;
		width: 100%;

		>view {
			@include flexCenter;
			background-color: #F9F9F9;
			font-size: 30rpx;
			font-weight: bold;
			color: #000000;
			width: 50%;
			height: 80rpx;
			border-radius: 16rpx;
		}

		.active {
			background-color: #006AE3;
			color: #ffffff;
		}
	}

	.group_3 {
		padding-bottom: 201.92rpx;
		overflow-y: auto;

		.section {
			padding: 23.08rpx 0;
			background-color: #ffffff;

			.section_2 {
				margin: 0 30.77rpx;
				padding: 3.85rpx 7.69rpx;
				background-color: #f8f8f8;
				border-radius: 7.69rpx;

				.text-wrapper {
					padding: 23.08rpx 0;
					flex: 1 1 336.54rpx;
					background-color: #006ae3;
					border-radius: 7.69rpx;
					height: 69.23rpx;

					.text_3 {
						color: #ffffff;
					}
				}

				.text-wrapper_2 {
					padding: 23.08rpx 0;
					flex: 1 1 336.54rpx;
					border-radius: 7.69rpx;
					height: 69.23rpx;

					.text_4 {
						color: #000000;
					}
				}
			}
		}

		.section_3 {
			margin: 23.08rpx 30.77rpx 0;
			padding: 26.92rpx 23.08rpx 34.62rpx;
			background-image: linear-gradient(270deg, #e5ffff 0%, #cadcff 100%);
			border-radius: 15.38rpx;
			overflow: hidden;

			.space-y-4 {

				&>view:not(:first-child),
				&>text:not(:first-child),
				&>image:not(:first-child) {
					margin-top: 7.69rpx;
				}

				.group_4 {
					width: 424.04rpx;

					.font_2 {
						font-size: 28.85rpx;
						font-family: MiSans;
						line-height: 46.15rpx;
						color: #303030;
					}
				}

				.space-x-14 {

					&>view:not(:first-child),
					&>text:not(:first-child),
					&>image:not(:first-child) {
						margin-left: 26.92rpx;
					}
				}
			}

			.space-x-6 {

				&>view:not(:first-child),
				&>text:not(:first-child),
				&>image:not(:first-child) {
					margin-left: 11.54rpx;
				}

				.font_3 {
					font-size: 25rpx;
					font-family: MiSans;
					line-height: 23.08rpx;
					color: #808080;
				}
			}
		}

		.space-y-8 {

			&>view:not(:first-child),
			&>text:not(:first-child),
			&>image:not(:first-child) {
				margin-top: 15.38rpx;
			}
		}

		.font_1 {
			font-size: 28.85rpx;
			font-family: MiSans;
			line-height: 26.92rpx;
			color: #303030;
		}
	}
</style>