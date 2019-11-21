//app.js
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }else{
          let isAuthReject = wx.getStorageSync('isAuthReject');
          if(!isAuthReject){
            this.globalData.showAuthBtn = true;
          }
        }
      }
    })

    //先去读取本地配置数据
    let appId = wx.getStorageSync("appId") || "";
    if (appId) {
      let appKey = wx.getStorageSync("appKey") || "";
      let domain = wx.getStorageSync("domain") || "";
      if (appKey && domain) {
        this.globalData.myPluginInterface.__configAppId(appId);
        this.globalData.myPluginInterface._$configAppKey(appKey);
        this.globalData.myPluginInterface.__configDomain(domain);
      } else {
        this.globalData.myPluginInterface.__configAppId("dsjilnmfoiedql23941"); 
        this.globalData.myPluginInterface._$configAppKey("3858be3c20ceb6298575736cf27858a7");
        this.globalData.myPluginInterface.__configDomain("https://qiyukf.com");
      }
    } else {
      this.globalData.myPluginInterface.__configAppId("dsjilnmfoiedql23941");
      this.globalData.myPluginInterface._$configAppKey("3858be3c20ceb6298575736cf27858a7");
      this.globalData.myPluginInterface.__configDomain("https://qiyukf.com");
    }

    this.globalData.myPluginInterface._$logout();
    var userInfo = {
      userId: 'user111111111',
      data: [
        { "key": "real_name", "value": "用户A" },
        { "key": "mobile_phone", "value": 15669060662 },
        { "key": "email", "value": "13800000000@163.com" },
        { "index": 0, "key": "account", "label": "账号", "value": "zhangsan", "href": "http://example.domain/user/zhangsan" },
        { "index": 1, "key": "sex", "label": "性别", "value": "先生" },
        { "index": 2, "key": "reg_date", "label": "注册日期", "value": "2015-11-16" },
        { "index": 3, "key": "last_login", "label": "上次登录时间", "value": "2015-12-22 15:38:54" },
        { "index": 4, "key": "avatar", "label": "头像", "value": "https://ysf.nosdn.127.net/985726b5a8840b84a8a90c6b71642813" }
      ]
    }
    this.globalData.myPluginInterface._$setUserInfo(userInfo);
  },
  globalData: {
    userInfo: null,
    myPluginInterface: requirePlugin('myPlugin'),
    bookList:[{
      id:1,
      name:"不似骄阳",
      author:"[英]安东尼·伯吉斯",
      publisher:"理想国丨广西师范大学出版社",
      price:"56.00",
      date:"2019-08",
      img:"http://nos.netease.com/ysf/a46708594dfae92a7c390de8de7fad6e.jpg",
      binding:"精装",
      content: "每当激情涤荡趋缓时，当他们呼吸着夜晚的空气，她常常忧伤地摇着头，在透明面纱下微笑，说秋天很快要在他们身上降临，爱火会烧掉肉身，然后烧掉爱本身——燃尽，永远消失。\n “你得上路，你要扬帆驶过我的岛屿，你有活儿要干的。”\n“这就是我的活儿，这里就是我们的岛屿。”\n爱既是永恒秩序的意象，也是叛逆与破坏的细菌。\n挣扎在尘土与空气、理性与信仰、行动与沉思之间。在芸芸众生中孤独一人，心怀诗人的壮烈决绝。\n入选《西方正典》书目，“关于莎士比亚最精彩有力的文学传记”（哈罗德•布鲁姆）。\n 英国作家安东尼•伯吉斯是他那个时代的文坛明星，通晓多国语言，写作类型与题材广泛，且无论写什么都以其智识和文字魅力，使人读之如见如闻。\n关于莎士比亚，伯吉斯写过两部作品，除了传记《莎士比亚》，就是这部虚构莎氏爱情生活的《不似骄阳》，书名取自莎士比亚十四行诗第130首：“我爱人的双眸绝不似骄阳”"
    }, {
        id: 2,
        name: "百年孤独",
        author: "[哥伦比亚] 加西亚·马尔克斯",
        publisher: "南海出版公司",
        price: "39.50",
        date: "2011-06",
        img: "http://nos.netease.com/ysf/2fbc1197f9272ffab56370158aec9038.jpg",
        binding: "精装",
        content: "《百年孤独》是魔幻现实主义文学的代表作，描写了布恩迪亚家族七代人的传奇故事，以及加勒比海沿岸小镇马孔多的百年兴衰，反映了拉丁美洲一个世纪以来风云变幻的历史。作品融入神话传说、民间故事、宗教典故等神秘因素，巧妙地糅合了现实与虚幻，展现出一个瑰丽的想象世界，成为20世纪最重要的经典文学巨著之一。1982年加西亚•马尔克斯获得诺贝尔文学奖，奠定世界级文学大师的地位，很大程度上乃是凭借《百年孤独》的巨大影响。"
      }, {
        id: 3,
        name: "追风筝的人",
        author: "[美] 卡勒德·胡赛尼",
        publisher: "上海人民出版社",
        price: "29.00",
        date: "2006-05",
        img: "http://nos.netease.com/ysf/3f934cc6071a21349e2cdd325e0a093d.jpg",
        binding: "平装",
        content: "12岁的阿富汗富家少爷阿米尔与仆人哈桑情同手足。然而，在一场风筝比赛后，发生了一件悲惨不堪的事，阿米尔为自己的懦弱感到自责和痛苦，逼走了哈桑，不久，自己也跟随父亲逃往美国。\n成年后的阿米尔始终无法原谅自己当年对哈桑的背叛。为了赎罪，阿米尔再度踏上暌违二十多年的故乡，希望能为不幸的好友尽最后一点心力，却发现一个惊天谎言，儿时的噩梦再度重演，阿米尔该如何抉择？\n故事如此残忍而又美丽，作者以温暖细腻的笔法勾勒人性的本质与救赎，读来令人荡气回肠。"
      }, {
        id: 4,
        name: "活着",
        author: "余华",
        publisher: "作家出版社",
        price: "20.00",
        date: "2012-08",
        img: "http://nos.netease.com/ysf/08e5d6e5606da3fc3bd81ccfeada7609.jpg",
        binding: "平装",
        content: "《活着(新版)》讲述了农村人福贵悲惨的人生遭遇。福贵本是个阔少爷，可他嗜赌如命，终于赌光了家业，一贫如洗。他的父亲被他活活气死，母亲则在穷困中患了重病，福贵前去求药，却在途中被国民党抓去当壮丁。经过几番波折回到家里，才知道母亲早已去世，妻子家珍含辛茹苦地养大两个儿女。此后更加悲惨的命运一次又一次降临到福贵身上，他的妻子、儿女和孙子相继死去，最后只剩福贵和一头老牛相依为命，但老人依旧活着，仿佛比往日更加洒脱与坚强。"
      }]
  }
})