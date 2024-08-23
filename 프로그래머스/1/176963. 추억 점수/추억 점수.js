function solution(name, yearning, photo) {
const newPhotoArr = photo.join(",|,").split(",");

const missMap = new Map();
name.forEach((n, i) => {
  missMap.set(n, yearning[i]);
});

let count = 0;
const result = newPhotoArr.reduce((acc, cur, i) => {
  count += missMap.get(cur) || 0;
  if (cur === "|" || i === newPhotoArr.length - 1) {
    acc.push(count);
    count = 0;
    return acc;
  }

  return acc;
}, []);
return result
}