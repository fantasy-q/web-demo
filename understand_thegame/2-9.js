/* 2-9.js */

window.onload = () => {
  Board.setSize(5, 8);
  createBoard(Board);
  // console.log(getWindowLessSide());
  console.log(Board.DOMArray);
}

const Board = {
  Row: 9,
  Column: 9,
  Length: 50,
  DOM: '',
  DOMArray: new Array(),
  States: {
    Click: 0,
    /**
    * 0: init
    * 1: begin
    * 2: end
    */
    Path: 0,

  },
  setSize: function (r, c) {
    this.Row = r;
    this.Column = c;
  },
}

function getWindowLessSide() {
  const body = document.body;
  const w = body.offsetWidth;
  const h = body.offsetHeight;
  return w < h ? w : h;
}

