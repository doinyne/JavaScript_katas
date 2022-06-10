function strCount(str, letter){  
  let count = 0;
  let arr = str.split('')
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(strCount('Hello', 'l'));