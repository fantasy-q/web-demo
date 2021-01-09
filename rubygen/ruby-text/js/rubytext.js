/* rubytext.js */
/** to-do
 * 将 BaseText 非汉字直接输出，并且不影响其他
 */

window.onload = init;

// 初始化
function init() {
  hiddenTestButton();
  setLayout();

  let generateBtn = document.getElementById("generateBtn");
  let exampleButton = document.getElementById("exampleButton");
  let testButton = document.getElementById("testButton");

  generateBtn.onclick = generateButtonHandler;
  exampleButton.onclick = exampleButtonHandler;
  testButton.onclick = testButtonHandler;
}

// 生成按钮处理函数
function generateButtonHandler() {
  let BaseText = getTextAreaContent('baseArea');
  let RubyText = getTextAreaContent('rubyArea');

  BaseText = BaseText.split("").filter(notEmptyElement);
  RubyText = RubyText.split(/\s/).filter(notEmptyElement);
  // BaseText = BaseText.split("");
  // BaseText = BaseText.split(/[\u4E00-\u9FA5]/);
  // let Hanzi = BaseText.split(/[A-Z]/).filter(notEmptyElement);
  // let notHanZi = BaseText.split(/[\u4E00-\u9FA5]/).filter(notWhiteSpaceElement);
  // let tmpArr = [];
  // for (let i = 0; i < Hanzi.length; i++) {
  //   // tmpArr = tmpArr.concat(Hanzi[i].split(""));
  //   console.log(Hanzi[i]);
  //   if (i < Hanzi.length - 1) {
  //     console.log(notHanZi[i]);
  //   }
  // }
  // Hanzi = tmpArr.filter(notEmptyElement);
  // console.log(Hanzi);
  // console.log(notHanZi);
  logDebug(BaseText);
  logDebug(RubyText);

  if (BaseText[0] && RubyText[0]) {
    let RubyMarkup = makeRubyMarkup(BaseText, RubyText);
    setTextAreaContent('outputArea', RubyMarkup);
  } else {
    console.log('长度不一致或未输入文本');
  }
}
// 示例按钮处理函数
function exampleButtonHandler() {
  let BaseText = '测试用例\n\n这是一个测试用例';
  let RubyText = 'ce shi yong li\n\nzhe shi yi ge ce shi yong li';
  setTextAreaContent('baseArea', BaseText);
  setTextAreaContent('rubyArea', RubyText);
}

// 合成 Ruby Markup
function makeRubyMarkup(base, ruby) {
  let HTML = "";
  for (let index = 0; index < base.length; index++) {
    if (base[index] == '\n') {
      ruby.splice(index, 0, "")
      HTML += "<br>\n";
    } else if (!isChinese(base[index])) {
      HTML += base[index];
      ruby.splice(index, 0, "")
    }
    else {
      HTML += `<ruby><rb>${base[index]}</rb><rt>${ruby[index]}</rt></ruby>`;
    }
  }
  return HTML;
}

// 获取 <textarea> 的文本 
function getTextAreaContent(id) {
  let TextArea = document.getElementById(id);
  return TextArea.value;
}

// 设置 <textarea> 的文本 
function setTextAreaContent(id, content) {
  let TextArea = document.getElementById(id);
  return TextArea.innerHTML = content;
}

// 去除空元素
function notEmptyElement(element) {
  return !(element == "" || element == " ");
}
function notWhiteSpaceElement(element) {
  return !(element == "\n" || element == "" || element == " ");
}


