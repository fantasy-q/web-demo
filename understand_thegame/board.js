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
  for (let index = 0; index < Board.Row; index++) {
    const tr = document.createElement('tr');
    const row_arr = new Array();
    let last_td = null;
    tr.classList.add(`row${index + 1}`);
    for (let index = 0; index < Board.Column; index++) {
      const td = document.createElement('td');
      last_td = td;
      td.classList.add(`col${index + 1}`);
      EventListener(td);
      row_arr.push(td);
      tr.appendChild(td);
    }
    Board.DOMArray.push(row_arr);
    Board.DOM.appendChild(tr);
  }
}

function EventListener(td) {
  td.addEventListener('click', (event) => {
    switch (Board.States.Click) {
      case 0:
        td.classList.toggle('begin');
        break;
      case 1:
        td.classList.toggle('end');
        td.setAttrbute('data-path', Board.States.Path);
        // td.classList.toggle(`path-${Board.States.Path++}`);
        break;
    }
    Board.States.Click++;
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
