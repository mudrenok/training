const arr = [8, 3, 4, 5, 23, 4, 125, 4, 123, 41, 2, 23, 4, 1, 2, 3, 4, 12, 3, 41];

const bubble = (arr = []) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
};

console.log(bubble(arr));