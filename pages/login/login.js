import requestMethod from '../../api/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    ps: ''
  },

  async login() {
    const {
      ps,
      phone
    } = this.data
    if (!phone) {
      wx.showToast({
        title: '手机号不能空',
        icon: 'none'
      })
    } else if (!ps) {
      wx.showToast({
        title: '密码不能空',
        icon: 'none'
      })
    } else {
      const res = await requestMethod(`/login/cellphone?phone=${phone}&password=${ps}`)
      console.log(res)
      if (res.code === 200) {
        const data = {
          id: res.profile.userId,
          username: res.profile.nickname,
          avatar: res.profile.avatarUrl
        }
        wx.showToast({
          title: 'title',
          icon: 'success'
        })
        wx.setStorage({
          data,
          key: 'userMess',
        })
        wx.reLaunch({
          url: '/pages/person/person',
        })
      }
    }
  },
  input(event) {
    //得到当前的type
    let type = event.currentTarget.dataset.type
    this.setData({
      //更新当前type 
      [type]: event.detail.value
    })
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


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