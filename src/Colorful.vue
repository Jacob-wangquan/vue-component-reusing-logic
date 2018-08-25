<template>
  <Scroll  id="box" @scrollChange="handleScrollChange" :style="{background: color}"></Scroll>
</template>

<script>
import Scroll from './Scroll.vue';
export default {
  name: 'colorful',
  components: {
    Scroll
  },
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
