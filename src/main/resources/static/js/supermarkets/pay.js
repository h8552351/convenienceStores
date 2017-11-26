
// pages/pay/pay.js
// var app = getApp();
alert("是就");
Page({
    data: {},
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
    },
    /* 微信支付 */
    wxpay: function () {
        var that = this
        //登陆获取code
        wx.login({
            success: function (res) {
                console.log(res.code)
                //获取openid
                that.getOpenId(res.code)
            }
        });
    },
    getOpenId: function (code) {
        var that = this;
        wx.request({
            url: "https://api.weixin.qq.com/sns/jscode2session?appid=wxa142513e524e496c&secret=5d6a7d86048884e7c60f84f7aa85253c&js_code=" + code + "&grant_type=authorization_code",
            data: {},
            method: 'GET',
            success: function (res) {
                console.log('返回openId')
                console.log(res.data)
                that.generateOrder(res.data.openid)
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        })
    },
    /**生成商户订单 */
    generateOrder: function (openid) {
        var that = this
        //统一支付
        wx.request({
            url: 'http://localhost:8070/RMS/pay_pay.action',
            method: 'GET',
            data: {
                total_fee: '5',
                body: '支付测试',
                attach:'真假酒水'
            },
            success: function (res) {
                console.log(res)
                var pay = res.data
                //发起支付
                var timeStamp = pay[0].timeStamp;
                console.log("timeStamp:"+timeStamp)
                var packages = pay[0].package;
                console.log("package:"+packages)
                var paySign = pay[0].paySign;
                console.log("paySign:"+paySign)
                var nonceStr = pay[0].nonceStr;
                console.log("nonceStr:"+nonceStr)
                var param = { "timeStamp": timeStamp, "package": packages, "paySign": paySign, "signType": "MD5", "nonceStr": nonceStr };
                that.pay(param)
            },
        })
    },
    /* 支付   */
    pay: function (param) {
        console.log("支付")
        console.log(param)
        wx.requestPayment({
            timeStamp: param.timeStamp,
            nonceStr: param.nonceStr,
            package: param.package,
            signType: param.signType,
            paySign: param.paySign,
            success: function (res) {
                // success
                console.log("支付")
                console.log(res)
                wx.navigateBack({
                    delta: 1, // 回退前 delta(默认为1) 页面
                    success: function (res) {
                        wx.showToast({
                            title: '支付成功',
                            icon: 'success',
                            duration: 2000
                        })
                    },
                    fail: function () {
                        // fail
                    },
                    complete: function () {
                        // complete
                    }
                })
            },
            fail: function (res) {
                // fail
                console.log("支付失败")
                console.log(res)
            },
            complete: function () {
                // complete
                console.log("pay complete")
            }
        })
    }
})




