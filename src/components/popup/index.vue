<template>
  <popup-container v-model="visible"
                   :top="popupStyle.top"
                   :left="popupStyle.left"
                   :visibleBtn="visibleBtn"
                   @popup-hide="onCloseHandle">
    <component :is="popupType"
               :queryId="queryId"
               :selectData="selectData">
    </component>
  </popup-container>
</template>
<script>
  // 使用说明
  // 添加
  // 在popup文件夹下建个文件夹来存放你添加的模板组件
  // 调用
  // @click="showPopup({e: $event, popupType: 'test', selectData = [], queryId = 111, visibleBtn = false})"
  // 需要哪些参数传哪些
  // import bus from 'util/bus'
  // showPopup(query) {
  //     bus.$emit('popup-show', query)
  // }

  // e: $event
  // popupType: 约定floatPanel加载组件参数，String
  // selectData: 控件匹配数据，Array
  // queryId: 获取组件数据id或其他标识，Number
  // visibleBtn: true/false 是否显示右上角关闭按钮，Boolean

  // 弹窗的宽高由你编写的组件的宽高确定

  // 组件之间的通信

  import popupContainer from './container'
  import test from './test'
  import { listenerResize, unListenerResize, calculate } from './util'
  import bus from '@/util/bus'

  export default {
    name: 'popup',
    components: {
      popupContainer,
      test
    },
    data () {
      return {
        typeArray: ['test'],
        visible: false,
        visibleBtn: true,
        popupType: '',
        queryId: -1,
        selectData: [],
        el: null,
        popupStyle: {
          top: 0,
          left: 0
        }
      }
    },
    methods: {
      showPopup ({e, popupType, selectData = [], queryId = NaN, visibleBtn = true}) {
        console.log(e, popupType, selectData, queryId, visibleBtn)
        if (this.typeArray.indexOf(popupType) === -1) {
          this.onCloseHandle()
          return
        }
        this.visibleBtn = visibleBtn
        this.el = e.currentTarget

        this.popupType = popupType
        this.queryId = queryId
        this.selectData = selectData
        this.visible = true
        // this.reposition()
        listenerResize(this.reposition)
      },
      reposition () {
        const repositionCalculate = calculate(this.el)
        this.popupStyle.top = repositionCalculate.top
        this.popupStyle.left = repositionCalculate.left
      },
      onCloseHandle () {
        unListenerResize(this.reposition)
        this.visible = false
      }
    },
    mounted () {
      // window.requestAnimationFrame(this.reposition)
    },
    created () {
      bus.$on('call-reposition', this.reposition)
      bus.$on('popup-show', this.showPopup)
    },
    updated () {

    },
    desctroyed () {
      bus.$off('call-reposition', this.reposition)
      bus.$off('popup-show', this.showPopup)
    }
  }
</script>
