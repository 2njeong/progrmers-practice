function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  const sArr = Array.from(s).map((a) => Number(a));

  const found = sArr.find((a) => isNaN(a));
  if (found !== undefined) {
    return false;
  } else {
    return true;
  }
}