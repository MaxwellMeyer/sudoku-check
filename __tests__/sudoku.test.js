import { TestScheduler } from 'jest';
import Sudoku from '../src/sudoku.js';

describe('Sudoku', () => {
  test('should create a sudoku object', () => {
    const sudoku = new Sudoku([1,2,3], [4,5,6])
    expect(sudoku.row).toEqual([1,2,3]);
    expect(sudoku.column).toEqual([4,5,6]);
  });
});