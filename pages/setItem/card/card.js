// pages/setItem/card/card.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleSubmit: function (event) {
    // event.detail
    console.log(app.globalData.myPluginInterface)
    var product = event.detail.value;
    
    app.globalData.myPluginInterface._$configProduct(product);
    wx.showToast({
      title: "\u5DF2\u4FDD\u5B58\u5546\u54C1\u4FE1\u606F\uFF0C\u91CD\u65B0\u7533\u8BF7\u4F1A\u8BDD\u751F\u6548",
      icon: 'none',
      duration: 1000
    });
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