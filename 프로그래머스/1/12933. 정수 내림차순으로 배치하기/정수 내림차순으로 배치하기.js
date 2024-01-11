function solution(n) {
    
    let str = String(n);
    let arr = Array.from(str,Number);
    
    let num = arr.length
    for(i=0; i < num-1; i++){
        for(j=i+1; j < num; j++) {
            if(arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return parseInt(arr.join(""),10);
}