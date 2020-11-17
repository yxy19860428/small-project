let startY = 0
let moveY = 0
let disY = 0
import requestMethod from '../../api/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moveDis:"translateY(0);",
    moveTime:'',
    username:'',
    historyPlay:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    const username = await wx.getStorage({
      key: 'userMess',
    })
    this.setData({
      username:username.data
    })
    this.getHistoryPlay(`/user/record?uid=${this.data.username.id}&type=1`)
  },

  async getHistoryPlay(url) {
    const res = await requestMethod(url)
    if(res.code === 200){
      const data = res.weekData.map(item=>({
        id:item.song.al.id,
        imgUrl:item.song.al.picUrl,
        name:item.song.al.name
      }))
      this.setData({
        historyPlay:data
      })
    }
  },

  toLogin(){
    if(this.data.username){
      return;
    }else{
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
    
  },
  touchStart(event){
    this.setData({
      moveTime:''
    })
    startY = event.touches[0].clientY
  },
  touchMove(event){
   moveY = event.touches[0].clientY
   disY = moveY - startY
  if(disY <=0){
   return;
  }
  if(disY >=80){
    disY=80
  }
   this.setData({
     moveDis:`translateY(${disY}rpx)`
   })
  },
  touchEnd(){
    this.setData({
      moveDis:`translateY(0)`,
      moveTime:"all .3s linear"
    })
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