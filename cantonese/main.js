/* main.js */

window.onload = init;

function init() {
  let form = document.getElementById("form");
  let textinput = document.getElementById("textinput");

  var formData = new FormData(form)


  let testText =
    "�ˤ��o �A���U�@\n" +
    " �����} ���ʪ��Y��\n" +
    "�䤣�� ��ۥN��\n" +
    "�Ѥ@�� �Ѥ��z �o�����D\n";
  setTextAreaContent("textBox", testText);
  let text = getTextAreaContent("textBox").split("");
  textinput.value = text[0];

  console.log(form.submit());
  console.log(formData);


  // text.forEach(element => {
  //   // console.log(element);


  // });


}

// ?�� <textarea> ���奻 
function getTextAreaContent(id) {
  let TextArea = document.getElementById(id);
  return TextArea.value;
}

// ?�m <textarea> ���奻 
function setTextAreaContent(id, content) {
  let TextArea = document.getElementById(id);
  return TextArea.innerHTML = content;
}

// �h���Ť���
function notEmptyElement(element) {
  return !(element == "" || element == " ");
}
function notWhiteSpaceElement(element) {
  return !(element == "\n" || element == "" || element == " ");
}
