// pages/home/home.js
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        linkList: []
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        const page = this
        wx.request({
            url: app.globalData.serverHost + app.globalData.getLinks,
            method: "GET",
            success: function (res) {
                // res:{data:{code:1,message:"get category success",data:[{...}]}, errMsg:"request:ok",header:object,statusCode:200}
                if (res.statusCode == 200) {
                    if (res.data.code == 1) { // 获取数据成功
                        page.setData({
                            linkList: res.data.data
                        })
                    } else {
                        console.log(res.data.message)
                    }
                } else {
                    console.log("errro, statusCode: " + res.statusCode)
                    console.log("errro, errMsg: " + res.errMsg)
                }
            },
            fail: function (msg) {
                console.log(msg)
            }
        })
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

    },

    linkListItemClick: function (event) {
        // console.log(event)
        // event:{typ:"tag",timeStamp:4699,target:{dataset:{},id:"",offsetLeft:0,offsetTop:117},currentTarget:{dataset:{},id:"",offsetLeft:0,offsetTop:117},detail:{},touches:{},changedTouches:[{..}]}

        var index = event.currentTarget.dataset.index
        console.log("click index: " + index)
    }
})