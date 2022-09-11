function bump(x){

  let roadBumps = 0;
  let roadArray = x.split("");

  for(let i = 0; i < roadArray.length; i++) {
    console.log(roadArray);
    if(roadArray[i] === "n"){
      roadBumps += 1
      i++
    } else if(roadArray[i] === "_") {
      i++
    }

    return roadBumps;
  }
}

console.log(bump("n__nn_nnnn__n_n___n____nn__nnn"))