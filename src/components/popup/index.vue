<template>
  <popup-container v-model="visible"
                   :top="popupStyle.top"
                   :left="popupStyle.left"
                   :visibleBtn="visibleBtn"
                   :modal="modal"
                   @popup-hide="onCloseHandle">
    <component :is="popupType"
               :title="title"
               :queryId="queryId"
               :singleslct="singleslct"
               :selectData="selectData"
               @handler="handler"
               @popup-hide="onCloseHandle">
    </component>
  </popup-container>
</template>
<script>
  // 使用说明
  // 添加
  // 在popup文件夹下建个文件夹来存放你添加的模板组件
  // 调用
  // @click="showPopup({
  //     e: $event,
  //     popupType: 'test',
  //     title: '标题',
  //     selectData = [],
  //     queryId = 111,
  //     placement = 'bottomEnd',
  //     singleslct = false,
  //     visibleBtn = false
  // })"
  // 需要哪些参数传哪些
  // import bus from 'util/bus'
  // showPopup(query) {
  //     bus.$emit('popup-show', query)
  // }

  // e: $event
  // popupType: 约定floatPanel加载组件参数，String
  // title: 标题
  // selectData: 控件匹配数据，Array
  // queryId: 获取组件数据id或其他标识，Number

  // placement: top/topStart/topEnd/bottom/bottomStart/bottomEnd
  // /left/leftStart/leftEnd/right/rightStart/rightEnd
  // popup出现的位置，String

  // singleslct: true/false 控制单选多选时操作，Boolean
  // visibleBtn: true/false 是否显示右上角关闭按钮，Boolean
  // modal: true/false 是否需要遮罩

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
        el: null,
        popupType: '',
        title: '',
        selectData: [],
        queryId: -1,
        placement: 'bottomEnd',
        singleslct: false,
        modal: false,
        visibleBtn: true,
        visible: false,
        handler: null,
        popupStyle: {
          top: 0,
          left: 0
        }
      }
    },
    methods: {
      showPopup ({
        e, popupType,
        title = '',
        selectData = [],
        queryId = NaN,
        placement = 'bottomEnd',
        singleslct = false,
        modal = true,
        visibleBtn = true,
        handler = data => { console.warn('未传handler，选中结果:', data) }
      }) {
        console.log(e, popupType, title, selectData, queryId, placement, singleslct, modal, visibleBtn)
        if (this.typeArray.indexOf(popupType) === -1) {
          this.onCloseHandle()
          return
        }
        this.visibleBtn = visibleBtn
        this.el = e.currentTarget

        this.popupType = popupType
        this.queryId = queryId
        this.modal = modal
        this.title = title
        this.selectData = selectData
        this.placement = placement
        this.singleslct = singleslct
        this.visible = true
        this.handler = handler
        // this.reposition()
        listenerResize(this.reposition)
      },
      reposition () {
        const repositionCalculate = calculate(this.el, this.placement)
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
