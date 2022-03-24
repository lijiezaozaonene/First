const app = getApp()
//语言切换
const languageVersion=function(){
  if (app.globalData.version == 0) {
    // 导入我们定义好的中文字典
    var zh_lang = require('../language/zh_lang.js')
  //  console.log(zh_lang)
    return zh_lang
  } else {
    //导入我们定义好的英文字典
    var en_lang = require('../language/en_lang.js')
//    console.log(en_lang)
    return en_lang
  }
}
//切换版本
const changLanguage=function(){
//修改前面已经定义好的，用于标识小程序的语言版本
  if (app.globalData.version == 0) {
  
    app.globalData.version = 1
    //console.log("当前语言版本：英文",app.globalData.version)
  } else if (app.globalData.version == 1) {
    app.globalData.version = 0
   // console.log("当前语言版本：中文",app.globalData.version)
  }
  
}
//抛出方法
module.exports={
  'languageVersion': languageVersion,
  'changLanguage': changLanguage

}
