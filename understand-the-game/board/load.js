const base = '../../Board/'
const head = document.head;
const body = document.body;

head.appendChild(loadStyles(base + "css/Board.css"));
head.appendChild(loadStyles(base + "css/MediaQuery.css"));

body.appendChild(loadScript(base + "js/Board.js"));
body.appendChild(loadScript(base + "js/LevelData.js"));
body.appendChild(loadScript(base + "js/DOMOperation.js"));


function loadScript(url) {
  const script = document.createElement('script');
  script.src = url;
  document.head.appendChild(script);
  return script;
}

function loadStyles(url) {
  const link = document.createElement('link');
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
  return link;
}