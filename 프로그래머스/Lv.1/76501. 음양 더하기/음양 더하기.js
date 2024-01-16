function solution(absolutes, signs) {
    
     let signspm = signs.map((a) => {
    if (a > 0) {
      return 1;
    } else {
      return -1;
    }
  });
    
    let sum = 0;
    for (i = 0; i < absolutes.length; i++) {
      sum += absolutes[i] * signspm[i];
    }
    return sum;
  }
    