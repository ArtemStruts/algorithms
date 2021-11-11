const recursiveTree = (tree) => {
  let sum = 0;
  tree.forEach((leaf) => {
    sum += leaf.v;
    if (!leaf.c) {
      return leaf.v;
    }
    sum += recursiveTree(leaf.c);
    return sum;
  });
  return sum;
};

export default recursiveTree;
