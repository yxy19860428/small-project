import { cookie } from 'request'
import {
  config
} from './config'
const requestMethod = (url, data = {}, method = 'get') => {
  let cookie
  try {
    let userMess = wx.getStorageSync('userMess').cookie+";"
    cookie = userMess.split(";;").find(item=> item.indexOf("MUSIC_U") !== -1)
  } catch (error) {
    return;
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${config.host}${url}`,
      data,
      method,
      header:{
        cookie
      },
      success(res) {
        resolve(res.data)
      },
      fail(error) {
        reject(error)
      }
    })
  })
}
export default requestMethod