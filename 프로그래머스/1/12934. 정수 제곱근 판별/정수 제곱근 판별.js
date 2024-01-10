function solution(n) {

 num = n ** (1/2);
  return num % 1 ? -1 : (num+1) ** 2 ;
}