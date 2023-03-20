<template>
	<view class="container">
		<view class="topbar">
			<view :class="navbarindex === 2 ? 'active' : ''" @click="changetab(2)">{{$t('index.going')}}</view>
			<view :class="navbarindex === 3 ? 'active' : ''" @click="changetab(3)">{{$t('index.finished')}}</view>
		</view>
		<view class="sidebox">
			<pledgeCard :pledgeList="pledgeList" @getList="getPledgeList"></pledgeCard>
			<view class="sidebox-morebox" v-if="pledgeList.length === 0">
				{{$t('index.nomoredata')}}
			</view>
		</view>
	</view>
</template>

<script>
	import pledgeCard from '@/components/pledgeCard/pledgeCard.vue';
	import { getPledgeList, getEarnings, getRedemption } from '@/api/api.js';
	export default {
		components: {
			pledgeCard
		},
		data() {
			return {
				navbarindex: 2,
				pledgeList: []
			};
		},
		onLoad() {
			this.getPledgeList()
		},
		methods: {
			getPledgeList(){
				getPledgeList({
					status: this.navbarindex
				}).then(res => {
					let list = res.data.list
					this.pledgeList = list
				})
			},
			// 赎回
			getredemption(id){
				let that = this;
				uni.showModal({
					title: '提示',
					content: that.$t('index.getredemptionanswers'),
					success(res) {
						if(res.confirm){
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
			getearnings(id){
				let that = this;
				uni.showModal({
					title: '提示',
					content: that.$t('index.getpledgeanswers'),
					success(res) {
						if(res.confirm){
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
			changetab(i){
				this.navbarindex = i
				this.getPledgeList()
			},
		}
	}
</script>

<style lang="scss">
	.container{
		background-color: #F8F8F8;
		>view{
			padding: 0 32rpx;
		}
		.topbar{
			padding: 24rpx 0;
			background-color: #ffffff;
			display: flex;
			width: 100%;
			>view{
				@include flexCenter;
				background-color: #F9F9F9;
				font-size: 30rpx;
				font-weight: bold;
				color: #000000;
				width: 50%;
				height: 80rpx;
				border-radius: 16rpx;
			}
			.active{
				background-color: #006AE3;
				color: #ffffff;
			}
		}
		.sidebox{
			padding-bottom: 96rpx;
			min-height: 100vh;
			&-morebox{
				@include flexCenter;
				font-size: 26rpx;
				color: rgba(0, 0, 0, 0.50);
				margin-top: 40rpx;
			}
		}
	}
</style>
