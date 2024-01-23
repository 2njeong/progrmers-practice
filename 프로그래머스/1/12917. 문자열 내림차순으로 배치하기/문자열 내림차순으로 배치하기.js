function solution(s) {
  let answer = Array.from(s);
  let arr = answer.sort().reverse();

  return arr.join("");
}