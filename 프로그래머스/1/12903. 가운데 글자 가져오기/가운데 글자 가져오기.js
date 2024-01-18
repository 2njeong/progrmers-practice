function solution(str) {
  let arr = [...str]; // ['1','2','3'...]
  let n = arr.length;
  let filarr = [];
  if (n % 2 === 0) {
    filarr = arr.splice(n / 2 - 1, 2);
  } else {
    filarr = arr.splice(Math.floor(n / 2), 1);
  }

  return filarr.join("");
}