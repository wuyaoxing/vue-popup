<template>
  <div class="popup">
    <div class="popup-base popup-item leftTop" @click="showPopup({e: $event, popupType: 'test', placement: 'topStart', visibleBtn: false})">左上</div>
    <div class="popup-base popup-item rightTop" @click="showPopup({e: $event, popupType: 'test', placement: 'leftStart', visibleBtn: false})">右上</div>
    <div class="center-item">
      <div class="popup-base" @click="showPopup({e: $event, popupType: 'test', placement: 'right'})">right</div>
      <div class="popup-base mg-10" @click="showPopup({e: $event, popupType: 'test', placement: 'rightStart'})">rightStart</div>
      <div class="popup-base mg-10" @click="showPopup({e: $event, popupType: 'test', placement: 'rightEnd'})">rightEnd</div>
      <div class="popup-base mg-10" @click="showPopup({e: $event, popupType: 'test', placement: 'top', visibleBtn: false})">top</div>
      <div class="popup-base mg-10" @click="showPopup({e: $event, popupType: 'test', placement: 'topStart'})">topStart</div>
      <div class="popup-base mg-10" @click="showPopup({e: $event, popupType: 'test', placement: 'topEnd'})">topEnd</div>
      <div class="popup-base mg-10" @click="showPopup({e: $event, popupType: 'test', placement: 'bottom', visibleBtn: false})">bottom</div>
      <div class="popup-base mg-10" @click="showPopup({e: $event, popupType: 'test', placement: 'bottomStart'})">bottomStart</div>
      <div class="popup-base mg-10" @click="showPopup({e: $event, popupType: 'test', placement: 'bottomEnd'})">bottomEnd</div>
      <div class="popup-base mg-10" @click="showPopup({e: $event, popupType: 'test', placement: 'left'})">left</div>
      <div class="popup-base mg-10" @click="showPopup({e: $event, popupType: 'test', placement: 'leftStart'})">leftStart</div>
      <div class="popup-base mg-10" @click="showPopup({e: $event, popupType: 'test', placement: 'leftEnd'})">leftEnd</div>
    </div>
    <div class="popup-base popup-item leftBottom" @click="showPopup({e: $event, popupType: 'test', placement: 'rightEnd'})">左下</div>
    <div class="popup-base popup-item rightBottom" @click="showPopup({e: $event, popupType: 'test', placement: 'topEnd'})">右下</div>
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
      showPopup (query) {
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
  .popup-base {
    padding: 5px 15px;
    /*width: 70px;*/
    height: 50px;
    line-height:50px;
    text-align: center;
    color: #fff;
    background: #311b92;
    cursor: pointer;
  }
  .popup-item {
    position: absolute;
  }
  .center-item {
    display: flex;
    /*flex-direction: column;*/
    /*justify-content: center;*/
    justify-content: space-between;
    width: 100%;
    height: auto;
    border: 1px solid #311b92;
    position: absolute;
    top: 50%;
    margin-top: -45px;
  }
  .center-item div {

  }
  .mg-10 {
    margin-left: 10px;
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
