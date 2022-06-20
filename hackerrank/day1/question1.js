function plusMinus(arr) {
  let pos = []
  let neg = []
  let zero = []
  
  for(let i = 0; i < arr.length; i++) {
    if(Math.sign(arr[i]) === 0) {
      zero.push(arr[i])
    } else if (Math.sign(arr[i]) === -1) {
      neg.push(arr[i])
    } else {
      pos.push(arr[i])
    }
  }
  let posratio = pos.length / arr.length
  let negratio = neg.length / arr.length
  let zeroratio = zero.length / arr.length

  console.log(posratio.toFixed(6))
  console.log(negratio.toFixed(6))
  console.log(zeroratio.toFixed(6))
}

console.log(plusMinus([1,1,0,-1,-1,3,4,5,6,-3,-2,0]));