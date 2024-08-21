function solution(wallPaper) {
const newWallPaper = wallPaper.join("").split("");
let cycleCount = 0;
const xArr = [];
const yArr = [];
const cycle = wallPaper[0].split("").length;
const result = [];

newWallPaper.forEach((paper, idx) => {
  if (idx !== 0 && idx % cycle === 0) {
    cycleCount++;
  }
  const j = idx % cycle;
  if (paper === "#") {
    xArr.push(cycleCount, cycleCount + 1);
    yArr.push(j, j + 1);
  }
});

result.push(Math.min(...xArr));
result.push(Math.min(...yArr));
result.push(Math.max(...xArr));
result.push(Math.max(...yArr));
return result;
}