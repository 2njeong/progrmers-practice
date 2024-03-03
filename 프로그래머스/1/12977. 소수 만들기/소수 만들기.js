function solution(nums) {
let arr = [];

for (let i = 0; i < nums.length - 2; i++) {
  for (let j = i + 1; j < nums.length - 1; j++) {
    for (let k = j + 1; k < nums.length; k++) {
      arr.push(nums[i] + nums[j] + nums[k]);
    }
  }
}

const dapArr = arr.filter((num) => {
  for (let l = 2; l < num; l++) {
    if (num % l === 0) {
      return false;
    }
  }
  return true;
});
return dapArr.length;
}