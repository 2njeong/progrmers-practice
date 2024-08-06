function solution(ingredient) {
  let stack = [];
  let burgerCount = 0;

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    // 스택의 마지막 4개 요소가 1, 2, 3, 1 인지 확인
    if (
      stack.length >= 4 &&
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      // 스택에서 4개 요소 제거
      stack.splice(stack.length - 4, 4);
      burgerCount++;
    }
  }

  return burgerCount;
}