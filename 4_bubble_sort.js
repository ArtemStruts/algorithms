const bubbleSort = (array) => {
  const sortedArr = [...array];
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - i; j += 1) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        const tmp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = tmp;
      }
    }
  } return sortedArr;
};

export default bubbleSort;
