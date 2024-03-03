function solution(nums) {
  let arr = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  // console.log(arr);

  const dapArr = arr.filter((num) => {
    let some = [];
    for (let l = 2; l < num; l++) {
      if (num % l === 0) {
        some.push(l);
      }
    }
    return some.length === 0;
  });
  return dapArr.length;
}