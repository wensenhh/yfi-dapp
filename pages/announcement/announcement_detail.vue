<template>
	<view class="pages">
		<!-- <view class="initHeader initHeader--line initHeader--black">
			<view class="initHeader-wrapper">
				<view class="initHeader-back" @click="$tools.back(1)"></view>
				<view class="initHeader-title">{{i18n.otc_xiangq}}</view>
			</view>
		</view>
		<view class="main">
			<view class="newsBox">
				<view class="newsBox-wrapper">
					<view class="newsBox-title">{{ noticeContent.title }}</view>
					<view class="newsBox-date">{{ noticeContent.createTime }}</view>
					<rich-text :nodes="noticeContent.content" class="textImage" style="color:#626266;line-height: 1.8;font-size: 28upx;"></rich-text>
				</view>
			</view>
		</view> -->
		<!-- <view class="initHeader">
			<view class="initHeader-box">
				<view class="initHeader-box-left" @click="$tools.back(1)">
					<image src="../../static/jiant-you.png" mode=""></image>
				</view>
				<view class="initHeader-box-center">
					公告详情
				</view>
				<view class="initHeader-box-right">
					<view class="" style="width: 40upx;"></view>
				</view>
			</view>
		</view> -->
		<view class="content" style="margin-top: 40rpx;">
			<view class="content-title">
				{{ noticeContent.title }}
			</view>
			<view class="content-time">
				{{ noticeContent.create_time }}
			</view>
			<view class="content-detail">
				
			<rich-text :nodes="noticeContent.content" class="textImage" ></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	import { getNoticeDetail } from '@/api/api.js';
	export default {
		data() {
			return {
				pageId: null,
				noticeContent: [],
			};
		},
		onLoad(option) {
			this.pageId = option.value1;
		},
		onShow(){
			this.init();
		},
		computed: {
			i18n() {
				return this.$t('message')
			}
		},
		methods:{
			init(){
				this.getDetailsContent();
			},
			getDetailsContent(){
				getNoticeDetail({
					id: this.pageId,
				}).then(res => {
					this.noticeContent = res.data;
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
.pages {
		width: 100%;
		min-height: 100vh;

		.initHeader {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 50upx;

			.initHeader-box {
				width: 100%;
				@include flexBetween;
				padding: 0 20upx;

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
			}
		}

		.content{
			width: 100%;
			padding: 0 42upx;
			&-title{
				font-size: 28upx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #282828;
				margin-bottom: 20upx;
			}
			&-time{
				font-size: 28upx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #AEAEAE;
				margin-bottom: 40upx;
			}
			&-detail{
				font-size: 24upx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #3E3C44;
			}
		}
	}
</style>
