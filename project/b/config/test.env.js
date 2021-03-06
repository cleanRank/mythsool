var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  APIPORT: "'https://apitest.sxfqsc.com'",
  APIPORT2: "'http://47.100.14.188:8083'",
  APIPORT3: "'https://sxypapitest.sxfqsc.com'",
  SXYPNAME: "'//youpintest.sxfqsc.com'",
  SENSORS: "'https://shuixiangyoupin.datasink.sensorsdata.cn/sa?project=default&token=9a40d345cf1327b2'",
  SXYDURL: {
    QUOTA: "'//testh5.51sxyd.com/nameSure'", // 授信
    LOGIN: "'//testh5.51sxyd.com/login'", // 登录
    INDEX: "'//testh5.51sxyd.com/Index'", // 首页
    REPAY: "'//testh5.51sxyd.com/repay'", // 还款
    PERSONCENTER: "'//testh5.51sxyd.com/personCenter'" // 个人中心
  },
  SXFQURL: {
    LOGIN: "'//sandbox.sxfq.com/weixinApp3.0/html/Home/login.html'", // 登录
    INDEX: "'//sandbox.sxfq.com/weixinApp3.0/html/Home/index.html'"
  },
  SXBTURL: {
    CREDIT: "'//47.100.14.188/index.html#/creditIndex'", // 授信
    REPAY: "'//47.100.14.188/index.html#/repay'", // 借款账单
    ADDBANKCARD: "'//47.100.14.188/index.html#/addbankcard'" // 绑定银行卡
  }
})
