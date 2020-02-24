/*包含n个接口请求函数模块,暴露接口
  函数返回值：promise对象
*/

import ajax from './ajax'
const BASE_URL = '/api'
/**
 * 箭头函数： x => x * x 相当于 function (x) { return x * x}
 */

// [1、根据经纬度获取位置详情]
export const reqAddress = (geohash) => ajax('${BASE_URL}/position/${geohash}')
// [2、获取食品分类列表]
export const reqFoodTypes = () => ajax(BASE_URL+'/index_category')
// [3、根据经纬度获取商铺列表]
export const reqShops = (longitude, latitude) => ajax(BASE_URL+'/shops', {longitude, latitude})
// [4、根据经纬度和关键字搜索商铺列表]/
export const reqSearchShopList = (keyword, geohash) => ajax('/shops', {keyword, geohash})
// [5、获取一次性验证码]
export const reqOnceCode = () => ajax('/captcha')
// [6、用户名密码登陆]
export const reqLogin = (name, pwd, captcha) => ajax('/login_pwd', {name, pwd, captcha}, 'POST')
// [7、发送短信验证码]
export const reqSendMessageCode = (phone) => ajax('/sendcode', {phone})
// [8、手机号验证码登陆]
export const reqSendPhoneCode = (phone, code) => ajax('/login_sms', {phone, code}, 'POST')
// [9、根据会话获取用户信息]
export const reqGetUserInfo = () => ajax('/userinfo')
// [10、用户登出]
export const reqUserOut = () => ajax('/logout')