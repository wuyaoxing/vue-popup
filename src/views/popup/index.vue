<template>
  <div class="popup">
    <div class="popup-item leftTop" @click="showPopup">左上</div>
    <div class="popup-item rightTop" @click="showPopup">右上</div>
    <div class="popup-item center" @click="showPopup">中间</div>
    <div class="popup-item leftBottom" @click="showPopup">左下</div>
    <div class="popup-item rightBottom" @click="showPopup">右下</div>
    <popup></popup>
  </div>
</template>
<script>
  // import Hello from '@/components/Hello'
  import popup from '@/components/popup'
  import bus from '@/util/bus'

  export default {
    name: 'popupView',
    components: {
      popup
    },
    methods: {
      showPopup (e) {
        const query = {e, popupType: 'test'}
        bus.$emit('popup-show', query)
      }
    }
  }
</script>
<style>
  .popup {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .popup-item {
    width: 80px;
    height: 50px;
    line-height:50px;
    text-align: center;
    color: #fff;
    background: #311b92;
    position: absolute;
    cursor: pointer;
  }
  .leftTop {
    top: 0;
    left: 0;
  }
  .rightTop {
    top: 0;
    right: 0;
  }
  .center {
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -40px;
  }
  .leftBottom{
    bottom: 0;
    left: 0;
  }
  .rightBottom{
    bottom: 0;
    right: 0;
  }
</style>
