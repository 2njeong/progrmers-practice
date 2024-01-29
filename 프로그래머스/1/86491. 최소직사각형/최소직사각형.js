function solution(sizes) {
  let biggerList = sizes.map((numbers) => Math.max(...numbers));
  let lesserList = sizes.map((numbers) => Math.min(...numbers));
  return Math.max(...biggerList) * Math.max(...lesserList);
}