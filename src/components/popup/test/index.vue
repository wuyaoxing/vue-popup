<template>
  <div class="test">
    <div class="header">
      标题
    </div>
    <div class="body">
      这里可以添加你的popup需要的内容！
    </div>
  </div>
</template>
<script>
  export default {
    name: 'testPopup',
    props: {
      // queryId查找这个组件展示数据的id
      queryId: {
        type: Number
      },
      // selectData这个组件被选中的选项
      selectData: {
        type: Array
      }
    },
    data () {
      return {
        message: 'This is popupContent !'
      }
    },
    methods: {

    }
  }
</script>
<style>
  .test {
    width: 350px;
    height: 330px;
  }
  .header {
    height: 45px;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 600;
    line-height: 45px;
    color: #464c59;
    background: #fff;
    border-bottom: 1px solid #e6e8ec;
    box-sizing: border-box;
  }
  .body {
    padding: 10px;
  }
</style>
