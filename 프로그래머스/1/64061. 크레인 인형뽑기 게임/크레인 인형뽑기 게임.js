function solution(board, moves) {
const num = board[0].length;
const newBoardArr = board.join(",").split(",");
const newBoradMap = new Map();

newBoardArr.forEach((b, i) => {
  if (b === "0") return;
  const row = (i % num) + 1;
  const originArr = newBoradMap.get(row) ? newBoradMap.get(row) : [];
  originArr.push(b);
  newBoradMap.set(row, originArr);
});

const result = moves.reduce((acc, cur) => {
  if (newBoradMap.get(cur).length > 0) {
    const doll = newBoradMap.get(cur).shift();
    acc.push(doll);
  }
  return acc;
}, []);

let count = 0;
const aaa = result.reduce((acc, cur, i) => {
  if (i > 0 && cur === acc[acc.length - 1]) {
    acc.pop();
    count++;
    return acc;
  }
  acc.push(cur);
  return acc;
}, []);

return count * 2
}