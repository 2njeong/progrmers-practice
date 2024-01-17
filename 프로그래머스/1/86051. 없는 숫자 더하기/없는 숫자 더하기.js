function solution(numbers) {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const filterArr = arr.filter((a) => {
    return numbers.indexOf(a) === -1;
  });
  let sum = 0;
  filterArr.forEach((a) => {
    sum += a;
  });

  return sum;
    
}