# vue-popup

> This is a vue-popup component.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

## 实现思路
- 实现popup公共弹窗 (https://wuyaoxing.github.io/public/2017/04/25/%E5%AE%9E%E7%8E%B0popup%E5%85%AC%E5%85%B1%E5%BC%B9%E7%AA%97/)

## 使用说明

**添加**

- 在popup文件夹下建个文件夹来存放你添加的模板组件

**调用**

  ```
  @click="showPopup({e: $event, popupType: 'test', selectData = [], queryId = 111, singleslct = false, visibleBtn = false})"
  // 需要哪些参数传哪些
  import bus from 'util/bus'
  showPopup(query) {
     bus.$emit('popup-show', query)
  }
  ```

**参数说明**

- e: $event
- popupType: 约定floatPanel加载组件参数，String
- selectData: 控件匹配数据，Array
- queryId: 获取组件数据id或其他标识，Number
- singleslct: 控制单选多选时操作，Boolean
- visibleBtn: true/false 是否显示右上角关闭按钮，Boolean

**弹窗的宽高由你编写的组件的宽高确定**

**组件之间的通信**

- 传值
- 修改数据

## TODO

- 添加控制popup位置参数

