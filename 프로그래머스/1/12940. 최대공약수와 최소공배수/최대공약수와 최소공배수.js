function solution(a, b) {
  let arr = [a, b];

  let mapArr = arr.map((a, idx) => {
    let answer = [];
    for (i = 1; i <= arr[idx]; i++) {
      if (a % i === 0) {
        answer.push(i);
      }
    }
    return answer;
  });
  [array1, array2] = mapArr;

  const maxYaksu = Math.max(...array1.filter((item) => array2.includes(item)));
  const minBaesu = arr[0] * (arr[1] / maxYaksu);

  return [maxYaksu, minBaesu];
}