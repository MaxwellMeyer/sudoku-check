// let sudoku = new Soduku ([],[])

export default function Sudoku(row, column) {
this.row = row;
this.column = column;
}

Sudoku.prototype.checkInt = function() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const columnArr = this.column;
  const rowArr = this.row;
  const bothArr = [...columnArr, ...rowArr];
  for (let i =0; i < bothArr.length; i ++) {
    if (!bothArr.includes(numbers[i])){
      return "Nice try!!! NOT ALLOWED";
    }
  }
};

