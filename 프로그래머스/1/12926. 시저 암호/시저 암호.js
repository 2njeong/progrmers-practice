function solution(s, n) {
  let arr = Array.from(s);

  const alphabetUpperList = Array(26)
    .fill()
    .map((v, i) => String.fromCharCode(i + 65));
  const alphabetLowerList = Array(26)
    .fill()
    .map((v, i) => String.fromCharCode(i + 97));

  let dapList = arr.map((letter) => {
    if (letter === " ") {
      return " ";
    }
    if (letter === letter.toLowerCase()) {
      let letterIndex = alphabetLowerList.findIndex((a) => a === letter);
      let newIndex = (letterIndex + n) % 26;
      return alphabetLowerList[newIndex];
    } else {
      let letterIndex = alphabetUpperList.findIndex((a) => a === letter);
      let newIndex = (letterIndex + n) % 26;
      return alphabetUpperList[newIndex];
    }
  });

  return dapList.join("");
  
}