function solution(arr, divisor) {
  const mapArr = arr.filter((a) => a % divisor === 0);
  let n = mapArr.length;

  if (n !== 0) {
    for (i = 0; i < n; i++) {
      for (j = i + 1; j < n; j++) {
        if (mapArr[i] > mapArr[j]) {
          let temp = mapArr[i];
          mapArr[i] = mapArr[j];
          mapArr[j] = temp;
        }
      }
    }
    return mapArr;
  } else {
    return [-1];
  }
}