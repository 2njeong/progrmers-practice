function solution(babbling) {
  let heCan = ["aya", "ye", "woo", "ma"];
  let count = 0;
  babbling.forEach((bab) => {
    let newBab = bab;
    for (i = 0; i < heCan.length; i++) {
      if (newBab.includes(heCan[i])) {
        newBab = newBab.replace(new RegExp(heCan[i]), "");
        if (newBab.length === 0) {
          count++;
        }
          break
      }
    }
  });
  return count;
}