/* main.js */

window.onload = init;

function init() {
  let form = document.getElementById("form");
  let textinput = document.getElementById("textinput");

  var formData = new FormData(form)


  let testText =
    "捨不得 璀璨俗世\n" +
    " 躲不開 痴戀的欣慰\n" +
    "找不到 色相代替\n" +
    "參一生 參不透 這條難題\n";
  setTextAreaContent("textBox", testText);
  let text = getTextAreaContent("textBox").split("");
  textinput.value = text[0];

  console.log(form.submit());
  console.log(formData);


  // text.forEach(element => {
  //   // console.log(element);


  // });


}

// ?取 <textarea> 的文本 
function getTextAreaContent(id) {
  let TextArea = document.getElementById(id);
  return TextArea.value;
}

// ?置 <textarea> 的文本 
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
