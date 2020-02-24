/*
ajax请求函数模块封装
返回值：promise对象npm
*/
import axios from 'axios'
export default function ajax (url, data={}, type='GET'){
  return new Promise(function (reslove, reject){
    //执行异步ajax请求
    let promise
    //1.判断是GET请求还是Post请求
    //1.1是get请求
    if (type === 'GET') {
      //1.1.1准备url  query参数
      let dataStr = '' //数据拼接
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if(dataStr !== ''){
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //1.1.2发送get请求
      promise = axios.get(url)
    }else{
      //1.2是post请求，发送请求
      promise = axios.post(url, data)
    }
    //2.请求成功后的回调
    promise.then((response) => {
      //成功调用reslove()
      reslove(response.data)
    }).catch((err) => {
      //失败调用reject()
      reject(err)
    })
  })
}