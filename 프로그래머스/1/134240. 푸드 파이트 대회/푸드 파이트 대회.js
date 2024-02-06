function solution(food) {
  const arr = [];

  for (i = 1; i < food.length; i++) {
    arr.push(String(i).repeat(Math.floor(food[i] / 2)));
  }
  const newArr = [];
  newArr.push(...arr, "0", ...arr.reverse());
  return newArr.join("");
}