function solution(s, skip, index) {
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphaArr = alphabet.split("");
const skipArr = skip.split("");

const alphaMap = new Map();
alphaArr.forEach((al, i) => {
  alphaMap.set(al, i);
});

const skipMap = new Map();
skipArr.forEach((sk) => {
  skipMap.set(sk, -1);
});

const answer = s.split("").reduce((acc, cur) => {
  let result = [];
  let count = 1;
  const 원래순번 = alphaMap.get(cur); // a라면 원래순번 = 0
  while (result.length < index) {
    if (!skipMap.get(alphaArr[(원래순번 + count) % 26])) {
      result.push(alphaArr[(원래순번 + count) % 26]);
    }
    count++;
  }
  // console.log("result =>", result);
  acc.push(result[index - 1]);
  return acc;
}, []);

// console.log("answer =>", answer);
return answer.join("");
}