
<template>
  <div></div>
</template>

<script>
// 3,使用组件组合
  export default {
    methods: {
      handleScroll() {
        // 窗口滚动的高度超过窗口的高度时，变色
        if(window.scrollY > window.innerHeight) {
          this.$emit('scrollChange', 'out');
        } else {
           this.$emit('scrollChange', 'in');
        }
      }
    },

    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },

    destroyed() {
      window.removeEventListener('scorll', this.handleScroll);
    }
  }
</script>
