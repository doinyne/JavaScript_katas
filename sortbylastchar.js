function last(x){
  let words = x.split(" ")
  let last = words.forEach(function (word) {
    console.log(word.length)
  });
}

console.log(last('man i need a taxi up to ubud'))
