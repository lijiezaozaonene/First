var Languague = {
  //个人中心
  userCenter:{
    //banner
    banner:"http://hyncdata.maomaokeji.cn/hync/20200717/cb1d554cec91434d9c4e5b9058724a67.png",
    //中英文切换按钮
    changeLanguage:"切换英文",
    //个人信息
    userInfo:{
      title:"个人信息",
      content:{}
    },
     //联系我们
    contactUs:{
      title:"联系我们",
      content:{}
    },
    //个人中心
    title:"个人中心",
    title1:"我的",
    title2:"小知识",
    title3:"首页",
    title4:"答题",

    about:{
      title:"关于",
      content:{}
    },
    support:{
      title:"帮助支持",
      content:{}
    },
    instruction:{
      title:"使用说明",
      content:{}
    },
    hello:{
      title:"你好呀，",
      content:{}
    },
    clickSign:{
      title:"点击签到打卡",
      content:{}
    },
    signUp:{
      title:"打卡",
      content:{}
    },
    day_comeon:{
      title:"天，加油",
      content:{}
    },
    ready:{
      title:"准备好了吗",
      content:{}
    },
    careful:{
      title:"要细心哦，这次一定没有问题！",
      content:{}
    },
    strat:{
      title:"开始答题",
      content:{}
    },
    writAnswer:{
      title:"在下面输入答案哦",
      content:{}
    },
    next:{
      title:"下一题",
      content:{}
    },
    end:{
      title:"结束",
      content:{}
    },
    isend:{
      title:"答题结束啦",
      content:{}
    },
    check:{
      title:"查看结果",
      content:{}
    },
    score:{
      title:"得分",
      content:{}
    },
    time:{
      title:"用时",
      content:{}
    },
    timeu:{
      title:"秒",
      content:{}
    },
    correct:{
      title:"正确率",
      content:{}
    },
    wrong:{
      title:"本次错题",
      content:{}
    },
    answer:{
      title:"答案",
      content:{}
    },
    yours:{
      title:"你的",
      content:{}
    },
    
  },

  //顶部导航栏，这里是用于自定义tarbar用的
  toolbar:{
    list: [
      {
        "pagePath": "../../introduct/main/main",
        "iconPath": "../static/images/introduct.png",
        "selectedIconPath": "../static/images/introduct_s.png",
        "text": "公司介绍"
      },
      {
        "pagePath": "../../center/main/main",
        "iconPath": "../static/images/center.png",
        "selectedIconPath": "../static/images/center_s.png",
        "text": "个人中心"
      }
    ]
  }
}

module.exports = {
  lang: Languague
}
