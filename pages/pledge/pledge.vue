<template>
	<view class="container">
		<view class="topbar">
			<view :class="navbarindex === 2 ? 'active' : ''" @click="changetab(2)">{{$t('index.going')}}</view>
			<view :class="navbarindex === 3 ? 'active' : ''" @click="changetab(3)">{{$t('index.finished')}}</view>
		</view>
		<view class="sidebox">
			<pledgeCard :pledgeList="pledgeList" @getList="getPledgeList"></pledgeCard>
			<view class="sidebox-morebox" v-if="!!isloading">
				{{$t('index.nomoredata')}}
			</view>
			<view class="sidebox-morebox" v-else>
				數據加載中...
			</view>
		</view>
	</view>
</template>

<script>
	import pledgeCard from '@/components/pledgeCard/pledgeCard.vue';
	import {
		getPledgeList,
		getEarnings,
		getRedemption
	} from '@/api/api.js';
	export default {
		components: {
			pledgeCard
		},
		data() {
			return {
				navbarindex: 2,
				pledgeList: [],
				queryObj: {
					pagenum: 1,
					pagesize: 10
				},
				isloading: false,
				total: 0
			};
		},
		onLoad() {
			this.getPledgeList()
		},
		// 触底的事件
		onReachBottom() {
			if (this.queryObj.pagenum * this.queryObj.pagesize >= this.total){
				this.isloading = true
				return this.$tools.toast('數據加載完畢!')
			} 

			if (this.isloading) return

			// 让页码值自增+1
			this.queryObj.pagenum++
			this.getPledgeList()
		},
		// 下拉刷新的事件
		onPullDownRefresh() {
		  // 1. 重置关键数据
		  this.queryObj.pagenum = 1
		  this.total = 0
		  this.isloading = false
		  this.pledgeList = []
		 
		  // 2. 重新发起请求
		  this.getPledgeList(() => uni.stopPullDownRefresh())
		},
		methods: {
			getPledgeList(cb) {
				getPledgeList({
					status: this.navbarindex,
					page: this.queryObj.pagenum,
					limit: this.queryObj.pagesize,
				}).then(res => {
					this.isloading = false
					let list = res.data.list
					cb && cb()
					// this.pledgeList = list
					this.pledgeList = [...this.pledgeList, ...list]
					this.total = res.data.total
				})
			},
			// 赎回
			getredemption(id) {
				let that = this;
				uni.showModal({
					title: '提示',
					content: that.$t('index.getredemptionanswers'),
					success(res) {
						if (res.confirm) {
							getRedemption({
								id: id
							}).then(res => {
								that.$tools.toast(that.$t('index.redemptionsuccess'))
								that.getHomePledge()
							}).catch(err => {
								that.$tools.toast(err)
							})
						}
					}
				})
			},
			// 领取收益
			getearnings(id) {
				let that = this;
				uni.showModal({
					title: '提示',
					content: that.$t('index.getpledgeanswers'),
					success(res) {
						if (res.confirm) {
							getEarnings({
								id: id
							}).then(res => {
								that.$tools.toast(that.$t('index.earningsSuccess'))
								that.getPledgeList()
							}).catch(err => {
								that.$tools.toast(err)
							})
						}
					}
				})
			},
			changetab(i) {
				this.navbarindex = i
				// 1. 重置关键数据
				this.queryObj.pagenum = 1
				this.total = 0
				this.isloading = false
				this.pledgeList = []
				this.getPledgeList()
			},
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #F8F8F8;

		>view {
			padding: 0 32rpx;
		}

		.topbar {
			padding: 24rpx 0;
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

		.sidebox {
			padding-bottom: 96rpx;
			min-height: 100vh;

			&-morebox {
				@include flexCenter;
				font-size: 26rpx;
				color: rgba(0, 0, 0, 0.50);
				margin-top: 40rpx;
			}
		}
	}
</style>