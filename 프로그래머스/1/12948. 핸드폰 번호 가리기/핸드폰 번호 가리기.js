function solution(phone_number) {
  let arr = Array.from(phone_number);
let n = arr.length
  for (var i = 0; i < n-4; i++) {
    arr[i] = "*";
  }

  return arr.join("");
}