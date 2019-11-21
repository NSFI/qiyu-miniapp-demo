//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://nos.netease.com/ysf/3732c48493c8545d2a3f0d07ecf455c0.jpg',
      'http://nos.netease.com/ysf/79f7baa3104badae8ae86eee844396ee.jpg'
    ],
    bookList:app.globalData.bookList,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    unReadCount: app.globalData.myPluginInterface._$getAllUnreadCount()|| 0,
    userInfo: {},
    hasUserInfo: false,
    // getUserInfoFail: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showAuthBtn:false
  },
  toDetail:function(e){
    let id = e.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  },
  toKefu: function () {
    wx.navigateTo({
      url: 'plugin://myPlugin/chat',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onLoad: function () {
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        this.setUserInfo();
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    if (wx.getStorageSync("isAuthReject")) {
      this.setData({
        showAuthBtn: false
      })
    } else {
      this.setData({
        showAuthBtn: true
      })
    }

    app.globalData.myPluginInterface._$onunread(res => {
      const { total, message } = res;
      this.setData({
        unReadCount:total
      })
    });
    this.setUserInfo();
    console.log(this.randomStr())

    
  },
  randomStr:function(){
    let max = 99999999;
    let min = 10000000;
    let range = max - min;
    let rand = Math.random();
    var num = min + Math.floor(rand * range); //舍去
    return num;
  },
  getUserInfo: function(e) {
    if(e.detail.userInfo){
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      this.setUserInfo();
    }else{
      //表示拒绝了
      wx.setStorageSync("isAuthReject",true);
      app.globalData.isAuthReject = true;
      this.setData({
        showAuthBtn:false
      })
    }
  },
  setUserInfo:function(){
    if (this.data.hasUserInfo) {
      var info = {
        userId: this.randomStr(),
        name: this.data.userInfo.nickName,
        data: [{ "key": "real_name", "value": this.data.userInfo.nickName }, { "key": "mobile_phone", "value": "" }, { "key": "email", "value": "" }, { "index": 0, "key": "account", "label": "账号", "value": this.data.userInfo.nickName, "href": "" }, { "index": 1, "key": "sex", "label": "性别", "value": this.data.userInfo.gender == 1 ? "先生" : "女士" }, { "index": 2, "key": "reg_date", "label": "注册日期", "value": "" }, { "index": 3, "key": "last_login", "label": "上次登录时间", "value": "" }, { "index": 4, "key": "avatar", "label": "头像", "value": this.data.userInfo.avatarUrl }]
      }
      app.globalData.myPluginInterface._$setUserInfo(info)
    }
  },
  authCancel:function(){
    this.setData({
      showAuthBtn:false
    })
    wx.setStorageSync("isAuthReject", true);
  }
})
