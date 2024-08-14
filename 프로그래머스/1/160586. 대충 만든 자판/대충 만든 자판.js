function solution(keymap, targets) {
const keyMapArr = keymap.join(",").split("");
const keywordMap = new Map();
let commaIdx = 0;
keyMapArr.forEach((key, i) => {
  if (key === ",") {
    commaIdx = i + 1;
    return;
  }
  keywordMap.set(
    key,
    keywordMap.has(key)
      ? Math.min(keywordMap.get(key), i - commaIdx + 1)
      : i - commaIdx + 1
  );
});

const targetsArr = targets.join(",").split("");
let count = 0;
const result = targetsArr.reduce((acc, cur, i) => {
  if (cur === ",") {
    acc.push(count);
    count = 0;
    return acc;
  }
  if (keywordMap.has(cur) && count >= 0) {
    count += keywordMap.get(cur);
  } else {
    count = -1;
  }
  if (i === targetsArr.length - 1) {
    acc.push(count);
    return acc;
  }
  return acc;
}, []);

return result;
}