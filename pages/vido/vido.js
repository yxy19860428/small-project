import requestMethod from '../../api/request'
Page({
  data: {
    nav: [],
    id:"",
    videoList:[]
  },

  onLoad: function (options) {
    this.getNav(`/video/group/list`)
  },
  async getNav(url) {
    const res = await requestMethod(url)
    if (res.code === 200) {
      const id = res.data[0].id
      const nav = res.data.slice(0, 20).map(item => ({
        id: item.id,
        name: item.name
      }))
      this.setData({
        nav,
        id
      })
      this.getVideoList(id)
    }
  },

 async getVideoList(id){
     const res =  await requestMethod(`/video/group?id=${id}`)
     if(res.code === 301){
       wx.showToast({
         title: 'msg',
       })
     }else if(res.code === 200 ){
       console.log(res)
        const list = res.datas.map(item=>({
          url:item.data.previewUrl
        }))
        this.setData({
          videoList:list
        })
        console.log(this.data.videoList)
     }
  },

  getIndex(event){
    const id = event.currentTarget.id
    this.setData({
      id:id>>> 0
    })
    this.getVideoList(id)
  }

})