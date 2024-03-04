function solution(n, m, section) {
  let count = 0;
  let painted = 0;

  for (s of section) {
    if (painted < s) {
      count++;
      painted = s + m - 1;
      if (painted > n) {
        break;
      }
    }
  }
  return count;
}
