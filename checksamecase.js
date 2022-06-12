function sameCase(a, b){
  let count = 0; 
  let arr = a.concat(b)
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].toLowerCase()) {
      return count;
    } else if (arr[i].toUpperCase()) {
    }
  }
}

console.log(sameCase('C', 'B'));