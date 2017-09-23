const arr = [8, 3, 4, 5, 23, 4, 125, 4, 123, 41, 2, 23, 4, 1, 2, 3, 4, 12, 3, 41];

const merge = (arrA, arrB) => {
  const aLen = arrA.length, bLen = arrB.length, rezArr = [];
  let a = 0, b = 0;
  while (a < aLen && b < bLen) {
    rezArr.push(arrA[a] < arrB[b] ? arrA[a++] : arrB[b++]);
  }
  if (a < aLen) return rezArr.concat(arrA.slice(a, aLen));
  if (b < bLen) return rezArr.concat(arrB.slice(b, bLen));
  return rezArr;
};

const mergeSort = (arr = []) => {
  const len = arr.length;
  if (len <= 1) return arr;
  const middle = ~~(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, middle));
  const rightArr = mergeSort(arr.slice(middle, len));
  return merge(leftArr, rightArr);
};

console.log(mergeSort(arr));