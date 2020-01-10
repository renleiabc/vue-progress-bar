<!--
 * @Author: renlei
 * @Date: 2020-01-10 10:47:57
 * @LastEditors  : renlei
 * @LastEditTime : 2020-01-10 17:44:34
 * @Description: 进度条插件
 -->
<template>
  <div
    class="bar"
    :style="{ width: option.width + 'px', height: option.height + 'px' }"
  >
    <ul>
      <li class="bar-child" v-for="(item, index) in option.arrOption">
        <button
          class="bar-btn"
          :style="{
            width: option.btnWidth + 'px',
            height: option.btnHeight + 'px',
            top: -(option.btnHeight - option.height) / 4 + 'px',
            left: -option.btnWidth / 2 + 'px',
          }"
          @click="btnBar(item.text, index)"
          :class="{ btnActive: item.active }"
          :disabled="option.disabled"
        ></button>
        <span class="bar-text" :class="{ textActive: item.active }">{{
          item.text
        }}</span>
      </li>
    </ul>
    <div
      class="progress"
      :style="{
        width:
          (option.width / option.arrOption.length) *
            (option.arrOption.length - 1) +
          'px',
        height: option.height + 'px',
        background: option.background,
      }"
    >
      <div
        ref="progressChange"
        class="progress-change"
        :style="{
          height: option.height + 'px',
          background: option.btnColor,
          transition: 'width 2s',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import animate from './animate';
export default {
  name: 'vueProgressBar',
  data() {
    return {};
  },
  props: {
    option: {
      type: Object,
      default: {
        width: 500,
        height: 10,
        btnWidth: 16,
        selected: 1,
        btnHeight: 16,
        background: '#e1e1e1',
        disabled: false,
        arrOption: [1, 2, 3, 4, 5, 6],
      },
    },
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log(this.option);
      const arrOption = this.option.arrOption;
      const selected = this.option.selected;
      let i,
        arr = [];
      arrOption.map((item, index) => {
        if (item === selected) {
          i = index;
        }
      });
      arrOption.map((item, index) => {
        let obj = {};
        if (index > i) {
          obj = {
            text: item,
            active: false,
          };
        } else {
          obj = {
            text: item,
            active: true,
          };
        }
        arr.push(obj);
      });
      console.log(arr);
      this.option.arrOption = arr;
      const element = this.$refs.progressChange;
      const style = {
        width: (this.option.width / arrOption.length) * i,
      };
      animate(element, style, 1000);
    },
    btnBar(text, index) {
      const arrOption = this.option.arrOption;

      arrOption.map((item, i) => {
        let obj = {};
        if (i > index) {
          item.active = false;
        } else {
          item.active = true;
        }
        return item;
      });
      this.option.arrOption = arrOption;
      const element = this.$refs.progressChange;
      const style = {
        width: (this.option.width / arrOption.length) * index,
      };
      animate(element, style, 50);
      this.$emit('btnBar', { text, index });
    },
  },
  components: {},
  computed: {},
  watch: {
    'option.selected': {
      handler: 'init',
      immediate: false,
    },
  },
};
</script>
<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
button {
  border: none;
  outline: none;
}
.bar {
  display: inline-block;
  position: relative;
  border-radius: 5px;
}
.bar ul {
  display: flex;
  height: 10px;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 200;
}
.bar ul li > * {
  position: absolute;
}
.bar-child {
  flex: 1;
  position: relative;
}

.bar-btn {
  border-radius: 50%;
  background: #787878;
  color: #9c9a9b;
  cursor: pointer;
}
.bar .btnActive {
  background: #60baff;
  color: #3276b1;
}
.bar .textActive {
  color: #3276b1;
}
.bar-text {
  top: 20px;
  left: -5px;
}
.progress {
  position: absolute;
  border-radius: 5px;
  left: 0;
  top: 0;
  z-index: 100;
}
.progress-change {
  position: absolute;
  border-radius: 5px;
  left: 0;
  top: 0;
  z-index: 200;
}
</style>
