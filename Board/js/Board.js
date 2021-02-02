class Board {
  constructor() {
    switch (arguments.length) {
      case 0:
        this.column = 0;
        this.row = 0;
        break;
      case 1:
        this.row = arguments[0];
        this.column = arguments[0];
        break;
      case 2:
        this.row = arguments[0];
        this.column = arguments[1];
        break;
      default:
        throw new Error('too many arguments');
        break;
    }
    this.DOM = {
      tds: Board.createTableData(this.row, this.column),
    }
    this.rows = Board.createTableRows(this.row, this.column, this.DOM.tds);
    this.columns = Board.createTableColumns(this.row, this.column, this.DOM.tds);
  }

  getTD(r, c, isIndex = false) {
    return isIndex ?
      this.DOM.tds[r][c] :
      this.DOM.tds[r - 1][c - 1];
  }

  generateTable() {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    table.classList.add('flex-container');
    tbody.classList.add('board');

    this.rows.forEach(e => {
      tbody.appendChild(e);
    })

    table.appendChild(tbody);
    return table;
  }

  iterateTd(someFunction) {
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.column; j++) {
        const td = this.DOM.tds[i][j];
        someFunction(td);
      }
    }
  }

  static createTableData(r, c) {
    const tds = new Array(r);
    for (let i = 0; i < r; i++) {
      tds[i] = new Array(c);
      for (let j = 0; j < c; j++) {
        const td = document.createElement('td');
        const id = i * c + j
        td.setAttribute('id', String(id).padStart(2, 0))
        tds[i][j] = td;
      }
    }
    return tds;
  }

  static createTableRows(r, c, tds) {
    const rows = new Array(r);
    for (let i = 0; i < r; i++) {
      const tr = document.createElement('tr');
      tr.setAttribute('id', `r${i + 1}`);
      for (let j = 0; j < c; j++) {
        const td = tds[i][j];
        td.classList.add(`row-${i + 1}`);
        tr.appendChild(td);
      }
      rows[i] = tr;
    }
    return rows;
  }

  static createTableColumns(r, c, tds) {
    const columns = new Array(c);

    for (let j = 0; j < c; j++) {
      const column = new Array(r);
      columns[j] = column;
      for (let i = 0; i < r; i++) {
        const td = tds[i][j];
        td.classList.add(`column-${j + 1}`)
        column[i] = td;
      }

    }
    return columns;
  }


}

