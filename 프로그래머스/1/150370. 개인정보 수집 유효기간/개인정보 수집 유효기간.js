function solution(today, terms, privacies) {
const todayDate = today.split(".");
const termsMap = new Map();

terms.forEach((term) => {
  const termArr = term.split(" ");
  termsMap.set(termArr[0], Number(termArr[1]));
});
const result = [];

privacies.forEach((p, i) => {
  const pArr = p.split(" ");
  const privateDate = pArr[0].split(".");

  let pYear = Number(privateDate[0]);
  let pMonth = Number(privateDate[1]);
  let pDay = Number(privateDate[2]);

  const yackGwan = pArr[1];
  const yackGwanMonth = termsMap.get(yackGwan);

  if (pMonth + yackGwanMonth > 12) {
    pYear += Math.floor((pMonth + yackGwanMonth) / 12);
    if ((pMonth + yackGwanMonth) % 12 === 0) {
      pMonth = 12;
      pYear -= 1;
    } else {
      pMonth = (pMonth + yackGwanMonth) % 12;
    }
  } else {
    pMonth = pMonth + yackGwanMonth;
  }
  if (pDay - 1 === 0) {
    if (pMonth - 1 === 0) {
      pYear = pYear - 1;
      pMonth = 12;
      pDay = 28;
    } else {
      pMonth = pMonth - 1;
      pDay = 28;
    }
  } else {
    pDay = pDay - 1;
  }

  if (Number(todayDate[0]) > pYear) {
    result.push(i + 1);
    console.log(0);
    return;
  } else if (Number(todayDate[0]) === pYear) {
    if (Number(todayDate[1]) > pMonth) {
      result.push(i + 1);
      console.log(1);
      return;
    } else if (Number(todayDate[1]) === pMonth) {
      if (Number(todayDate[2]) > pDay) {
        result.push(i + 1);
        console.log(2);
        return;
      }
    }
  }
});

return result
}