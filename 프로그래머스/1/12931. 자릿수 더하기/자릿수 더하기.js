function solution(n)
{   
   
    const str = String(n);
    const mapfn = (arg) => Number(arg)
    
    let nArr = Array.from(str,mapfn);
    
    var sum = 0;
    
    for(i=0; i<nArr.length; i++) {
        sum += nArr[i]
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('sum')

    return sum;
}