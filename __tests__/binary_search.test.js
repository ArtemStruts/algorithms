import { test, expect } from '@jest/globals';
import binarySearch from '../2_binary_search.js';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

test.each([
  [1, 0],
  [10, 9],
  [15, 14],
  [28, -1],
])('binary search %i', (item, expected) => {
  expect(binarySearch(arr, item)).toEqual(expected);
});
