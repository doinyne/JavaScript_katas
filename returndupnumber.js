function findDup(arr) {
  const dup = []
  let foo = arr.sort()
  console.log(foo)
  for(let i = 0; i <= foo.length; i++) {
    if(foo[i] === foo[i + 1]) {
      dup.push(foo[i]);
    } else {
      i++;
    }
  }
  return Number(dup);
}

console.log(findDup([1,2,2,3,4,5,6,7]))