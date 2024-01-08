function solution(n) {

    let yaksu = [];
    for (i = 0; i <= n; i++) {
        if (n % i === 0) {
            yaksu.push(i);
        }
    }

let sum = 0;
Array.from(yaksu).forEach(a => {
    sum += a;
});
return sum;
}
