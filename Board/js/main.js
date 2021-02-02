// 创建 n * m 的棋盘
const board = new Board(5, 8);

// 生成 DOM
const level = levels[4];
setStyleSheets(level);
const table = generatrTable(board);

// 添加到 body
with (document.body) {
  insertBefore(table, firstElementChild);
}

board.iterateTd((td) => {
  td.onclick = () => {
    td.classList.toggle('clicked');
  }
})
