function solution(lottos, win_nums) {
  let real = lottos.filter((lo) => lo !== 0);
  let zeroLength = lottos.filter((lo) => lo === 0).length;

  let count = 0;

  win_nums.forEach((num) => {
    for (i = 0; i < real.length; i++) {
      if (num === real[i]) {
        count++;
      }
    }
  });

  return [
    7 - (count + zeroLength) > 6 ? 6 : 7 - (count + zeroLength),
    7 - count >= 6 ? 6 : 7 - count,
  ];
}