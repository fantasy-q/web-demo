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

function setEventListener(td) {
  td.addEventListener('click', (event) => {
    switch (Board.States.Click) {
      case 0:
        Board.States.Click = 1;
        td.classList.toggle('begin');
        break;
      case 1:
        Board.States.Click = 2;
        td.classList.toggle('end');
        td.setAttrbute('data-path', Board.States.Path);
        // td.classList.toggle(`path-${Board.States.Path++}`);
        break;
    }
  })
  td.addEventListener('mouseover', (event) => {
    switch (Board.States.Click) {
      case 1:
        td.classList.toggle('over');
        break;
    }
  })
  td.addEventListener('mouseout', (event) => {
    switch (Board.States.Click) {
      case 1:
        td.setAttribute('data-path', Board.States.Path++);
        // td.classList.toggle(`path-${Board.States.Path++}`);
        break;
    }

  })
}
