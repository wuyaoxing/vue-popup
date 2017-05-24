<template>
  <transition name="fade">
    <div class="vue-popup" v-show="visible" :style="{ top: top + 'px', left: left + 'px', zIndex }" @mousedown="preventBubbling">
      <div class="vue-popup-container">
        <button type="button" v-if="visibleBtn" class="vue-popup-off" @click="hidePopup">
          <!--<el-icon name="close"></el-icon>-->X
        </button>
        <slot></slot>
      </div>
      <div class="vue-popup-click-outside-layer" v-if="visible && modal" @click="hidePopup"></div>
    </div>
  </transition>
</template>
<script>
  import bus from '@/util/bus'

  export default {
    name: 'popupContainer',
    model: {
      prop: 'visible',
      event: 'popup-hide'
    },
    props: {
      top: {
        type: Number,
        default: 0
      },
      left: {
        type: Number,
        default: 0
      },
      zIndex: {
        type: Number,
        default: 1999
      },
      visible: {
        type: Boolean,
        default: false
      },
      modal: {
        type: Boolean,
        default: false
      },
      visibleBtn: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      preventBubbling (e) {
        e.stopPropagation()
      },
      hidePopup () {
        this.$emit('popup-hide', false)
      }
    },
    updated () {
      bus.$emit('call-reposition')
    }
  }
</script>
<style>
  .vue-popup {
    position: fixed;
    z-index: 1999;
  }

  .vue-popup-off {
    border: none;
    outline: none;
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
    font-size: 12px;
    width: 30px;
    height: 40px;
    color: #7d7d7d;
    background: #fff;
    transform: scale(0.85);
    cursor: pointer;
  }
  .vue-popup-off:hover {
     color: #35a092
   }

  .vue-popup-container {
    border-radius: 3px;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, .5);
    position: absolute;
    z-index: 1999;
    background: #fff;
  }

  .vue-popup-click-outside-layer {
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: transparent;
    cursor: default;
    z-index: 1998;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
