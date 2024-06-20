function solution(players, callings) {
  const answer = [...players];
   const indexMap = {}; 
    players.forEach((player, index) => {
    indexMap[player] = index;
  });

 callings.forEach((cal) => {
    const originIdx = indexMap[cal];
    if (originIdx > 0) {
      let previousPlayer = answer[originIdx - 1];
      answer[originIdx - 1] = cal;
      answer[originIdx] = previousPlayer;

      indexMap[cal]--;
      indexMap[previousPlayer]++;
    }
  });
  return answer;
}