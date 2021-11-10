const arr = [1, 4, 2, 5, 6, 7, 9, 16, 24, 65];

const linearSearch = (array, item) => {
  for (let i = 0; i < array.length; i += 1) {
    if (item === array[i]) {
      return i;
    }
  }
  return null;
};

console.log(linearSearch(arr, 20));