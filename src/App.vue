<!--
 * @Author: renlei
 * @Date: 2020-01-10 10:38:21
 * @LastEditors  : renlei
 * @LastEditTime : 2020-01-14 17:45:34
 * @Description: 
 -->
<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <vue-progress-bar
      :option="objOption"
      @btnBar="handleBtnBar"
    ></vue-progress-bar>
  </div>
</template>

<script>
import Vue from 'vue';
import vueProgressBar from './plugin/vueProgressBar';
Vue.use(vueProgressBar);
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      objOption: {
        width: 500,
        height: 10,
        selected: "",
        btnWidth: 16,
        btnHeight: 16,
        background: '#e1e1e1',
        btnColor: '#60baff',
        disabled: false,
        arrOption: [1, 2, 3, 4, 5, 6],
      },
    };
  },
  methods: {
    handleBtnBar($event) {
      console.log($event);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
