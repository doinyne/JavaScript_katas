function lonelyinteger(a) {
  let arr = a.sort();
  let answer = [];
  
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] != arr[i + 1]) {
      answer.push(arr[i]);
    } else {
      i++;
    }
  }
  return answer
}

console.log(lonelyinteger([1,2,3,4,3,2,1]))