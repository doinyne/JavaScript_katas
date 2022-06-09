function singleDigit(n) {
  if( n < 10) return n;
  
  return singleDigit(
    n.toString(2).split('').map(Number).reduce((sum, num) => sum + num)
  );
}

console.log(singleDigit(19))