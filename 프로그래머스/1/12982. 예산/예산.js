function solution(d, budget) {
  const sortedD = d.sort((a, b) => a - b);
  let sum = 0;
  let count = 0;

  for (let i = 0; i < sortedD.length; i++) {
    sum += sortedD[i];
    if (sum > budget) {
      break;  
    }
    count++;
  }

  return count;
}