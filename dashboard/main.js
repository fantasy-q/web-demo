/* main.js */

window.onload = init;
// 初始化
function init() {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  setLayout(canvas, context);
  let counter = 0

  setInterval(() => {
    paintAnimation(canvas, context);
    console.log(counter++, dashBoard.getValue());
  }, 1500);

  // paintAnimation(canvas, context, 10);
}
// 度数转弧度
function degreeToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}
// 画布布局
function setLayout(canvas, context) {
  canvas.setAttribute("width", Canvas.getWidth() + "px");
  canvas.setAttribute("height", Canvas.getHeight() + "px");
}
// 动画效果
function paintAnimation(canvas, context, fixedInterval, interval = 10) {
  let lastValue = dashBoard.getValue();
  let currentValue = Math.round(Math.random() * dashBoard.getMax());
  if (fixedInterval) {
    interval = Math.floor(fixedInterval / Math.abs(lastValue - currentValue));
  }
  console.log("interval", interval);
  setInterval(() => {
    if (currentValue > lastValue) {
      dashBoard.setValue(lastValue++)
      paintBoard(canvas, context, dashBoard);
    } else if (currentValue < lastValue) {
      dashBoard.setValue(lastValue--)
      paintBoard(canvas, context, dashBoard);
    }
  }, interval);
}