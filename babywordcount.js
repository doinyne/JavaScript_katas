function babyCount(x) {
  let count = [];
  let baby = "baby"
  let total = 0;

  for(let i = 0; i < x.length; i++) {
    if(x[i] === "b") {
      count.push(x[i])
    } else if(x[i] === "a"){
      count.push(x[i])
    } else if(x[i] === "y"){
      count.push(x[i])
    } else {
      i++;
    }
  }

  console.log(count)
  
  
  
  
  
  
  return total
}

console.log(babyCount('Happy babies boom ba by?'))

