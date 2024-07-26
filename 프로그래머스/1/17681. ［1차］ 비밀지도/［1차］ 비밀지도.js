function solution(n, arr1, arr2) {
const toString2Arr = arr1.map((item, i) => {
  const first = Number(item.toString(2));
  const second = Number(arr2[i].toString(2));
  const theLength = (first + second).toString().length;
  if (theLength < n) {
    fillArr = Array.from({ length: n - theLength }, () => 0);
    return fillArr.join("") + (first + second) + "3";
  } else {
    return first + second + "3";
  }
});

const compareArr = toString2Arr
  .join("")
  .split("")
  .reduce((acc, cur) => {
    const item = Number(cur);
    if (item === 0) {
      acc.push(" ");
    } else if (item > 0 && item < 3) {
      acc.push("#");
    } else {
      acc.push(",");
    }
    return acc;
  }, []);

const splitArr = compareArr.join("").split(",");
splitArr.pop();

  return splitArr;
}