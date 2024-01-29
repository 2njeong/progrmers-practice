function solution(t, p) {
  const n = t.length;
  const pN = p.length;
  let arr = [];

  for (i = 0; i <= n - pN; i++) {
    let substr = t.substring(i, i + pN);

    arr.push(substr);
  }

  let count = 0;
  arr.forEach((a) => (Number(a) <= Number(p) ? count++ : count));
  return count;
}