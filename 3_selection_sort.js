const selectionSort = (array) => {
  const sortedArr = [...array];
  for (let i = 0; i < array.length; i += 1) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j += 1) {
      if (sortedArr[j] < sortedArr[indexMin]) {
        indexMin = j;
      }
    } const tmp = sortedArr[i];
    sortedArr[i] = sortedArr[indexMin];
    sortedArr[indexMin] = tmp;
  } return sortedArr;
};

export default selectionSort;
