function solution(id_list, report, k) {
  const 신고대장 = new Map();
  const 신고받이대장 = new Map();
  const reports = [...new Set(report)].map((re) => re.split(" "));

  reports.forEach((re) => {
    const 신고자 = re[0];
    const 신고받은자 = re[1];

    const alreadyComplainedMap = 신고대장.get(신고자); // 이미 신고한 이력이 있는지
    if (alreadyComplainedMap) {
      if (!alreadyComplainedMap.get(신고받은자)) {
        // 특정사람을 처음 신고하는 경우
        alreadyComplainedMap.set(신고받은자, 1);
        신고받이대장.set(신고받은자, 신고받이대장.get(신고받은자) + 1 || 1);
      }
    } else {
      // 신고자체를 처음하는 경우
      const 개인신고대장 = new Map();
      개인신고대장.set(신고받은자, 1);
      신고대장.set(신고자, 개인신고대장);
      신고받이대장.set(신고받은자, 신고받이대장.get(신고받은자) + 1 || 1);
    }
  });

  reports.forEach((re) => {
    const 신고자 = re[0];
    const 신고받은자 = re[1];
    if (신고받이대장.get(신고받은자) >= k) {
      const value = 신고대장.get(신고자);
      if (value.get(신고받은자)) {
        const alreayGetMail = value.get("메일받는횟수");
        value.set("메일받는횟수", alreayGetMail + 1 || 1);
      }
      신고대장.set(신고자, value);
    }
  });

  const answer = id_list.reduce((acc, cur) => {
    acc.push(
      신고대장.get(cur)
        ? 신고대장.get(cur).get("메일받는횟수")
          ? 신고대장.get(cur).get("메일받는횟수")
          : 0
        : 0
    );
    return acc;
  }, []);

  return answer;
}