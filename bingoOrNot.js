function bingo(a) {
  result = []

  a.forEach((letter, index) => {
    if( a.includes(letter)) {
      result.push(index)
    }
  })
  return result
};

console.log(bingo([1,2,3,4,5,6,7,8,9,10]))