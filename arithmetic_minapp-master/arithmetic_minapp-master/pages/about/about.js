// pages/about/about.js
var languageUtil = require('../../utils/languageUtil')
const app = getApp();
Page({

  data: {
    openid: '',
    nickName: '',
    avatarUrl: '',
    userInfo: {
      nickName: '',
      avatarUrl: '',
    },
    content: {}

  },

  /**
   * 生命周期函数--监听页面加载
   */

   /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.initLanguage()
  },
  //中英文切换
  switchLanguage() {
    //切换当前版本，即修改公共变量中的version
  languageUtil.changLanguage()
  this.initLanguage()
},
//初始化语言
initLanguage() {
  //获取当前小程序语言版本所对应的字典变量
  var lang = languageUtil.languageVersion()
  this.setData({
    content: lang
  })
  wx.setNavigationBarTitle({
    title: lang.lang.userCenter.title1
  })
},

  onLoad: function (options) {
    console.log(app.globalData.userInfo);
    this.setData({
      userInfo: app.globalData.userInfo
    })
    let _this = this;
    wx.login({
      success (res) {
        console.log(res);
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://www.xiaomutong.com.cn/web/index.php?r=wechat/getinfo4',
            method: 'post',
            data: {
              code: res.code
            },
            success (res) {
              console.log(res.data);
              if(res.data && res.data.code == 0){
                let result = JSON.parse(res.data.result);
                console.log(result);
                _this.Getuserinfobyopenid(result.openid);
                _this.setData({
                  openid: result.openid
                })
              }
            },
            fail (err){
              console.log(err);
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })  
  },
  Getuserinfobyopenid: function(openid){
    let _this = this;
    wx.request({
      url: 'https://www.xiaomutong.com.cn/web/index.php?r=userinfo/getuserinfobyopenid',
      method: 'post',
      data: {
        openid: openid
      },
      success (res) {
        console.log(res.data);
        if(res.data && res.data.code == 0 && res.data.result){
          console.log(res.data);
          let userInfo = JSON.parse(decodeURIComponent(res.data.result.userinfo));
          let avatarUrl = userInfo.avatarUrl;
          let nickName = userInfo.nickName;
          _this.setData({
            userInfo: userInfo,
            avatarUrl: avatarUrl,
            nickName: nickName
          })
        }
      },
      fail (err){
        console.log(err);
      }
    })
  },

  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handledirect:function(){
    wx.showModal({
      cancelColor: 'cancelColor',
      title:"使用简介",
      content:"基础模式分阶段使用，强化模式锻炼错题。",
    })
  },
  
  handlegitee:function(){
    wx.showModal({
      cancelColor: 'cancelColor',
      title:"打赏地址",
      content:"微信：xxxxxxx",
    })
  },
  
  handleabout:function(){
    wx.showModal({
      cancelColor: 'cancelColor',
      title:"关于",
      content:"本小程序为软件工程新技术结对编程小组作业",
    })
  }
})