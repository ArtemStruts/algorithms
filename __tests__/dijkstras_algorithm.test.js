import { test, expect } from '@jest/globals';
import shortPath from '../7_dijkstras_algorithm.js';

const graph = {
  a: { b: 2, c: 1 },
  b: { f: 7 },
  c: { d: 5, e: 2 },
  d: { f: 2 },
  e: { f: 1 },
  f: { g: 1 },
  g: {},
};

test("Dijkstra's algorithm", () => {
  expect(shortPath(graph, 'a', 'g')).toBe(5);
  expect(shortPath(graph, 'a', 'n')).toBeNull();
});
