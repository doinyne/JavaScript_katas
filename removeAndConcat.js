function mergeArrays(arr1, arr2) {
  let arr = arr1.concat(arr2)
  arr.sort((a, b) => a - b);
  return arr.filter((item, index) => arr.indexOf(item) === index);
}