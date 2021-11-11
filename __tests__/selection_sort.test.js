import { test, expect } from '@jest/globals';
import selectionSort from '../3_selection_sort.js';

const arr = [2, 8, 5, 13, 88, -6, 12, 38, 19, 5];

test('selection sort', () => {
  const expected = [-6, 2, 5, 5, 8, 12, 13, 19, 38, 88];
  expect(selectionSort(arr)).toEqual(expected);
  expect(selectionSort([])).toEqual([]);
});
