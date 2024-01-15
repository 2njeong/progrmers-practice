function solution(seoul) {
  var answer = "";

  const kimIndex = seoul.findIndex((element) => element === "Kim");

  answer = `김서방은 ${kimIndex}에 있다`;

  return answer;
}