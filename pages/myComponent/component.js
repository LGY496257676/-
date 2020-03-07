// pages/myComponent/component.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },
  properties: {
    name:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _name2:'tom'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sendMsg(e) {
      let msg = e.target.dataset.hi
      let myEventDetail = {
        msg
      }
      this.triggerEvent('myevent', myEventDetail)
    }
  }
})
