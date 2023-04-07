<template>
	<view class="container">
		<view class="initHeader">
			<view class="initHeader-box">
				<view class="initHeader-box-left" @click="$tools.back(1)">
					<image src="../../static/return.png" mode=""></image>
				</view>
				<view class="initHeader-box-center">

				</view>
				<view class="initHeader-box-right" @click="$tools.jump('/pages/transaction/detail')">購買記錄
					<!-- <view class="" style="width: 40upx;"></view> -->
				</view>
			</view>
		</view>
		<view class="topbar">
			<view :class="navbarindex === 2 ? 'active' : ''" @click="changetab(2)">購買</view>
			<view :class="navbarindex === 3 ? 'active' : ''" @click="$tools.noOpen()">挂賣</view>
		</view>
		<view class="flex-col justify-start page">
			<view class="flex-col group_2">
				<view class="flex-col group_3 space-y-12">
					<view class="flex-col space-y-12">
						<view class="flex-col list-item" :key="i" v-for="(item, i) in mynftList">
							<!-- <image class="shrink-0 image_5"
								src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641bf7ba5a7e3f031045ebb8/64255cc099e5b100119d3490/16801703696747487918.png" /> -->
							<video :id="'videoPlayer'+ item.id" class="shrink-0 image_5" :autoplay="true" :loop="true"
								:controls="false"
								:enable-progress-gesture="true" :src="'../../static/nft' + item.id + '.mp4'"></video>
							<view class="flex-row justify-between items-center group_4">
								<view class="flex-row items-baseline space-x-6">
									<text class="font_2 text_4">{{item.allprice}}</text>
									<text class="font_1 text_4">CORE</text>
								</view>
								<view class="flex-row items-center space-x-5">
									<image class="shrink-0 image_6" @click="subnum(i)"
										src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641bf7ba5a7e3f031045ebb8/64255cc099e5b100119d3490/16801703699298177656.png" />
									<text class="font_2 text_4">{{item.number}}</text>
									<image class="shrink-0 image_6" @click="addnum(i)"
										src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641bf7ba5a7e3f031045ebb8/64255cc099e5b100119d3490/16801703699333179215.png" />
								</view>
							</view>
							<view class="flex-col justify-start items-center button" @click="transaction(item)">
								<text class="font_3" v-if="navbarindex === 2">購買</text>
								<text class="font_3" v-if="navbarindex === 3">出售</text>
							</view>
						</view>
					</view>
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
	const Web3 = require("@/common/getWeb3");
	import web3utils from '@/common/web3Utils.js';
	import {
		yfiaddr,
		nftaddr,
		yfiabi,
		tokenabi,
		nftabi
	} from "@/common/yfiabi";
	import {
		ethers
	} from "ethers";
	export default {
		data() {
			return {
				navbarindex: 2,
				approveFlag: false,
				address: uni.getStorageSync('address'),
				userbalance: {
					core_num: 0,
					yfi_num: 0
				},
				mynftList: [],
				videoContext: null
			};
		},
		onLoad() {
			this.getBalance()
			this.nftList()
		},
		onReady() {
		},
		methods: {
			nftList() {
				nftList().then(res => {
					let data = res.data
					data.forEach(item => {
						item.allprice = item.income_ratio
					})
					this.mynftList = data
					// this.$nextTick(() => {
					// 	this.videoContext = uni.createVideoContext('videoPlayer'+res.data[0].id, this);
					// 	console.log(this.videoContext)
					// 	this.videoContext.play()
					// })
				})
			},
			getBalance() {
				getUserBalance().then(res => {
					let web3 = window.web3
					this.userbalance = {
						core_num: Number(web3.utils.fromWei(res.data.eth_num.toString(), "ether")).toFixed(4),
						yfi_num: Number(web3.utils.fromWei(res.data.yfinum.toString(), "ether")).toFixed(4)
					}
				})
			},
			transaction(item) {
				let that = this
				console.log(Number(item.allprice))
				console.log(Number(this.userbalance.core_num))
				if (Number(item.allprice) > Number(this.userbalance.core_num)
					.toFixed(4)) {
					return this.$tools.toast('余额不足~')
				}
				uni.showLoading({
					title: '購買中~',
					mask: true
				})
				createnftId({
					id: item.id,
					number: item.number,
				}).then(res => {
					try {
						let web3 = window.web3
						let provider = new ethers.providers.Web3Provider(window.ethereum);
						const signer = provider.getSigner();
						let MyContract = new ethers.Contract(nftaddr, nftabi, signer);
						// let MyContract = web3utils.createContract(nftabi, nftaddr, this.address)
						const allnum = web3.utils.toWei(item.allprice.toString(), "ether")
						console.log('订单ID=',res.data)
						MyContract.recharge(res.data,{
							value: allnum
						}).then(res => {
							console.log('购买成功=',res)
							that.$tools.toast('購買成功~')
							that.nftList()
							uni.hideLoading()
						}).catch(err => {
							console.error("購買失敗", err)
							uni.hideLoading()
						})
					} catch (error) {
						console.error("trigger smart contract error", error)
						uni.hideLoading()
					}
				})
			},
			subnum(i) {
				if (this.mynftList[i].number === 1) return false
				this.mynftList[i].number -= 1
				this.mynftList[i].allprice = this.$tools.accMul(Number(this.mynftList[i].income_ratio), this.mynftList[i].number)
			},
			addnum(i) {
				if (this.mynftList[i].number === 999) return false
				this.mynftList[i].number += 1
				this.mynftList[i].allprice = this.$tools.accMul(Number(this.mynftList[i].income_ratio), this.mynftList[i].number)
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
	.container {
		background-color: #F8F8F8;

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
	}

	.page {
		background-color: #f8f8f8;
		width: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		height: 100%;

		.group_2 {
			height: 3542.31rpx;
			overflow-y: auto;

			.section {
				padding: 32.69rpx 0 23.08rpx;
				background-color: #ffffff;

				.section_2 {
					margin: 0 30.77rpx;
					padding: 3.85rpx 7.69rpx;
					background-color: #f8f8f8;
					border-radius: 7.69rpx;

					.text-wrapper {
						padding: 23.08rpx 0;
						flex: 1 1 336.54rpx;
						border-radius: 7.69rpx;
						height: 69.23rpx;

						.text_3 {
							line-height: 26.92rpx;
						}
					}

					.text-wrapper_2 {
						padding: 23.08rpx 0;
						flex: 1 1 336.54rpx;
						background-color: #006ae3;
						border-radius: 7.69rpx;
						height: 69.23rpx;
					}
				}
			}

			.group_3 {
				margin: 23.08rpx 0 -428.85rpx;
				padding: 0 30.77rpx;

				.image_7 {
					background-color: #ffffff;
					border-radius: 15.38rpx 15.38rpx 0 0;
					overflow: hidden;
					width: 688.46rpx;
					height: 430.77rpx;
				}
			}

			.space-y-12 {

				&>view:not(:first-child),
				&>text:not(:first-child),
				&>image:not(:first-child) {
					margin-top: 23.08rpx;
				}

				.list-item {
					padding-bottom: 23.08rpx;
					background-color: #ffffff;
					border-radius: 15.38rpx;
					overflow: hidden;

					.image_5 {
						width: 688.46rpx;
						height: 430.77rpx;
					}

					.group_4 {
						margin-top: 23.08rpx;
						padding: 0 15.38rpx;

						.space-x-6 {

							&>view:not(:first-child),
							&>text:not(:first-child),
							&>image:not(:first-child) {
								margin-left: 11.54rpx;
							}

							.font_1 {
								font-size: 25rpx;
								font-family: MiSans;
								line-height: 19.23rpx;
								color: #00000080;
							}
						}

						.space-x-5 {

							&>view:not(:first-child),
							&>text:not(:first-child),
							&>image:not(:first-child) {
								margin-left: 9.62rpx;
							}

							.image_6 {
								width: 61.54rpx;
								height: 61.54rpx;
							}
						}

						.text_4 {
							text-transform: uppercase;
						}
					}

					.button {
						margin: 23.08rpx 15.38rpx 0;
						padding: 30.77rpx 0;
						background-color: #006ae3;
						border-radius: 7.69rpx;
					}
				}
			}

			.font_2 {
				font-size: 28.85rpx;
				font-family: MiSans;
				line-height: 23.08rpx;
				color: #000000;
			}

			.font_3 {
				font-size: 28.85rpx;
				font-family: MiSans;
				line-height: 26.92rpx;
				color: #ffffff;
			}
		}
	}
</style>