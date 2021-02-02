function generatrTable(board) {
  const table = board.generateTable();
  return table;
}

function setStyleSheets(level) {
  //设置主题色
  for (const key in object = level.themeColor) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      document.body.style[key] = element;
    }
  }

  // 设置类样式
  const styleElement = document.createElement('style');
  const prefix = '.board td.'
  for (const className in classList = level.class) {
    if (Object.hasOwnProperty.call(classList, className)) {
      const properties = classList[className];
      const selector = prefix + className;
      const textArr = new Array;
      for (const propertyName in properties) {
        if (Object.hasOwnProperty.call(properties, propertyName)) {
          const propertyValue = properties[propertyName];
          const string = `${camelToKebab(propertyName)}: ${propertyValue};`;
          textArr.push(string);
        }
      }
      const style = `${selector} {\n  ${textArr.join('\n  ')}\n}`
      const textNode = document.createTextNode(style);
      styleElement.appendChild(textNode);
    }
    // 合并 textNode
    styleElement.normalize();
  }
  document.head.appendChild(styleElement);
}

// 驼峰转横线
function camelToKebab(input) {
  return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}