function solution(participants, completion) {
  const cMap = new Map();
  completion.forEach((p) => cMap.set(p, cMap.get(p) + 1 || 1));
  const reducedArr = participants.reduce((acc, cur) => {
    const alCur = cMap.get(cur);
    if (alCur) {
      cMap.set(cur, alCur - 1);
      alCur < 0 && acc.push(cur);
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);

  return reducedArr[0];
}