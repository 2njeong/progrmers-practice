function solution(s) {
  let numbers = [
    { str: "zero", num: 0 },
    { str: "one", num: 1 },
    { str: "two", num: 2 },
    { str: "three", num: 3 },
    { str: "four", num: 4 },
    { str: "five", num: 5 },
    { str: "six", num: 6 },
    { str: "seven", num: 7 },
    { str: "eight", num: 8 },
    { str: "nine", num: 9 },
  ];

  let newNumber = "";

  while (s.length > 0) {
    let foundNumber = numbers.find((number) =>
      isNaN(s[0])
        ? s.indexOf(number.str) === 0
        : s.indexOf(number.num.toString()) === 0
    );
    console.log(foundNumber);
    newNumber += foundNumber.num;
    console.log(newNumber);

    isNaN(s[0])
      ? (s = s.replace(foundNumber.str, ""))
      : (s = s.replace(foundNumber.num, ""));
    console.log(s);
  }
  return Number(newNumber);
}