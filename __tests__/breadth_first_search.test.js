import { test, expect } from '@jest/globals';
import breadthSort from '../6_breadth_first_search.js';

const graph = {
  a: ['b', 'c'],
  b: ['f'],
  c: ['d', 'e'],
  d: ['f'],
  e: ['f'],
  f: ['g'],
  g: [],
};

test('breadth first search', () => {
  expect(breadthSort(graph, 'a', 'g')).toBeTruthy();
  expect(breadthSort(graph, 'a', 'n')).toBeFalsy();
});
