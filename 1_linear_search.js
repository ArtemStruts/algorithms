const linearSearch = (array, item) => {
  for (let i = 0; i < array.length; i += 1) {
    if (item === array[i]) {
      return i;
    }
  }
  return -1;
};

export default linearSearch;
