function solution(price, money, count) {
    let newPrice = 0
    
    for(i=1; i<=count; i++) {
        newPrice += price * i}
    
    const restMoney = money - newPrice
    
    if(restMoney < 0) {
        return Math.abs(restMoney)
    } else {
        return 0
    }
 
}