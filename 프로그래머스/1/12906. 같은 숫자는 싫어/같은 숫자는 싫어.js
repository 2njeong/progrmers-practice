function solution(arr){
let prev = 0;
const answer = arr.reduce((acc, cur, i) => {
  if (i > 0 && cur === arr[i-1]) {
    return acc;
  }
  prev = cur;
  acc.push(cur);
  return acc;
}, []);
return answer;
}