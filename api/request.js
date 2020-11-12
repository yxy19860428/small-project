import {config} from './config'
const requestMethod = (url,data = {},method='get')=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url:`${config.host}${url}`,
      data,
      method,
      success(res){
        resolve(res.data)
      },
      fail(error){
        reject(error)
      }
    })
  })
}
export default requestMethod