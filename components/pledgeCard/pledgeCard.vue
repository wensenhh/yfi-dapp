<template>
	<view>
		<view class="sidebox-box" v-for="(item,i) in pledgeList" :key="i">
			<view class="sidebox-box-onebox">
				<view class="sidebox-box-onebox-left">
					<view class="sidebox-box-onebox-left-title"><span>{{item.core_num}}</span>CORE</view>
					<view class="sidebox-box-onebox-left-icon">
						<image src="../../static/jiahao.png" mode=""></image>
					</view>
					<view class="sidebox-box-onebox-left-title"><span>{{item.yfi_num}}</span>YFI</view>
				</view>
				<view class="sidebox-box-onebox-right">{{item.status}}</view><!-- {{$t('index.going')}} -->
			</view>
			<view class="sidebox-box-twobox">
				<view>{{$t('index.total') + $t('index.earnings')}}<span>{{item.total_money}}</span></view>
				<view class="sidebox-box-twobox-centerbox"></view>
				<view>{{$t('index.keling') + $t('index.earnings')}}<span>{{item.pay_money}}</span></view>
			</view>
			<view class="sidebox-box-twobox">
				<view>{{$t('index.pledgeremainingday')}}<span>{{item.day}}</span></view>
				<view class="sidebox-box-twobox-centerbox"></view>
				<view>{{$t('index.yield')}}<span>{{item.buy_price}}%</span></view>
			</view>
			<view class="sidebox-box-threebox">
				<view class="sidebox-box-threebox-time">{{item.create_time}}</view>
				<view class="sidebox-box-threebox-btn" @click="getearnings(item.id)"
					v-if="item.status_name === 1 || (item.status_name === 2 && item.pay_money > 0)">
					{{$t('index.getqu')}}</view>
				<view class="sidebox-box-threebox-btn" @click="getredemption(item.id)"
					v-if="item.status_name === 2 && item.pay_money == 0">{{$t('index.redemption')}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getEarnings,
		getRedemption
	} from '@/api/api.js';
	import {
		ethers
	} from "ethers";
	export default {
		name: "pledgeCard",
		data() {
			return {

			};
		},
		props: {
			pledgeList: {
				type: Array,
				debugger: []
			}
		},
		methods: {
			// 赎回
			async getredemption(id) {
				let that = this;
				const address = await that.$tools.getAddress()
				const signkey = await that.$tools.signMessage('receive award')
				const signres = await that.$tools.verifyMessage({
					message: 'receive award',
					address: address,
					signature: signkey
				})
				// try{
				// 	const signres = await that.$tools.verifyMessage({
				// 		message: 'receive award',
				// 		address: address,
				// 		signature: signkey
				// 	})
				// 	console.log(signres)
				// 	if(!signres){
				// 		return false
				// 	}
				// }catch(e){
				// 	//TODO handle the exception
				// 	console.log("用户拒绝签名")
				// 	return false
				// }
				uni.showModal({
					title: '提示',
					content: that.$t('index.getredemptionanswers'),
					success(res) {
						if (res.confirm) {
							getRedemption({
								id: id
							}).then(res => {
								that.$tools.toast(that.$t('index.redemptionsuccess'))
								that.$emit('getList');
							}).catch(err => {
								that.$tools.toast(err)
							})
						}
					}
				})
			},
			// 领取收益
			async getearnings(id) {
				let that = this;
				const address = await that.$tools.getAddress()
				const signkey = await that.$tools.signMessage('receive award')
				const signres = await that.$tools.verifyMessage({
					message: 'receive award',
					address: address,
					signature: signkey
				})
				// try{
				// 	const signres = await that.$tools.verifyMessage({
				// 		message: 'receive award',
				// 		address: address,
				// 		signature: signkey
				// 	})
				// 	console.log(signres)
				// 	if(!signres){
				// 		return false
				// 	}
				// }catch(e){
				// 	//TODO handle the exception
				// 	console.log("用户拒绝签名")
				// 	return false
				// }

				uni.showModal({
					title: '提示',
					content: that.$t('index.getpledgeanswers'),
					success(res) {
						if (res.confirm) {
							getEarnings({
								id: id
							}).then(res => {
								that.$tools.toast(that.$t('index.earningsSuccess'))
								that.$emit('getList');
							}).catch(err => {
								that.$tools.toast(err)
							})
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.sidebox-box {
		width: 100%;
		padding: 36rpx 24rpx;
		border-radius: 16rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		flex-direction: column;
		margin-top: 24rpx;

		&-onebox {
			display: flex;
			justify-content: space-between;
			align-items: center;

			&-left {
				display: flex;
				justify-content: inherit;
				align-items: center;
				width: 66%;

				&-title {
					font-size: 26rpx;
					color: #000000;

					span {
						font-size: 30rpx;
						color: #FF2929;
						margin-right: 6rpx;
					}
				}

				&-icon {
					width: 32rpx;
					height: 32rpx;
				}
			}

			&-right {
				@include flexCenter;
				width: 144rpx;
				height: 64rpx;
				background-color: rgba(11, 172, 47, 0.1);
				border-radius: 8rpx;
				color: #0BAC2F;
			}
		}

		&-twobox {
			@include flexGrid;
			margin-top: 42rpx;
			align-items: center;

			>view {
				width: 49%;
				font-size: 26rpx;
				color: rgba(0, 0, 0, 0.50);

				>span {
					font-size: 30rpx;
					color: #000000;
					padding-left: 8rpx;
				}

				&:last-child {
					@include flexRight;
				}
			}

			&-centerbox {
				width: 1rpx !important;
				height: 40rpx;
				background-color: rgba(0, 0, 0, 0.10);
				transform: scaleX(0.5)
			}
		}

		&-threebox {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 48rpx;

			&-time {
				font-size: 30rpx;
				color: rgba(0, 0, 0, 0.50);
			}

			&-btn {
				@include flexCenter;
				width: 128rpx;
				height: 64rpx;
				background-color: #006AE3;
				border-radius: 8rpx;
				color: #FFFFFF;
				font-size: 30rpx;
				font-weight: bold;
			}
		}
	}
</style>