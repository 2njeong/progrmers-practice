function solution(a, b) {
    
  let start = Math.min(a, b);
  let end = Math.max(a, b);
    
  let arr = [a, b];
  newArr = [];
  var answer = 0;
  for (i = 0; i <= end - start; i++) {
    answer = start + i;
    newArr.push(answer);
  }

  s = newArr.length;
  sum = 0;
  for (j = 0; j < s; j++) {
    sum += newArr[j];
  }

  return sum;
}