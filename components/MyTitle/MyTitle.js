Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSearch:true,
    isClear:false,
    val:"",
  },

  // 搜索框
  getInput:function(e){
    this.setData({
      val:e.detail.value
    })
    if(this.data.val.length>0){
      this.setData({
        isSearch:false,
        isClear:true,
      })
    }else{
      this.setData({
        isSearch:true,
        isClear:false,
      })
    }
  },

  // 清除
  clearTap:function(){
    this.setData({
      val:'',
      isSearch:true,
      isClear:false,
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