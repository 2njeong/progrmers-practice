function solution(number, limit, power) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0; // 새로운 number의 약수의 갯수를 구할 때마다 count 초기화
    for (let j = 0; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) {
          // ex) 36 = 6 x 6 => 약수의 갯수가 6 = 1 개
          count++;
        } else {
          // ex) 10 = 2 x 5 => 2도, 5도 약수이므로 약수의 갯수 = 2개
          count += 2;
        }
      }
      if (count > limit) {
        count = power;
          break
      }
    }
    sum += count;
  }
  return sum;
}