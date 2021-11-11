import { test, expect } from '@jest/globals';
import bubbleSort from '../4_bubble_sort.js';

const arr = [2, 8, 5, 13, 88, -6, 12, 38, 19, 5];

test('bubble sort', () => {
  const expected = [-6, 2, 5, 5, 8, 12, 13, 19, 38, 88];
  expect(bubbleSort(arr)).toEqual(expected);
  expect(bubbleSort([])).toEqual([]);
});
