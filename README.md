
# vue-progress-bar

> A plug-in for uploading pictures based on Vue

## Build Setup

# install

npm install vue-progress-bar --save

> or
 yarn add vue-progress-bar

# 使用组件必须传递的参数 options

|               参数 |    字段    |  类型   |       默认值       |
| -----------------: | :--------: | :-----: | :----------------: |
|       进度条的宽度 |   width    | number  |        500         |
|       进度条的宽度 |   height   | number  |         10         |
| 进度条点击按钮宽度 |  btnWidth  | number  |         16         |
| 进度条点击按钮高度 | btnHeight  | number  |         16         |
|     默认选中的进度 |  selected  | string  |                    |
|     进度条的背景色 | background | string  |      #e1e1e1       |
|   进度条选中的颜色 |  btnColor  | string  |      #60baff       |
|     进度条是否点击 |  disabled  | boolean |       false        |
|     进度条文本内容 | arrOption  |  array  | [1, 8, 3, 4, 5, 6] |
# 组件的事件
 |     事件名称            |          说明              | 回调参数
 | -----------------:     | :------------------------: |:-----------------------: |
 |       btnBar           |   获取当前点击进度条的信息   |   $event                       |
```bash
 objOption: {
        width: 500,
        height: 10,
        selected: 4,
        btnWidth: 16,
        btnHeight: 16,
        background: '#e1e1e1',
        btnColor: '#60baff',
        disabled: false,
        arrOption: [1, 8, 3, 4, 5, 6],
      },
# 组件的使用方法
  <vue-progress-bar :option="objOption" @btnBar="handleBtnBar"></vue-progress-bar>



# js 接受的信息判断
methods:{
  handleBtnBar($event){
    //$event....
  }
}
```
