function solution(friends, gifts) {
  const answer = [];
  const friendMap = new Map();
  const giftNum = new Map();

  friends.forEach((friend) => {
    const innerMap = new Map();
    gifts.forEach((pair) => {
      const pairArr = pair.split(" ");
      if (pairArr.includes(friend)) {
        // 포함하고 있는지
        if (pairArr.indexOf(friend) === 0) {
          // 0번째인지
          innerMap.has(pairArr[1])
            ? innerMap.set(pairArr[1], innerMap.get(pairArr[1]) + 1)
            : innerMap.set(pairArr[1], 1);
        } else {
          innerMap.has(pairArr[0])
            ? innerMap.set(pairArr[0], innerMap.get(pairArr[0]) - 1)
            : innerMap.set(pairArr[0], -1);
        }
      } else return;
    });
    giftNum.set(
      friend,
      [...innerMap.values()].reduce((acc, cur) => acc + cur, 0)
    );
    innerMap.set(
      "count",
      [...innerMap.values()].filter((val) => val > 0).length
    );
    friendMap.set(friend, innerMap);
  });

  // 선물지수 비교
  for (let [outerKey, inner] of friendMap) {
    friends.forEach((f) => {
      if (f !== outerKey) {
        const fMap = friendMap.get(f);
        if (inner.has(f)) {
          // 주고받은 적이 있고
          if (inner.get(f) === 0) {
            //그 수가 같은 경우 지수 비교
            giftNum.get(outerKey) > giftNum.get(f)
              ? inner.set("count", inner.get("count") + 1)
              : giftNum.get(outerKey) < giftNum.get(f)
              ? fMap.set("oount", fMap.get("count") + 1)
              : null;
          }
        } else {
          // 주고받은 적 조차 없는 경우
          giftNum.get(outerKey) > giftNum.get(f)
            ? inner.set("count", inner.get("count") + 1)
            : giftNum.get(outerKey) < giftNum.get(f)
            ? fMap.set("count", fMap.get("count") + 1)
            : null;
          fMap.set(outerKey, "done");
        }
      }
    });

    answer.push(inner.get("count"));
  }
  return Math.max(...answer);
}