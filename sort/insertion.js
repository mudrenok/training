const arr = [8, 3, 4, 5, 23, 4, 125, 4, 123, 41, 2, 23, 4, 1, 2, 3, 4, 12, 3, 41];

const insertion = (arr = []) => {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    const curVal = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > curVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curVal;
  }
  return arr;
};

console.log(insertion(arr));