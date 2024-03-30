function solution(s) {
let sArr = s.split("");
let sCount = 0;
let dCount = 0;
let tCount = 0;
let idx = 0;

sArr.forEach((s) => {
  if (sArr.indexOf(s) === 0) {
    sCount++;
  } else {
    if (s !== sArr[sArr.indexOf(s) - 1]) {
      dCount++;
    } else {
      sCount++;
    }
  }
  if (sCount === dCount) {
    tCount++;
    sCount = 0;
    dCount = 0;
    sArr = sArr.slice(idx + 1);
    idx = 0;
  }
  if (sCount !== dCount && idx === sArr.length - 1) {
    tCount++;
  }
  idx === 0 && sCount === 0 ? (idx = 0) : idx++;
});
return tCount;
}