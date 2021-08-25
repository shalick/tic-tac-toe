class TicTacToe {
  playerSymbols = ['x', 'o'];
  constructor() {
    this.field = Array(3)
      .fill(null)
      .map((e) => Array(3).fill(null));
    this.currentPlayerSymbol = this.playerSymbols[0];
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex] === null) {
      this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
      this.currentPlayerSymbol = this.playerSymbols.reverse()[0];
    }
  }

  isFinished() {
    return Boolean(this.getWinner()) || this.isDraw();
  }

  getWinner() {
    for (const element of this.playerSymbols) {
      if (
        this.field.some((e) => e.every((x) => x === element)) ||
        this.field[0].some((_, colIndex) =>
          this.field.every((row) => row[colIndex] === element)
        ) ||
        this.field.every(
          (x, i) => x[i] === element
        ) || 
        this.field.every(
          (x, i) => x[this.field.length - 1 - i] === element
        ) 
      ) {
        return element;
      }
    }
    return null;
  }

  noMoreTurns() {
    return !this.field.some((e) => e.includes(null));
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
