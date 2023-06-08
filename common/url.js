 
//测试
// const IP = '175.178.52.135';

//正式
const IP = 'user.parisn.club';


var ISHTTPS = false;

const webUrl = (ISHTTPS ? 'https://' : 'http://') + IP;
export default {
	webUrl: webUrl,
}
