const arr = [8, 3, 4, 5, 23, 4, 125, 4, 123, 41, 2, 23, 4, 1, 2, 3, 4, 12, 3, 41];

const selection = (arr = []) => {
  const len = arr.length;
  for (i = 0; i < len; i++) {
    let minIndex = i;
    for (j = i; j < len; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

console.log(selection(arr));