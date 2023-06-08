import service from '@/common/request.js'
 
/**
 * 授权登录
 * @param {*} data 
 */
export function Login(data) {
	return service({
		url: '/Login/register',
		method: 'post',
		params: {},
		data
	})
}

/**
 * 最新公告
 * @param {*} data 
 */
export function getNewNotice(data) {
	return service({
		url: '/Index/newslsat',
		method: 'POST',
		params: {},
		data
	})
}

/**
 * 质押天数
 * @param {*} data 
 */
export function getPledgeTimes(data) {
	return service({
		url: '/Product/getIndexGoodsList',
		method: 'post',
		params: {},
		data
	})
}

/**
 * 公告列表
 * @param {*} data 
 */
export function getNoticeList(data) {
	return service({
		url: '/News/index',
		method: 'post',
		params: {},
		data
	})
}

/**
 * 公告详情
 * @param {*} data 
 */
export function getNoticeDetail(data) {
	return service({
		url: '/News/info',
		method: 'post',
		params: {},
		data
	})
}

/**
 * 获取质押Orderid
 * @param {*} data 
 */
export function getPledgeId(data) {
	return service({
		url: '/Product/buyProduct',
		method: 'post',
		params: {},
		data
	})
}

/**
 * 获取首页质押列表
 * @param {*} data 
 */
export function getPledgeHome(data) {
	return service({
		url: '/Index/orderlsat',
		method: 'post',
		params: {},
		data
	})
}

/**
 * 获取订单列表
 * @param {*} data 
 */
export function getPledgeList(data) {
	return service({
		url: '/Product/getUserOrder',
		method: 'post',
		params: {},
		data
	})
}

/**
 * 用户领取收益
 * @param {*} data 
 */
export function getEarnings(data) {
	return service({
		url: '/Product/confirmOrder',
		method: 'post',
		params: {},
		data
	})
}

/**
 * 用户赎回
 * @param {*} data 
 */
export function getRedemption(data) {
	return service({
		url: '/Product/delOrder',
		method: 'post',
		params: {},
		data
	})
}

/**
 * 获取币价格
 * @param {*} data 
 */
export function getCoinPrice(data) {
	return service({
		url: '/Index/getprice',
		method: 'post',
		params: {},
		data
	})
}

/**
 * 获取用户余额
 * @param {*} data 
 */
export function getUserBalance(data) {
	return service({
		url: '/Product/getUsermoney',
		method: 'post',
		params: {},
		data
	})
}

/**
 * 获取邀请链接
 * @param {*} data 
 */
export function getUserInvied(data) {
	return service({
		url: '/User/getUserInfo',
		method: 'post',
		params: {},
		data
	})
}

/**
 * 获取nft卡牌
 * @param {*} data 
 */
export function nftList(data) {
	return service({
		url: '/Goods/goodsList',
		method: 'post',
		params: {},
		data
	})
}

/**
 * 生成nft=》orderid
 * @param {*} data 
 */
export function createnftId(data) {
	return service({
		url: '/Goods/buyProduct',
		method: 'post',
		params: {},
		data
	})
}

/**
 * nft购买记录
 * @param {*} data 
 */
export function nftbuyList(data) {
	return service({
		url: 'Goods/getAiorder',
		method: 'post',
		params: {},
		data
	})
}

/**
 * 我的团队
 * @param {*} data 
 */
export function myTeamList(data) {
	return service({
		url: '/User/myTeam',
		method: 'post',
		params: {},
		data
	})
}

/**
 * 可转账数量
 * @param {*} data 
 */
export function getAiordernumber(data) {
	return service({
		url: '/Goods/getAiordernumber',
		method: 'post',
		params: {},
		data
	})
}

/**
 * 兑换卡牌
 * @param {*} data 
 */
export function conversionnft(data) {
	return service({
		url: '/Goods/aiorderToVip',
		method: 'post',
		params: {},
		data
	})
}

/**
 * 兑换记录
 * @param {*} data 
 */
export function getconverinfo(data) {
	return service({
		url: '/Goods/aiViporderList',
		method: 'post',
		params: {},
		data
	})
}

/**
 * nft订单兑换
 * @param {*} data 
 */
export function getnfttoearing(data) {
	return service({
		url: '/Goods/aiorderExchange',
		method: 'post',
		params: {},
		data
	})
}