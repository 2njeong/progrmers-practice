const solution = (k, score) => {
  const n = score.length;
  const newArr = [];
  for (i = 1; i < n + 1; i++) {
    const slicedArr = score.slice(0, i);
    slicedArr.sort((a, b) => b - a);
    const kLengthArr = slicedArr.slice(0, k);
    const min = Math.min(...kLengthArr);
    newArr.push(min);
  }
  return newArr;
};