export default {
  methods: {
    handleScroll() {
      // 窗口滚动的高度超过窗口的高度时，变色
      if(window.scrollY > window.innerHeight) {
        this.handleScrollChange('out');
      } else {
        this.handleScrollChange('in');
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