function solution(numbers, target) {
  let count = 0;
  let combiArr = [];

  const make = (arr, num) => {
    const initialArr = arr.length ? arr : [[]];
    const reducedArr = initialArr.reduce((acc, cur) => {
      acc.push([...cur, num], [...cur, -num]);
      return acc;
    }, []);
    return reducedArr;
  };

  numbers.forEach((n) => {
    combiArr = make(combiArr, n);
  });

 combiArr.forEach((combi) => {
  let checkArr = new Array(numbers.length).fill("a");
  checkArr = combi;
  const finalCount = checkArr.reduce((acc, cur) => acc + cur, 0);
  if (finalCount === target) count++;
});
  return count;
}