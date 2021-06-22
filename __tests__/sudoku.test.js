import { TestScheduler } from 'jest';
import Sudoku from '../src/sudoku.js';

describe('Sudoku', () => {
  test('should create a sudoku object', () => {
    const sudoku = new Sudoku([1,2,3], [4,5,6]);
    expect(sudoku.row).toEqual([1,2,3]);
    expect(sudoku.column).toEqual([4,5,6]);
  });
  test('should check if all entered numbers are integers between 1-9', () => {
    const testSudoku = new Sudoku([2, 4, 6, 7], [3, 5, 7, 44]);
    expect(testSudoku.checkInt()).toEqual("Nice try!!! NOT ALLOWED");
  });
test('should check if there is duplicates in array', () => {
const testRow = new Sudoku([1,2,3,4],[4,5,6,7]);
expect(testRow.checkRow()).toEqual("Good!");
});
});