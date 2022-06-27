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

  let word = count.join("")
  for(let i = 0; i < count.length; i++) {
    if(word.includes(baby)) {
      total += 1 / baby.length
    } else {
      i++;
    }
  }
  
  return total
}

console.log(babyCount('Happy babies boom ba by?'))

