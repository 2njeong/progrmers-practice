function solution(numbers, hand) {
let rArr = [];
let lArr = [];

const result = numbers.reduce((acc, cur, i) => {
  if (cur === 0) cur = 11;
  if (cur % 3 === 0) {
    // 3,6,9 - 오른손
    acc.push("R");
    rArr.push(cur);
    return acc;
  } else if (cur % 3 === 1) {
    // 1 4 7 - 왼손
    acc.push("L");
    lArr.push(cur);
    return acc;
  } else {
    const curY = Math.floor(cur / 3);
    const curX = cur % 3;
    // 2 5 8 0(11)
    const rLast = rArr.length > 0 ? rArr[rArr.length - 1] : 12;
    const lLast = lArr.length > 0 ? lArr[lArr.length - 1] : 10;
    let rY =
      rLast % 3 === 0 ? Math.floor(rLast / 3) - 1 : Math.floor(rLast / 3);
    let rX = rLast % 3 === 0 ? 3 : rLast % 3;

    let lY = Math.floor(lLast / 3);
    let lX = lLast % 3;

    let rDis = Math.abs(curX - rX) + Math.abs(curY - rY);
    let lDis = Math.abs(curX - lX) + Math.abs(curY - lY);

    if (rDis > lDis) {
      lArr.push(cur);
      acc.push("L");
    }
    if (rDis < lDis) {
      rArr.push(cur);
      acc.push("R");
    }
    if (rDis === lDis) {
      acc.push(hand === "right" ? "R" : "L");
      hand === "right" ? rArr.push(cur) : lArr.push(cur);
    }
    return acc;
  }
}, []);
return result.join("") 
}