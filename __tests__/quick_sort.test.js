import { test, expect } from '@jest/globals';
import quickSort from '../5_quick_sort.js';

const arr = [2, 8, 5, 13, 88, -6, 12, 38, 19, 5];

test('quick sort', () => {
  const expected = [-6, 2, 5, 5, 8, 12, 13, 19, 38, 88];
  expect(quickSort(arr)).toEqual(expected);
  expect(quickSort([])).toEqual([]);
});
