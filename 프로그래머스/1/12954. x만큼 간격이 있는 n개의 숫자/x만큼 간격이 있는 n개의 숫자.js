function solution(x, n) {
    var answer = [];
    
    for(i=1; i<=n; i++) {
        let num = x * i;
        answer.push(num);
    }
    return answer;
}