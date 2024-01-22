function solution(left, right) {
  let sum = 0;
  for (let num = left; num <= right; num++) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }
    if (count % 2 === 0) {
      sum += num;
    } else {
      sum -= num;
    }
  }
  return sum;
}
