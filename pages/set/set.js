// pages/set/set.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setList:[{
      title:"咨询客服",
      url:"plugin://myPlugin/chat",
      icon:""
    }, {
        title: "扫一扫",
        url: "",
        icon: ""
      }, {
        title: "用户信息",
        url: "",
        icon: ""
      }, {
        title: "商品卡片",
        url: "",
        icon: ""
      }]
  },
  toScan:function(){
    var sring2object = function sring2object() {
      var _string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      var _split = arguments[1];

      var _obj = {};

      _string.split(_split).forEach(function (item) {
        var _brr = item.split('=');
        if (!_brr || !_brr.length) {
          return;
        } var _key = _brr.shift();
        if (!_key) {
          return;
        } _obj[decodeURIComponent(_key)] = decodeURIComponent(_brr.join('='));
      });

      return _obj;
    };

    var query2object = function query2object(query) {
      return sring2object(query, '&');
    };
    wx.scanCode({
      success:(json)=>{
        var queryParam = query2object(json.result.substr(json.result.indexOf('?') + 1));
        var domain = 'https://qytest.netease.com';
        // 测试环境
        if (queryParam.testing == 1) {
          domain = 'https://qytest.netease.com';
          // 预发
        } else if (queryParam.testing == 2) {
          domain = 'https://qiyukf.netease.com';
        } else {
          domain = 'https://qiyukf.com';
        }
        console.log(queryParam,domain)
        if (queryParam.key) {
          wx.setStorageSync("appKey", queryParam.key);
          wx.setStorageSync("domain", domain);
          app.globalData.myPluginInterface._$configAppKey(queryParam.key);
          app.globalData.myPluginInterface.__configDomain(domain);
        }
        wx.showToast({
          title: 'appKey绑定成功',
          icon: 'none',
          duration: 2000
        });
      }
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