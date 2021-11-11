const breadthSearch = (graph, start, end) => {
  let queque = graph[start];
  while (queque.length > 0) {
    const current = queque.shift();
    if (current === end) {
      return true;
    } queque = [...queque, ...graph[current]];
  } return false;
};

export default breadthSearch;
