function solution(a, b) {
    let n = a.length
    let sum = 0
    for(i = 0; i < n; i++) {
        sum += a[i] * b[i]
    }
return sum
}