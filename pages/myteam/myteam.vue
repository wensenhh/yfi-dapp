<template>
	<view class="container">
		<view class="flex-col flex-auto group_2">
		  <view class="flex-col section space-y-22">
		    <view class="flex-row items-center self-start space-x-8">
		      <image
		        class="shrink-0 image_6"
		        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641bf7ba5a7e3f031045ebb8/64255cc099e5b100119d3490/16805133119982664278.png"
		      />
		      <text class="flex-auto font_4">{{address | hideaddress(address)}}</text>
		    </view>
		    <view class="flex-row justify-between items-center">
		      <view class="flex-row items-center space-x-8">
		        <text class="font_5">邀请链接</text>
		        <text class="font_5 text_3">{{userinvit}}</text>
		      </view>
			  <image class="image_7" src="../../static/copy_icon.png" mode="" @tap="$tools.copy(userinvit)"></image>
		    </view>
		  </view>
		  <view class="flex-row justify-between items-center section_2">
		    <text class="font_1 text_4">共 10000份</text>
		    <text class="font_4 text_5">剩余 {{10000 - teamList.ordertotal}}份</text>
		  </view>
		  <view class="flex-col group_4 space-y-18">
		    <text class="self-start font_1 text_6">直推列表</text>
		    <view class="flex-col view space-y-28" v-for="(item,i) in teamList.firstList">
		      <view class="flex-row justify-between items-center">
		        <view class="flex-row items-center space-x-8">
		          <image
		            class="shrink-0 image_6"
		            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641bf7ba5a7e3f031045ebb8/64255cc099e5b100119d3490/16805133119982664278.png"
		          />
		          <text class="font_4">{{item.account | hideaddress(item.account)}}</text>
		        </view>
		        <text class="font_4 text_8">x{{item.ordernumber}}</text>
		      </view>
		      <view class="flex-row items-baseline space-x-6">
		        <text class="font_5">注册时间</text>
		        <text class="font_5 text_9">{{item.create_time}}</text>
		      </view>
		    </view>
		  </view>
		  <view class="nomore" v-if="teamList.firstList.length == 0">
		  	暫無數據~
		  </view>
		</view>
	</view>
</template>

<script>
	import {
		myTeamList,
		getUserInvied
	} from '@/api/api.js';
	export default {
		data() {
			return {
				teamList: {},
				userinvit: {},
				address: uni.getStorageSync('address')
			};
		},
		onLoad() {
			this.getUserInvied()// 获取邀请链接
			this.getmyteam()
		},
		methods: {
			getUserInvied(){
				getUserInvied().then(res => {
					this.userinvit = res.data.shareurl
				})
			},
			getmyteam(){
				myTeamList().then(res=> {
					this.teamList = res.data
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #F8F8F8;
		min-height: 100vh;
		padding-bottom: 100rpx;
		.nomore{
				  @include flexCenter;
				  color: #000000;
				  margin-top: 300rpx;
		}
	}
	.group_2 {
	  padding: 21.15rpx 30.77rpx 0;
	  .section {
	    padding: 46.15rpx 23.08rpx 42.31rpx;
	    background-color: #ffffff;
	    border-radius: 15.38rpx;
	    .group_3 {
	      width: 386.54rpx;
	    }
	    .image_7 {
	      width: 30.77rpx;
	      height: 30.77rpx;
	    }
	  }
	  .space-y-22 {
	    & > view:not(:first-child),
	    & > text:not(:first-child),
	    & > image:not(:first-child) {
	      margin-top: 42.31rpx;
	    }
	  }
	  .section_2 {
	    margin-top: 46.15rpx;
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
	  .font_4 {
	    font-size: 28.85rpx;
	    font-family: MiSans;
	    line-height: 42.31rpx;
	    color: #1a1a1a;
	  }
	  .group_4 {
	    margin: 73.08rpx 0 -11.54rpx;
	    .text_6 {
	      color: #1b1b1b;
	    }
	    .view {
	      padding: 46.15rpx 23.08rpx 53.85rpx;
	      background-color: #ffffff;
	      border-radius: 15.38rpx;
	      .text_8 {
	        color: #006ae3;
	        line-height: 23.08rpx;
	      }
	      .space-x-6 {
	        & > view:not(:first-child),
	        & > text:not(:first-child),
	        & > image:not(:first-child) {
	          margin-left: 11.54rpx;
	        }
	        .text_9 {
	          line-height: 19.23rpx;
	        }
	      }
	    }
	    .space-y-28 {
	      & > view:not(:first-child),
	      & > text:not(:first-child),
	      & > image:not(:first-child) {
	        margin-top: 53.85rpx;
	      }
	    }
	  }
	  .space-y-18 {
	    & > view:not(:first-child),
	    & > text:not(:first-child),
	    & > image:not(:first-child) {
	      margin-top: 34.62rpx;
	    }
	  }
	  .font_1 {
	    font-size: 32.69rpx;
	    font-family: MiSans;
	    line-height: 30.77rpx;
	  }
	  .space-x-8 {
	    & > view:not(:first-child),
	    & > text:not(:first-child),
	    & > image:not(:first-child) {
	      margin-left: 15.38rpx;
	    }
	    .text_3 {
	      line-height: 25rpx;
	    }
	    .text_7 {
	      width: 315.38rpx;
	    }
	  }
	  .image_6 {
	    border-radius: 50%;
	    width: 53.85rpx;
	    height: 53.85rpx;
	  }
	  .font_5 {
	    font-size: 25rpx;
	    font-family: MiSans;
	    line-height: 23.08rpx;
	    color: #808080;
	  }
	}
</style>