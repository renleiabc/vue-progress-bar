# vue-progress-bar

> A plug-in for uploading pictures based on Vue

## Build Setup

# install

npm install vue-upload-picture --save

> or
> yarn add vue-upload-picture

# 使用组件必须传递的参数 options

| 参数           |      字段      |     类型 | 默认值 |
| -------------- | :------------: | -------: | -----: |
| 是否显示进度条 |  showProgress  | Booleans |   true |
| 是否预览图片   |  imagePreview  | Booleans |   true |
| 上传的接口链接 |      url       |   string |
| 图片名称       | fileUploadName |   string |
| 图片大小       |   limitSize    |   number |

```bash
options:{
   showProgress: true,
   imagePreview: true,
   url: "str",
   fileUploadName: "ajax-upload",//后台采用什么名字就传递什么名字
   limitSize: 1//限制图片上传的大小
}
# 组件的使用方法
 <hupload :options="options" v-on:receiveUploadMsg="receiveUploadMsg"></hupload>


# js 接受的信息判断
methods:{
  receiveUploadMsg(msg){
    //msg....
  }
}
```
