function solution(x) {
let str = String(x);

  let mapfn = (str) => Number(str);

  let arr = Array.from(str, mapfn);

  var answer = true;
  sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (!(x % sum === 0)) {
    answer = false;
  }
  return answer;
}