function oddCount(n){
  let odd = []
  
  for(var i = 1; i <=n; i++) {
    if(i % 2 != 0) {
      odd.push(i)
    }
   }
   return odd.length
}

console.log(oddCount(40));

