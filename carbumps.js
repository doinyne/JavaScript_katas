function bump(x){
  let roadBumps = 0;
  let array = x.split("");
  console.log(array.length)
  for(let i = 0; i < array.length; i++) {
    if(i === "n"){
      roadBumps += 1
    } else if(i === "_") {
      i++;
    }
    return roadBumps
  }
}

console.log(bump("_n__nnn_nnnnnn___nn___n_nn_nn"))
// ! 17