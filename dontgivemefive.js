function dontGiveMeFive(start, end) {
  let results = 0
  for(var i = start; i <= end; i++) {
    const numArr = i.toString().split('')
    const fiveCounts = numArr.filter(digit => digit == '5').length
    if(fiveCounts == 0) {
      results++
    }
  }
  return results 
}
console.log(dontGiveMeFive(4,17))
/*
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
*/