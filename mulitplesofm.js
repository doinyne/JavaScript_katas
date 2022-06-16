function multiples(m, n){
  let total = []

  for(let i = 1; i <= m; i++){
    total.push(i * n)
  }

  return total

}

console.log(multiples(3, 5))