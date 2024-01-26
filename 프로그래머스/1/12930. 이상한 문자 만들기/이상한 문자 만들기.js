function solution(s) {
  let arr = s.split(" ");
  const marr = arr.map((word) => {
    let newWord = "";
    for (i = 0; i < word.length; i++) {
      if (i % 2 !== 0) {
        newWord += word[i].toLowerCase();
      } else {
        newWord += word[i].toUpperCase();
      }
    }
    return newWord;
  });
  return marr.join(" ");
}