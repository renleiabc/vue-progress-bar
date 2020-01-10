/*
 * @Author: renlei
 * @Date: 2020-01-10 10:50:28
 * @LastEditors  : renlei
 * @LastEditTime : 2020-01-10 11:01:48
 * @Description:进度条导出模块
 */
import VueProgressBar from './progressBar';
const progressBar = {
  install: function(Vue) {
    //VueToastPlugin.name插件的名称
    // VueProgressBar插件的具体内容
    Vue.component(VueProgressBar.name, VueProgressBar);
  },
};
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(progressBar);
}
// 导出模块
export default progressBar;
