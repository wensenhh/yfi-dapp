 
//测试
// const IP = 'sapi.ziwuyin.com';

//正式
const IP = 'user.parisn.club';


var ISHTTPS = false;

const webUrl = (ISHTTPS ? 'https://' : 'http://') + IP;
export default {
	webUrl: webUrl,
}
