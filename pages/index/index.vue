<template>
	<view class="container">
		<view class="pagewhite">
			<view class="headerbox">
				<view class="headerbox-left">
					<image src="../../static/YFI.png" mode=""></image>
					<view class="headerbox-left-title">
						YFISWAP
					</view>
				</view>
				<view class="headerbox-right" @click="openlangpop">
					<image src="../../static/langicon.png" mode=""></image>
				</view>
			</view>
			<view class="topbox">
				<view class="topbox-title">
					welcome!
				</view>
				<view class="topbox-address">
					{{address | hideaddress(address)}}
				</view>
			</view>
			<view class="noticebox">
				<view>
					<image src="../../static/noticeicon.png" mode=""></image>
				</view>
				<view class="noticebox-center" @click="$tools.jump('/pages/announcement/announcement')">
					{{$t('index.online') + $t('index.notice')}}：{{noticeObj.title}}
				</view>
				<view>
					<image src="../../static/jiant-you.png" mode=""></image>
				</view>
			</view>
			<view class="tabbarbox">
				<view class="active">{{$t('index.online') + $t('index.pledge')}}</view>
				<view>pledge</view>
			</view>
			<view class="pledgebox">
				<view class="pledgebox-item">
					<view class="pledgebox-item-toptt">
						CORE<image src="../../static/core.png" mode=""></image>
					</view>
					<view class="pledgebox-item-iptbox">
						<input type="number" v-model="corenum" :placeholder="$t('index.placeholder')">
					</view>
				</view>
				<view class="pledgebox-item">
					<view class="pledgebox-item-toptt">
						YFI<image src="../../static/YFI.png" mode=""></image>
					</view>
					<view class="pledgebox-item-iptbox">
						<input type="number" v-model="yfinum" :placeholder="$t('index.placeholder')">
					</view>
				</view>
				<view class="pledgebox-plussign">
					<image src="../../static/jiahao.png" mode=""></image>
				</view>
				<view class="pledgebox-Time">
					<view :class="item.actived ? 'active' : ''" v-for="(item,i) in pledgeTime" @tap="changeTime(i)">{{item.name}} {{$t('index.day')}}</view><!--  -->
				</view>
				<view class="pledgebox-btnbox" v-if="!approveFlag" @click="ApproveYFI">
					{{$t('index.authorization')}}
				</view>
				<view class="pledgebox-btnbox" v-else @click="pledgefun">
					{{$t('index.pledge')}}
				</view>
			</view>
		</view>
		
		<view class="sidebox">
			<view class="tabbarbox">
				<view class="active">{{$t('index.my') + $t('index.pledge')}}</view>
				<view>pledge</view>
			</view>
			<pledgeCard :pledgeList="pledgeList" @getList="getHomePledge"></pledgeCard>
			<view class="sidebox-morebox" @tap="navgoto('/pages/pledge/pledge')">
				{{$t('index.clickmore')}} >
			</view>
		</view>
		<uni-popup ref="langpopup" type="bottom">
			<view class="langbox">
				<view :class="nowlangcode == item.code ? 'active' : ''" v-for="item in locales" @click="onLocaleChange(item)">{{item.text}}</view>
				<view @click="$refs.langpopup.close()">
					{{$t('index.cancel')}}
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	import pledgeCard from '@/components/pledgeCard/pledgeCard.vue';
	import { Login, getNewNotice, getPledgeTimes, getPledgeId, getPledgeHome, getEarnings, getRedemption, getCoinPrice } from '@/api/api.js';
	const Web3 = require("@/common/getWeb3");
	import web3utils from '@/common/web3Utils.js';
	import {
		yfiaddr,
		pledge,
		yfiabi,
		tokenabi
	} from "@/common/yfiabi";
	export default {
		components: {
			uniPopup,
			pledgeCard
		},
		data() {
			return {
				systemLocale: '',
				pledgeTime: [{
					value: 1,
					actived: true
				},{
					value: 10,
					actived: false
				},{
					value: 30,
					actived: false
				},{
					value: 100,
					actived: false
				}],
				address: uni.getStorageSync('address'),
				nowlangcode: '',
				approveFlag: false,
				noticeObj: {},
				pledgeList: [],
				corenum: null,
				yfinum: null,
				userPrice: {},
				pledgeTimeid: null
			}
		},
		watch: {
			corenum(newval,oldval){
				if(!this.userPrice.core || !this.userPrice.yfi){
					return this.$tools.toast('未获取到价格，请等待一会后重试~')
				}
				if(!Number.isInteger(Number(newval))){
					// return this.$tools.toast('请输入正整数~')
				}else{
					console.log('计算yfi数量=' , this.$tools.accDiv(this.$tools.accMul(newval,this.userPrice.core), this.userPrice.yfi))
					this.yfinum = this.$tools.accDiv(this.$tools.accMul(newval,this.userPrice.core), this.userPrice.yfi).toFixed(4)
				}
			},
			yfinum(newval,oldval){
				if(!Number.isInteger(Number(newval))){
					// return this.$tools.toast('请输入正整数~')
				}else{
					console.log('计算core数量=' , this.$tools.accDiv(this.$tools.accMul(newval,this.userPrice.yfi), this.userPrice.core))
					this.corenum = this.$tools.accDiv(this.$tools.accMul(newval,this.userPrice.yfi), this.userPrice.core).toFixed(4)
				}
			},
		},
		computed: {
			locales() {
				return [{
						text: this.$t('locale.en'),
						code: 'en'
					},
					{
						text: this.$t('locale.zh-hans'),
						code: 'zh-Hans'
					},
					{
						text: this.$t('locale.zh-hant'),
						code: 'zh-Hant'
					}
				]
			}
		},
		async onLoad() {
			let systemInfo = uni.getSystemInfoSync();
			let that = this
			this.systemLocale = systemInfo.language;
			this.nowlangcode = uni.getLocale();
			this.isAndroid = systemInfo.platform.toLowerCase() === 'android';
			uni.onLocaleChange((e) => {
				this.nowlangcode = e.locale;
			})
			// 获取地址
			uni.setStorageSync('address', "");
			this.address = await this.$tools.getAddress()
			if (!!uni.getStorageSync('token')){
				if(window.web3.utils){
					that.init()
				}else{
					that.getWeb3fun(() => {
						that.init()
					})
				}
			}else{
				if (!!this.address) {
					uni.setStorageSync('address', this.address);
					that.getLogin(() => {
						if(window.web3.utils){
							that.init()
						}else{
							that.getWeb3fun(() => {
								that.init()
							})
						}
					})
				}else {
					this.$tools.toast('钱包地址获取失败~')
				}
			}
		},
		methods: {
			init(){
				this.allowance()
				this.getHomeNotice()//首页最新公告
				this.getPledgeTimes()//首页质押天数
				this.getUserPrice()//获取代币价格
				this.getHomePledge()//获取首页质押订单
				this.accountfn()// 监测是否切换钱包
			},
			getWeb3fun(callback) {
				let that = this
			    // web3前面必须有window
			    Web3.default.getWeb3().then((res) => {
					window.web3 = res;
					console.log("getWeb3", res);
					return callback && callback()
			    })
			},
			// 监测是否切换钱包
			async accountfn() {
				let that = this
				await window.ethereum.on("accountsChanged", function(accounts) {
					console.log(accounts[0]); //一旦切换账号这里就会执行
					that.address = accounts[0]
					uni.setStorageSync('address', accounts[0])
					that.getLogin(accounts[0])
				});
			},
			// 质押
			async pledgefun(){
				if(!this.corenum || !this.yfinum || this.corenum <= 0){
					return this.$tools.toast(this.$t('index.ipttokennum'))
				}
				uni.showLoading({
					title: this.$t('index.pledgeing'),
					mask:true
				})
				let that = this
				await getPledgeId({
					id: this.pledgeTimeid,
					c_number: this.corenum,
					y_number: this.yfinum
				}).then(res => {
					try {
						let web3 = window.web3
						let MyContract = web3utils.createContract(yfiabi, pledge, this.address)
						const corenum = web3.utils.toWei(this.corenum.toString(), "ether")
						const yfinum = web3.utils.toWei(this.yfinum.toString(), "ether")
						MyContract.methods.twostake(res.data, corenum, yfinum).send({
							from: this.address,
							value: corenum
						}).then(res => {
							that.$tools.toast(that.$t('index.pledgesuccess'))
							that.getHomePledge()
							uni.hideLoading()
						}).catch(err => {
							console.error("用户取消质押", err)
							uni.hideLoading()
						})
					} catch (error) {
						console.error("trigger smart contract error", error)
						uni.hideLoading()
					}
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
								that.getHomePledge()
							}).catch(err => {
								that.$tools.toast(err)
							})
						}
					}
				})
			},
			getHomePledge(){
				getPledgeHome().then(res => {
					this.pledgeList = res.data
				})
			},
			// 授权YFI
			async ApproveYFI() {
				let that = this;
				let data = new Object();
				data['from'] = web3utils.createContract(tokenabi, yfiaddr, that.address);
				data['to'] = web3utils.createContract(tokenabi, pledge, that.address);
				data['account'] = that.address;
				web3utils.approve(data, function() {
					that.approveFlag = true;
					that.allowance()
					that.$tools.toast('Authorize succeeded',true)
				})
			},
			getUserPrice(){
				let that = this
				getCoinPrice().then(res => {
					that.userPrice = res.data
				})
			},
			getLogin(callback){
				Login({
					account: this.address
				}).then(res => {
					this.$tools.toast(this.$t('index.loginsuccess'))
					uni.setStorageSync('token', res.data)
					return callback && callback()
				}).catch(err => {
					console.error('登录结果:', err);
				})
			},
			getHomeNotice(){
				getNewNotice({name: 'wensen'}).then(res => {
					this.noticeObj = res.data
				}).catch(err => {
					console.error('结果:', err);
				})
			},
			getPledgeTimes(){
				getPledgeTimes().then(res => {
					let list = res.data.list;
					list.forEach((item,i) => {
						i === 0 ? item.actived = true : item.actived = false
					})
					this.pledgeTimeid = list[0].id
					this.pledgeTime = list
				}).catch(err => {
					console.error('结果:', err);
				})
			},
			async allowance() {
				// 查询授权额度
				try {
					var web3 = window.web3
					var MyContract = web3utils.createContract(tokenabi, yfiaddr, this.address)
					MyContract.methods.allowance(this.address, pledge).call().then(
						res => {
						let n = web3.utils.fromWei(res, "ether");
						 console.log("授权数量==",n);
						 this.approveFlag = n >= 100000000;
					})
				} catch (error) {
					// this.allowanceBalance = 0;
					console.error("trigger smart contract error", error)
				}
			},
			openlangpop(){
				this.$refs.langpopup.open()
			},
			navgoto(url){
				uni.navigateTo({
					url: url
				})
			},
			changeTime(i){
				let arr = this.pledgeTime
				arr.forEach((item,index) => {
					index === i ? item.actived = true : item.actived = false
				})
				this.pledgeTimeid = arr[i].id
				this.pledgeTime = arr
			},
			onLocaleChange(e) {
				if (this.isAndroid) {
					uni.showModal({
						content: this.$t('index.language-change-confirm'),
						success: (res) => {
							if (res.confirm) {
								uni.setLocale(e.code);
								this.nowlangcode = e.code;
								this.$i18n.locale = e.code;
								this.$refs.langpopup.close()
							}
						}
					})
				} else {
					uni.setLocale(e.code);
					this.nowlangcode = e.code;
					this.$i18n.locale = e.code;
					this.$refs.langpopup.close()
				}
			}
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #F8F8F8;
		>view{
			padding: 0 32rpx;
		}
		.pagewhite{
			background-color: #FFFFFF;
			padding-bottom: 24rpx
		}
		.headerbox {
			@include flexBetween;
			padding: 16rpx 0;
			&-left {
				@include flexCenter;

				image {
					width: 64rpx;
					height: 64rpx;
					border-radius: 50%;
				}

				&-title {
					font-size: 34rpx;
					font-weight: bolder;
					color: #006AE3;
					margin-left: 16rpx;
				}
			}

			&-right {
				@include flexCenter;

				image {
					width: 48rpx;
					height: 48rpx;
					border-radius: 50%;
				}

			}
		}
		.topbox{
			@include flexLeftColumn;
			margin-top: 24rpx;
			&-title{
				font-size: 48rpx;
				font-weight: bolder;
				color: #006AE3;
			}
			&-address{
				font-size: 30rpx;
				color: #545454;
			}
		}
		.noticebox{
			@include threeflexLayout;
			background-color: #F8F8F8;
			width: 100%;
			height: 100rpx;
			border-radius: 16rpx;
			padding: 24rpx;
			margin-top: 48rpx;
			box-sizing: border-box;
			&-center{
				transition: 1s all;
				font-size: 30rpx;
				color: #000000;
				padding: 0 12rpx;
				overflow-x: auto;
				white-space: nowrap;
			}
			>view{
				&:first-child{
					margin-right: 10rpx;
					image{
						width: 48rpx;
						height: 48rpx;
					}
				}
				
				&:last-child{
					margin-left: 10rpx;
					image{
						width: 40rpx;
						height: 40rpx;
					}
				}
			}
			
		}
		.tabbarbox{
			@include flexLeft;
			margin-top: 48rpx;
			>view{
				font-size: 34rpx;
				font-weight: 500;
				color: #000000;
				margin-right: 3%;
			}
			.active{
				color: #006AE3;
			}
		}
		.pledgebox{
			margin-top: 48rpx;
			position: relative;
			&-item{
				width: 100%;
				margin-bottom: 40rpx;
				&-toptt{
					@include flexLeft;
					font-size: 30rpx;
					font-weight: bold;
					color: #000000;
					display: flex;
					image{
						width: 32rpx;
						height: 32rpx;
						border-radius: 50%;
						margin-left: 8rpx;
					}
				}
				&-iptbox{
					@include flexCenter;
					width: 100%;
					height: 96rpx;
					background-color: #F8F8F8;
					border-radius: 16rpx;
					padding: 0 24rpx;
					margin-top: 20rpx;
					input{
						width: 100%;
					}
				}
			}
			&-plussign{
				position: absolute;
				top: 28%;
				left: 43%;
				image{
					border-radius: 50%;
					width: 72rpx;
					height: 72rpx;
				}
			}
			&-Time{
				@include flexGrid;
				margin-top: 24rpx;
				>view{
					@include flexCenter;
					width: calc(25% - 10px);
					height: 72rpx;
					background-color: #F8F8F8;
					border-radius: 8rpx;
					font-size: 30rpx;
					color: #000000;
				}
				.active{
					background-color: rgba(0, 106, 227, 0.1);
					color: #006AE3;
				}
			}
			&-btnbox{
				@include flexCenter;
				width: 100%;
				height: 96rpx;
				background-color: #006AE3;
				border-radius: 8rpx;
				font-size: 34rpx;
				font-weight: bold;
				color: #FFFFFF;
				margin-top: 40rpx;
			}
		}
		.sidebox{
			padding-bottom: 96rpx;
			
			&-morebox{
				@include flexCenter;
				font-size: 26rpx;
				color: rgba(0, 0, 0, 0.50);
				margin-top: 40rpx;
			}
		}
		.langbox{
			width: 100%;
			background-color: #FFFFFF;
			>view{
				@include flexCenter;
				height: 80rpx;
				border-bottom: 1px solid #f8f8f8;
				&:last-child{
					border: none;
					background-color: #f8f8f8;
				}
			}
			.active{
				color: red;
			}
		}
		::-webkit-scrollbar {
		    width: 0px;
		}
	}
</style>
