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
        throw new Error('too many arguments')
        break;
    }
  }
}

