function loopAnything(str) {
  let count = 0;
  //split the str into an array but using .split("")
  const arr = str.split("");
  // now we can loop through the array
  for ( let i = 0; i < arr.length; i++){
    if(arr[i] === "d") {
      count++;
    }
  }
  return count;
}

console.log(loopAnything("dean doesnt likeddddd doing anything dangerous, definitely not in denmark"))
