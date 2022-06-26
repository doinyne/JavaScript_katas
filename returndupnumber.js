function findDup(arr) {
  let dup = []
  let foo = arr.sort()
  for(let i = 0; i <= foo.length; i++) {
    if(i === foo[i]) {
      dup.push(i)
    } else {
      i++;
    }
  }
  return dup
}

console.log(findDup([1,3,2,5,4,5,7,6]))