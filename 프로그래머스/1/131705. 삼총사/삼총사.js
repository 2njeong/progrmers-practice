function solution(numbers) {
let n = numbers.length;

let arrSum;
let count = 0;

for (i = 0; i < n; i++) {
  for (j = i + 1; j < n; j++) {
    for (k = j + 1; k < n; k++) {
      arrSum = numbers[i] + numbers[j] + numbers[k];
      arrSum === 0 ? (count += 1) : count;

    }
  }
}
    return count
}