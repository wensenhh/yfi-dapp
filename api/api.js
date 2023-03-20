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