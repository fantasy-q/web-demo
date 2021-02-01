function createBoard(Board) {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  Board.DOM = tbody;
  table.classList.add('flex-container');
  tbody.classList.add('board');
  // create Grid
  createGrid(Board);
  table.appendChild(tbody);
  document.body.appendChild(table);
}

function createGrid(Board) {
  // create <tr>
  for (let index = 0; index < Board.Row; index++) {
    const tr = document.createElement('tr');
    const row_arr = new Array();
    let last_td = null;
    tr.classList.add(`row${index + 1}`);
    // create <td>
    for (let index = 0; index < Board.Column; index++) {
      const td = document.createElement('td');
      // const canvas = document.createElement('canvas');
      last_td = td;
      td.classList.add(`col${index + 1}`);
      setEventListener(td);
      row_arr.push(td);
      // td.appendChild(canvas);
      tr.appendChild(td);
    }
    Board.DOMArray.push(row_arr);
    Board.DOM.appendChild(tr);
  }
}
