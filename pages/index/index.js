// pages/index/index.js
import requestMethod from "../../api/request";
import { config } from "../../api/config";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    lunbo: [],
    applay:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getImg("/banner");
    this.getApplay('/personalized')
  },
  async getImg(url) {
    const res = await requestMethod(url);
    console.log(res);
    if (res.code === 200) {
      const data = res.banners.map(item=>({
        id:item.encodeId,
        img:item.imageUrl
      }))
       this.setData({ lunbo: data });
    }
  },
  async getApplay(url){
    const res = await requestMethod(url)
    console.log(res)
    if (res.code === 200) {
      const data = res.result.map(item=>({
        id:item.id,
        name:item.name,
        img:item.picUrl
      }))
      this.setData({ applay: data});
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
