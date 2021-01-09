/* rubygen.js */
window.onload = init;

function init() {
  const style = document.createElement('style');
  setStyleSheet(style);
  document.head.appendChild(style);
  console.log(style);
  console.log(StyleSheet.getWidth());
}

const StyleSheet = {
  width: 25,
  height: 15,
  unit: 'rem',
  getWidth: function () {
    return this.width + this.unit;
  },
  getHeight: function () {
    return this.height + this.unit;
  },
}

function setStyleSheet(style) {
  setTextarea(style);
  setTextareaTitle(style);
}