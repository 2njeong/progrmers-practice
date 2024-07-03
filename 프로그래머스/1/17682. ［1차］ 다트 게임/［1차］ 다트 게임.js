function solution(dartResult) {
  let newStr = "";
  const scoreMap = new Map();
  const splitedDartResult = dartResult.split("");

  const reducedArr = splitedDartResult.reduce((acc, cur, i) => {
    if (isNaN(Number(cur))) {
      // 숫자가 아닐 때
      if (cur === "*" || cur === "#") {
        // 특수문자일 때

        const prevStrArr = newStr.split("");
        const curNum = Number(
          prevStrArr.slice(0, prevStrArr.length - 1).join("")
        );
        const curCase = prevStrArr[prevStrArr.length - 1];
        const curScore = calculator(curNum, curCase);
        newStr = newStr + cur;
        if (cur === "*") {
          if (acc.length > 0) {
            const prevStr = acc[acc.length - 1];
            const prevScore = scoreMap.get(prevStr);
            scoreMap.set(prevStr, prevScore * 2);
          }
          scoreMap.set(newStr, curScore * 2);
        } else {
          scoreMap.set(newStr, -curScore);
        }
        acc.push(newStr);
        newStr = "";
      } else {
        // 대문자 일 때
        if (
          splitedDartResult[i + 1] === "*" ||
          splitedDartResult[i + 1] === "#"
        ) {
          // 다음 거가 특수문자면(끝이 아니면)
          newStr = newStr + cur;
        } else {
          // 대문자로 끝이면
          const prevNum = Number(newStr);
          const curScore = calculator(prevNum, cur);
          newStr = prevNum + cur;
          scoreMap.set(newStr, curScore);
          acc.push(newStr);
          newStr = "";
        }
      }
    } else {
      newStr = newStr + cur;
    }
    return acc;
  }, []);
  return [...scoreMap.values()].reduce((acc, cur) => acc + cur, 0);
}

const calculator = (num, cur) => {
  const curScore =
    cur === "S" ? num : cur === "D" ? num ** 2 : cur === "T" ? num ** 3 : null;
  return curScore;
};