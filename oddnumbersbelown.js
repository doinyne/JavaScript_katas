function oddCount(n){
  let odd = []
  for(var i = 1; i <= n; i++) {
    if(i % 2 != 0) {
      odd.push(i)
    }
   }
   console.log(odd)
  return odd.length -1
}

console.log(oddCount(15023));