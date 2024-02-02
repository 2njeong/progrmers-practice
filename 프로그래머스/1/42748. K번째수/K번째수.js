function solution(arr, commands) {
  const minisol = ([i, j, k]) => {
    let newArr = arr.slice(i - 1, j);
    newArr.sort((a, b) => a - b);
    return newArr[k - 1];
  };

  let dap = commands.map((co) => minisol(co));
  return dap;
}