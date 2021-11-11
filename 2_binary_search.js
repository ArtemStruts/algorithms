const binarySearch = (array, item) => {
  let start = 0;
  let end = array.length - 1;
  let middle;
  let position = -1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      position = middle;
      return position;
    }
    if (item > array[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  } return position;
};

export default binarySearch;
