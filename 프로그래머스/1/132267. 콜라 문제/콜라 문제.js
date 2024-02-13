const solution = (a, b, n) => {
   let answer = 0;
   while (n >= a) {
       const cola = Math.floor(n / a) * b;
       const rest = n % a;
       n = rest + cola;
       answer += cola;
  }
   return answer;
}