function setTextarea(style) {
  const text = `
  textarea, .textarea {
    width: ${StyleSheet.getWidth()};
    height: ${StyleSheet.getHeight()};
  }
  `;
  style.appendChild(TextNode(text));
}

function setTextareaTitle(style) {
  const text = `
  .section-textarea>p {
    width: ${StyleSheet.getWidth()};
  }
  `;
  style.appendChild(TextNode(text));
}

function TextNode(text) {
  return document.createTextNode(text);
}