 
//测试
// const IP = 'api.ziwuyin.com';

//正式
const IP = 'user.parisn.club';


var ISHTTPS = false;

const webUrl = (ISHTTPS ? 'https://' : 'http://') + IP;
export default {
	webUrl: webUrl,
}
