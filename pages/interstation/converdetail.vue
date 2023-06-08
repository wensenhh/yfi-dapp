<template>
	<view class="container">
		<view class="flex-col justify-start items-center flex-auto group_2" v-for="(item,i) in infoList" :key="item.id">
		  <view class="flex-col justify-start items-end text-wrapper"><text class="text_3">{{returnlen(item.id)}}#</text></view>
		</view>
	</view>
</template>

<script>
	import {
		getconverinfo,
	} from '@/api/api.js';
	export default {
		data() {
			return {
				infoList: []
			};
		},
		onLoad() {
			this.getinfo()
		},
		methods: {
			getinfo() {
				getconverinfo().then(res => {
					this.infoList = res.data.list
				})
			},
			returnlen(id){
				if(id.length == 1)return '00' + id
				if(id.length == 2)return '0' + id
				return id
			},
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #f8f8f8;
		min-height: 100vh
	}

	.group_2 {
	padding-top: 40rpx;
	  overflow-y: auto;
	  .text-wrapper {
	    padding: 565.38rpx 0 30.77rpx;
	    border-radius: 15.38rpx;
	    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/641bf7ba5a7e3f031045ebb8/64255cc099e5b100119d3490/16819799135505806478.png');
	    background-size: 100% 100%;
	    background-repeat: no-repeat;
	    width: 461.54rpx;
	    .text_3 {
	      margin-right: 53.85rpx;
	      color: transparent;
	      font-size: 61.54rpx;
	      font-family: MiSans;
	      font-weight: 800;
	      line-height: 51.92rpx;
	      letter-spacing: 12.31rpx;
	      background-image: linear-gradient(104.7deg, #ffd600 0%, #e2852f 100%);
	      -webkit-background-clip: text;
	    }
	  }
	}
</style>