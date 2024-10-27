function solution(points, routes) {
  let count = 0;
  const nowMap = new Map();

  routes.forEach((r, i) => {
    // 각 로봇의 첫 시작점 구해주기
    const nowObj = {};
    nowObj.x = points[r[0] - 1][1];
    nowObj.y = points[r[0] - 1][0];
    nowObj.done = false;
    nowObj.phase = 0;
    nowMap.set(i, nowObj);
  });

  const makeNewPoint = (robotNum) => {
    // 로봇 1개의 이동 후 현재 좌표 구하는 함수
    let nowY = nowMap.get(robotNum).y;
    let nowX = nowMap.get(robotNum).x;
    let nowPhase = nowMap.get(robotNum).phase;

    // 도착지랑 좌표가 같은데
    if (nowPhase < routes[robotNum].length - 1) {
      // 아직 갈 길이 있을 때
      const nextPY = points[routes[robotNum][nowPhase + 1] - 1][0];
      const nextPX = points[routes[robotNum][nowPhase + 1] - 1][1];
      if (nowY !== nextPY) {
        nowY < nextPY ? nowY++ : nowY--;
        nowMap.set(robotNum, { ...nowMap.get(robotNum), y: nowY });
      } else {
        if (nowX !== nextPX) {
          nowX < nextPX ? nowX++ : nowX--;
          nowMap.set(robotNum, { ...nowMap.get(robotNum), x: nowX });
        }
      }
    }
    if (
      // 목표 phase에 도달하지는 못했지만 현재 좌표가 다음 phase의 좌표랑 같으면 phase + 1
      nowPhase < routes[robotNum].length - 1 &&
      nowX === points[routes[robotNum][nowPhase + 1] - 1][1] &&
      nowY === points[routes[robotNum][nowPhase + 1] - 1][0]
    ) {
      nowMap.set(robotNum, { ...nowMap.get(robotNum), phase: (nowPhase += 1) });
    }
  };

  const compareNow = () => {
    // 현재 좌표들이 같으면 count++ 하는 함수
    const positionMap = new Map();
    for (let i = 0; i < routes.length; i++) {
      if (!nowMap.get(i).done) {
        const key = `${nowMap.get(i).y},${nowMap.get(i).x}`;
        positionMap.set(key, (positionMap.get(key) || 0) + 1);
      }
    }
    for (let value of positionMap.values()) {
      if (value > 1) {
        count++;
      }
    }
  };

  const isDone = () => {
    let done = true;
    for (let [key, value] of nowMap) {
      if (value.phase < routes[key].length - 1) {
        // 목표 phase에 도달하지 못했으면
        done = false; // 무조건 아직 덜 실행됨
      } else {
        // 목표 phase보다 크거나 같으면 즉, 목표 phase에 도달했으면
        nowMap.set(key, { ...nowMap.get(key), done: true });
      }
    }
    return done;
  };

  compareNow();
  while (!isDone()) {
    for (let i = 0; i < routes.length; i++) {
      makeNewPoint(i); // 각 로봇의 현재 좌표를 구함
    }
    compareNow(); // 겹치는 현재 좌표가 있으면 count++
  }
  return count;
}