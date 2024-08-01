function solution(new_id) {
  const idArr = new_id.split("");
  let changedArr = idArr.reduce((acc, char, i) => {
    char = char.toLowerCase();
    if (
      (char < "a" || char > "z") &&
      isNaN(Number(char)) &&
      char !== "-" &&
      char !== "_" &&
      char !== "."
    ) {
      return acc;
    } else {
      if (char === ".") {
        if (idArr[i + 1] === ".") {
          return acc;
        }
        if (acc[acc.length - 1] === ".") {
          return acc;
        }
        if (i === 0 || i === idArr.length - 1) {
          return acc;
        }
      }
    }
    acc.push(char);
    return acc;
  }, []);
  if (changedArr[0] === ".") {
    changedArr.shift();
  }
  if (changedArr[changedArr.length - 1] === ".") {
    changedArr.pop();
  }

  console.log("5단계 전 changedArr =>", changedArr);

  if (changedArr.length === 0) {
    changedArr.push("a");
  }
  if (changedArr.length >= 16) {
    changedArr = changedArr.slice(0, 15);
    if (changedArr[changedArr.length - 1] === ".") {
      changedArr.pop();
    }
  }
  if (changedArr.length <= 2) {
    changedArr = [
      ...changedArr,
      ...Array.from(
        { length: 3 - changedArr.length },
        () => changedArr[changedArr.length - 1]
      ),
    ];
  }
  if (changedArr[0] === ".") {
    changedArr.shift();
  }
  if (changedArr[changedArr.length - 1] === ".") {
    changedArr.pop();
  }
  return changedArr.join("");
}