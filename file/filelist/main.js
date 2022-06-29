const app = Vue.createApp({
  data() {
    return {
      count: 4,
      files: []
    }
  },
  methods: {
    fileSelect(e) {
      // 选择同一个文件相当于没有 change, 不会触发函数
      console.log('event:', e.target.files, typeof e.target.files);
      for (const iterator of e.target.files) {
        console.log('iterator', iterator);
        this.files.push(iterator)
      }
      console.log('files:', this.files);
      console.log('---------------------------------------------------');
    }
  }
})
