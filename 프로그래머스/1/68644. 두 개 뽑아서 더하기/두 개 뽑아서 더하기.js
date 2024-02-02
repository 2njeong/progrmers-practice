function solution(numbers) {
    let n = numbers.length
    let answer = [];
let trashArr = [];
    
  for (i = 0; i < n - 1; i++) {
    for (j = i + 1; j < n; j++) {
      let plus = numbers[i] + numbers[j];
      answer.includes(plus) ? trashArr.push(plus) : answer.push(plus);
    }
  }
  answer.sort((a, b) => a - b);

  return answer;
}