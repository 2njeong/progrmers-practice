function solution(n, computers) {

let netArr = [];

computers.forEach((com, i) => {
  const alreadyNetSet = netArr.find((net) =>
    com.some((c, i) => c > 0 && net.has(i))
  ); // 내가 포함된 Net이 이미 있는지
  if (alreadyNetSet && alreadyNetSet.size > 0) {
    // 있으면
    com.forEach((c, i) => c > 0 && alreadyNetSet.add(i)); // 그 포함된 net에 내 친구들까지 넣어
  } else {
    // 내가 포함된 net이 없으면
    const newNet = new Set(); // 새로운 Set 객체(새로운 네트워크) 만들어서
    com.forEach((c, i) => c > 0 && newNet.add(i)); // 거기에 나 포함 내 친구들 넣어서
    netArr.push(newNet); // netArr에 추가
  }
});

const reducedArr = netArr.reduce((acc, set, i, origin) => {
  const alreadyProcessed = acc.some((accSet) =>
    [...set].some((s) => accSet.has(s))
  );
  if (alreadyProcessed) {
    return acc; // 이미 처리된 경우 그냥 건너뜀
  }

  const hasSet = origin.find(
    (net, idx) => i !== idx && [...set].some((s) => net.has(s))
  );
  if (hasSet) {
    const unionSet = new Set([...set, ...hasSet]);
    acc.push(unionSet);
  } else {
    acc.push(set);
  }
  return acc;
}, []);
return reducedArr.length

}