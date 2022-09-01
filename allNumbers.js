let arrayNumbers = []

function arr(n) {

  for(var i = 0; i < n; i++) {
    if(n > i) {
      arrayNumbers.push(i)
    } else {
      return arrayNumbers
    }
  }
}

console.log(arrayNumbers)
console.log(arr())
