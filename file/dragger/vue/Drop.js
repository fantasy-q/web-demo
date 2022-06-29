app.component('drag-area', {
  template:
    /*html*/
    `
    <div class="drag-area"
      @click="inputClick"
      @dragover.prevent
      @dragleave.prevent
      @drop.prevent="drop">
      <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
      <header>Drag & Drop to Upload File</header>
      <input type="file" hidden ref="input" @change="fileSelect">
    </div>
  `,
  data() {
    return {

    }
  },
  methods: {
    inputClick(e) {
      console.log(e);
      console.log(e.target);
      console.log(e.path);
      // this.$refs.input.click();
    },
    fileSelect(e) {
      console.log(e.target.files[0]);
    },
    drop(e) {
      console.log(e.dataTransfer.files[0]);
    }
  }
})