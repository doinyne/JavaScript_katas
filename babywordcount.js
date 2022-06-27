function babyCount(x) {
  let count = [];
  let baby = "baby"
  

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
  console.log(count.join(""))
  let total = 0;
  for(let i = 0; i < count.length; i++) {
    if(count.includes(baby) === true) {
      total += 1;
    }
  }
  return total;
}

console.log(babyCount('babyhellohellobabybaby'))

