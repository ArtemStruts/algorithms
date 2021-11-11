const findLowestCostNode = (costs, processed) => {
  let lowestCost = 1000000;
  let lowestCostNode;
  Object.keys(costs).forEach((node) => {
    const cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  });
  return lowestCostNode;
};

const shortPath = (graph, start, end) => {
  const costs = {};
  const processed = [];
  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      const value = graph[start][node];
      costs[node] = value || 1000000;
    }
  });
  let node = findLowestCostNode(costs, processed);
  while (node) {
    const cost = costs[node];
    const neighbors = graph[node];
    Object.keys(neighbors).forEach((neighbor) => {
      const newCost = cost + neighbors[neighbor];
      if (costs[neighbor] > newCost) {
        costs[neighbor] = newCost;
      }
    });
    processed.push(node);
    node = findLowestCostNode(costs, processed);
  } return costs[end] ?? null;
};

export default shortPath;
