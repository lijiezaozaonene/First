 var Languague = {
  //个人中心
  userCenter:{
    //banner
    banner:"http://hyncdata.maomaokeji.cn/hync/20200717/cb1d554cec91434d9c4e5b9058724a67.png",
    //中英文切换按钮
    changeLanguage:"change to Chinese",
    //个人信息
    userInfo:{
      title:"personal information",
      content:{}
    },
     //联系我们
    contactUs:{
      title:"contact us",
      content:{}
    },
    //页面标题
    title:"userCenter",
    title1:"me",
    title2:"kownledge",
    title3:"home",
    title4:"question", 

    about:{
      title:"about",
      content:{}
    },
    support:{
      title:"support",
      content:{}
    },
    instruction:{
      title:"instruction",
      content:{}
    },
    hello:{
      title:"hello,",
      content:{}
    },
    clickSign:{
      title:"Please click it for signing~",
      content:{}
    },
    signUp:{
      title:"sign up",
      content:{}
    },
    day_comeon:{
      title:"day，come on",
      content:{}
    },
    ready:{
      title:"Are you ready",
      content:{}
    },
    careful:{
      title:"Be careful.You will get good grades this time!",
      content:{}
    },
    strat:{
      title:"Strat",
      content:{}
    },
    writAnswer:{
      title:"Enter the answer below",
      content:{}
    },
    next:{
      title:"next",
      content:{}
    },
    end:{
      title:"end",
      content:{}
    },
    isend:{
      title:"It's over!",
      content:{}
    },
    check:{
      title:"Check the answer",
      content:{}
    },
    score:{
      title:"score",
      content:{}
    },
    time:{
      title:"time",
      content:{}
    },
    timeu:{
      title:"second",
      content:{}
    },
    correct:{
      title:"correct rate",
      content:{}
    },
    wrong:{
      title:"mistaks you made this time",
      content:{}
    },
    answer:{
      title:"answer",
      content:{}
    },
    yours:{
      title:"yours",
      content:{}
    },
    
  },

  //底部英文版工具栏，这里是用于自定义tarbar用的
  toolbar:{
    list: [
      {
        "pagePath": "../../introduct/main/main",
        "iconPath": "../static/images/introduct.png",
        "selectedIconPath": "../static/images/introduct_s.png",
        "text": "Profiles"
      },
      {
        "pagePath": "../../center/main/main",
        "iconPath": "../static/images/center.png",
        "selectedIconPath": "../static/images/center_s.png",
        "text": "Me"
      },
    ]
  }
}

module.exports = {
  lang: Languague
}
