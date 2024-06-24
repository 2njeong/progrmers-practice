function solution(survey, choices) {
  const combiArr = ["RT", "CF", "JM", "AN"];
  const allPersonality = new Map();

  survey.forEach((sur, i) => {
    const personalName = sur.split("").sort().join("");
    const personality = allPersonality.get(personalName) || new Map();
    const score = Math.abs(choices[i] - 4);

    if (choices[i] < 4) {
      personality.set(sur[0], (personality.get(sur[0]) || 0) + score);
    } else {
      personality.set(sur[1], (personality.get(sur[1]) || 0) + score);
    }
    allPersonality.set(personalName, personality);
  });

 const check = (letter1, letter2, personality) => {
  const A = personality.get(letter1);
  const B = personality.get(letter2);

  if (A !== undefined && B !== undefined) {
    return A > B ? letter1 : A < B ? letter2 : letter1 < letter2 ? letter1 : letter2;
  } else if (A !== undefined && B === undefined) {
    return letter1;
  } else if (A === undefined && B !== undefined) {
    return letter2;
  }
};

  const answer = combiArr.reduce((acc, combi) => {
    const personality = allPersonality.get(combi);
    if (personality) {
      acc.push(check(combi[0], combi[1], personality));
    } else {
      acc.push(combi[0]);
    }
    return acc;
  }, []);

  return answer.join("");
}