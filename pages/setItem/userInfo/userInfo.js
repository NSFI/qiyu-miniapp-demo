// pages/setItem/userInfo/userInfo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    users: [{
      userId: 'user111111111',
      name: '用户A',
      data: [{ "key": "real_name", "value": "用户A" }, { "key": "mobile_phone", "value": 15669060662 }, { "key": "email", "value": "13800000000@163.com" }, { "index": 0, "key": "account", "label": "账号", "value": "zhangsan", "href": "http://example.domain/user/zhangsan" }, { "index": 1, "key": "sex", "label": "性别", "value": "先生" }, { "index": 2, "key": "reg_date", "label": "注册日期", "value": "2015-11-16" }, { "index": 3, "key": "last_login", "label": "上次登录时间", "value": "2015-12-22 15:38:54" }, { "index": 4, "key": "avatar", "label": "头像", "value": "https://xxxxx.jpg" }]
    }, {
      userId: 'user222222222',
      name: '用户B',
      data: [{ "key": "real_name", "value": "用户B" }, { "key": "mobile_phone", "value": 15669060662 }, { "key": "email", "value": "13800000000@163.com" }, { "index": 0, "key": "account", "label": "账号", "value": "zhangsan", "href": "http://example.domain/user/zhangsan" }, { "index": 1, "key": "sex", "label": "性别", "value": "先生" }, { "index": 2, "key": "reg_date", "label": "注册日期", "value": "2015-11-16" }, { "index": 3, "key": "last_login", "label": "上次登录时间", "value": "2015-12-22 15:38:54" }, { "index": 4, "key": "avatar", "label": "头像", "value": "https://xxxxx.jpg" }]
    }, {
      userId: 'user3333333',
      name: '用户C',
      data: [{ "key": "real_name", "value": "用户C" }, { "key": "mobile_phone", "value": 15669060662 }, { "key": "email", "value": "13800000000@163.com" }, { "index": 0, "key": "account", "label": "账号", "value": "zhangsan", "href": "http://example.domain/user/zhangsan" }, { "index": 1, "key": "sex", "label": "性别", "value": "先生" }, { "index": 2, "key": "reg_date", "label": "注册日期", "value": "2015-11-16" }, { "index": 3, "key": "last_login", "label": "上次登录时间", "value": "2015-12-22 15:38:54" }, { "index": 4, "key": "avatar", "label": "头像", "value": "https://xxxxx.jpg" }]
    }],
    selected: null,
    selectedName: null,
    customId: null,
    customData: null,
    level:5
    // level: app.globalData.myPluginInterface._$getVipLevel()
  },
  handleSelect:function (event) {
    let selected = event.currentTarget.dataset.selected;
    let selectedName = event.currentTarget.dataset.name;
    let userInfo = event.currentTarget.dataset.userinfo;
    console.log(selected,selectedName,userInfo)
    this.setData({
      selected: selected,
      selectedName: selectedName
    });

    wx.setStorageSync('selected', selected);
    wx.setStorageSync('selectedName', selectedName);

    app.globalData.myPluginInterface._$setUserInfo(userInfo);

    wx.showToast({
      title: "\u5DF2\u5207\u6362\u5230" + selectedName,
      icon: 'success',
      duration: 1000
    });
  }, 
  handleLogout: function () {
    app.globalData.myPluginInterface._$logout();
    this.setData({
      selected: null,
      selectedName: null
    });
    wx.showToast({
      title: "\u7528\u6237\u5DF2\u6CE8\u9500\u4E3A\u533F\u540D\u7528\u6237",
      icon: 'success',
      duration: 1000
    });
  },
  handleCustom: function() {
    if (!this.data.customId) {
      wx.showToast({
        title: 'uid为必填值',
        icon: 'none'
      });
      return;
    }

    var userInfo = {};
    userInfo.userId = this.data.customId;
    userInfo.data = this.data.customData;

    app.globalData.myPluginInterface._$setUserInfo(userInfo);
    wx.showToast({
      title: "\u5DF2\u5207\u6362\u5230\u81EA\u5B9A\u4E49\u7528\u6237",
      icon: 'success',
      duration: 1000
    });
  }, 
  handleDataConfirm: function (event) {
    // event.detail.value
    try {
      var customData = JSON.parse(event.detail.value);
      this.setData({
        customData: customData
      });
    } catch (error) { }
  }, 
  handleIdConfirm: function(event){
    // event.detail.value
    var customId = event.detail.value;
    this.setData({
      customId: customId
    });
  },
  handleVipChange: function (event) {
    // event.detail
    var level = event.detail.value;
    app.globalData.myPluginInterface._$setVipLevel(level);

    wx.showToast({
      title: "\u5DF2\u5207\u6362\u5230VIP" + level + "\uFF0C\u91CD\u65B0\u7533\u8BF7\u4F1A\u8BDD\u540E\u751F\u6548",
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