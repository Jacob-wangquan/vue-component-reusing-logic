<template>
  <div id="app">
    <div id="box" :style="{background: color}"></div>
  </div>
</template>

<script>
import Scroll from './Scroll.js';
export default {
  name: 'app',
  //1，导入继承：子组件的钩子在父组件之前执行
  //extends: Scroll, 

  //2，使用mixins共享组件逻辑：钩子函数在组使用它之前执行它们的钩子，而且mixins只包含普通的JavaScript
  mixins: [Scroll], 

  data () {
    return {
      color: 'red'
    }
  },

  methods: {
    handleScrollChange(status) {
      this.color = status === 'in' ? 'red' : 'blue'
    }
  }
}
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100%;
}

#box{
  width: 100%;
  height: 2000px;
}
</style>
