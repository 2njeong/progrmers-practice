function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const newarr = arr1[i].map((a, j) => {
      return a + arr2[i][j];
    });
    answer.push(newarr);
  }
  return answer;
}