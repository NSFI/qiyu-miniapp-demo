// pages/setItem/setappId/setappId.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appId:""
  },
  handleInput:function(e){
    this.setData({
      appId:e.detail.value
    })
  },
  handleCancel:function(e){
    this.setData({
      appId:""
    })
  },
  handleSubmit:function(e){
    wx.setStorageSync("appId", this.data.appId)
    app.globalData.myPluginInterface.__configAppId(this.data.appId);
    wx.showToast({
      title: '设置成功',
      icon:"success",
      duration:1500,
      complete:function(){
        
      }
    })
    setTimeout(function(){
      wx.navigateBack({
        delta: -1
      })
    },1500)
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let appId = wx.getStorageSync('appId');
    this.setData({
      appId:appId||""
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