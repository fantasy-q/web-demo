// 脚标
const links = [
  { url: 'https://developer.mozilla.org/en-US/docs/Web/API/FileList', source: 'MDN', description: 'FileList' },
  { url: 'https://codepen.io/Mohamed-ElHawary/pen/QWyRMeQ', source: 'Codepen', description: 'TextAreaCss' },
  { url: 'https://www.w3schools.com/howto/howto_js_copy_clipboard.asp', source: 'W3School', description: 'copy to clipboard' },
  { url: 'https://codepen.io/derekmorash/pen/XddZJY', source: 'Codepen', description: 'ButtonCss' },
  { url: 'https://stackoverflow.com/a/51059029', source: 'StackOverflow', description: 'Line number' },
]

// 主函数
window.onload = () => {
  let textarea = document.getElementsByTagName("textarea")[0];
  var pullfiles = function () {
    textarea.innerHTML = '';
    // love the query selector
    var fileInput = document.querySelector("#myfiles");
    var files = fileInput.files;
    // cache files.length
    var fl = files.length;
    var i = 0;

    let data = '';
    while (i < fl) {
      // localize file var in the loop
      var file = files[i];
      data += `  {  name: '${file.name}' },\n`;
      console.log(file);
      i++;
    }
    textarea.innerHTML += `[\n${data.slice(0, -2)}\n]`;
  }
  // set the input element onchange to call pullfiles
  document.querySelector("#myfiles").onchange = pullfiles;
  //a.t
  appendFooter();
}

// 创建 <a> 标签
function createLink(url, text = '') {
  const a = document.createElement("a");
  a.href = url;
  a.innerHTML = text;
  return a;
}

function appendFooter() {
  const footer = document.getElementsByTagName("footer")[0];
  const ul = document.createElement("ul");
  links.forEach(element => {
    let url = element.url;
    let text = element.source + "<br>" + element.description;
    let a = createLink(url, text);
    let li = document.createElement("li");
    li.appendChild(a);
    ul.appendChild(li);
  });
  footer.appendChild(ul);
}

// 复制到剪贴板
function copyToClipboard() {
  /* Get the text field */
  var copyText = document.getElementsByTagName("textarea")[0];

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}


// function codeHighLight(value) {
//   let outerSpan = document.createElement("span");
//   let valueSpan = document.createElement("span");
//   outerSpan.classList.add("key");
//   valueSpan.classList.add("value");
//   valueSpan.innerHTML = value;
//   let data = "name: " + valueSpan.outerHTML

//   outerSpan.innerHTML = data;
//   return outerSpan;
// }
