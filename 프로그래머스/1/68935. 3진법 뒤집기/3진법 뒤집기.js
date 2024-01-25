function solution(n) {
  let arr = [];

  while (n >= 1) {
    let num = n % 3;
    arr.push(num);
    n = Math.floor(n / 3);
  }

  let tennum = arr.reduce((acc, curr, idx) => {
    return acc + curr * 3 ** (arr.length - 1 - idx);
  }, 0);

  return tennum;
}