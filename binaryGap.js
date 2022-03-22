function solution(N) {
  let foundOne = false;

  let divRes = N
  let maxGap = 0
  let zeroCnt = 0

  while(divRes != 0) {
    if(divRes%2) {
      foundOne = true;
      // restart the zero counter
      zeroCnt = 0;
    }
    else if (foundOne) {
      zeroCnt++
      if(zeroCnt > maxGap) {
        maxGap = zeroCnt;
      }
    }
    divRes = Math.floor(divRes/2);
  }
  return maxGap;
}

console.log(solution(84945))