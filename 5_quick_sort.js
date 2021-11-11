const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[0];
  const less = [];
  const greater = [];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > pivot) {
      greater.push(array[i]);
    } else {
      less.push(array[i]);
    }
  } return [...quickSort(less), pivot, ...quickSort(greater)];
};

export default quickSort;
