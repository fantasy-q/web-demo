/* common.js */

// 设置布局 
function setLayout() {
  let baseArea = document.getElementById('baseArea');
  let rubyArea = document.getElementById('rubyArea');
  let outputArea = document.getElementById('outputArea');
  let wrapArea = document.getElementById('mainSection');

  let textAreaWidth = baseArea.offsetWidth;
  let rubyAreaWidth = rubyArea.offsetWidth;
  let inputAreaWidth = textAreaWidth + rubyAreaWidth;

  let outputAreaWidth = inputAreaWidth + (TEXTAREA.margin - TEXTAREA.border - TEXTAREA.padding) * 2;
  // let wrapAreaWidth = inputAreaWidth + TEXTAREA.getOneSide() * 4;
  let wrapAreaWidth = outputAreaWidth + TEXTAREA.getOneSide() * 2 + 4;

  outputArea.setAttribute("style", setStyleWidth(outputAreaWidth));
  // wrapArea.setAttribute("style", setStyleWidth(wrapAreaWidth - (TEXTAREA.border + TEXTAREA.margin) * 2));
  wrapArea.setAttribute("style", setStyleWidth(wrapAreaWidth));

  let inputStyle = document.createElement("style");
  inputStyle.innerHTML = (
    "input {" +
    `  margin: 0px ${TEXTAREA.margin}px;` +
    "}"
  );
  document.head.appendChild(inputStyle);
}

// 是否为汉字字符
function isChinese(str) {
  var reg = /^[\u4E00-\u9FA5]+$/;
  if (!reg.test(str)) {
    return false;
  }
  return true;
}

// 设置宽度字符串
function setStyleWidth(width) {
  return `width: ${width}px;`;
}

// 调试用
function logDebug(debug) {
  console.log(debug, typeof (debug));
}

// 测试按钮处理
function testButtonHandler() {
  let BaseText =
    ' 聽我講\n' +
    '庄跤的路邊\n' +
    '蟬覕佇樹枝\n' +
    '七月天\n' +
    '鬧熱咧唱戲\n' +
    'SI LA SO FA MI\n\n' +
    ' 聽我講\n';
  let RubyText =
    ' thiann guá kóng\n' +
    ' tsng kha ê lōo pinn\n' +
    'siân bih tī tshiū ki\n' +
    'tshit gue̍h thinn\n' +
    'lāu jia̍t leh tshiùnn hì\n' +
    ' thiann guá kóng\n';

  setTextAreaContent('baseArea', BaseText);
  setTextAreaContent('rubyArea', RubyText);
}

// 隐藏测试按钮
function hiddenTestButton() {
  let testButton = document.getElementById("testButton");
  testButton.setAttribute("style", "visibility: hidden;");
}