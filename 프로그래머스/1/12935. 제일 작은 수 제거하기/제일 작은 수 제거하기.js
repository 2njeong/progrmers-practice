function solution(arr) {
  let sortedArr = [...arr];

  const n = sortedArr.length;

  if (n > 1) {
    for (i = 0; i < n - 1; i++) {
      for (j = i + 1; j < n; j++) {
        if (sortedArr[i] > sortedArr[j]) {
          let temp = sortedArr[i];
          sortedArr[i] = sortedArr[j];
          sortedArr[j] = temp;
        }
      }
    }
    return arr.filter((a) => a !== sortedArr[0]);
  } else {
    return [-1];
  }
}