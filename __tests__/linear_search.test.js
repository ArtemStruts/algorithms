import { test, expect } from '@jest/globals';
import linearSearch from '../1_linear_search.js';

const arr = [1, 4, 2, 5, 6, 7, 9, 16, 24, 65];

test.each([
  [1, 0],
  [16, 7],
  [65, 9],
  [14, -1],
])('linear search %i', (item, expected) => {
  expect(linearSearch(arr, item)).toEqual(expected);
});
