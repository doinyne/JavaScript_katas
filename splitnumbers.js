function digitize(n) {
  let arr = n.toString()
  let arr2 = arr.split('').reverse()
  return arr2.toInteger()
}

console.log(digitize(35231))