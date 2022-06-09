var number=function(array){
  return array.map((el, index)=> index + 1 + ': ' + el)
}

console.log(number(["a", "b", "c", "d"]))