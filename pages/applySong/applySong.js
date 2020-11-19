import request from '../../api/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    day: '',
    month: '',
    songList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const username = wx.getStorageSync("userMess")
    if (!username) {
      wx.showToast({
        title: '请你先登录',
        icon: 'none',
        success() {
          wx.reLaunch({
            url: '/pages/login/login',
          })
        }
      })
    } else {
      this.getRecommend(`/recommend/songs`)
    }
    this.setData({
      day: new Date().getDate(),
      month: new Date().getMonth() + 1
    })

  },

  async getRecommend(url) {
    const res = await request(url)
    if (res.code === 200) {
      const resList = res.data.dailySongs.map(item => ({
        id: item.al.id,
        imgUrl: item.al.picUrl,
        userName: item.ar[0].name,
        songName: item.name
      }))
      this.setData({
        songList: resList
      })
    }
  },

  recommend(){
    console.log('....')
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})